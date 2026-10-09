/* ---------- General business details ---------- */
var CONFIG = {
  whatsapp: '966553485544',                 // WhatsApp number, digits only
  phoneMain: '+966553485544',
  phoneMainDisplay: '055 348 5544',
  email: 'turkeysweets.albaha@gmail.com',
  instagramUser: 'turkeysweets.albaha',
  instagramUrl: 'https://www.instagram.com/turkeysweets.albaha/',
  hungerStationUrl: 'https://hungerstation.com/sa-ar/restaurants/regions/الباحة/الحاوية/حلويات-تركيا-117851',
  // Google Maps reviews (update by hand). Replace both links with the exact Google links when you have them:
  //   read all:  the "Share" link from the Google Maps listing
  //   write one: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  googleRating: 4.1,
  googleCount: '2,700',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Turkey Sweets Al-Hawiyah King Abdulaziz Road Al-Baha 65525'),
  googleWriteUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Turkey Sweets Al-Hawiyah King Abdulaziz Road Al-Baha 65525')
};

/* ---------- MENU: categories, each with items (prices in SAR) ----------
   page: the category page file.  cover: photo used on the category tile.
   price: number or null (null shows "-").  image: path to the photo in /images.
   images: optional list of extra photos (shows small thumbnails on the card).
   sizes: optional list of {label_ar, label_en, price}; with 2+ sizes the card shows size buttons,
   with exactly 1 size the label is shown next to the price. */
