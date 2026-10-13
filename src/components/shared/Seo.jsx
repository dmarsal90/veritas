import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SITE_NAME = 'Veritas HomeServices LLC';
const SITE_ORIGIN = 'https://veritashomeservices.com';

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setLink(rel, href, extraAttrs = {}) {
  let tag = document.querySelector(`link[rel="${rel}"]${extraAttrs.hreflang ? `[hreflang="${extraAttrs.hreflang}"]` : ''}`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
  Object.entries(extraAttrs).forEach(([key, value]) => tag.setAttribute(key, value));
}

/**
 * Sets document title + meta description + canonical + robots for the current route.
 * This is a CSR SPA with a single static index.html, so per-route SEO tags only exist
 * after this effect runs — kept intentionally dependency-free (no react-helmet) since
 * direct DOM writes are all that's needed for a handful of tags.
 */
export default function Seo({ title, description, path = '/', noindex = false }) {
  const { language } = useLanguage();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Professional Pest Control in Fort Myers & Southwest Florida`;
    document.title = fullTitle;

    setMetaByName('description', description);
    setMetaByName('robots', noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaByName('googlebot', noindex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    const canonicalUrl = `${SITE_ORIGIN}${path}`;
    setLink('canonical', canonicalUrl);

    setMetaByProperty('og:title', fullTitle);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByName('twitter:title', fullTitle);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:url', canonicalUrl);
  }, [title, description, path, noindex, language]);

  return null;
}
