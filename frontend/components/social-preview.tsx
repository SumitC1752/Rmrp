'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/seo';

type Platform = 'facebook' | 'twitter' | 'linkedin';

type SocialPreviewProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

const platformStyles: Record<Platform, { label: string; color: string; bg: string }> = {
  facebook: { label: 'Facebook / Open Graph', color: '#1877F2', bg: '#F0F2F5' },
  twitter: { label: 'Twitter / X', color: '#1DA1F2', bg: '#FFFFFF' },
  linkedin: { label: 'LinkedIn', color: '#0A66C2', bg: '#FFFFFF' },
};

function FacebookPreview({ title, description, image, url }: SocialPreviewProps) {
  const displayUrl = url ?? siteConfig.url;
  return (
    <div className="max-w-[520px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[1.91/1] bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="520px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            OG Image
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[12px] uppercase tracking-wide text-gray-500 mb-1">
          {new URL(displayUrl).hostname}
        </p>
        <h3 className="text-[16px] font-semibold leading-snug text-[#1D2129] line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-[14px] leading-snug text-[#606770] line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

function TwitterPreview({ title, description, image }: SocialPreviewProps) {
  return (
    <div className="max-w-[504px] overflow-hidden rounded-[16px] border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[2/1] bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="504px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            OG Image
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-[14px] font-semibold text-[#0F1419] leading-snug line-clamp-1 mb-1">
          {title}
        </p>
        <p className="text-[14px] text-[#536471] leading-snug line-clamp-2">
          {description}
        </p>
        <p className="text-[14px] text-[#536471] mt-1">
          {siteConfig.twitterHandle}
        </p>
      </div>
    </div>
  );
}

function LinkedInPreview({ title, description, image, url }: SocialPreviewProps) {
  const displayUrl = url ?? siteConfig.url;
  return (
    <div className="max-w-[552px] overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[1.91/1] bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="552px"
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            OG Image
          </div>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-[12px] font-normal text-[rgba(0,0,0,0.6)] uppercase leading-normal mb-1">
          {new URL(displayUrl).hostname}
        </p>
        <h3 className="text-[14px] font-semibold text-[#000000E6] leading-[20px] line-clamp-2 mb-1">
          {title}
        </h3>
        <p className="text-[12.6px] font-normal text-[#00000099] leading-normal line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

const previews: Record<Platform, typeof FacebookPreview> = {
  facebook: FacebookPreview,
  twitter: TwitterPreview,
  linkedin: LinkedInPreview,
};

export function SocialPreview({ title, description, image, url }: SocialPreviewProps) {
  const [active, setActive] = useState<Platform>('facebook');
  const Preview = previews[active];
  const style = platformStyles[active];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-navy-900 mb-1">Social Media Preview</h2>
        <p className="text-sm text-gray-500">
          Preview how this page appears when shared on social platforms.
        </p>
      </div>

      <div className="mb-4 flex gap-2">
        {(Object.entries(platformStyles) as [Platform, typeof platformStyles[Platform]][]).map(
          ([key, val]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === key
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
              style={active === key ? { backgroundColor: val.color } : undefined}
            >
              {val.label}
            </button>
          )
        )}
      </div>

      <Preview title={title} description={description} image={image} url={url} />

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-medium text-navy-900">Title:</span>
          <p className="text-gray-600 truncate">{title}</p>
        </div>
        <div>
          <span className="font-medium text-navy-900">Description:</span>
          <p className="text-gray-600 truncate">{description}</p>
        </div>
        <div>
          <span className="font-medium text-navy-900">Image:</span>
          <p className="text-gray-600 truncate font-mono text-xs">{image ?? siteConfig.ogImage}</p>
        </div>
        <div>
          <span className="font-medium text-navy-900">URL:</span>
          <p className="text-gray-600 truncate font-mono text-xs">{url ?? siteConfig.url}</p>
        </div>
      </div>
    </div>
  );
}