var MENU = [
  { id: "pastries", page: "menu-pastries.html", cover: "images/img_001.webp",
    name_ar: "المعجنات وورق العنب والسمبوسة والرقاق",
    name_en: "Pastries, Stuffed Grape Leaves, Samosa & Rqaq",
    items: [
      {"id": "pastries-1", "name_ar": "سمبوسة لحم", "name_en": "Meat Samosa", "desc_ar": "سمبوسة لحم مقلية", "desc_en": "Fried meat samosa.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 12.5}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 25.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 50.0}], "price": 12.5, "image": "images/img_001.webp"},
      {"id": "pastries-2", "name_ar": "سمبوسة خضار", "name_en": "Vegetable Samosa", "desc_ar": "سمبوسة خضار مقلية", "desc_en": "Fried vegetable samosa.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 12.5}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 25.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 50.0}], "price": 12.5, "image": "images/img_001.webp"},
      {"id": "pastries-3", "name_ar": "سمبوسة جبن", "name_en": "Cheese Samosa", "desc_ar": "سمبوسة بالجبن مقلية", "desc_en": "Fried cheese samosa.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 15.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 30.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 60.0}], "price": 15.0, "image": "images/img_001.webp"},
      {"id": "pastries-4", "name_ar": "سمبوسة دجاج", "name_en": "Chicken Samosa", "desc_ar": "سمبوسة دجاج مقلية", "desc_en": "Fried chicken samosa.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 12.5}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 25.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 50.0}], "price": 12.5, "image": "images/img_002.webp"},
      {"id": "pastries-5", "name_ar": "علبة بيتي فور مشكل", "name_en": "Assorted Petit Four Box", "desc_ar": "علبة بيتي فور صب بنكهات الفستق و الشيكولاتة والنارجين", "desc_en": "A box of glazed petit four in pistachio, chocolate and coconut flavors.", "price": 62.5, "image": "images/img_003.webp"},
      {"id": "pastries-6", "name_ar": "علبة سمبوسة جبن سائل مفرزنة", "name_en": "Frozen Melted-Cheese Samosa Box", "desc_ar": "علبة سمبوسة مفرزنة بالجبنة السائلة جاهزة للقلي", "desc_en": "A box of frozen samosas with a melted cheese filling, ready to fry.", "price": 25.0, "image": "images/img_006.webp"},
      {"id": "pastries-7", "name_ar": "علبة كبة دجاج مفرزنة", "name_en": "Frozen Chicken Kibbeh Box", "desc_ar": "علبة كبة دجاج مفرزنة، اثنتا عشرة حبة، جاهزة للقلي", "desc_en": "Twelve frozen chicken kibbeh, ready to fry.", "price": 35.0, "image": "images/img_007.webp"},
      {"id": "pastries-8", "name_ar": "علبة سمبوسة دجاج مفرزنة", "name_en": "Frozen Chicken Samosa Box", "desc_ar": "علبة سمبوسة دجاج مفرزنة جاهزة للقلي", "desc_en": "A box of frozen chicken samosas, ready to fry.", "price": 22.5, "image": "images/img_008.webp"},
      {"id": "pastries-9", "name_ar": "علبة سمبوسة لحم مفرزنة", "name_en": "Frozen Meat Samosa Box", "desc_ar": "علبة سمبوسة لحم مفرزنة جاهزة للقلي", "desc_en": "A box of frozen meat samosas, ready to fry.", "price": 22.5, "image": "images/img_010.webp"},
      {"id": "pastries-10", "name_ar": "رقاق", "name_en": "Samosa Pastry Sheets", "desc_ar": "رقائق للسمبوسة", "desc_en": "Thin pastry sheets for samosas.", "price": 16.0, "image": "images/img_011.webp"},
      {"id": "pastries-11", "name_ar": "فطائر مشكلة", "name_en": "Assorted Savory Pies", "desc_ar": "فطائر مشكلة بحشوات متنوعة", "desc_en": "Savory pies with a variety of fillings.", "sizes": [{"label_ar": "صغير", "label_en": "Small", "price": 16.5}, {"label_ar": "وسط", "label_en": "Medium", "price": 33.0}, {"label_ar": "كبير", "label_en": "Large", "price": 66.0}], "price": 16.5, "image": "images/img_012.webp"}
    ] },
  { id: "traditional", page: "menu-traditional.html", cover: "images/img_019.webp",
    name_ar: "المعمول والبيتي فور والجوزية والموالح والنواشف",
    name_en: "Maamoul, Petit Four, Jawzia, Mawaleh & Nawashef",
    items: [
      {"id": "traditional-1", "name_ar": "بيتي فور تركي مشكل", "name_en": "Assorted Turkish Petit Four", "desc_ar": "بيتي فور تركي بالشيكولاتة والفانيليا", "desc_en": "Turkish petit four with chocolate and vanilla.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}], "price": 20.0, "image": "images/img_016.webp"},
      {"id": "traditional-2", "name_ar": "غريبة مشكل", "name_en": "Assorted Ghraybeh", "desc_ar": "غريبة مشكل شيكولاتة وفانيليا", "desc_en": "Ghraybeh shortbread in chocolate and vanilla.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}], "price": 20.0, "image": "images/img_017.webp"},
      {"id": "traditional-3", "name_ar": "بيتي فور مالح", "name_en": "Savory Petit Four", "desc_ar": "تشكيلة من أنواع البيتي فور المالح المميزة", "desc_en": "A selection of our savory petit four.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}], "price": 20.0, "image": "images/img_018.webp"},
      {"id": "traditional-4", "name_ar": "معمول مشكل", "name_en": "Assorted Maamoul", "desc_ar": "تشكيلة منوعة من أجود أنواع المعمول بالتمر والبر والسكر", "desc_en": "A mix of our finest maamoul with dates, wheat and sugar.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 19.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 38.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 76.0}], "price": 19.0, "image": "images/img_019.webp"},
      {"id": "traditional-5", "name_ar": "علبة معمول مشكل", "name_en": "Assorted Maamoul Box", "desc_ar": "مجموعة متنوعة من أنواع المعمول الفاخرة", "desc_en": "A varied box of premium maamoul.", "price": 56.0, "image": "images/img_020.webp"},
      {"id": "traditional-6", "name_ar": "بيتي فور مغربي مشكل", "name_en": "Assorted Moroccan Petit Four", "desc_ar": "بيتي فور مشكل على الطريقة المغربية بالشيكولاتة والفانيليا وجوز الهند", "desc_en": "Moroccan-style petit four with chocolate, vanilla and coconut.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 22.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 44.0}], "price": 22.0, "image": "images/img_021.webp"},
      {"id": "traditional-7", "name_ar": "مشكل بيتي فور صب", "name_en": "Assorted Glazed Petit Four", "desc_ar": "بيتي فور مشكل فستق و شيكولاتة وجوز هند", "desc_en": "Glazed petit four in pistachio, chocolate and coconut.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 53.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_022.webp"},
      {"id": "traditional-8", "name_ar": "بيتي فور صب شيكولاتة", "name_en": "Chocolate-Glazed Petit Four", "desc_ar": "بيتي فور مغطس بالشيكولاتة البلجيكي", "desc_en": "Petit four dipped in Belgian chocolate.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 53.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_023.webp"},
      {"id": "traditional-9", "name_ar": "بيتي فور فانيليا نارجين", "name_en": "Vanilla & Coconut Glazed Petit Four", "desc_ar": "بيتي فور صب فانيليا نارجين", "desc_en": "Glazed petit four with vanilla and coconut.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 53.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_024.webp"},
      {"id": "traditional-10", "name_ar": "بيتي فور صب فانيليا بالفستق", "name_en": "Pistachio & Vanilla Glazed Petit Four", "desc_ar": "بيتي فور صب بالفستق الحلبي", "desc_en": "Glazed petit four with vanilla and Aleppo pistachio.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 53.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_025.webp"},
      {"id": "traditional-11", "name_ar": "عين الجمل توفي", "name_en": "Toffee Ain al-Jamal", "desc_ar": "عين الجمل بحشوة التوفي اللذيذة", "desc_en": "Ain al-Jamal cookies with a toffee filling.", "price": 23.5, "image": "images/img_026.webp"}
    ] },
  { id: "kunafa", page: "menu-kunafa.html", cover: "images/img_033.webp",
    name_ar: "الكنافة والبسبوسة والبقلاوة والحلويات الشرقية",
    name_en: "Kunafa, Basbousa, Baklava & Eastern Sweets",
    items: [
      {"id": "kunafa-1", "name_ar": "بلح الشام قشطة", "name_en": "Balah el-Sham with Qashta", "desc_ar": "بلح الشام بالقشطة الطازجة", "desc_en": "Balah el-Sham filled with fresh qashta (clotted cream).", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 20.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_027.webp"},
      {"id": "kunafa-2", "name_ar": "وربات قشطة", "name_en": "Warbat with Qashta", "desc_ar": "وربات بالقشطة الطازجة", "desc_en": "Warbat pastries filled with fresh qashta (clotted cream).", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 20.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_028.webp"},
      {"id": "kunafa-3", "name_ar": "أصابع القشطة", "name_en": "Qashta Fingers", "desc_ar": "أصابع قشطة مقرمشة ومحشوة بالقشطة الطازجة", "desc_en": "Crisp pastry fingers filled with fresh qashta.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 20.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_029.webp"},
      {"id": "kunafa-4", "name_ar": "كنافة عش البلبل", "name_en": "Ush al-Bulbul Kunafa", "desc_ar": "كنافة شعرية رفيعة محشوة بالجبنة أو القشطة، محمرة ذهبية وتسقى بشراب السكر المعطر", "desc_en": "Thin vermicelli kunafa filled with cheese or qashta, baked golden and soaked in fragrant syrup.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 20.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_030.webp"},
      {"id": "kunafa-5", "name_ar": "كنافة ساخنة بالقشطة", "name_en": "Hot Kunafa with Qashta", "desc_ar": "فورمة كنافة ساخنة بالقشطة على الطلب", "desc_en": "A tray of hot kunafa with qashta, made to order.", "sizes": [{"label_ar": "عادي", "label_en": "Regular", "price": 37.5}, {"label_ar": "وسط", "label_en": "Medium", "price": 56.0}], "price": 37.5, "image": "images/img_032.webp", "images": ["images/img_032.webp", "images/img_033.webp"]},
      {"id": "kunafa-6", "name_ar": "بلح الشام أصابع كبيرة", "name_en": "Balah el-Sham Fingers, Large", "desc_ar": "بلح الشام طازج ومقرمش حجم كبير", "desc_en": "Fresh, crispy balah el-Sham in the large size.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 14.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 28.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 56.0}], "price": 14.0, "image": "images/img_034.webp"},
      {"id": "kunafa-7", "name_ar": "بلح الشام أصابع صغيرة", "name_en": "Balah el-Sham Fingers, Small", "desc_ar": "بلح الشام طازج ومقرمش حجم صغير", "desc_en": "Fresh, crispy balah el-Sham in the small size.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 14.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 28.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 56.0}], "price": 14.0, "image": "images/img_035.webp"},
      {"id": "kunafa-8", "name_ar": "مشكل حلويات", "name_en": "Assorted Eastern Sweets", "desc_ar": "حلويات شرقية مشكلة", "desc_en": "A mix of Eastern sweets.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_036.webp"},
      {"id": "kunafa-9", "name_ar": "كنافة قشطة بلدي بالفستق", "name_en": "Kunafa with Baladi Qashta & Pistachio", "desc_ar": "الكنافة الشهيرة بالقشطة البلدي والسمن الطبيعي والفستق الحلبي", "desc_en": "Our well-known kunafa with baladi qashta, natural ghee and Aleppo pistachio.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_037.webp"},
      {"id": "kunafa-10", "name_ar": "كنافة خشنة قشطة بالمكسرات", "name_en": "Coarse Kunafa with Qashta & Nuts", "desc_ar": "كنافة خشنة بالقشطة البلدي والسمن الطبيعي والمكسرات الفاخرة", "desc_en": "Coarse kunafa with baladi qashta, natural ghee and premium nuts.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}], "price": 20.0, "image": "images/img_038.webp"},
      {"id": "kunafa-11", "name_ar": "كنافة خشنة بالقشطة", "name_en": "Coarse Kunafa with Qashta", "desc_ar": "كنافة بالقشطة البلدي والسمن الطبيعي", "desc_en": "Kunafa with baladi qashta and natural ghee.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_039.webp"},
      {"id": "kunafa-12", "name_ar": "كنافة خشنة بالجبنة", "name_en": "Coarse Kunafa with Cheese", "desc_ar": "كنافة خشنة بالجبنة اللذيذة", "desc_en": "Coarse kunafa with a rich cheese filling.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}], "price": 20.0, "image": "images/img_039.webp"},
      {"id": "kunafa-13", "name_ar": "كنافة ناعمة بالقشطة نابلسية", "name_en": "Nabulsi Fine Kunafa with Qashta", "desc_ar": "كنافة نابلسية على الأصول", "desc_en": "Fine kunafa made the authentic Nabulsi way.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_040.webp"},
      {"id": "kunafa-14", "name_ar": "بسبوسة لوتس", "name_en": "Lotus Basbousa", "desc_ar": "بسبوسة شهية بكريمة وبسكويت اللوتس البلجيكي", "desc_en": "Basbousa with cream and Belgian Lotus biscuit.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_041.webp"},
      {"id": "kunafa-15", "name_ar": "بسبوسة سادة", "name_en": "Plain Basbousa", "desc_ar": "البسبوسة السادة بالسمن الطبيعي", "desc_en": "Classic basbousa made with natural ghee.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_042.webp"},
      {"id": "kunafa-16", "name_ar": "بسبوسة قشطة بلدي", "name_en": "Qashta Basbousa", "desc_ar": "بسبوسة بالقشطة البلدي والسمن الطبيعي", "desc_en": "Basbousa with baladi qashta and natural ghee.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_043.webp"},
      {"id": "kunafa-17", "name_ar": "بسبوسة جبن", "name_en": "Cheese Basbousa", "desc_ar": "بسبوسة بالجبن الطازج", "desc_en": "Basbousa with fresh cheese.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_043.webp"},
      {"id": "kunafa-18", "name_ar": "فطيرة الجبن", "name_en": "Cheese Pie", "desc_ar": "فطيرة الجبن صنعت على طريقتنا الخاصة", "desc_en": "Cheese pie made our own way.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}], "price": 20.0, "image": "images/img_044.webp"},
      {"id": "kunafa-19", "name_ar": "سمبوسة كيري بالجبنة حلا", "name_en": "Sweet Kiri Cheese Samosa", "desc_ar": "سمبوسة حلوة بجبنة الكيري الأصلية والشيرة", "desc_en": "A sweet samosa filled with original Kiri cheese and syrup.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 20.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 40.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 80.0}], "price": 20.0, "image": "images/img_045.webp"},
      {"id": "kunafa-20", "name_ar": "مشكل بقلاوة فستقية", "name_en": "Assorted Pistachio Baklava", "desc_ar": "بقلاوة مشكل بالفستق والسمن الطبيعي", "desc_en": "Assorted baklava with pistachio and natural ghee.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_046.webp"},
      {"id": "kunafa-21", "name_ar": "كنافة أقماع بالقشطة والفستق", "name_en": "Kunafa Cones with Qashta & Pistachio", "desc_ar": "كنافة أقماع بحشوة القشطة الطازجة والفستق الحلبي", "desc_en": "Kunafa cones filled with fresh qashta and Aleppo pistachio.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 26.5}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 106.0}], "price": 26.5, "image": "images/img_047.webp"}
    ] },
  { id: "gateaux", page: "menu-gateaux.html", cover: "images/img_049.webp",
    name_ar: "الجاتوه والتورت",
    name_en: "Gateaux & Torts",
    items: [
      {"id": "gateaux-1", "name_ar": "تورتة فارمسيل", "name_en": "Chocolate Shavings Torte", "desc_ar": "تورتة فارمسيل مزينة بالشيكولاتة المبشورة", "desc_en": "A torte decorated with grated chocolate.", "sizes": [{"label_ar": "صغير", "label_en": "Small", "price": 87.5}, {"label_ar": "وسط", "label_en": "Medium", "price": 100.0}], "price": 87.5, "image": "images/img_048.webp"},
      {"id": "gateaux-2", "name_ar": "تورتة روشية", "name_en": "Rocher Torte", "desc_ar": "تورتة بحشوة الروشية الأصلية", "desc_en": "A torte with an authentic Rocher filling.", "sizes": [{"label_ar": "صغير جدًا", "label_en": "Extra small", "price": 87.5}, {"label_ar": "صغير", "label_en": "Small", "price": 100.0}], "price": 87.5, "image": "images/img_049.webp"},
      {"id": "gateaux-3", "name_ar": "تورتة فانيليا", "name_en": "Vanilla Torte", "desc_ar": "تورتة بكريمة الفانيليا", "desc_en": "A torte with vanilla cream.", "sizes": [{"label_ar": "صغير جدًا", "label_en": "Extra small", "price": 75.0}, {"label_ar": "صغير", "label_en": "Small", "price": 87.5}, {"label_ar": "وسط", "label_en": "Medium", "price": 100.0}], "price": 75.0, "image": "images/img_050.webp"},
      {"id": "gateaux-4", "name_ar": "كيك الدخن بالتمر", "name_en": "Millet & Date Cake", "desc_ar": "كيك الدخن الصحي بالتمر الطازج", "desc_en": "A wholesome millet cake with fresh dates.", "price": 22.5, "image": "images/img_051.webp"},
      {"id": "gateaux-5", "name_ar": "كيكة الريم", "name_en": "Reem Orange Cake", "desc_ar": "كيكة الريم بنكهة البرتقال المنعشة", "desc_en": "A cake with a refreshing orange flavor.", "price": 61.0, "image": "images/img_052.webp"},
      {"id": "gateaux-6", "name_ar": "جاتوه موس شيكولاتة مبشورة", "name_en": "Chocolate Mousse Gateau with Shavings", "desc_ar": "جاتوه اللذيذ مع رشة من الشيكولاتة المبشورة", "desc_en": "A delicious gateau topped with grated chocolate.", "price": 11.0, "image": "images/img_053.webp"},
      {"id": "gateaux-7", "name_ar": "كرات اللوتس", "name_en": "Lotus Balls", "desc_ar": "علبة كرات اللوتس البلجيكي", "desc_en": "A box of Belgian Lotus balls.", "price": 15.0, "image": "images/img_054.webp"},
      {"id": "gateaux-8", "name_ar": "كاسة تشيز كيك لوتس", "name_en": "Lotus Cheesecake Cup", "desc_ar": "كاسة التشيز كيك مغطاة باللوتس", "desc_en": "A cheesecake cup topped with Lotus.", "price": 10.0, "image": "images/img_055.webp"},
      {"id": "gateaux-9", "name_ar": "كنافة مانجو", "name_en": "Mango Kunafa", "desc_ar": "كنافة بكريمة المانجو وقطع من المانجو الطازجة", "desc_en": "Kunafa with mango cream and pieces of fresh mango.", "price": 19.0, "image": "images/img_056.webp"},
      {"id": "gateaux-10", "name_ar": "كاسة تشيز كيك بالنوتيلا", "name_en": "Nutella Cheesecake Cup", "desc_ar": "كاسة التشيز كيك مغطاة بالنوتيلا", "desc_en": "A cheesecake cup topped with Nutella.", "price": 10.0, "image": "images/img_057.webp"},
      {"id": "gateaux-11", "name_ar": "كاسة تشيز كيك توت أزرق", "name_en": "Blueberry Cheesecake Cup", "desc_ar": "كاسة التشيز كيك مغطاة بالتوت الأزرق", "desc_en": "A cheesecake cup topped with blueberries.", "price": 10.0, "image": "images/img_058.webp"},
      {"id": "gateaux-12", "name_ar": "كاسة تشيز توت أحمر", "name_en": "Red Berry Cheesecake Cup", "desc_ar": "كاسة التشيز كيك مغطاة بالتوت الأحمر", "desc_en": "A cheesecake cup topped with red berries.", "price": 10.0, "image": "images/img_059.webp"},
      {"id": "gateaux-13", "name_ar": "جاتوه ترايفل مانجو", "name_en": "Mango Trifle Gateau", "desc_ar": "سبونج فانيليا مع كريمة المانجو و الشيكولاتة البيضاء البلجيكي و قطع المانجو الطازجة", "desc_en": "Vanilla sponge with mango cream, Belgian white chocolate and fresh mango pieces.", "price": 15.0, "image": "images/img_060.webp"},
      {"id": "gateaux-14", "name_ar": "جاتوه ريد فلفت أولكر", "name_en": "Red Velvet Ülker Gateau", "desc_ar": "جاتوه ريد فلفت بحشوة كريمة التشيز المغطاة بشيكولاتة الأولكر الشهيرة", "desc_en": "Red velvet gateau with a cream cheese filling, coated in Ülker chocolate.", "price": 12.5, "image": "images/img_061.webp"},
      {"id": "gateaux-15", "name_ar": "جاتوه فادج مالتيزر", "name_en": "Fudge Maltesers Gateau", "desc_ar": "جاتوه الفادج الشهير المحشو بالشيكولاتة والنوتيلا وقطع المالتيزر الأصلي", "desc_en": "A fudge gateau filled with chocolate and Nutella, with Maltesers on top.", "price": 10.0, "image": "images/img_062.webp"},
      {"id": "gateaux-16", "name_ar": "جاتوه ريد فلفت", "name_en": "Red Velvet Gateau", "desc_ar": "جاتوه الريد فلفت محشو بكريمة الجبن الكيري", "desc_en": "Red velvet gateau filled with Kiri cream cheese.", "price": 12.5, "image": "images/img_063.webp"},
      {"id": "gateaux-17", "name_ar": "جاتوه وايت فورست", "name_en": "White Forest Gateau", "desc_ar": "جاتوه الشيكولاتة البيضاء المحشو بالتوت الأحمر", "desc_en": "A white chocolate gateau filled with red berries.", "price": 10.0, "image": "images/img_064.webp"},
      {"id": "gateaux-18", "name_ar": "جاتوه بلاك فورست", "name_en": "Black Forest Gateau", "desc_ar": "جاتوه الشيكولاتة محشو بالكريمة والتوت الأحمر", "desc_en": "A chocolate gateau with cream and red berries.", "price": 10.0, "image": "images/img_065.webp"},
      {"id": "gateaux-19", "name_ar": "تورتة التوفي", "name_en": "Toffee Torte", "desc_ar": "تورتة بصوص وكريمة التوفي الشهية", "desc_en": "A torte with toffee sauce and cream.", "sizes": [{"label_ar": "صغير جدًا", "label_en": "Extra small", "price": 75.0}], "price": 75.0, "image": "images/img_066.webp"},
      {"id": "gateaux-20", "name_ar": "تورتة الشيكولاتة", "name_en": "Chocolate Torte", "desc_ar": "تورتة بمذاق الشيكولاتة الرائع", "desc_en": "A torte with a rich chocolate flavor.", "sizes": [{"label_ar": "صغير جدًا", "label_en": "Extra small", "price": 75.0}, {"label_ar": "صغير", "label_en": "Small", "price": 87.5}], "price": 75.0, "image": "images/img_067.webp"},
      {"id": "gateaux-21", "name_ar": "تورتة كراميل", "name_en": "Caramel Torte", "desc_ar": "تورتة الكراميل بطريقتنا المميزة", "desc_en": "Our signature caramel torte.", "sizes": [{"label_ar": "صغير جدًا", "label_en": "Extra small", "price": 75.0}, {"label_ar": "صغير", "label_en": "Small", "price": 87.5}], "price": 75.0, "image": "images/img_068.webp"},
      {"id": "gateaux-22", "name_ar": "تشيز كيك لوتس مثلث", "name_en": "Lotus Cheesecake Slice", "desc_ar": "تشيز كيك بالجبن الكيري وبسكويت الديجستف مغطاة باللوتس البلجيكي", "desc_en": "Kiri cream cheese cheesecake on a digestive biscuit base, topped with Belgian Lotus.", "price": 16.0, "image": "images/img_069.webp"},
      {"id": "gateaux-23", "name_ar": "جاتوه موس فانيليا", "name_en": "Vanilla Mousse Gateau", "desc_ar": "جاتوه الموس فانيليا بالكريمة الشهية", "desc_en": "A vanilla mousse gateau with delicious cream.", "price": 11.0, "image": "images/img_070.webp"},
      {"id": "gateaux-24", "name_ar": "جاتوه موس توفي", "name_en": "Toffee Mousse Gateau", "desc_ar": "جاتوه الموس توفي طعم لا يقاوم", "desc_en": "A toffee mousse gateau with an irresistible taste.", "price": 11.0, "image": "images/img_071.webp"},
      {"id": "gateaux-25", "name_ar": "جاتوه موس شيكولاتة", "name_en": "Chocolate Mousse Gateau", "desc_ar": "جاتوه الموس الشيكولاتة الهش الخفيف", "desc_en": "A light, airy chocolate mousse gateau.", "price": 11.0, "image": "images/img_072.webp"},
      {"id": "gateaux-26", "name_ar": "أكلير", "name_en": "Éclair", "desc_ar": "اختيارك من إكلير شيكولاتة أو توفي أو فانيليا", "desc_en": "Your choice of chocolate, toffee or vanilla éclair.", "price": 11.0, "image": "images/img_073.webp"},
      {"id": "gateaux-27", "name_ar": "تورتة الشيكولاتة صب", "name_en": "Glazed Chocolate Torte", "desc_ar": "تورتة بمذاق الشيكولاتة", "desc_en": "A torte with chocolate flavor.", "sizes": [{"label_ar": "صغير", "label_en": "Small", "price": 87.5}], "price": 87.5, "image": "images/img_074.webp"},
      {"id": "gateaux-28", "name_ar": "سويسرول توفي", "name_en": "Toffee Swiss Roll", "desc_ar": "جاتوه كيك السويسرول بصوص التوفي", "desc_en": "A Swiss roll gateau with toffee sauce.", "price": 11.0, "image": "images/img_075.webp"},
      {"id": "gateaux-29", "name_ar": "سويسرول فانيليا", "name_en": "Vanilla Swiss Roll", "desc_ar": "جاتوه كيك السويسرول بكريمة الفانيليا", "desc_en": "A Swiss roll gateau with vanilla cream.", "price": 11.0, "image": "images/img_076.webp"},
      {"id": "gateaux-30", "name_ar": "سويسرول مكسرات", "name_en": "Mixed Nuts Swiss Roll", "desc_ar": "جاتوه كيك السويسرول بالمكسرات المشكلة", "desc_en": "A Swiss roll gateau with assorted nuts.", "price": 11.0, "image": "images/img_077.webp"},
      {"id": "gateaux-31", "name_ar": "كيكة الأوريو", "name_en": "Oreo Cake", "desc_ar": "كيكة بسكويت الأوريو", "desc_en": "A cake made with Oreo biscuits.", "sizes": [{"label_ar": "صغير", "label_en": "Small", "price": 100.0}], "price": 100.0, "image": "images/img_078.webp"},
      {"id": "gateaux-32", "name_ar": "سويسرول فارمسيل", "name_en": "Chocolate Sprinkle Swiss Roll", "desc_ar": "جاتوه كيك السويسرول بشيكولاتة فارمسيل", "desc_en": "A Swiss roll gateau with chocolate vermicelli.", "price": 11.0, "image": "images/img_079.webp"},
      {"id": "gateaux-33", "name_ar": "تشيز كيك توت أزرق مثلث", "name_en": "Blueberry Cheesecake Slice", "desc_ar": "تشيز كيك بالجبن الكيري وبسكويت الديجستف مغطاة بالتوت الأزرق", "desc_en": "Kiri cream cheese cheesecake on a digestive biscuit base, topped with blueberries.", "price": 16.0, "image": "images/img_080.webp"}
    ] },
  { id: "chocolate", page: "menu-chocolate.html", cover: "images/img_031.webp",
    name_ar: "الشيكولاتة",
    name_en: "Chocolate",
    items: [
      {"id": "chocolate-1", "name_ar": "شيكولاتة دبي", "name_en": "Dubai Chocolate", "desc_ar": "شيكولاتة بار بالكنافة و كريمة الفستق", "desc_en": "A chocolate bar with kunafa and pistachio cream.", "sizes": [{"label_ar": "صغير", "label_en": "Small", "price": 19.0}, {"label_ar": "كبير", "label_en": "Large", "price": 37.5}], "price": 19.0, "image": "images/img_031.webp"},
      {"id": "chocolate-2", "name_ar": "شيكولاتة بلجيكي مشكل", "name_en": "Assorted Belgian Chocolate", "desc_ar": "تشكيلة بالكيلو مميزة من شيكولاتة البلجيكي الفاخر", "desc_en": "A distinctive assortment of premium Belgian chocolate, sold by weight.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 44.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 88.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 176.0}], "price": 44.0, "image": "images/img_081.webp"}
    ] },
  { id: "nuts", page: "menu-nuts.html", cover: "images/img_085.webp",
    name_ar: "المكسرات",
    name_en: "Nuts",
    items: [
      {"id": "nuts-1", "name_ar": "فصفص دوار الشمس", "name_en": "Salted Sunflower Seeds", "desc_ar": "بذور حب دوار الشمس مملح", "desc_en": "Salted sunflower seeds.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 7.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 15.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 30.0}], "price": 7.5, "image": "images/img_082.webp"},
      {"id": "nuts-2", "name_ar": "مشكل مكسرات ياباني", "name_en": "Japanese Mixed Nuts", "desc_ar": "مشكل مكسرات ياباني مقدم بأفضل شكل", "desc_en": "A Japanese-style nut mix, beautifully presented.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 10.0}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 20.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 40.0}], "price": 10.0, "image": "images/img_083.webp"},
      {"id": "nuts-3", "name_ar": "لوز سادة", "name_en": "Plain Almonds", "desc_ar": "حبات لوز طازجة ومقرمشة، تتميز بنكهتها الطبيعية الغنية", "desc_en": "Fresh, crunchy almonds with a rich natural flavor.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 17.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 35.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 70.0}], "price": 17.5, "image": "images/img_084.webp"},
      {"id": "nuts-4", "name_ar": "مشكل مكسرات", "name_en": "Mixed Nuts", "desc_ar": "مكسرات مشكلة محمصة بعناية تضم أنواعاً متنوعة بطعم لذيذ ومقرمش", "desc_en": "Carefully roasted mixed nuts in a delicious, crunchy variety.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 17.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 35.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 70.0}], "price": 17.5, "image": "images/img_085.webp"},
      {"id": "nuts-5", "name_ar": "فستق مالح", "name_en": "Salted Pistachios", "desc_ar": "فستق مملح رائع", "desc_en": "Excellent salted pistachios.", "sizes": [{"label_ar": "250 جرام", "label_en": "250 g", "price": 21.5}, {"label_ar": "500 جرام", "label_en": "500 g", "price": 43.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 86.0}], "price": 21.5, "image": "images/img_086.webp"}
    ] },
  { id: "coffee", page: "menu-coffee.html", cover: "images/img_087.webp",
    name_ar: "القهوة",
    name_en: "Coffee",
    items: [
      {"id": "coffee-1", "name_ar": "قهوة بيشة العربية", "name_en": "Bisha Arabic Coffee", "desc_ar": "أفضل أنواع القهوة العربية بالخلطة الخاصة الشهيرة", "desc_en": "The finest Arabic coffee, in our famous signature blend.", "sizes": [{"label_ar": "ربع كيلو", "label_en": "¼ kg", "price": 25.0}, {"label_ar": "نصف كيلو", "label_en": "½ kg", "price": 50.0}, {"label_ar": "كيلو", "label_en": "1 kg", "price": 100.0}], "price": 25.0, "image": "images/img_087.webp"}
    ] }
];

/* ---------- BRANCHES ----------
   address_* = null shows "Coming soon". mapUrl = '' disables the Maps button until you fill it in. */
var BRANCHES = [
  { id: 'main', main: true,
    name_ar: 'الفرع الرئيسي', name_en: 'Main Branch',
    area_ar: '', area_en: '',
    address_ar: 'الحاوية، طريق الملك عبدالعزيز، الباحة 65525',
    address_en: 'Al-Hawiyah, King Abdulaziz Road, Al-Baha 65525',
    phone: '055 348 5544', tel: '+966553485544',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Turkey Sweets Al-Hawiyah King Abdulaziz Road Al-Baha 65525') },
  { id: 'baljurashi', main: false,
    name_ar: 'فرع بلجرشي', name_en: 'Baljurashi Branch',
    area_ar: 'الأصالة', area_en: 'Al-Asalah',
    address_ar: null, address_en: null,
    phone: '+966 55 348 5577', tel: '+966553485577',
    mapUrl: '' },
  { id: 'mandaq', main: false,
    name_ar: 'فرع المندق', name_en: 'Al-Mandaq Branch',
    area_ar: '', area_en: '',
    address_ar: null, address_en: null,
    phone: '+966 55 348 5599', tel: '+966553485599',
    mapUrl: '' }
];

/* ---------- Custom orders & celebrations ---------- */
var SERVICES = [
  { id: 'gift', icon: 'gift',
    name_ar: 'علب الهدايا', name_en: 'Gift boxes',
    desc_ar: 'علب أنيقة من تشكيلة الحلويات، جاهزة للإهداء.',
    desc_en: 'Elegant boxes of assorted sweets, ready to give.' },
  { id: 'trays', icon: 'rings',
    name_ar: 'صواني الأفراح والمناسبات', name_en: 'Wedding & event trays',
    desc_ar: 'صواني سخية للأفراح والخطوبة والتجمعات العائلية.',
    desc_en: 'Generous trays for weddings, engagements and family gatherings.' },
  { id: 'cakes', icon: 'cake',
    name_ar: 'تورتات حسب الطلب', name_en: 'Custom cakes',
    desc_ar: 'تورتات تُصمَّم على مناسبتكم ونكهتكم ورسالتكم.',
    desc_en: 'Cakes designed around your occasion, flavour and message.' },
  { id: 'catering', icon: 'cloche',
    name_ar: 'ضيافة وتجهيز المناسبات', name_en: 'Catering',
    desc_ar: 'تجهيز الحلويات والضيافة للمكاتب والاستقبالات والفعاليات.',
    desc_en: 'Sweets and hospitality platters for offices, receptions and events.' }
];

/* ---------- REVIEWS: pasted by hand from Google Maps (customer names as shown on Google) ----------
   text: original wording, leave '' for a rating-only review.   featured: true shows it as a large dark card.
   sub: optional {food, service, atmosphere} ratings out of 5.   ago: when it was posted, as Google showed it (not displayed). */
var REVIEWS = [
  { id: 'r1',  name: 'Siddique Mohd Arshad',     rating: 5, ago: '6 months ago', text: 'In albaha very well shop for sweets. All kind of arabic sweet available' },
  { id: 'r2',  name: 'Bashir Khan',              rating: 5, text: 'A great market. All in one' },
  { id: 'r3',  name: 'Muhammad Raza Shujaat',    rating: 5, ago: 'a year ago', text: 'Simply Superb.....!!! Their Cream is Superb....!!!', sub: { food: 5, service: 5, atmosphere: 5 } },
  { id: 'r4',  name: 'MD Shipon',                rating: 5, ago: '2 months ago', text: 'Testy All Sweet' },
  { id: 'r5',  name: 'karl c.',                  rating: 5, ago: '5 years ago', text: 'Good deals and good taste for the Turkish delights. I tried also two cakes (mini-pie shape: pistachios and nuts&caramel)' },
  { id: 'r6',  name: 'Mohammed Shaji Ur Rahman', rating: 5, ago: '4 years ago', featured: true, text: 'Best cakes shop in Al Baha. Their chocolate cake is the top in town. \uD83D\uDC4D' },
  { id: 'r7',  name: 'Kash Khan',                rating: 5, ago: 'a year ago', featured: true, text: 'Best sweets in Baha. Highly recommend' },
  { id: 'r8',  name: 'T X B T X B',              rating: 5, ago: '6 years ago', text: 'Very nice Konafah.' },
  { id: 'r9',  name: 'Mohmed Ahmed',             rating: 5, text: '' },
  { id: 'r10', name: 'Sajjad Bilal',             rating: 5, ago: '7 years ago', text: 'I love it because of only its taste which is very good' }
];
