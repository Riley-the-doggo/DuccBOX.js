!(function () {
  function n(n) {
    var o;
    ((o = document.createElement("script")).async = !0),
      (o.src = "https://www.google-analytics.com/analytics.js"),
      document.body.appendChild(o),
      (window.ga =
        window.ga ||
        function () {
          (window.ga.q = window.ga.q || []).push(arguments);
        }),
      (window.ga.l = Number(new Date())),
      window.ga("create", n, "auto");
  }
  function o() {
    window.ga || n($docsify.ga),
      window.ga("set", "page", location.hash),
      window.ga("send", "pageview");
  }
  $docsify.plugins = [].concat(function (n) {
    $docsify.ga ? n.beforeEach(o) : console.error("[Docsify] ga is required.");
  }, $docsify.plugins);
})();
