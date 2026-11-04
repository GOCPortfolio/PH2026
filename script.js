/* ==========================================================================
   PRECIOUS & HONESTY — WEDDING INVITATION
   Everything you may want to edit lives in the CONFIG object below.
   The code underneath it should never need to be touched.
   Items marked  ⚠ CONFIRM  are placeholders or assumptions to check.
   ========================================================================== */
const CONFIG = {

  /* ---- Hosting (used for link previews, share message, ICS) ---- */
  site: {
    // ⚠ CONFIRM: assumed GitHub Pages address for the repo GOCPortfolio/PH2026
    url: "https://gocportfolio.github.io/PH2026/",
    ogImage: "https://gocportfolio.github.io/PH2026/assets/og-image-3.jpg"
  },

  /* ---- The couple ---- */
  couple: {
    short: "Precious & Honesty",
    heroBride: "Precious",
    heroGroom: "Honesty",
    seal: "P & H",
    hashtag: "#PRECIOUSHONEY2026",
    tagline: "Two Hearts, One Promise",          // ⚠ CONFIRM tagline
    bride: {
      title: "Mrs",                               // ⚠ CONFIRM (Miss / Mrs)
      given: "Onyinyechi",
      surname: "Chibuike",
      parentsLead: "Daughter of",
      parents: "Mr & Mrs Everitus Chibuike Ogu",
      origin: "Umuawa Ogii, Okigwe LGA, Imo State"
    },
    groom: {
      title: "Mr",
      given: "Honesty",
      surname: "Okoroafor",
      parentsLead: "Son of",
      parents: "Late Mr Okoroafor Ukaike (Cosmopo) & Mrs Promise Okoroafor",
      origin: "Ozu Abam, Arochukwu LGA, Abia State"
    },
    consent: "With the consent and blessings of both families",
    invite: "Joyfully invite you to celebrate our union in marriage on"
  },

  /* ---- Date & time ---- */
  date: {
    start: "2026-12-12T11:00:00+01:00",           // Saturday 12 Dec 2026, 11:00 AM Lagos time
    durationHours: 7,
    timeZoneLabel: "WAT (UTC+1)",
    weekday: "Saturday",
    day: "12",
    month: "December",
    year: "2026",
    time: "11:00 AM",
    display: "Saturday, 12th December 2026",
    city: "Umuahia, Abia State"
  },

  /* ---- Venues ---- */
  venues: [
    {
      label: "The Ceremony",
      name: "Kingdom Hall of Jehovah's Witnesses",
      address: "72 Aba Road, Umuahia, Abia State",
      time: "11:00 AM",
      mapQuery: "Kingdom Hall of Jehovah's Witnesses, 72 Aba Road, Umuahia, Abia State, Nigeria", // ⚠ CONFIRM exact Google Maps text
      mapsUrl: ""                                  // optional: paste a Google Maps share link to override
    },
    {
      label: "The Reception",
      name: "Margrat School Hall",
      address: "Azikiwe Road, Umu Obasi, Umuahia 440236, Abia State",
      time: "Immediately after the ceremony",      // ⚠ CONFIRM
      mapQuery: "GFGX+QFG, Azikiwe Rd, Umu Obasi, Umuahia 440236, Abia",   // Google plus code + address, so the pin lands exactly
      mapsUrl: ""
    }
  ],

  /* ---- Colours of the day ---- */
  colours: [
    { name: "Golden",     hex: "#C9A24B", metallic: true },
    { name: "Royal Blue", hex: "#1B3FA0" },
    { name: "Pink",       hex: "#F2A7BE" },
    { name: "White",      hex: "#FFFFFF" }
  ],
  colourLine: "Golden, Royal Blue, Pink & White",

  /* ---- Contact ---- */
  contact: {
    callDisplay: "0706 684 1921",
    callTel: "+2347066841921",
    whatsappNumber: "2348134589602",               // international format, no +
    whatsappDisplay: "0813 458 9602",
    personName: "Our wedding coordinator"          // ⚠ CONFIRM name
  },

  /* ---- Optional extras (leave empty to hide the section) ---- */
  fatherOfTheDay: {       // special-guest section (label can be changed, e.g. "Father of the Day")
    label: "Chief Host",
    names: "Mrs Ebere Nkele Agu",
    role: "Odiukonamba 1"
  },
  vendors: [],            // e.g. [{ role: "Photography", name: "Studio Name" }]

  /* ---- Gifts ---- */
  gifts: {
    message: "Your presence at our wedding is the greatest gift we could ask for. If you would like to bless us further, you are warmly welcome to do so.",
    bank: "Fidelity Bank",
    accountName: "Okoroafor Honesty",
    accountNumber: "6171365242"
  },

  /* ---- Story ---- ⚠ written by Claude from known facts only; couple may edit freely */
  story: {
    intro: "Every love story is written one day at a time. Ours has been written in laughter, patience and a shared faith.",
    moments: [
      { label: "Where it began",   title: "The Beginning", text: "What began as friendship slowly grew into something we could not ignore. Ordinary days felt brighter simply because we were sharing them, and soon we knew we wanted every day this way.", photo: "assets/tommy-pair-sm.webp", w: 520, h: 728, alt: "Precious and Honesty in matching navy outfits, smiling together" },
      { label: "The question",     title: "The Proposal",  text: "Then came the day Honesty went down on one knee. There was a ring, a nervous smile and one easy answer. Precious said yes, and everything changed.", photo: "assets/proposal-sm.webp",   w: 520, h: 738, alt: "Honesty kneeling to place a ring on Precious's finger" },
      { label: "Forever begins",   title: "The Promise",   text: "With the blessing of both our families, we are ready to make it forever. On 12th December 2026 we will stand before the people we love and promise ourselves to each other.", photo: "assets/embrace-sm.webp",    w: 520, h: 728, alt: "Precious smiling over Honesty's shoulder as they embrace, her ring catching the light" }
    ],
    closing: "And so our forever begins."
  },

  /* ---- Gallery (full image + small thumbnail) ---- */
  gallery: [
    { full: "assets/tommy-pair.webp",  thumb: "assets/tommy-pair-sm.webp",  w: 520, h: 728, alt: "Precious and Honesty in matching navy outfits, arms around each other" },
    { full: "assets/white-seat.webp",  thumb: "assets/white-seat-sm.webp",  w: 520, h: 780, alt: "Honesty and Precious in white tracksuits against a black backdrop" },
    { full: "assets/trad-shelf.webp",  thumb: "assets/trad-shelf-sm.webp",  w: 520, h: 727, alt: "The couple in matching red traditional attire, Precious in coral beads" },
    { full: "assets/proposal.webp",    thumb: "assets/proposal-sm.webp",    w: 520, h: 738, alt: "Honesty kneeling as Precious smiles down at him" },
    { full: "assets/white-look.webp",  thumb: "assets/white-look-sm.webp",  w: 520, h: 728, alt: "Honesty and Precious looking lovingly at each other in white" },
    { full: "assets/trad-dark.webp",   thumb: "assets/trad-dark-sm.webp",   w: 520, h: 728, alt: "Honesty seated and Precious standing behind him in red traditional wear" },
    { full: "assets/embrace.webp",     thumb: "assets/embrace-sm.webp",     w: 520, h: 728, alt: "An embrace in navy, Precious smiling over Honesty's shoulder" },
    { full: "assets/frame.webp",       thumb: "assets/frame-sm.webp",       w: 520, h: 728, alt: "The couple in white tracksuits before a gold frame" },
    { full: "assets/bride-solo.webp",  thumb: "assets/bride-solo-sm.webp",  w: 520, h: 728, alt: "Precious in a red elephant-print dress and coral beads" },
    { full: "assets/white-stand.webp", thumb: "assets/white-stand-sm.webp", w: 520, h: 774, alt: "The couple standing side by side in white tracksuits" }
  ],

  /* ---- Toast ---- (last line is highlighted) */
  toast: {
    heading: "A Toast to Us",
    lines: [
      "Raise your glasses, family and friends,",
      "To Precious and Honesty, two hearts that found their way to each other.",
      "May your home be filled with laughter, peace and patience,",
      "May your love grow deeper with every passing year,",
      "And may every sunrise find you still choosing each other.",
      "To a lifetime of love, together. Cheers!"
    ]
  },

  /* ---- RSVP ---- */
  rsvp: {
    endpoint: "https://script.google.com/macros/s/AKfycbw9ByKROe5k0iQuldlOGnML5xyPKYyzaZ3tpKkw_cQTfkSmGWQXEKqg2SbwXAcVztKXCQ/exec",   // Google Apps Script Web App URL
    maxGuests: 10
  },

  /* ---- FAQ ---- */
  faq: [
    { id: "dress", q: "Dress code", a: "We would be delighted to see you dressed in the colours of the day.", swatches: true },
    { id: "parking", q: "Parking", a: "Parking details will be shared by our coordinator. Please call the number below if you need help on the day." },
    { id: "stay", q: "Accommodation", a: "If you are travelling and need a place to stay, please reach out to our coordinator and we will gladly point you in the right direction." },
    { id: "contact", q: "Who do I contact?", contact: true }
  ],

  /* ---- Footer & share ---- */
  footer: {
    thanks: "Thank you for being part of our story. We cannot wait to celebrate with you.",
    shareText: "You are invited to the wedding of Precious & Honesty on Saturday, 12th December 2026."
  },

  /* ---- Music ---- (replace assets/music.mp3 with your own licensed file) */
  music: { src: "assets/music.mp3", volume: 0.5 }
};

