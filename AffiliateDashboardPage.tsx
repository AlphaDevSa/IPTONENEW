import React, { useEffect, useMemo, useState } from 'react';
import { Button } from './components/Button';
import { getAffiliateLeadLog, clearAffiliateLeadLog, AffiliateLeadLogEntry } from './affiliateTracking';

const formatDate = (timestamp: number) =>
  new Date(timestamp).toLocaleString('en-ZA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

const AffiliateDashboardPage: React.FC = () => {
  const [entries, setEntries] = useState<AffiliateLeadLogEntry[]>([]);

  const refreshEntries = () => setEntries(getAffiliateLeadLog());

  useEffect(() => {
    refreshEntries();
  }, []);

  const summary = useMemo(() => {
    const total = entries.length;
    const sources = entries.reduce<Record<string, number>>((acc, entry) => {
      const key = entry.source || 'direct';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const topSource = Object.entries(sources).sort((a, b) => b[1] - a[1])[0];

    return {
      total,
      topSource: topSource ? `${topSource[0]} (${topSource[1]})` : 'None',
      latest: entries[0]?.timestamp ? formatDate(entries[0].timestamp) : 'No data yet',
    };
  }, [entries]);

  const exportCsv = () => {
    if (!entries.length) return;

    const header = ['timestamp', 'type', 'source', 'ref', 'affiliate', 'agent', 'partner', 'campaign', 'page', 'name', 'email'];
    const csv = [
      header.join(','),
      ...entries.map((entry) =>
        header
          .map((key) => {
            const value = String((entry as Record<string, unknown>)[key] ?? '');
            return `"${value.replace(/"/g, '""')}"`;
          })
          .join(',')
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'iptone-affiliate-activity.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    clearAffiliateLeadLog();
    refreshEntries();
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Admin</p>
            <h1 className="mt-2 text-4xl font-black text-gray-900">Affiliate Dashboard</h1>
          </div>
          <div className="flex gap-3">
            <Button onClick={refreshEntries} variant="outline">Refresh</Button>
            <Button onClick={exportCsv} disabled={!entries.length}>Export CSV</Button>
            <Button onClick={handleClear} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">Clear Log</Button>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Total entries</p>
            <p className="mt-4 text-4xl font-black text-gray-900">{summary.total}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Top source</p>
            <p className="mt-4 text-xl font-bold text-gray-900">{summary.topSource}</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">Latest activity</p>
            <p className="mt-4 text-lg font-bold text-gray-900">{summary.latest}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">Ref</th>
                  <th className="px-4 py-3 font-semibold">Campaign</th>
                  <th className="px-4 py-3 font-semibold">Page</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">When</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entries.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-10 text-center text-gray-500">
                      No affiliate activity recorded yet.
                    </td>
                  </tr>
                ) : (
                  entries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium uppercase tracking-wide text-gray-700">{entry.type}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.source || 'direct'}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.ref || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.campaign || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.page || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.name || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{entry.email || '—'}</td>
                      <td className="px-4 py-3 text-gray-700">{formatDate(entry.timestamp)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateDashboardPage;
