import React from 'react';

export const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
        src="/images/Logo2.png"
        alt="IPT One Logo"
        onError={(e) => {
            const target = e.currentTarget as HTMLImageElement & { dataset: { fallback?: string } };
            if (!target.dataset.fallback) {
                target.dataset.fallback = '1';
                target.src = '/images/logo.svg';
                return;
            }
            target.src = 'https://placehold.co/180x60/ffffff/00539B?text=IPT%20ONE';
        }}
        {...props}
    />
);
