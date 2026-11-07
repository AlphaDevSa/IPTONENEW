export interface AffiliateData {
  source: string;
  ref?: string;
  affiliate?: string;
  agent?: string;
  partner?: string;
  campaign?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  landingPath?: string;
  timestamp?: number;
}

export interface AffiliateLeadLogEntry {
  id: string;
  type: 'visit' | 'contact' | 'referral' | 'agent' | 'other';
  source: string;
  ref?: string;
  affiliate?: string;
  agent?: string;
  partner?: string;
  campaign?: string;
  page?: string;
  timestamp: number;
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
}

const STORAGE_KEY = 'iptone_affiliate_tracking';
const LEAD_LOG_KEY = 'iptone_affiliate_leads';
const COOKIE_NAME = 'iptone_affiliate_tracking';

const aliasKeys = [
  'ref',
  'affiliate',
  'aff',
  'agent',
  'agent_id',
  'partner',
  'partner_id',
  'source',
  'campaign',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

const getSearchParams = (search?: string) => {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(search ?? window.location.search);
};

const readStorage = (): AffiliateData | null => {
  try {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AffiliateData;
  } catch {
    return null;
  }
};

const writeStorage = (payload: AffiliateData) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore quota/storage issues.
  }

  const cookieValue = encodeURIComponent(JSON.stringify(payload));
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${cookieValue}; path=/; max-age=${maxAge}; SameSite=Lax`;
};

const sanitizeValue = (value?: string | null) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
};

export const getAffiliateFromUrl = (search?: string): AffiliateData | null => {
  const params = getSearchParams(search);
  const ref = sanitizeValue(params.get('ref')) || sanitizeValue(params.get('affiliate')) || sanitizeValue(params.get('agent')) || sanitizeValue(params.get('partner'));
  const affiliateId = sanitizeValue(params.get('affiliate_id')) || sanitizeValue(params.get('agent_id')) || sanitizeValue(params.get('partner_id'));
  const source = sanitizeValue(params.get('source')) || sanitizeValue(params.get('utm_source')) || sanitizeValue(params.get('affiliate_source')) || (ref ? 'referral' : undefined);
  const campaign = sanitizeValue(params.get('campaign')) || sanitizeValue(params.get('utm_campaign'));

  const values = aliasKeys.reduce<Record<string, string>>((acc, key) => {
    const value = sanitizeValue(params.get(key));
    if (value) acc[key] = value;
    return acc;
  }, {});

  const normalized: AffiliateData = {
    source: source || 'direct',
    ref: ref || values.ref || undefined,
    affiliate: sanitizeValue(params.get('affiliate')) || values.affiliate || undefined,
    agent: sanitizeValue(params.get('agent')) || sanitizeValue(params.get('agent_id')) || values.agent || undefined,
    partner: sanitizeValue(params.get('partner')) || sanitizeValue(params.get('partner_id')) || values.partner || undefined,
    campaign: campaign || values.campaign || undefined,
    utm_source: sanitizeValue(params.get('utm_source')) || undefined,
    utm_medium: sanitizeValue(params.get('utm_medium')) || undefined,
    utm_campaign: sanitizeValue(params.get('utm_campaign')) || undefined,
    utm_content: sanitizeValue(params.get('utm_content')) || undefined,
    landingPath: typeof window !== 'undefined' ? window.location.pathname : undefined,
    timestamp: Date.now(),
  };

  if (affiliateId) {
    normalized.ref = normalized.ref || affiliateId;
  }

  const hasAffiliateValue = Boolean(
    normalized.ref ||
    normalized.affiliate ||
    normalized.agent ||
    normalized.partner ||
    normalized.campaign ||
    normalized.utm_source ||
    normalized.utm_campaign ||
    source
  );

  if (!hasAffiliateValue) {
    return null;
  }

  return normalized;
};

export const getStoredAffiliate = (): AffiliateData | null => {
  const stored = readStorage();
  if (!stored) {
    if (typeof document === 'undefined') return null;

    const cookieMatch = document.cookie
      .split('; ')
      .find((part) => part.startsWith(`${COOKIE_NAME}=`));

    if (!cookieMatch) return null;

    try {
      const cookieValue = decodeURIComponent(cookieMatch.split('=')[1]);
      return JSON.parse(cookieValue) as AffiliateData;
    } catch {
      return null;
    }
  }

  return stored;
};

export const initializeAffiliateTracking = (search?: string): AffiliateData | null => {
  const affiliateFromUrl = getAffiliateFromUrl(search);
  const activeAffiliate = affiliateFromUrl || getStoredAffiliate();

  if (!activeAffiliate) {
    return null;
  }

  const nextValue = {
    ...activeAffiliate,
    landingPath: activeAffiliate.landingPath || (typeof window !== 'undefined' ? window.location.pathname : undefined),
    timestamp: activeAffiliate.timestamp || Date.now(),
  };

  writeStorage(nextValue);

  if (typeof window !== 'undefined' && search !== undefined) {
    const cleanUrl = new URL(window.location.href);
    const trackedKeys = ['ref', 'affiliate', 'agent', 'partner', 'source', 'campaign', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
    trackedKeys.forEach((key) => cleanUrl.searchParams.delete(key));
    if (cleanUrl.searchParams.toString() !== '') {
      window.history.replaceState({}, '', `${cleanUrl.pathname}${cleanUrl.search}`);
    } else {
      window.history.replaceState({}, '', cleanUrl.pathname);
    }
  }

  return nextValue;
};

export const buildAffiliateLink = (url: string, params: Record<string, string> = {}) => {
  const affiliate = getStoredAffiliate();
  const nextUrl = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://www.iptone.co.za');

  const values = {
    ...(affiliate?.ref ? { ref: affiliate.ref } : {}),
    ...(affiliate?.affiliate ? { affiliate: affiliate.affiliate } : {}),
    ...(affiliate?.agent ? { agent: affiliate.agent } : {}),
    ...(affiliate?.partner ? { partner: affiliate.partner } : {}),
    ...(affiliate?.source ? { source: affiliate.source } : {}),
    ...(affiliate?.campaign ? { campaign: affiliate.campaign } : {}),
    ...(affiliate?.utm_source ? { utm_source: affiliate.utm_source } : {}),
    ...(affiliate?.utm_medium ? { utm_medium: affiliate.utm_medium } : {}),
    ...(affiliate?.utm_campaign ? { utm_campaign: affiliate.utm_campaign } : {}),
    ...(affiliate?.utm_content ? { utm_content: affiliate.utm_content } : {}),
    ...params,
  };

  Object.entries(values).forEach(([key, value]) => {
    if (value) nextUrl.searchParams.set(key, value);
  });

  return nextUrl.toString();
};

export const getAffiliateTrackingFields = () => {
  const affiliate = getStoredAffiliate();
  if (!affiliate) return {};

  return {
    affiliate_source: affiliate.source,
    affiliate_ref: affiliate.ref || '',
    affiliate_agent: affiliate.agent || '',
    affiliate_partner: affiliate.partner || '',
    affiliate_campaign: affiliate.campaign || '',
    affiliate_utm_source: affiliate.utm_source || '',
    affiliate_utm_campaign: affiliate.utm_campaign || '',
    affiliate_landing_path: affiliate.landingPath || '',
  };
};

export const getAffiliateLeadLog = (): AffiliateLeadLogEntry[] => {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(LEAD_LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveAffiliateLead = (entry: Omit<AffiliateLeadLogEntry, 'id'>) => {
  if (typeof window === 'undefined') return;

  const lead = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    timestamp: entry.timestamp || Date.now(),
  };

  try {
    const current = getAffiliateLeadLog();
    const next = [lead, ...current].slice(0, 200);
    localStorage.setItem(LEAD_LOG_KEY, JSON.stringify(next));
  } catch {
    // Ignore storage failures.
  }
};

export const clearAffiliateLeadLog = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(LEAD_LOG_KEY);
};
