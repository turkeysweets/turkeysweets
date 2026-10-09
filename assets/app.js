(function () {
  'use strict';

  /* ---------- Helpers ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var lang = window.__TS_LANG === 'en' ? 'en' : 'ar';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function saveLang(l) { try { localStorage.setItem('ts_lang', l); } catch (e) {} }
  function wa(text) { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text); }

  /* ---------- Translations: every piece of UI text lives here ---------- */
  var T = {
    ar: {
      navHome: 'الرئيسية', crumbHome: 'الرئيسية', crumbMenu: 'القائمة', crumbsAria: 'مسار التنقل',
      pt_about: 'من نحن | حلويات تركيا',
      pd_about: 'تعرّفوا على حكاية حلويات تركيا، أول حلواني في مدينة الباحة.',
      pt_menu: 'قائمة الحلويات | حلويات تركيا',
      pd_menu: 'تصفّحوا قائمة حلويات تركيا بالصور والأسعار: معجنات، معمول، كنافة وبقلاوة، جاتوه وتورت، شيكولاتة، مكسرات وقهوة.',
      pt_custom: 'طلبات خاصة ومناسبات | حلويات تركيا',
      pd_custom: 'علب هدايا وصواني أفراح وتورتات حسب الطلب وضيافة للمناسبات من حلويات تركيا في الباحة.',
      pt_branches: 'فروعنا | حلويات تركيا',
      pd_branches: 'فروع حلويات تركيا في الباحة وبلجرشي والمندق: العناوين وأرقام الهاتف وساعات العمل.',
      pt_reviews: 'آراء العملاء | حلويات تركيا',
      pd_reviews: 'تقييم حلويات تركيا على خرائط جوجل 4.1 من أكثر من 2,700 تقييم. اقرأوا آراء العملاء في الكنافة والجاتوه والحلويات الشرقية.',
      reviewsTitle: 'آراء عملائنا',
      reviewsSub: 'مختارات من أعلى تقييمات عملائنا على خرائط جوجل، بأسمائهم كما تظهر هناك.',
      rvListTitle: 'تقييمات العملاء',
      rvBasedOn: function (n) { return 'بناءً على أكثر من ' + n + ' تقييم على خرائط جوجل'; },
      rvReadAll: 'اقرأ كل التقييمات على جوجل', rvWrite: 'اكتب تقييمًا',
      rvStarsAria: function (n) { return n + ' من 5 نجوم'; },
      rvOriginal: 'التقييمات منشورة بنصها الأصلي كما كُتبت على خرائط جوجل.',
      rvNoText: 'تقييم بالنجوم فقط',
      rvFood: 'الطعام', rvService: 'الخدمة', rvAtmos: 'الأجواء',
      pcatDesc: function (name, n) { return name + ' من حلويات تركيا: ' + n + ' صنف بالصور والأسعار. اطلبوا عبر واتساب أو هنقرستيشن.'; },
      homeMenuSub: 'اختاروا القسم الذي يعجبكم وتصفّحوا الأصناف بالصور والأسعار.',
      viewFullMenu: 'عرض القائمة الكاملة',
      catSearchPh: 'ابحث في هذا القسم…',
      prevCat: 'القسم السابق', nextCat: 'القسم التالي', pagerAria: 'أقسام القائمة الأخرى',
      thumbAria: 'صور الصنف', photoN: function (n) { return 'الصورة ' + n; },
      title: 'حلويات تركيا | أول حلواني في مدينة الباحة',
      metaDesc: 'حلويات تركيا في الباحة: كنافة وبقلاوة ومعمول وجاتوه وشيكولاتة وقهوة. اطلبوا عبر واتساب أو هنقرستيشن من خلال ثلاثة فروع.',
      ogLocale: 'ar_SA', ogLocaleAlt: 'en_US',
      brand: 'حلويات تركيا', tagline: 'أول حلواني في مدينة الباحة',
      skip: 'انتقل إلى المحتوى',
      logoAria: 'حلويات تركيا - الصفحة الرئيسية', navAria: 'التنقل الرئيسي',
      navAbout: 'من نحن', navMenu: 'القائمة', navBranches: 'الفروع', navCustom: 'طلبات خاصة', navContact: 'تواصل معنا', navOrder: 'اطلب الآن',
      navReviews: 'آراء العملاء',
      langBtn: 'EN', langAria: 'Switch to English', langBtnLang: 'en',
      menuOpen: 'فتح القائمة', menuClose: 'إغلاق القائمة', waFloat: 'اطلب عبر واتساب',
      openBadge: 'مفتوح حتى منتصف الليل',
      heroIntro: 'حلويات شرقية وتركية تُحضَّر بعناية كل يوم، من الكنافة والبقلاوة إلى المعمول والجاتوه، لتكون حاضرة في مناسباتكم ولمّات أحبّتكم.',
      heroMenu: 'تصفّح القائمة', heroOrder: 'اطلب الآن',
      ratingHS: 'هنقرستيشن', ratingHSsub: '444 تقييم للفرع الرئيسي',
      ratingG: 'خرائط جوجل', ratingGsub: 'أكثر من 2,700 تقييم',
      f1t: 'تُحضَّر طازجة كل يوم', f1s: 'من مطبخنا إلى مائدتكم',
      f2t: 'وصفات أصيلة', f2s: 'من التراث الشرقي والتركي',
      f3t: 'توصيل', f3s: 'اطلبوا عبر هنقرستيشن',
      f4t: 'فروع متعددة', f4s: 'ثلاثة فروع في منطقة الباحة',
      storyTitle: 'حكاية حلويات تركيا',
      storyP1: 'في قلب مدينة الباحة، نقدّم الحلويات الشرقية والتركية بروح أول حلواني في المدينة. من كنافة تُقدَّم دافئة إلى بقلاوة مقرمشة ومعمول بحشوات متنوعة، كل صنف يحمل شيئًا من تراث الضيافة الذي نعتزّ به.',
      storyP2: 'نؤمن أن الحلوى أجمل ما يُقدَّم في المجالس والأفراح، ولذلك نجهّز صوانينا وعلبنا لتليق بضيوفكم، من علبة صغيرة إلى طلبية مناسبة كاملة.',
      stBranches: 'فروع', stHours: 'ساعة عمل يوميًا', stGoogle: 'تقييم على خرائط جوجل', stHS: 'تقييم على هنقرستيشن',
      menuTitle: 'قائمة الحلويات', menuSub: 'تصفّحوا الأقسام أو ابحثوا عن صنفكم، ثم أضيفوه إلى طلبكم عبر واتساب.',
      searchPh: 'ابحث في القائمة…', noResults: 'لا توجد أصناف مطابقة.', resultsN: function (n) { return n + ' صنف'; }, sizeAria: 'اختر الحجم',
      tabsAria: 'أقسام القائمة', addToOrder: 'أضف إلى الطلب',
      waGeneral: 'السلام عليكم، أرغب بالطلب من حلويات تركيا.',
      waItem: function (n) { return 'السلام عليكم، أرغب بطلب: ' + n; },
      waService: function (n) { return 'السلام عليكم، أرغب بالاستفسار عن: ' + n; },
      cur: 'ر.س',
      customTitle: 'طلبات خاصة ومناسبات', customSub: 'للهدايا والأفراح واللقاءات الكبيرة، نجهّز طلبكم بحسب مناسبتكم.',
      request: 'اطلب الآن',
      branchesTitle: 'فروعنا', branchesSub: 'ثلاثة فروع تستقبلكم يوميًا.',
      mainBadge: 'الفرع الرئيسي', addressLbl: 'العنوان', phoneLbl: 'الهاتف', hoursLbl: 'ساعات العمل',
      hoursShort: '٨ص - ١٢ص', comingSoon: 'قريباً', call: 'اتصل', maps: 'افتح في الخرائط', mapsSoon: 'الخريطة قريباً',
      slotLabel: 'صورة قريبة', mapSlot: 'الخريطة قريباً',
      orderTitle: 'اطلبوا حلوياتكم الآن', orderSub: 'اختاروا الطريقة الأنسب لكم.',
      optWA: 'واتساب', optWAsub: 'أرسلوا طلبكم مباشرة',
      optCall: 'اتصال',
      optHS: 'هنقرستيشن', optHSsub: 'توصيل من الفرع الرئيسي',
      footHours: 'ساعات العمل', hoursText: 'يوميًا من ٨ص إلى ١٢ص',
      footLinks: 'روابط سريعة', footContact: 'تواصلوا معنا',
      ldDesc: 'حلويات تركيا في الباحة: كنافة وبقلاوة ومعمول وجاتوه وشيكولاتة وقهوة.',
      ldCuisine: ['حلويات شرقية', 'حلويات تركية'],
      ldStreet: 'طريق الملك عبدالعزيز، الحاوية', ldCity: 'الباحة'
    },
    en: {
      navHome: 'Home', crumbHome: 'Home', crumbMenu: 'Menu', crumbsAria: 'Breadcrumb',
      pt_about: 'About | Turkey Sweets',
      pd_about: 'The story of Turkey Sweets, the first confectioner in Al-Baha.',
      pt_menu: 'Our menu | Turkey Sweets',
      pd_menu: 'Browse the Turkey Sweets menu with photos and prices: pastries, maamoul, kunafa and baklava, gateaux and tortes, chocolate, nuts and coffee.',
      pt_custom: 'Custom orders & celebrations | Turkey Sweets',
      pd_custom: 'Gift boxes, wedding trays, custom cakes and event catering from Turkey Sweets in Al-Baha.',
      pt_branches: 'Our branches | Turkey Sweets',
      pd_branches: 'Turkey Sweets branches in Al-Baha, Baljurashi and Al-Mandaq: addresses, phone numbers and opening hours.',
      pt_reviews: 'Customer reviews | Turkey Sweets',
      pd_reviews: 'Turkey Sweets is rated 4.1 on Google Maps from 2,700+ reviews. Read what customers say about our kunafa, cakes and Eastern sweets.',
      reviewsTitle: 'What our customers say',
      reviewsSub: 'A selection of our top-rated reviews on Google Maps, shown with each customer\u2019s name as it appears there.',
      rvListTitle: 'Customer reviews',
      rvBasedOn: function (n) { return 'Based on ' + n + '+ reviews on Google Maps'; },
      rvReadAll: 'Read all reviews on Google', rvWrite: 'Write a review',
      rvStarsAria: function (n) { return n + ' out of 5 stars'; },
      rvOriginal: 'Reviews appear in their original wording, as posted on Google Maps.',
      rvNoText: 'Star rating only',
      rvFood: 'Food', rvService: 'Service', rvAtmos: 'Atmosphere',
      pcatDesc: function (name, n) { return name + ' from Turkey Sweets: ' + n + (n === 1 ? ' item' : ' items') + ' with photos and prices. Order by WhatsApp or HungerStation.'; },
      homeMenuSub: 'Pick a category and browse every item with photos and prices.',
      viewFullMenu: 'View the full menu',
      catSearchPh: 'Search this category\u2026',
      prevCat: 'Previous category', nextCat: 'Next category', pagerAria: 'Other menu categories',
      thumbAria: 'Item photos', photoN: function (n) { return 'Photo ' + n; },
      title: 'Turkey Sweets | The First Confectioner in Al-Baha',
      metaDesc: 'Turkey Sweets in Al-Baha, Saudi Arabia: kunafa, baklava, maamoul, gateaux, chocolate and coffee. Order by WhatsApp or HungerStation from three branches.',
      ogLocale: 'en_US', ogLocaleAlt: 'ar_SA',
      brand: 'Turkey Sweets', tagline: 'The First Confectioner in Al-Baha',
      skip: 'Skip to content',
      logoAria: 'Turkey Sweets - back to top', navAria: 'Main navigation',
      navAbout: 'About', navMenu: 'Menu', navBranches: 'Branches', navCustom: 'Custom Orders', navContact: 'Contact', navOrder: 'Order Now',
      navReviews: 'Reviews',
      langBtn: 'عربي', langAria: 'التبديل إلى العربية', langBtnLang: 'ar',
      menuOpen: 'Open menu', menuClose: 'Close menu', waFloat: 'Order on WhatsApp',
      openBadge: 'Open until midnight',
      heroIntro: 'Eastern and Turkish confections, made with care every day. From kunafa and baklava to maamoul and gateaux, for your celebrations and the gatherings you love.',
      heroMenu: 'View Menu', heroOrder: 'Order Now',
      ratingHS: 'HungerStation', ratingHSsub: '444 reviews, main branch',
      ratingG: 'Google Maps', ratingGsub: '2,700+ reviews',
      f1t: 'Made fresh daily', f1s: 'From our kitchen to your table',
      f2t: 'Authentic recipes', f2s: 'Rooted in Eastern and Turkish tradition',
      f3t: 'Delivery', f3s: 'Order through HungerStation',
      f4t: 'Multiple branches', f4s: 'Three branches across the Al-Baha region',
      storyTitle: 'Our story',
      storyP1: 'In the heart of Al-Baha, we serve Eastern and Turkish sweets in the spirit of the city\u2019s first confectioner. Warm kunafa, crisp baklava, maamoul with generous fillings: each piece carries a little of the hospitality tradition we are proud of.',
      storyP2: 'We believe sweets belong at the gathering table and at the celebration, so we prepare our trays and boxes to suit your guests, from a single small box to a full event order.',
      stBranches: 'Branches', stHours: 'Hours open every day', stGoogle: 'Google Maps reviews', stHS: 'HungerStation rating',
      menuTitle: 'Our menu', menuSub: 'Browse the categories or search for your favourite, then add it to your order on WhatsApp.',
      searchPh: 'Search the menu\u2026', noResults: 'No matching items.', resultsN: function (n) { return n + (n === 1 ? ' item' : ' items'); }, sizeAria: 'Choose a size',
      tabsAria: 'Menu categories', addToOrder: 'Add to order',
      waGeneral: 'Hello, I would like to place an order with Turkey Sweets.',
      waItem: function (n) { return 'Hello, I\u2019d like to order: ' + n; },
      waService: function (n) { return 'Hello, I\u2019d like to ask about: ' + n; },
      cur: 'SAR',
      customTitle: 'Custom orders & celebrations', customSub: 'For gifts, weddings and large gatherings, we prepare your order around the occasion.',
      request: 'Request',
      branchesTitle: 'Our branches', branchesSub: 'Three branches, open every day.',
      mainBadge: 'Main Branch', addressLbl: 'Address', phoneLbl: 'Phone', hoursLbl: 'Hours',
      hoursShort: '8 AM \u2013 12 AM', comingSoon: 'Coming soon', call: 'Call', maps: 'Open in Maps', mapsSoon: 'Map coming soon',
      slotLabel: 'Photo coming soon', mapSlot: 'Map coming soon',
      orderTitle: 'Order your sweets now', orderSub: 'Choose whichever way suits you best.',
      optWA: 'WhatsApp', optWAsub: 'Send your order directly',
      optCall: 'Call',
      optHS: 'HungerStation', optHSsub: 'Delivery from the main branch',
      footHours: 'Opening hours', hoursText: 'Daily, 8 AM \u2013 12 AM',
      footLinks: 'Quick links', footContact: 'Get in touch',
      ldDesc: 'Turkey Sweets in Al-Baha, Saudi Arabia: kunafa, baklava, maamoul, gateaux, chocolate and coffee.',
      ldCuisine: ['Eastern sweets', 'Turkish sweets'],
      ldStreet: 'King Abdulaziz Road, Al-Hawiyah', ldCity: 'Al-Baha'
    }
  };
  function t(k) { var v = (T[lang] || T.ar)[k]; return v == null ? '' : v; }
  function pick(o, base) { return o[base + '_' + lang]; }

  /* ---------- Icons used by JS-rendered content ---------- */
  var SVG_OPEN = '<svg viewBox="0 0 24 24" aria-hidden="true">';
  var ICONS = {
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8C10.5 5 7 4.5 7 6.8 7 8 9 8 12 8zm0 0c1.5-3 5-3.5 5-1.2C17 8 15 8 12 8z"/>',
    rings: '<circle cx="9" cy="15" r="5"/><circle cx="15" cy="15" r="5"/><path d="M10 6l2-3 2 3-2 2z"/>',
    cake: '<path d="M4 20h16v-6H4zM6 14v-3h12v3M12 11V8M12 8c-1 0-1.5-1-1.2-2 .3-.8 1-1.2 1.2-2 .2.8.9 1.2 1.2 2 .3 1-.2 2-1.2 2z"/>',
    cloche: '<path d="M3 17h18M5 17a7 7 0 0 1 14 0M12 10V7M10 7h4M3 20h18"/>',
    camera: '<rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8.5 6l1.2-2h4.6l1.2 2"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    pen: '<path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'
  };
  function icon(n) { return SVG_OPEN + (ICONS[n] || '') + '</svg>'; }

  /* ---------- Image slots ---------- */
  function slotInner(el) {
    var lbl = el.getAttribute('data-label') || 'slotLabel';
    var ic = el.getAttribute('data-icon') || 'camera';
    return icon(ic) + '<span class="slot-label" data-i18n="' + lbl + '">' + esc(t(lbl)) + '</span>';
  }
  function injectSlots(root) {
    $$('.img-slot', root).forEach(function (el) {
      if (!el.firstChild) { el.innerHTML = slotInner(el); }
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', t(el.getAttribute('data-label') || 'slotLabel'));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var io = null;
  function setupReveal() {
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          io.unobserve(el);
          el.classList.add('in');
          var d = parseInt(el.style.getPropertyValue('--d'), 10) || 0;
          // Remove reveal classes afterwards so card hover transforms work normally
          setTimeout(function () { el.classList.remove('reveal', 'in'); }, 1000 + d);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    observeReveals(document);
  }
  function observeReveals(root, instant) {
    // Containers with data-stagger: each child gets .reveal with a growing delay
    $$('[data-stagger]', root).forEach(function (c) {
      Array.prototype.forEach.call(c.children, function (ch, i) {
        if (!ch.classList.contains('reveal') && !ch.hasAttribute('data-revealed')) {
          ch.classList.add('reveal');
          ch.style.setProperty('--d', (i * 90) + 'ms');
        }
      });
    });
    $$('.reveal', root).forEach(function (el) {
      if (el.hasAttribute('data-revealed')) return;
      el.setAttribute('data-revealed', '1');
      if (instant || !io) { el.classList.remove('reveal', 'in'); }
      else { io.observe(el); }
    });
  }

  /* ---------- Menu ---------- */
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var CATID = document.body.getAttribute('data-cat') || '';
  var query = '';
  var ITEMS = {};                 // id -> item, for quick lookup
  var CATS = {};                  // id -> category
  MENU.forEach(function (c) { CATS[c.id] = c; c.items.forEach(function (it) { ITEMS[it.id] = it; }); });

  function fmtNum2(p) { return (Math.round(p * 100) / 100).toString(); }
  function fmtPrice(p) {
    if (p == null || isNaN(p)) return '\u2014';
    return lang === 'ar' ? (fmtNum2(p) + ' ' + t('cur')) : (t('cur') + ' ' + fmtNum2(p));
  }
  // Arabic-friendly normalisation for search
  function nz(s) {
    return String(s || '').toLowerCase().replace(/[\u064B-\u065F\u0670]/g, '')
      .replace(/[\u0623\u0625\u0622]/g, '\u0627').replace(/\u0629/g, '\u0647').replace(/\u0649/g, '\u064A')
      .replace(/\u0624/g, '\u0648').replace(/\u0626/g, '\u064A');
  }
  function matches(it, q) {
    return nz([it.name_ar, it.name_en, it.desc_ar, it.desc_en].join(' ')).indexOf(q) >= 0;
  }
  function selSize(it, idx) { return it.sizes && it.sizes.length ? it.sizes[idx || 0] : null; }
  function orderHref(it, idx) {
    var sz = selSize(it, idx), name = pick(it, 'name');
    return wa(t('waItem')(sz ? name + ' (' + pick(sz, 'label') + ')' : name));
  }

  /* Cart data for the "Add to order" button (the WhatsApp link stays as a fallback) */
  function cartData(it, idx) {
    var sz = selSize(it, idx), has = !!sz;
    var price = has ? sz.price : it.price;
    return {
      id: it.id + (has ? ':' + (idx || 0) : ''),
      name: it.name_ar + (has ? ' (' + sz.label_ar + ')' : ''),
      nameEn: it.name_en + (has ? ' (' + sz.label_en + ')' : ''),
      price: (price == null || isNaN(price)) ? '' : price
    };
  }
  function cartAttrs(it, idx) {
    var c = cartData(it, idx);
    return ' data-cart-add data-id="' + esc(c.id) + '" data-name="' + esc(c.name) + '" data-name-en="' + esc(c.nameEn) + '" data-price="' + esc(c.price) + '"';
  }
  function setCartAttrs(el, it, idx) {
    var c = cartData(it, idx);
    el.setAttribute('data-id', c.id); el.setAttribute('data-name', c.name);
    el.setAttribute('data-name-en', c.nameEn); el.setAttribute('data-price', c.price);
  }

  function itemImages(it) { return it.images && it.images.length ? it.images : (it.image ? [it.image] : []); }

  function thumbsHTML(it) {
    var im = itemImages(it);
    if (im.length < 2) return '';
    return '<div class="thumbs" role="group" aria-label="' + esc(t('thumbAria')) + '">' + im.map(function (src, k) {
      return '<button type="button" class="thumb" data-img="' + k + '" aria-pressed="' + (k === 0) + '" aria-label="' + esc(t('photoN')(k + 1)) + '">' +
        '<img src="' + esc(src) + '" alt="" loading="lazy" decoding="async"></button>';
    }).join('') + '</div>';
  }

  function cardHTML(it, i) {
    var name = pick(it, 'name'), first = itemImages(it)[0];
    var media = first
      ? '<img class="media-img" src="' + esc(first) + '" alt="' + esc(name) + '" loading="lazy" decoding="async" width="720" height="480" style="--ar:3/2">' + thumbsHTML(it)
      : '<!-- IMAGE: ' + esc(it.name_en) + ', product shot on a clean background, 1200x800 -->' +
        '<div class="img-slot" data-slot="' + esc(it.id) + '" style="--ar:3/2"></div>';
    var sizes = '', unit = '';
    if (it.sizes && it.sizes.length > 1) {
      sizes = '<div class="sizes" role="group" aria-label="' + esc(t('sizeAria')) + '">' + it.sizes.map(function (s, k) {
        return '<button type="button" class="chip" data-size="' + k + '" aria-pressed="' + (k === 0) + '">' + esc(pick(s, 'label')) + '</button>';
      }).join('') + '</div>';
    } else if (it.sizes && it.sizes.length === 1) {
      unit = '<span class="unit">' + esc(pick(it.sizes[0], 'label')) + '</span>';
    }
    return '<article class="card menu-card" data-id="' + esc(it.id) + '" style="--i:' + i + '">' + media +
      '<div class="card-body"><h3>' + esc(name) + '</h3><p>' + esc(pick(it, 'desc')) + '</p>' + sizes +
      '<div class="card-foot"><span><span class="price">' + esc(fmtPrice(it.price)) + '</span>' + unit + '</span>' +
      '<a class="btn btn-gold btn-sm" href="' + esc(orderHref(it, 0)) + '" target="_blank" rel="noopener noreferrer"' + cartAttrs(it, 0) + '>' + esc(t('addToOrder')) + '</a></div></div></article>';
  }

  /* Category tiles (home page + menu page) */
  function renderCatTiles(instant) {
    var box = $('#catGrid');
    if (!box) return;
    box.innerHTML = MENU.map(function (c) {
      return '<a class="cat-tile" href="' + esc(c.page) + '"><img class="cat-img" src="' + esc(c.cover) + '" alt="" loading="lazy" decoding="async" width="600" height="750">' +
        '<div class="cat-info"><h3>' + esc(pick(c, 'name')) + '</h3><span class="cat-count">' + esc(t('resultsN')(c.items.length)) + '</span></div></a>';
    }).join('');
    observeReveals(box.parentNode, instant);
  }

  /* Links to the other categories (category pages) */
  function renderTabs(first) {
    var wrap = $('#tabs');
    if (!wrap) return;
    wrap.innerHTML = MENU.map(function (c) {
      return '<a class="tab" href="' + esc(c.page) + '"' + (c.id === CATID ? ' aria-current="page"' : '') + '>' + esc(pick(c, 'name')) + '</a>';
    }).join('');
    var cur = $('[aria-current]', wrap);
    if (cur) { try { cur.scrollIntoView({ inline: 'center', block: 'nearest' }); } catch (e) {} }
  }

  function renderPager() {
    var box = $('#pager');
    if (!box || !CATS[CATID]) return;
    var ids = MENU.map(function (c) { return c.id; }), i = ids.indexOf(CATID), n = ids.length;
    var prev = MENU[(i - 1 + n) % n], next = MENU[(i + 1) % n];
    box.setAttribute('aria-label', t('pagerAria'));
    box.innerHTML = '<a class="prev" href="' + esc(prev.page) + '"><small>' + esc(t('prevCat')) + '</small><b>' + esc(pick(prev, 'name')) + '</b></a>' +
      '<a class="next" href="' + esc(next.page) + '"><small>' + esc(t('nextCat')) + '</small><b>' + esc(pick(next, 'name')) + '</b></a>';
  }

  function renderPageBits() {
    $$('[data-catname]').forEach(function (el) {
      var c = CATS[el.getAttribute('data-catname')];
      if (c) el.textContent = pick(c, 'name');
    });
    var cnt = $('#catCount');
    if (cnt && CATS[CATID]) cnt.textContent = t('resultsN')(CATS[CATID].items.length);
  }

  function renderMenu() {
    var grid = $('#menuGrid');
    if (!grid) return;
    var note = $('#menuNote'), q = nz(query.trim()), list = [];
    if (PAGE === 'category') {
      var cat = CATS[CATID];
      list = q ? cat.items.filter(function (it) { return matches(it, q); }) : cat.items;
      if (note) note.textContent = q ? (list.length ? t('resultsN')(list.length) : t('noResults')) : '';
    } else {                      // menu page: tiles by default, results grid while searching
      var sec = $('#catSection');
      if (q) {
        MENU.forEach(function (c) { c.items.forEach(function (it) { if (matches(it, q)) list.push(it); }); });
        note.textContent = list.length ? t('resultsN')(list.length) : t('noResults');
      } else { note.textContent = ''; }
      if (sec) sec.hidden = !!q;
      grid.hidden = !q;
    }
    grid.innerHTML = list.map(cardHTML).join('');
    injectSlots(grid);
  }

  function setupMenuCards() {
    var grid = $('#menuGrid');
    if (!grid) return;
    grid.addEventListener('click', function (e) {
      var tgt = e.target.closest ? e.target : null;
      if (!tgt) return;
      var card = tgt.closest('.menu-card'), it = card && ITEMS[card.getAttribute('data-id')];
      if (!it) return;
      var thumb = tgt.closest('.thumb');
      if (thumb) {
        var k = parseInt(thumb.getAttribute('data-img'), 10) || 0;
        $$('.thumb', card).forEach(function (b) { b.setAttribute('aria-pressed', b === thumb ? 'true' : 'false'); });
        var big = $('.media-img', card); if (big) big.src = itemImages(it)[k];
        return;
      }
      var chip = tgt.closest('.chip');
      if (!chip) return;
      var idx = parseInt(chip.getAttribute('data-size'), 10) || 0, sz = selSize(it, idx);
      $$('.chip', card).forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      $('.price', card).textContent = fmtPrice(sz ? sz.price : it.price);
      $('.btn', card).setAttribute('href', orderHref(it, idx));
      setCartAttrs($('.btn', card), it, idx);
    });
    var input = $('#menuSearch'), timer;
    if (input) {
      input.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () { query = input.value; renderMenu(); }, 160);
      });
    }
  }

  /* Keep the chosen language when moving between pages */
  function decorateLinks() {
    $$('a[href]').forEach(function (a) {
      var h = a.getAttribute('data-h0');
      if (h === null) {
        h = a.getAttribute('href') || '';
        if (!/^[A-Za-z0-9_\-]+\.html(#.*)?$/.test(h)) { a.setAttribute('data-h0', ''); return; }
        a.setAttribute('data-h0', h);
      }
      if (!h) return;
      var p = h.split('#');
      a.setAttribute('href', p[0] + '?lang=' + lang + (p[1] ? '#' + p[1] : ''));
    });
  }

  function pageMeta() {
    if (PAGE === 'category' && CATS[CATID]) {
      var c = CATS[CATID];
      return { title: pick(c, 'name') + ' | ' + t('brand'), desc: t('pcatDesc')(pick(c, 'name'), c.items.length) };
    }
    var k = { about: 'about', menu: 'menu', custom: 'custom', branches: 'branches', reviews: 'reviews' }[PAGE];
    return k ? { title: t('pt_' + k), desc: t('pd_' + k) } : { title: t('title'), desc: t('metaDesc') };
  }

  /* ---------- Services ---------- */
  function renderServices(instant) {
    var box = $('#services');
    if (!box) return;
    box.innerHTML = SERVICES.map(function (s) {
      var name = pick(s, 'name');
      return '<article class="service"><div class="ic">' + icon(s.icon) + '</div><h3>' + esc(name) + '</h3><p>' + esc(pick(s, 'desc')) + '</p>' +
        '<a class="btn btn-ghost btn-sm" href="' + esc(wa(t('waService')(name))) + '" target="_blank" rel="noopener noreferrer">' + esc(t('request')) + '</a></article>';
    }).join('');
    observeReveals(box.parentNode, instant);
  }

  /* ---------- Branches ---------- */
  function renderBranches(instant) {
    var box = $('#branchGrid');
    if (!box) return;
    box.innerHTML = BRANCHES.map(function (b) {
      var addr = pick(b, 'address');
      var area = pick(b, 'area');
      var map = b.mapUrl
        ? '<a class="btn btn-ghost btn-sm" href="' + esc(b.mapUrl) + '" target="_blank" rel="noopener noreferrer">' + icon('pin') + esc(t('maps')) + '</a>'
        : '<a class="btn btn-ghost btn-sm" href="#" aria-disabled="true" tabindex="-1">' + icon('pin') + esc(t('maps')) + '</a>';
      return '<article class="branch">' +
        (b.main ? '<span class="badge-main">' + esc(t('mainBadge')) + '</span>' : '') +
        '<h3>' + esc(pick(b, 'name')) + '</h3>' +
        (area ? '<p class="area">' + esc(area) + '</p>' : '') +
        '<dl><div><dt>' + esc(t('addressLbl')) + '</dt><dd>' + (addr ? esc(addr) : '<span class="soon">' + esc(t('comingSoon')) + '</span>') + '</dd></div>' +
        '<div><dt>' + esc(t('phoneLbl')) + '</dt><dd><a href="tel:' + esc(b.tel) + '"><span class="ltr">' + esc(b.phone) + '</span></a></dd></div>' +
        '<div><dt>' + esc(t('hoursLbl')) + '</dt><dd>' + esc(t('hoursShort')) + '</dd></div></dl>' +
        '<div class="actions"><a class="btn btn-gold btn-sm" href="tel:' + esc(b.tel) + '">' + icon('phone') + esc(t('call')) + '</a>' + map + '</div></article>';
    }).join('');
    observeReveals(box.parentNode, instant);
  }

  /* ---------- Reviews ---------- */
  function starsHTML(r, cls) {
    var p = Math.round(Math.max(0, Math.min(5, r)) / 5 * 100);
    return '<span class="rv-stars ltr' + (cls ? ' ' + cls : '') + '" role="img" aria-label="' + esc(t('rvStarsAria')(r)) + '" style="--p:' + p + '%">\u2605\u2605\u2605\u2605\u2605</span>';
  }
  function whoHTML(r) {
    var ch = (Array.from(String(r.name).trim())[0] || '').toUpperCase();
    return '<div class="rv-who"><span class="rv-av" aria-hidden="true">' + esc(ch) + '</span><div><h3 class="rv-name" dir="auto">' + esc(r.name) + '</h3>' + starsHTML(r.rating, 'sm') + '</div></div>';
  }
  function rvFeat(r) {
    return '<figure class="rv-feat" dir="ltr"><blockquote class="rv-quote" lang="en" dir="auto">' + esc(r.text) + '</blockquote>' + whoHTML(r) + '</figure>';
  }
  function rvCard(r) {
    var body = r.text
      ? '<p class="rv-text" lang="en" dir="auto">' + esc(r.text) + '</p>'
      : '<p class="rv-text rv-empty">' + esc(t('rvNoText')) + '</p>';
    var meta = '';
    if (r.sub) {
      meta = '<ul class="rv-meta">' + [['food', 'rvFood'], ['service', 'rvService'], ['atmosphere', 'rvAtmos']].filter(function (k) { return r.sub[k[0]] != null; }).map(function (k) {
        return '<li>' + esc(t(k[1])) + ' <bdi>' + esc(r.sub[k[0]]) + '/5</bdi></li>';
      }).join('') + '</ul>';
    }
    return '<article class="card rv-card"' + (r.text ? ' dir="ltr"' : '') + '>' + whoHTML(r) + body + meta + '</article>';
  }
  function renderReviews(instant) {
    var sum = $('#rvSummary');
    if (!sum) return;
    var rating = CONFIG.googleRating;
    sum.innerHTML =
      '<div class="rv-score"><b class="rv-num">' + esc(rating) + '</b>' + starsHTML(rating) + '</div>' +
      '<div class="rv-sum-copy"><p class="rv-based">' + esc(t('rvBasedOn')(CONFIG.googleCount)) + '</p>' +
      '<div class="rv-actions">' +
      '<a class="btn btn-gold" href="' + esc(CONFIG.googleReviewsUrl) + '" target="_blank" rel="noopener noreferrer">' + icon('star') + esc(t('rvReadAll')) + '</a>' +
      '<a class="btn btn-ghost" href="' + esc(CONFIG.googleWriteUrl) + '" target="_blank" rel="noopener noreferrer">' + icon('pen') + esc(t('rvWrite')) + '</a>' +
      '</div></div>';
    var withText = REVIEWS.filter(function (r) { return r.text; }), noText = REVIEWS.filter(function (r) { return !r.text; });
    var feat = $('#rvFeatured'), grid = $('#rvGrid');
    if (feat) feat.innerHTML = withText.filter(function (r) { return r.featured; }).map(rvFeat).join('');
    if (grid) grid.innerHTML = withText.filter(function (r) { return !r.featured; }).concat(noText).map(rvCard).join('');
    observeReveals(document, instant);
  }

  /* Pages that were built before the Reviews page get its link added automatically */
  function ensureReviewsLinks() {
    function make(extra) {
      var a = document.createElement('a');
      a.setAttribute('href', 'reviews.html'); a.setAttribute('data-i18n', 'navReviews');
      a.textContent = t('navReviews');
      return a;
    }
    function after(root, sel, node, wrap) {
      var ref = $(sel, root);
      if (!ref) return false;
      var host = wrap ? ref.parentNode : ref;
      host.parentNode.insertBefore(wrap ? (function () { var li = document.createElement('li'); li.appendChild(node); return li; })() : node, host.nextSibling);
      return true;
    }
    var nav = $('.nav-links');
    if (nav && !$('a[href^="reviews.html"]', nav)) after(nav, 'a[href^="custom-orders.html"]', make(), false);
    var mn = $('#mnav nav');
    if (mn && !$('a[href^="reviews.html"]', mn)) {
      if (after(mn, 'a[href^="custom-orders.html"]', make(), false)) {
        $$('a', mn).forEach(function (a, i) { a.style.setProperty('--i', i); });
      }
    }
    var ft = $('footer ul');
    if (ft && !$('a[href^="reviews.html"]', ft)) after(ft, 'a[href^="custom-orders.html"]', make(), true);
  }

  /* Every page gets a Home link at the start of the menu */
  function ensureHomeLinks() {
    function make() {
      var a = document.createElement('a');
      a.setAttribute('href', 'index.html'); a.setAttribute('data-i18n', 'navHome');
      a.textContent = t('navHome');
      if (PAGE === 'home') a.setAttribute('aria-current', 'page');
      return a;
    }
    var nav = $('.nav-links');
    if (nav && !$('a[href^="index.html"]', nav)) nav.insertBefore(make(), nav.firstChild);
    var mn = $('#mnav nav');
    if (mn && !$('a[href^="index.html"]', mn)) {
      mn.insertBefore(make(), mn.firstChild);
      $$('a', mn).forEach(function (a, i) { a.style.setProperty('--i', i); });
    }
  }

  /* ---------- Language system ---------- */
  function setMeta(sel, attr, val) { var m = $(sel); if (m) m.setAttribute(attr, val); }
  function baseUrl() {
    try { if (/^https?:$/.test(location.protocol)) return location.origin + location.pathname; } catch (e) {}
    return '';
  }

  function updateSeo() {
    var pm = pageMeta();
    document.title = pm.title;
    setMeta('meta[name="description"]', 'content', pm.desc);
    setMeta('meta[property="og:title"]', 'content', pm.title);
    setMeta('meta[property="og:description"]', 'content', pm.desc);
    setMeta('meta[property="og:locale"]', 'content', t('ogLocale'));
    setMeta('meta[property="og:locale:alternate"]', 'content', t('ogLocaleAlt'));
    var b = baseUrl();
    if (b) {
      setMeta('link[rel="canonical"]', 'href', b + '?lang=' + lang);
      setMeta('link[hreflang="ar"]', 'href', b + '?lang=ar');
      setMeta('link[hreflang="en"]', 'href', b + '?lang=en');
      setMeta('link[hreflang="x-default"]', 'href', b);
      setMeta('meta[property="og:url"]', 'content', b + '?lang=' + lang);
    }
    var ld = $('#ld-json');
    if (ld) {
      var main = BRANCHES[0];
      var data = {
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        name: T[lang].brand,
        alternateName: lang === 'ar' ? T.en.brand : T.ar.brand,
        description: t('ldDesc'),
        inLanguage: lang,
        telephone: main.tel,
        email: CONFIG.email,
        openingHours: 'Mo-Su 08:00-24:00',
        servesCuisine: t('ldCuisine'),
        address: { '@type': 'PostalAddress', streetAddress: t('ldStreet'), addressLocality: t('ldCity'), postalCode: '65525', addressCountry: 'SA' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.1', reviewCount: '2700', bestRating: '5' },
        sameAs: [CONFIG.instagramUrl]
      };
      if (b) data.url = b + '?lang=' + lang;
      ld.textContent = JSON.stringify(data, null, 2);
    }
  }

  function applyI18n() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    $$('.img-slot').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-label') || 'slotLabel')); });
    $$('[data-wa="general"]').forEach(function (a) { a.setAttribute('href', wa(t('waGeneral'))); });
    var call = $('#callOpt'); if (call) call.setAttribute('href', 'tel:' + CONFIG.phoneMain);
    var num = $('#callNum'); if (num) num.textContent = CONFIG.phoneMainDisplay;
    var hs = $('#hsOpt'); if (hs) hs.setAttribute('href', CONFIG.hungerStationUrl);
    var lb = $('#langBtn');
    if (lb) { lb.textContent = t('langBtn'); lb.setAttribute('aria-label', t('langAria')); lb.setAttribute('lang', t('langBtnLang')); }
    updateBurgerLabel();
  }

  function setLang(l, persist) {
    lang = (l === 'en') ? 'en' : 'ar';
    var d = document.documentElement;
    d.lang = lang; d.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    if (persist) saveLang(lang);
    updateSeo();
    renderCatTiles(true); renderTabs(); renderMenu(); renderPager(); renderPageBits();
    renderServices(true); renderBranches(true); renderReviews(true);
    injectSlots(document);
    applyI18n();
    decorateLinks();
  }

  /* ---------- Mobile menu ---------- */
  var burger = $('#burger'), mnav = $('#mnav'), navEl = $('#nav');
  function updateBurgerLabel() {
    if (!burger) return;
    burger.setAttribute('aria-label', t(burger.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen'));
  }
  function toggleMenu(open) {
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    mnav.classList.toggle('open', open);
    mnav.setAttribute('aria-hidden', open ? 'false' : 'true');
    navEl.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    updateBurgerLabel();
    if (open) { var first = $('a', mnav); if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 60); }
  }
  function setupMobileMenu() {
    burger.addEventListener('click', function () { toggleMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    $$('a', mnav).forEach(function (a) { a.addEventListener('click', function () { toggleMenu(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') { toggleMenu(false); burger.focus(); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1000 && burger.getAttribute('aria-expanded') === 'true') toggleMenu(false);
    });
  }

  /* ---------- Scroll: progress bar, navbar state, hero parallax ---------- */
  var ticking = false, heroInView = true;
  function onScrollFrame() {
    ticking = false;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var bar = $('#progress'); if (bar) bar.style.transform = 'scaleX(' + Math.min(1, y / max) + ')';
    navEl.classList.toggle('scrolled', y > 30);
    if (!reduce && heroInView) {
      var hm = $('#heroMedia');
      if (hm && document.body.classList.contains('ready')) hm.style.transform = 'translate3d(0,' + (y * 0.07).toFixed(1) + 'px,0)';
    }
  }
  function setupScroll() {
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); } }, { passive: true });
    window.addEventListener('resize', onScrollFrame);
    onScrollFrame();
  }

  /* ---------- Stats count-up ---------- */
  function fmtNum(n, dec) {
    return dec ? n.toFixed(dec) : Math.round(n).toLocaleString('en-US');
  }
  function setupCounters() {
    var els = $$('.count');
    function finalText(el) {
      return fmtNum(parseFloat(el.getAttribute('data-target')), parseInt(el.getAttribute('data-decimals'), 10) || 0) + (el.getAttribute('data-suffix') || '');
    }
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (el) { el.textContent = finalText(el); }); return; }
    els.forEach(function (el) { el.textContent = fmtNum(0, parseInt(el.getAttribute('data-decimals'), 10) || 0); });
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target, target = parseFloat(el.getAttribute('data-target')), dec = parseInt(el.getAttribute('data-decimals'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '', start = null, dur = 1700;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmtNum(target * eased, dec) + (p === 1 ? suffix : '');
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- Hero soft sage particles ---------- */
  function setupParticles() {
    var c = $('#particles');
    if (!c || reduce || !c.getContext) return;
    var ctx = c.getContext('2d'); if (!ctx) return;
    var w = 0, h = 0, parts = [], raf = 0, running = false;
    function size() {
      var r = c.parentElement.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function make(anywhere) {
      return { x: Math.random() * w, y: anywhere ? Math.random() * h : h + 10, r: Math.random() * 2 + 0.6,
        vy: -(Math.random() * 0.28 + 0.08), a: Math.random() * 0.5 + 0.2, p: Math.random() * 6.28 };
    }
    function init() {
      size(); parts = [];
      var n = w < 600 ? 22 : 40;
      for (var i = 0; i < n; i++) parts.push(make(true));
    }
    function tick() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.p += 0.012; p.y += p.vy; p.x += Math.sin(p.p) * 0.18;
        if (p.y < -10) { parts[i] = make(false); continue; }
        var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, 'rgba(191,214,210,' + p.a + ')');
        g.addColorStop(1, 'rgba(191,214,210,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.2832); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }
    function start() { if (!running) { running = true; raf = requestAnimationFrame(tick); } }
    function stop() { running = false; cancelAnimationFrame(raf); }
    init();
    var resizeTimer;
    window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(init, 200); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else if (heroInView) start(); });
    var hero = c.parentElement;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        heroInView = en[0].isIntersecting;
        if (heroInView && !document.hidden) start(); else stop();
      }).observe(hero);
    } else { start(); }
  }

  /* ---------- Preloader (home page only, once per browser session) ---------- */
  function setupPreloader() {
    var pre = $('#preloader'), t0 = Date.now(), done = false, seen = false;
    try { seen = !!sessionStorage.getItem('ts_pre'); } catch (e) {}
    function finish() {
      if (done) return; done = true;
      if (pre) {
        pre.classList.add('hide');
        setTimeout(function () { if (pre.parentNode) pre.parentNode.removeChild(pre); }, reduce ? 50 : 800);
      }
      document.body.classList.remove('loading');
      document.body.classList.add('ready');
      try { sessionStorage.setItem('ts_pre', '1'); } catch (e) {}
    }
    if (!pre || seen) { finish(); return; }
    function ready() {
      var hold = reduce ? 200 : 900 + 1200;      // logo fade-in (~0.9s) + 1.2s hold
      setTimeout(finish, Math.max(0, hold - (Date.now() - t0)));
    }
    if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready);
    setTimeout(finish, 4500);                    // failsafe
  }

  /* ---------- Init ---------- */
  function init() {
    injectSlots(document);
    setupReveal();
    renderCatTiles(false); renderTabs(); renderMenu(); renderPager(); renderPageBits();
    renderServices(false); renderBranches(false); renderReviews(false);
    ensureReviewsLinks(); ensureHomeLinks();
    injectSlots(document);
    applyI18n(); updateSeo(); decorateLinks();
    setupMenuCards(); setupMobileMenu(); setupScroll(); setupCounters(); setupParticles();
    var lb = $('#langBtn');
    lb.addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar', true); });
    setupPreloader();
  }

  try { init(); }
  catch (err) {
    // Never leave the page stuck behind the preloader
    if (window.console) console.error(err);
    var p = document.getElementById('preloader'); if (p) p.style.display = 'none';
    document.body.classList.remove('loading'); document.body.classList.add('ready');
    var all = document.querySelectorAll('.reveal,.hl');
    for (var i = 0; i < all.length; i++) { all[i].style.opacity = 1; all[i].style.transform = 'none'; }
  }
})();

/* Cart, checkout and branch map: loaded once on every page that uses this file */
(function () {
  if (window.TSCart || document.getElementById('ts-extras-js')) return;
  var cs = document.currentScript;
  var base = cs && cs.src ? cs.src.replace(/[^\/]*$/, '') : 'assets/';
  var css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = base + 'extras.css'; css.id = 'ts-extras-css';
  function js() {
    if (document.getElementById('ts-extras-js')) return;
    var sc = document.createElement('script');
    sc.id = 'ts-extras-js'; sc.src = base + 'extras.js';
    document.body.appendChild(sc);
  }
  css.onload = js; css.onerror = js;
  document.head.appendChild(css);
})();
