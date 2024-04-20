// Script 1: Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "GTM-MFGT297W");

// Script 2: Modify URLs with URLSearchParams
window.addEventListener("load", () => {
  const currentUrlParams = new URLSearchParams(window.location.search);

  const appendParamsToUrl = (url) => {
    const newUrl = new URL(url, window.location.html);
    currentUrlParams.forEach((value, key) => {
      newUrl.searchParams.set(key, value);
    });
    return newUrl.toString();
  };

  document.querySelectorAll("a").forEach((link) => {
    const originalHref = link.getAttribute("href");
    if (originalHref) {
      const newHref = appendParamsToUrl(originalHref);
      link.setAttribute("href", newHref);
    }
  });
});

// Script 3: Facebook Pixel
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(window, document, "script", "../connect.facebook.net/en_US/fbevents.js");
fbq("init", "928220758679930");
fbq("track", "PageView");

// Script 4: Get URL Parameters and Store in localStorage
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

localStorage.removeItem("click_id");

const clickId = getUrlParameter("click_id");
if (clickId) {
  localStorage.setItem("click_id", clickId);
}