/* ==========================================================================
   APP CODE — no edits needed below this line
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var C = CONFIG;

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, C);
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---- URL params ---- */
  var params = new URLSearchParams(location.search);
  var guest = (params.get("guest") || "").replace(/[\u0000-\u001f<>]/g, "").trim().slice(0, 60);
  var noIntro = params.has("nointro");

  /* ---- Fill data-cfg text ---- */
  function fillCfg() {
    $$("[data-cfg]").forEach(function (n) {
      var v = get(n.getAttribute("data-cfg"));
      if (v != null) n.textContent = v;
    });
    $$("[data-cfg-attr]").forEach(function (n) {
      // format: attr:path;attr:path
      n.getAttribute("data-cfg-attr").split(";").forEach(function (pair) {
        var i = pair.indexOf(":");
        var v = get(pair.slice(i + 1));
        if (v != null) n.setAttribute(pair.slice(0, i), v);
      });
    });
    document.title = C.couple.short + " | " + C.couple.hashtag;
  }

  /* ---- Rings-in-laurel logo ---- */
  function logoSVG() {
    var leaves = "";
    // two laurel sprigs hugging the rings: left sprig, then its mirror image on the right
    for (var i = 0; i < 8; i++) {
      var th = (250 - i * (140 / 7)) * Math.PI / 180;
      var x = 50 + 36 * Math.cos(th), y = 52 - 36 * Math.sin(th);
      var rot = Math.atan2(Math.cos(th), Math.sin(th)) * 180 / Math.PI + 90 + 30;
      var lx = x.toFixed(1), ly = y.toFixed(1), rx = (100 - x).toFixed(1);
      leaves += '<ellipse cx="' + lx + '" cy="' + ly + '" rx="3" ry="7.2" transform="rotate(' + rot.toFixed(0) + ' ' + lx + ' ' + ly + ')"/>';
      leaves += '<ellipse cx="' + rx + '" cy="' + ly + '" rx="3" ry="7.2" transform="rotate(' + (-rot).toFixed(0) + ' ' + rx + ' ' + ly + ')"/>';
    }
    return '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
      '<g class="logo-leaves">' + leaves + '</g>' +
      '<g class="logo-rings" fill="none" stroke-width="2.4"><circle cx="43" cy="52" r="12"/><circle cx="57" cy="52" r="12"/></g>' +
      '<path class="logo-gem" d="M50 33l3.6 4.4-3.6 4.4-3.6-4.4z"/></svg>';
  }
  function fillLogos() {
    $$("[data-logo]").forEach(function (n) { n.innerHTML = logoSVG(); });
  }

  /* ---- Parents / names on the card ---- */
  function fillPeople() {
    ["bride", "groom"].forEach(function (k) {
      var p = C.couple[k];
      var root = $('[data-person="' + k + '"]');
      if (!root) return;
      root.innerHTML =
        '<p class="p-title">' + esc(p.title) + '</p>' +
        '<p class="p-given">' + esc(p.given.toUpperCase()) + '</p>' +
        '<p class="p-surname script gold-text">' + esc(p.surname) + '</p>' +
        '<p class="p-lead">' + esc(p.parentsLead) + '</p>' +
        '<p class="p-parents">' + esc(p.parents) + '</p>' +
        '<p class="p-origin">' + esc(p.origin) + '</p>';
    });
  }

  /* ---- Swatches ---- */
  function swatchHTML() {
    return C.colours.map(function (c) {
      var border = c.hex.toUpperCase() === "#FFFFFF" ? " is-white" : "";
      return '<li class="swatch' + border + '"><span class="dot' + (c.metallic ? " metallic" : "") + '" style="--c:' + esc(c.hex) + '"></span><span class="sw-name">' + esc(c.name) + '</span></li>';
    }).join("");
  }
  function fillSwatches() {
    $$("[data-swatches]").forEach(function (n) { n.innerHTML = swatchHTML(); });
  }

  /* ---- Links built from CONFIG ---- */
  function eventTimes() {
    var s = new Date(C.date.start);
    var e = new Date(s.getTime() + C.date.durationHours * 3600 * 1000);
    return { s: s, e: e };
  }
  function utcStamp(d) {
    return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }
  function eventTitle() { return "Wedding of " + C.couple.short; }
  function eventLocation() {
    return C.venues.map(function (v) { return v.name + ", " + v.address; }).join(" | ");
  }
  function eventDescription() {
    return C.couple.hashtag + " — " + C.couple.tagline + ". Ceremony at " + C.venues[0].time + ", reception: " + C.venues[1].time.toLowerCase() + ". Colours of the day: " + C.colourLine + ".";
  }
  function googleCalUrl() {
    var t = eventTimes();
    return "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(eventTitle()) +
      "&dates=" + utcStamp(t.s) + "/" + utcStamp(t.e) +
      "&details=" + encodeURIComponent(eventDescription()) +
      "&location=" + encodeURIComponent(C.venues[0].name + ", " + C.venues[0].address) +
      "&ctz=" + encodeURIComponent("Africa/Lagos");
  }
  function icsText() {
    var t = eventTimes();
    var f = function (s) { return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); };
    return [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Precious and Honesty//Wedding//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "UID:" + utcStamp(t.s) + "-precious-honesty-wedding@invitation",
      "DTSTAMP:" + utcStamp(new Date()),
      "DTSTART:" + utcStamp(t.s),
      "DTEND:" + utcStamp(t.e),
      "SUMMARY:" + f(eventTitle()),
      "LOCATION:" + f(eventLocation()),
      "DESCRIPTION:" + f(eventDescription() + " " + C.site.url),
      "URL:" + C.site.url,
      "END:VEVENT", "END:VCALENDAR"
    ].join("\r\n");
  }
  function downloadICS() {
    var blob = new Blob([icsText()], { type: "text/calendar;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "Precious-and-Honesty-Wedding.ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }
  function mapUrl(v) {
    return v.mapsUrl || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(v.mapQuery));
  }
  function dirUrl(v) {
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(v.mapQuery);
  }
  function waLink(text) {
    return "https://wa.me/" + C.contact.whatsappNumber + "?text=" + encodeURIComponent(text);
  }

  /* ---- Render lists ---- */
  function renderCalendar() {
    var g = $("#addGoogle"), i = $("#addIcs");
    if (g) g.href = googleCalUrl();
    if (i) i.addEventListener("click", downloadICS);
  }

  function renderVenues() {
    var root = $("#venueList");
    if (!root) return;
    root.innerHTML = "";
    C.venues.forEach(function (v) {
      var card = el("article", "venue-card reveal");
      card.innerHTML =
        '<p class="venue-label">' + esc(v.label) + '</p>' +
        '<h3 class="venue-name">' + esc(v.name) + '</h3>' +
        '<p class="venue-time">' + esc(v.time) + '</p>' +
        '<p class="venue-address">' + esc(v.address) + '</p>' +
        '<div class="btn-row">' +
        '<a class="btn btn-gold" target="_blank" rel="noopener" href="' + esc(mapUrl(v)) + '">Open in Google Maps</a>' +
        '<a class="btn btn-ghost" target="_blank" rel="noopener" href="' + esc(dirUrl(v)) + '">Get directions</a>' +
        '</div>';
      root.appendChild(card);
    });
  }

  function renderFather() {
    var sec = $("#father");
    if (!sec) return;
    var f = C.fatherOfTheDay;
    if (!f) { sec.hidden = true; return; }
    if (f.label) $("#fatherTitle").textContent = f.label;
    $("#fatherTitle").textContent = f.label || "Father of the Day";
    $("#fatherNames").textContent = f.names;
    $("#fatherRole").textContent = f.role || "";
  }

  function renderStory() {
    $("#storyIntro").textContent = C.story.intro;
    $("#storyClosing").textContent = C.story.closing;
    var root = $("#timeline");
    root.innerHTML = "";
    C.story.moments.forEach(function (m, i) {
      var li = el("li", "moment reveal");
      li.innerHTML =
        '<figure class="moment-photo"><img loading="lazy" src="' + esc(m.photo) + '" width="' + m.w + '" height="' + m.h + '" alt="' + esc(m.alt) + '"></figure>' +
        '<div class="moment-body"><p class="moment-label">' + esc(m.label) + '</p>' +
        '<h3 class="moment-title">' + esc(m.title) + '</h3><p class="moment-text">' + esc(m.text) + '</p></div>';
      root.appendChild(li);
    });
  }

  function renderToast() {
    $("#toastHeading").textContent = C.toast.heading;
    var root = $("#toastLines");
    root.innerHTML = "";
    C.toast.lines.forEach(function (l, i) {
      var p = el("p", "toast-line reveal" + (i === C.toast.lines.length - 1 ? " last" : ""));
      p.textContent = l;
      root.appendChild(p);
    });
  }

  function renderVendors() {
    var sec = $("#vendors");
    if (!sec) return;
    if (!C.vendors || !C.vendors.length) { sec.hidden = true; return; }
    var ul = $("#vendorList");
    ul.innerHTML = C.vendors.map(function (v) {
      return '<li><span class="v-role">' + esc(v.role) + '</span><span class="v-name">' + esc(v.name) + '</span></li>';
    }).join("");
  }

  function renderGifts() {
    $("#giftMessage").textContent = C.gifts.message;
  }

  function renderFaq() {
    var root = $("#faqList");
    root.innerHTML = "";
    C.faq.forEach(function (f, i) {
      var item = el("div", "faq-item");
      var body = "";
      if (f.a) body += "<p>" + esc(f.a) + "</p>";
      if (f.swatches) body += '<ul class="swatches small">' + swatchHTML() + "</ul>";
      if (f.contact) {
        body += "<p>" + esc(C.contact.personName) + ": <a href=\"tel:" + esc(C.contact.callTel) + "\">" + esc(C.contact.callDisplay) + "</a></p>" +
          "<p>WhatsApp: <a target=\"_blank\" rel=\"noopener\" href=\"" + esc(waLink("Hello, I have a question about the wedding of " + C.couple.short + ".")) + "\">" + esc(C.contact.whatsappDisplay) + "</a></p>";
      } else if (f.id !== "dress") {
        body += "<p><a href=\"tel:" + esc(C.contact.callTel) + "\">Call " + esc(C.contact.callDisplay) + "</a></p>";
      }
      item.innerHTML =
        '<h3><button type="button" class="faq-q" id="faq-q-' + i + '" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
        '<span>' + esc(f.q) + '</span><span class="faq-icon" aria-hidden="true"></span></button></h3>' +
        '<div class="faq-panel" id="faq-a-' + i + '" role="region" aria-labelledby="faq-q-' + i + '" inert><div class="faq-inner">' + body + '</div></div>';
      root.appendChild(item);
    });
    $$(".faq-q", root).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        $$(".faq-q", root).forEach(function (b) {
          b.setAttribute("aria-expanded", "false");
          b.parentNode.parentNode.classList.remove("open");
          $("#" + b.getAttribute("aria-controls")).setAttribute("inert", "");
        });
        if (!open) {
          btn.setAttribute("aria-expanded", "true");
          btn.parentNode.parentNode.classList.add("open");
          $("#" + btn.getAttribute("aria-controls")).removeAttribute("inert");
        }
      });
    });
  }

  /* ---- Gallery + lightbox ---- */
  var lb = { open: false, i: 0, opener: null };
  function renderGallery() {
    var root = $("#gallery");
    root.innerHTML = "";
    C.gallery.forEach(function (g, i) {
      var b = el("button", "g-item reveal");
      b.type = "button";
      b.setAttribute("aria-label", "Open photo " + (i + 1) + ": " + g.alt);
      b.innerHTML = '<img loading="lazy" src="' + esc(g.thumb) + '" width="' + g.w + '" height="' + g.h + '" alt="' + esc(g.alt) + '">';
      b.addEventListener("click", function () { openLightbox(i, b); });
      root.appendChild(b);
    });
  }
  function showLb(i) {
    var n = C.gallery.length;
    lb.i = (i + n) % n;
    var g = C.gallery[lb.i];
    var img = $("#lbImg");
    img.src = g.full; img.alt = g.alt;
    $("#lbCount").textContent = (lb.i + 1) + " / " + n;
    $("#lbCaption").textContent = g.alt;
  }
  function openLightbox(i, opener) {
    lb.open = true; lb.opener = opener || document.activeElement;
    var box = $("#lightbox");
    box.hidden = false;
    document.documentElement.classList.add("lb-lock");
    showLb(i);
    $("#lbClose").focus();
  }
  function closeLightbox() {
    if (!lb.open) return;
    lb.open = false;
    $("#lightbox").hidden = true;
    document.documentElement.classList.remove("lb-lock");
    if (lb.opener && lb.opener.focus) lb.opener.focus();
  }
  function initLightbox() {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", function () { showLb(lb.i - 1); });
    $("#lbNext").addEventListener("click", function () { showLb(lb.i + 1); });
    $("#lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox" || e.target.classList.contains("lb-stage")) closeLightbox(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.open) return;
      if (e.key === "Escape") { closeLightbox(); }
      else if (e.key === "ArrowLeft") { showLb(lb.i - 1); }
      else if (e.key === "ArrowRight") { showLb(lb.i + 1); }
      else if (e.key === "Tab") {
        var f = $$("#lightbox button").filter(function (b) { return !b.hidden; });
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (f.indexOf(document.activeElement) === -1) { e.preventDefault(); first.focus(); }
      }
    });
    // swipe
    var stage = $("#lbStage"), sx = null, sy = null;
    stage.addEventListener("pointerdown", function (e) { sx = e.clientX; sy = e.clientY; });
    stage.addEventListener("pointerup", function (e) {
      if (sx == null) return;
      var dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) showLb(lb.i + (dx < 0 ? 1 : -1));
    });
    stage.addEventListener("pointercancel", function () { sx = null; });
  }

  /* ---- Countdown ---- */
  function initCountdown() {
    var target = new Date(C.date.start).getTime();
    var cells = { d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
    var box = $("#countdown"), done = $("#married");
    var last = {};
    function pad(n) { return n < 10 ? "0" + n : String(n); }
    function set(k, v) {
      var txt = k === "d" ? String(v) : pad(v);
      if (last[k] !== txt) {
        cells[k].textContent = txt;
        if (last[k] !== undefined && !reduced) {
          var t = cells[k].parentNode;
          t.classList.remove("flip"); void t.offsetWidth; t.classList.add("flip");
        }
        last[k] = txt;
      }
    }
    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        box.hidden = true; done.hidden = false;
        return false;
      }
      box.hidden = false; done.hidden = true;
      var s = Math.floor(diff / 1000);
      set("d", Math.floor(s / 86400));
      set("h", Math.floor(s % 86400 / 3600));
      set("m", Math.floor(s % 3600 / 60));
      set("s", s % 60);
      return true;
    }
    if (tick()) setInterval(tick, 1000);
  }

  /* ---- Toast notice ---- */
  var toastTimer;
  function showToast(msg) {
    var t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2400);
  }

  /* ---- Gifts copy ---- */
  function initGifts() {
    $("#bankName").textContent = C.gifts.bank;
    $("#acctNo").textContent = C.gifts.accountNumber;
    $("#acctName").textContent = C.gifts.accountName;
    $("#copyAcct").addEventListener("click", function () {
      var txt = C.gifts.accountNumber;
      function ok() { showToast("Account number copied"); }
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = txt; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); ok(); } catch (e) { showToast("Please copy: " + txt); }
        ta.remove();
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, fallback);
      else fallback();
    });
  }

  /* ---- RSVP ---- */
  function initRsvp() {
    var form = $("#rsvpForm");
    var name = $("#rName"), phone = $("#rPhone"), guests = $("#rGuests"), msg = $("#rMsg"), hp = $("#rWebsite");
    var guestsWrap = $("#guestsWrap");
    var result = $("#rsvpResult");
    for (var i = 1; i <= C.rsvp.maxGuests; i++) { var o = document.createElement("option"); o.value = i; o.textContent = i === 1 ? "1 guest (just me)" : i + " guests"; guests.appendChild(o); }
    if (guest) name.value = guest;

    function attending() { var r = form.querySelector('input[name="attending"]:checked'); return r ? r.value : ""; }
    $$('input[name="attending"]', form).forEach(function (r) {
      r.addEventListener("change", function () {
        guestsWrap.hidden = attending() === "no";
        setErr("rAttend", "");
      });
    });
    function setErr(id, text) {
      var e = $("#" + id + "Err");
      if (e) { e.textContent = text; }
      var f = $("#" + id);
      if (f && f.setAttribute) { if (text) f.setAttribute("aria-invalid", "true"); else f.removeAttribute("aria-invalid"); }
    }
    function validate() {
      var ok = true, firstBad = null;
      if (!name.value.trim()) { setErr("rName", "Please enter your name."); ok = false; firstBad = firstBad || name; } else setErr("rName", "");
      var digits = phone.value.replace(/\D/g, "");
      if (digits.length < 7) { setErr("rPhone", "Please enter a phone number we can reach you on."); ok = false; firstBad = firstBad || phone; } else setErr("rPhone", "");
      if (!attending()) { $("#rAttendErr").textContent = "Please choose one option."; ok = false; firstBad = firstBad || form.querySelector('input[name="attending"]'); } else $("#rAttendErr").textContent = "";
      if (firstBad) firstBad.focus();
      return ok;
    }
    [name, phone].forEach(function (f) { f.addEventListener("input", function () { if (f.getAttribute("aria-invalid")) setErr(f.id, ""); }); });

    // WhatsApp + call buttons
    function waText() {
      var n = name.value.trim() || "a guest";
      var a = attending();
      var line = a === "no" ? "I will regretfully not be able to attend" : "I will be joyfully attending";
      var g = a === "yes" ? " with " + (guests.value || 1) + " guest" + ((guests.value || 1) > 1 ? "s" : "") + " in total" : "";
      return "Hello, this is " + n + ". " + line + " the wedding of " + C.couple.short + " on " + C.date.display + (a === "yes" ? g : "") + ".";
    }
    $("#rsvpWhatsapp").addEventListener("click", function (e) {
      e.preventDefault();
      window.open(waLink(waText()), "_blank", "noopener");
    });
    $("#rsvpWhatsapp").href = waLink(waText());
    var call = $("#rsvpCall");
    call.href = "tel:" + C.contact.callTel;
    call.querySelector("span.lbl").textContent = "Call to RSVP · " + C.contact.callDisplay;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (hp.value) return; // honeypot
      if (!validate()) return;
      var payload = {
        name: name.value.trim(), phone: phone.value.trim(),
        attending: attending() === "yes" ? "Joyfully accept" : "Regretfully decline",
        guests: attending() === "yes" ? Number(guests.value || 1) : 0,
        message: msg.value.trim(), submittedAt: new Date().toISOString()
      };
      var btn = $("#rsvpSubmit");
      if (!C.rsvp.endpoint) {
        result.className = "rsvp-result info"; result.hidden = false;
        result.innerHTML = "<p>Online RSVP is not switched on yet. Please use the <strong>WhatsApp</strong> or <strong>Call</strong> buttons below to let us know. Thank you!</p>";
        return;
      }
      btn.disabled = true; btn.classList.add("busy");
      fetch(C.rsvp.endpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) })
        .then(function () {
          form.hidden = true;
          result.className = "rsvp-result success"; result.hidden = false;
          var yes = attending() === "yes";
          result.innerHTML =
            '<svg class="check" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="24" fill="none"/><path fill="none" d="M14 27l8 8 16-17"/></svg>' +
            "<h3>" + (yes ? "Thank you, " + esc(payload.name) + "!" : "We will miss you, " + esc(payload.name) + ".") + "</h3>" +
            "<p>" + (yes ? "Your RSVP has been received. We cannot wait to celebrate with you." : "Thank you for letting us know. You will be in our hearts on the day.") + "</p>";
          result.setAttribute("tabindex", "-1"); result.focus();
        })
        .catch(function () {
          btn.disabled = false; btn.classList.remove("busy");
          result.className = "rsvp-result error"; result.hidden = false;
          result.innerHTML = "<p>Sorry, we could not send that just now. Please try again, or use the WhatsApp or Call buttons below.</p>";
        });
    });
  }

  /* ---- Footer / share ---- */
  function initFooter() {
    var s = $("#shareWhatsapp");
    s.href = "https://wa.me/?text=" + encodeURIComponent(C.footer.shareText + " " + C.site.url);
    $("#thanks").textContent = C.footer.thanks;
  }

  /* ---- Scroll reveal ---- */
  function initReveal() {
    var items = $$(".reveal");
    if (reduced || !("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---- Music ---- */
  var music = { a: null, muted: false, started: false, fade: null };
  function prefGet() { try { return localStorage.getItem("ph2026-muted") === "1"; } catch (e) { return false; } }
  function prefSet(v) { try { localStorage.setItem("ph2026-muted", v ? "1" : "0"); } catch (e) { /* ignore */ } }
  function fadeTo(v, ms) {
    if (!music.a) return;
    clearInterval(music.fade);
    var a = music.a, from = a.volume, steps = 20, i = 0;
    music.fade = setInterval(function () {
      i++; a.volume = Math.max(0, Math.min(1, from + (v - from) * (i / steps)));
      if (i >= steps) clearInterval(music.fade);
    }, (ms || 1200) / steps);
  }
  function updateSoundBtn() {
    var b = $("#soundBtn");
    b.setAttribute("aria-pressed", music.muted ? "true" : "false");
    b.setAttribute("aria-label", music.muted ? "Turn music on" : "Turn music off");
    b.classList.toggle("muted", music.muted);
  }
  function startMusic() {
    if (music.started) return;
    music.started = true;
    try {
      var a = new Audio(C.music.src);
      a.loop = true; a.volume = 0; music.a = a;
      if (!music.muted) a.play().then(function () { fadeTo(C.music.volume, 1800); }).catch(function () { /* blocked or missing file */ });
    } catch (e) { /* ignore */ }
  }
  function initSound() {
    music.muted = prefGet();
    updateSoundBtn();
    $("#soundBtn").addEventListener("click", function () {
      music.muted = !music.muted; prefSet(music.muted); updateSoundBtn();
      if (!music.started) { startMusic(); return; }
      if (music.muted) { fadeTo(0, 400); setTimeout(function () { if (music.muted && music.a) music.a.pause(); }, 450); }
      else if (music.a) { music.a.play().then(function () { fadeTo(C.music.volume, 800); }).catch(function () { }); }
    });
  }

  /* ---- Envelope intro ---- */
  var intro = { opened: false, done: false };

  function burst(from) {
    var host = $("#intro");
    var r = from.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (var i = 0; i < 16; i++) {
      var s = el("span", "spark");
      s.style.left = cx + "px"; s.style.top = cy + "px";
      host.appendChild(s);
      var a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70;
      var anim = s.animate([
        { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
        { transform: "translate(calc(-50% + " + (Math.cos(a) * d).toFixed(0) + "px), calc(-50% + " + (Math.sin(a) * d).toFixed(0) + "px)) scale(0)", opacity: 0 }
      ], { duration: 650 + Math.random() * 300, easing: "cubic-bezier(.2,.7,.3,1)" });
      anim.onfinish = (function (n) { return function () { n.remove(); }; })(s);
    }
  }

  function finishIntro() {
    if (intro.done) return;
    intro.done = true;
    var host = $("#intro");
    var site = $("#site");
    document.documentElement.classList.remove("intro-lock");
    site.inert = false; site.removeAttribute("inert");
    host.classList.add("gone");
    host.setAttribute("aria-hidden", "true");
    $("#skipBtn").hidden = true;
    setTimeout(function () { host.hidden = true; }, 700);
    window.scrollTo(0, 0);
    var h = $("#heroTitle");
    if (h) { h.setAttribute("tabindex", "-1"); try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); } }
  }

  function runIntro(skip) {
    if (intro.opened) return;
    intro.opened = true;
    startMusic();
    var host = $("#intro"), env = $("#envelope"), seal = $("#seal"), card = $("#envCard");
    $("#openHint").classList.add("off");
    if (skip || reduced) {
      host.animate([{ opacity: 1 }, { opacity: 0 }], { duration: skip ? 300 : 450, fill: "forwards" });
      setTimeout(finishIntro, skip ? 280 : 430);
      return;
    }
    // 1. press + crack
    seal.classList.add("press");
    wait(200).then(function () {
      seal.classList.add("crack"); burst(seal); env.classList.add("untie");
      return wait(450);
    }).then(function () {
      // 2. flap opens
      env.classList.add("open");
      setTimeout(function () { env.classList.add("behind"); }, 420);
      return wait(800);
    }).then(function () {
      // 3. photo slides out
      var er = env.getBoundingClientRect();
      var up = er.width * 0.52;
      card.animate([
        { transform: "translateX(-50%) translateY(0) scale(.6)" },
        { transform: "translateX(-50%) translateY(" + (-up) + "px) scale(.74)" }
      ], { duration: 800, easing: "cubic-bezier(.22,.8,.3,1)", fill: "forwards" });
      return wait(850);
    }).then(function () {
      // 4. fly to fill the screen
      var r = card.getBoundingClientRect();
      var s = Math.min(innerWidth * 0.94 / r.width, innerHeight * 0.8 / r.height);
      var W = r.width * s, H = r.height * s;
      card.getAnimations().forEach(function (a) { a.cancel(); });
      host.appendChild(card);
      card.classList.add("flying");
      card.style.cssText = "left:" + ((innerWidth - W) / 2) + "px;top:" + ((innerHeight - H) / 2) + "px;width:" + W + "px;height:" + H + "px;";
      var dx = (r.left + r.width / 2) - innerWidth / 2, dy = (r.top + r.height / 2) - innerHeight / 2;
      card.animate([
        { transform: "translate(" + dx + "px," + dy + "px) scale(" + (1 / s) + ")" },
        { transform: "translate(0,0) scale(1)" }
      ], { duration: 950, easing: "cubic-bezier(.45,.05,.2,1)", fill: "forwards" });
      env.animate([
        { transform: "translateY(0) rotate(0)", opacity: 1 },
        { transform: "translateY(70vh) rotate(5deg)", opacity: 0 }
      ], { duration: 850, delay: 80, easing: "cubic-bezier(.5,0,.8,.4)", fill: "forwards" });
      return wait(1000);
    }).then(function () {
      // 5. cross-fade to the page
      host.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 550, fill: "forwards" });
      return wait(520);
    }).then(finishIntro);
  }

  function initIntro() {
    var host = $("#intro"), site = $("#site");
    if (noIntro) {
      host.hidden = true; $("#skipBtn").hidden = true; intro.opened = intro.done = true;
      return;
    }
    document.documentElement.classList.add("intro-lock");
    site.inert = true; site.setAttribute("inert", "");
    if (guest) {
      var g = $("#envGuest"); g.textContent = "Dear " + guest; g.hidden = false;
    }
    $("#seal").addEventListener("click", function () { runIntro(false); });
    $("#skipBtn").addEventListener("click", function () { runIntro(true); });
    try { $("#seal").focus({ preventScroll: true }); } catch (e) { /* ignore */ }
  }

  function initGuest() {
    if (!guest) return;
    var g = $("#cardGuest"); if (g) { g.textContent = "Dear " + guest + ","; g.hidden = false; }
  }

  /* ---- Boot ---- */
  function boot() {
    fillCfg(); fillLogos(); fillPeople(); fillSwatches();
    renderCalendar(); renderVenues(); renderFather(); renderStory(); renderToast(); renderVendors();
    renderGifts(); renderFaq(); renderGallery(); initLightbox(); initCountdown(); initGifts(); initRsvp(); initFooter();
    initSound(); initGuest(); initIntro(); initReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
