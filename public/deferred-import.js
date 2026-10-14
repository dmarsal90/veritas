// Dynamically imports the non-critical JS chunks listed in this script's own
// `data-chunks` attribute, once the browser is idle (or after a timeout as a
// fallback). Kept as one external, reusable file (content never changes between
// builds) instead of one inline <script type="module"> per chunk, so the CSP
// doesn't need any hash/`unsafe-inline` for script-src-elem - this file is loaded
// via `src=`, which `script-src-elem 'self'` already permits.
(function () {
  var script = document.currentScript;
  var chunks = [];
  try {
    chunks = JSON.parse(script.getAttribute('data-chunks') || '[]');
  } catch (e) {
    return;
  }
  function loadAll() {
    chunks.forEach(function (url) {
      import(url);
    });
  }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadAll);
  } else {
    setTimeout(loadAll, 2000);
  }
})();
