// Swaps the non-blocking font preload <link> to an actual stylesheet once it loads.
// Kept as an external, non-deferred, non-module script (not an inline `onload=""`
// attribute) so the Content-Security-Policy doesn't need `script-src-attr 'unsafe-inline'`.
// Must run synchronously, right after the <link>, so the 'load' listener is attached
// before the preload can possibly finish - `link.sheet` doesn't populate for
// rel="preload" the way it does for rel="stylesheet", so it can't be used to detect an
// already-finished load; Resource Timing can.
(function () {
  var link = document.getElementById('font-preload');
  if (!link) return;
  function activate() {
    link.rel = 'stylesheet';
  }
  var entries = performance.getEntriesByName(link.href);
  if (entries.length && entries[0].responseEnd > 0) {
    activate();
  } else {
    link.addEventListener('load', activate, { once: true });
  }
})();
