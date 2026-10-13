// CSP-compatible initialization scripts
// These replace inline scripts in index.html

export function initScrollRestoration() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

export function initTrustedTypes() {
  if ('trustedTypes' in window) {
    trustedTypes.createPolicy('default', {
      createHTML: (s) => s,
      createScript: (s) => s,
      createScriptURL: (s) => s,
    });
  }
}

export function initNetlifyHudRemoval() {
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    const hud = document.querySelector('script[src*="hud"]');
    if (hud) hud.remove();
  }
}