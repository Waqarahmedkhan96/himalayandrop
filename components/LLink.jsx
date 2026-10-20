'use client';
// Drop-in replacement for next/link that keeps visitors in their language:
// on Danish pages, href="/shop/" becomes "/da/shop/".
import Link from 'next/link';
import { forwardRef } from 'react';
import { localizeHref } from '@/lib/i18n';
import { useLang } from './LangProvider';

const LLink = forwardRef(function LLink({ href, ...props }, ref) {
  const lang = useLang();
  return <Link ref={ref} href={localizeHref(href, lang)} {...props} />;
});

export default LLink;
