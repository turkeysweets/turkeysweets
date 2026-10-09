/* Turkey Sweets: cart + checkout (WhatsApp / HungerStation) and the branches map.
   Loaded automatically by app.js on every page (after data.js, so CONFIG and BRANCHES exist).

   Any element with data-cart-add adds an item to the cart. The menu cards already carry:
     data-cart-add data-id="" data-name="" data-name-en="" data-price=""
   Public API: TSCart.add(item, qty) · TSCart.open() · TSCart.close() · TSCart.clear()
*/
(function () {
  'use strict';

  var STORE_KEY = 'ts_cart';
  var CFG = window.CONFIG || {};
  var WA_NUMBER = CFG.whatsapp || '966553485544';
  var HS_URL = CFG.hungerStationUrl || 'https://hungerstation.com/';

  /* Pin positions on the schematic map (Al-Baha is approximate). */
  var PINS = [
    { key: 'mandaq',     short_ar: 'المندق',  short_en: 'Al-Mandaq',  lat: 20.1445719, lon: 41.2917438, bi: 2 },
    { key: 'main',       short_ar: 'الباحة',  short_en: 'Al-Baha',    lat: 20.0129,    lon: 41.4677,    bi: 0 },
    { key: 'baljurashi', short_ar: 'بلجرشي',  short_en: 'Baljurashi', lat: 19.8650317, lon: 41.5737653, bi: 1 }
  ];

  var T = {
    ar: {
      cart: 'السلة', close: 'إغلاق',
      empty: 'سلتك فارغة. أضف أصنافًا من القائمة.',
      total: 'الإجمالي', clear: 'تفريغ السلة', remove: 'حذف',
      wa: 'واتساب', hs: 'هنقرستيشن',
      added: 'تمت الإضافة إلى السلة',
      copied: 'تم نسخ الطلب، الصقه في هنقرستيشن',
      cur: 'ر.س', inc: 'زيادة', dec: 'إنقاص',
      mapTitle: 'خريطة الفروع',
      mapHint: 'اضغط على أي فرع لفتحه في خرائط جوجل',
      schematic: 'خريطة تقريبية',
      greet: 'السلام عليكم، أرغب بطلب التالي من حلويات تركيا:',
      totalLbl: 'الإجمالي'
    },
    en: {
      cart: 'Cart', close: 'Close',
      empty: 'Your cart is empty. Add items from the menu.',
      total: 'Total', clear: 'Clear cart', remove: 'Remove',
      wa: 'WhatsApp', hs: 'HungerStation',
      added: 'Added to cart',
      copied: 'Order copied, paste it in HungerStation',
      cur: 'SAR', inc: 'Increase', dec: 'Decrease',
      mapTitle: 'Branch map',
      mapHint: 'Tap a branch to open it in Google Maps',
      schematic: 'Schematic map',
      greet: 'Hello, I would like to order from Turkey Sweets:',
      totalLbl: 'Total'
    }
  };

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'ar'; }
  function t(k) { return T[lang()][k]; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Icons use the same stroke style as the site's own icons */
  var ICON_CART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2.5l2 11h10l2-8H7"/><circle cx="9.5" cy="19" r="1.4"/><circle cx="16.5" cy="19" r="1.4"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  var ICON_WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.6-4.2A8.5 8.5 0 1 1 20.5 11.5z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.2-1.6-2.2-1.1-1 .8a5 5 0 0 1-2.4-2.4l.8-1-1.1-2.2z"/></svg>';
  var ICON_HS = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6.5" cy="17" r="2.5"/><circle cx="17.5" cy="17" r="2.5"/><path d="M9 17h6l-2-8h-3M13 9h3l1.5 8M4 8h5"/></svg>';

  /* ---------------- cart state ---------------- */
  var items = [];

  function load() {
    try {
      var arr = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      items = Array.isArray(arr) ? arr.filter(function (i) { return i && i.id && i.qty > 0; }) : [];
    } catch (e) { items = []; }
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(items)); } catch (e) {} }
  function count() { return items.reduce(function (n, i) { return n + i.qty; }, 0); }
  function total() { return items.reduce(function (n, i) { return n + (i.price || 0) * i.qty; }, 0); }
  function hasPrices() { return items.some(function (i) { return i.price > 0; }); }
  function num(n) { return (Math.round(n * 100) / 100).toString(); }
  function money(n) { return lang() === 'ar' ? num(n) + ' ' + t('cur') : t('cur') + ' ' + num(n); }
  function nameOf(i) { return lang() === 'en' && i.nameEn ? i.nameEn : i.name; }

  function add(item, qty) {
    if (!item || !item.id) return;
    qty = qty || 1;
    var found = items.filter(function (i) { return i.id === String(item.id); })[0];
    if (found) found.qty += qty;
    else items.push({
      id: String(item.id), name: item.name || String(item.id), nameEn: item.nameEn || '',
      price: Number(item.price) || 0, qty: qty
    });
    save(); render(); bump(); toast(t('added'));
  }
  function setQty(id, q) {
    items = items.map(function (i) { if (i.id === id) i.qty = q; return i; })
                 .filter(function (i) { return i.qty > 0; });
    save(); render();
  }
  function clearCart() { items = []; save(); render(); }

  /* ---------------- order message + links ---------------- */
  function message() {
    var lines = [t('greet'), ''];
    items.forEach(function (i, n) {
      var l = (n + 1) + '. ' + nameOf(i) + ' × ' + i.qty;
      if (i.price > 0) l += ' — ' + money(i.price * i.qty);
      lines.push(l);
    });
    if (hasPrices()) { lines.push(''); lines.push(t('totalLbl') + ': ' + money(total())); }
    return lines.join('\n');
  }

  /* ---------------- UI ---------------- */
  var btn, badge, ov, panel, body, foot, toastEl, toastTimer;

  function buildUI() {
    var actions = $('.nav-actions');
    btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang ts-cart-btn';
    btn.innerHTML = ICON_CART + '<span class="ts-cart-count" aria-hidden="true">0</span>';
    badge = $('.ts-cart-count', btn);
    if (actions) {
      var lb = $('#langBtn', actions);
      actions.insertBefore(btn, lb || actions.firstChild);
    } else {
      btn.style.cssText = 'position:fixed;top:14px;inset-inline-end:14px;z-index:900';
      document.body.appendChild(btn);
    }
    btn.addEventListener('click', open);

    ov = document.createElement('div');
    ov.className = 'ts-ov';
    ov.addEventListener('click', close);
    document.body.appendChild(ov);

    panel = document.createElement('aside');
    panel.className = 'ts-cart';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="ts-cart-head"><h2></h2><button type="button" class="ts-cart-x">' + ICON_X + '</button></div>' +
      '<div class="ts-cart-body"></div>' +
      '<div class="ts-cart-foot" hidden>' +
        '<div class="ts-total"><span></span><span></span></div>' +
        '<div class="ts-actions">' +
          '<a class="btn btn-gold ts-wa" target="_blank" rel="noopener noreferrer" href="#">' + ICON_WA + '<span></span></a>' +
          '<a class="btn btn-ghost ts-hs" target="_blank" rel="noopener noreferrer" href="#">' + ICON_HS + '<span></span></a>' +
        '</div>' +
        '<button type="button" class="ts-clear"></button>' +
      '</div>';
    document.body.appendChild(panel);
    body = $('.ts-cart-body', panel);
    foot = $('.ts-cart-foot', panel);

    $('.ts-cart-x', panel).addEventListener('click', close);
    $('.ts-clear', panel).addEventListener('click', clearCart);
    $('.ts-hs', panel).addEventListener('click', function () {
      /* HungerStation can't receive a pre-filled message, so the order text is copied for pasting */
      try { navigator.clipboard.writeText(message()).then(function () { toast(t('copied')); }); } catch (e) {}
    });
    body.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b) return;
      var id = b.getAttribute('data-id');
      var it = items.filter(function (i) { return i.id === id; })[0];
      if (!it) return;
      var act = b.getAttribute('data-act');
      if (act === 'inc') setQty(id, it.qty + 1);
      else if (act === 'dec') setQty(id, it.qty - 1);
      else if (act === 'rm') setQty(id, 0);
    });

    toastEl = document.createElement('div');
    toastEl.className = 'ts-toast';
    toastEl.setAttribute('role', 'status');
    document.body.appendChild(toastEl);

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  function open() {
    render();
    toastEl.classList.remove('on');
    ov.classList.add('open'); panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('ts-lock');
    var x = $('.ts-cart-x', panel); if (x) x.focus();
  }
  function close() {
    if (!panel || !panel.classList.contains('open')) return;
    ov.classList.remove('open'); panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('ts-lock');
    if (btn) btn.focus({ preventScroll: true });
  }
  function bump() { btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('on'); }, 2200);
  }

  function render() {
    if (!panel) return;
    var n = count();
    badge.textContent = n > 99 ? '99+' : n;
    badge.classList.toggle('on', n > 0);
    btn.setAttribute('aria-label', t('cart') + (n ? ' (' + n + ')' : ''));
    $('h2', panel).textContent = t('cart');
    $('.ts-cart-x', panel).setAttribute('aria-label', t('close'));

    if (!items.length) {
      body.innerHTML = '<div class="ts-empty">' + ICON_CART + '<p>' + esc(t('empty')) + '</p></div>';
      foot.hidden = true;
      return;
    }
    body.innerHTML = items.map(function (i) {
      var id = esc(i.id);
      return '<div class="ts-line">' +
        '<div><div class="ts-line-name">' + esc(nameOf(i)) + '</div>' +
          (i.price > 0 ? '<div class="ts-line-price">' + esc(money(i.price)) + '</div>' : '') +
          '<div class="ts-qty">' +
            '<button type="button" data-act="inc" data-id="' + id + '" aria-label="' + esc(t('inc')) + '">+</button>' +
            '<span>' + i.qty + '</span>' +
            '<button type="button" data-act="dec" data-id="' + id + '" aria-label="' + esc(t('dec')) + '">−</button>' +
          '</div></div>' +
        '<div class="ts-line-sum">' + (i.price > 0 ? esc(money(i.price * i.qty)) : '') + '</div>' +
        '<button type="button" class="ts-rm" data-act="rm" data-id="' + id + '">' + esc(t('remove')) + '</button>' +
      '</div>';
    }).join('');

    foot.hidden = false;
    var tot = $('.ts-total', foot);
    tot.hidden = !hasPrices();
    tot.children[0].textContent = t('total');
    tot.children[1].textContent = money(total());
    $('.ts-clear', foot).textContent = t('clear');

    var wa = $('.ts-wa', foot), hs = $('.ts-hs', foot);
    wa.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message());
    $('span', wa).textContent = t('wa');
    hs.href = HS_URL;
    $('span', hs).textContent = t('hs');
  }

  /* "Add to order" buttons (menu cards) and any other [data-cart-add] element */
  function bindAddButtons() {
    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-cart-add]');
      if (!el) return;
      e.preventDefault();
      add({
        id: el.getAttribute('data-id') || el.getAttribute('data-name'),
        name: el.getAttribute('data-name'),
        nameEn: el.getAttribute('data-name-en'),
        price: el.getAttribute('data-price')
      }, parseInt(el.getAttribute('data-qty'), 10) || 1);
    });
  }

  /* ---------------- Branches map (branches page) ---------------- */
  function branchOf(p) { return (window.BRANCHES && window.BRANCHES[p.bi]) || null; }
  function px(p) {
    return {
      x: (p.lon - 41.20) / 0.45 * 560 + 120,
      y: (20.20 - p.lat) / 0.40 * 220 + 50
    };
  }
  function pinHTML(p, L) {
    var b = branchOf(p), pos = px(p), nm = L === 'en' ? p.short_en : p.short_ar;
    var url = b && b.mapUrl ? b.mapUrl : '#';
    return '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(nm) + '">' +
      '<g transform="translate(' + (pos.x - 20.4).toFixed(1) + ' ' + (pos.y - 35.7).toFixed(1) + ') scale(1.7)">' +
        '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" fill="#8DB1AB" stroke="#1E3230" stroke-width="1"/>' +
        '<circle cx="12" cy="10" r="2.6" fill="#1E3230"/>' +
      '</g>' +
      '<rect x="' + (pos.x - 48).toFixed(1) + '" y="' + (pos.y - 40).toFixed(1) + '" width="96" height="68" fill="transparent"/>' +
      '<text x="' + pos.x.toFixed(1) + '" y="' + (pos.y + 22).toFixed(1) + '" text-anchor="middle" font-size="18" font-weight="700" fill="#F6F9F8">' + esc(nm) + '</text>' +
    '</a>';
  }
  function mapHTML() {
    var L = lang(), a = px(PINS[0]), b = px(PINS[1]), c = px(PINS[2]);
    function f(n) { return n.toFixed(1); }
    return '<svg viewBox="0 0 800 320" role="group" aria-label="' + esc(T[L].mapTitle) + '" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="800" height="320" fill="#1E3230"/>' +
      '<rect width="800" height="320" fill="url(#pat-star)" opacity=".07"/>' +
      '<g fill="none" stroke="#8DB1AB" stroke-width="1.2" opacity=".28">' +
        '<path d="M0 262 80 226 150 246 240 196 330 232 410 186 500 226 590 178 680 220 760 190 800 204"/>' +
        '<path d="M0 292 90 262 170 280 270 238 360 268 450 226 540 262 630 218 720 256 800 236"/>' +
      '</g>' +
      '<g fill="none" stroke="#BFD6D2" stroke-width="2" stroke-dasharray="3 8" stroke-linecap="round" opacity=".55">' +
        '<path d="M' + f(a.x) + ' ' + f(a.y) + ' Q ' + f((a.x + b.x) / 2 + 20) + ' ' + f((a.y + b.y) / 2 - 18) + ' ' + f(b.x) + ' ' + f(b.y) + '"/>' +
        '<path d="M' + f(b.x) + ' ' + f(b.y) + ' Q ' + f((b.x + c.x) / 2 - 10) + ' ' + f((b.y + c.y) / 2 + 24) + ' ' + f(c.x) + ' ' + f(c.y) + '"/>' +
      '</g>' +
      PINS.map(function (p) { return pinHTML(p, L); }).join('') +
    '</svg>' +
    '<p class="ts-map-note"><span>' + esc(T[L].mapHint) + '</span><span>' + esc(T[L].schematic) + '</span></p>';
  }
  function renderMap() {
    var slot = $('.map-slot');
    if (!slot) return;
    var host = $('.ts-map', slot);
    if (!host) {
      slot.innerHTML = '';
      host = document.createElement('div');
      host.className = 'ts-map';
      slot.appendChild(host);
    }
    host.innerHTML = mapHTML();
  }

  /* ---------------- init ---------------- */
  function renderAll() { render(); renderMap(); }

  function init() {
    load();
    buildUI();
    bindAddButtons();
    renderAll();
    new MutationObserver(renderAll).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    window.addEventListener('storage', function (e) { if (e.key === STORE_KEY) { load(); render(); } });
    window.TSCart = { add: add, open: open, close: close, clear: clearCart, items: function () { return items.slice(); } };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
