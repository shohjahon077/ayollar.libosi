        const products = [
            { id: 1, name: "#1 DVOYKA ", cat: "ℕ𝔼𝕎 𝕐𝕆ℤ ℂ𝕆𝕃𝕃𝔼ℂ𝕋𝕀𝕆ℕ", price: 330000, sizes: "S, M, L, xl", img: "photo_2026-01-06_22-14-52.jpg" },
            { id: 2, name: "#2 barxat kofta va yubka", cat: " Yumshoq va sifatli mato", price: 310000, sizes: "46, 48, 50, 42", img: "photo_2026-01-06_22-20-11.jpg" },
            { id: 3, name: "#3 БАМБУК КУЙНЕ", cat: " УЗБЕК ИШЛАП ЧИКАРИШ", price: 290000, sizes: "42, 44, 46, 48", img: "photo_2026-01-06_22-25-48.jpg" },
            { id: 4, name: "#4 ASAL KOFTA YUBKA TAKKOY", cat: "New collection", price: 250000, sizes: "46, 48, 50, 52, 54", img: "photo_2026-01-06_22-46-35.jpg" },
            { id: 5, name: "#5 BARHT Vecherniy Dvoyka", cat: "Качество LUX ", price: 350000, sizes: "46, 48, 50, 52", img: "photo_2026-01-06_22-56-55.jpg" },
            { id: 6, name: "#6 Dvoyka.koʻfta+yupka", cat: "Kuz  Qishki vecherniy", price: 250000, sizes: "44, 46, 48, 50", img: "photo_2026-01-06_23-01-44.jpg" },
            { id: 7, name: "#7 VECHERNIYLARIMIZ KO‘YLAKLAR", cat: "Toshla Asil Juda chiroyli.", price: 299000, sizes: "46, 48, 50, 52", img: "photo_2026-01-06_23-04-46.jpg" },
            { id: 8, name: "#8 VECHERNIYLARIMIZ KO‘YLAKLAR", cat: "Toshla Asil Juda chiroyli.", price: 299000, sizes: "46, 48, 50, 52, 54, 56", img: "photo_2026-01-06_23-07-37.jpg" },
            { id: 9, name: "#9 VECHERNIYLARIMIZ KO‘YLAKLAR", cat: "Matriali: Barbey", price: 299000, sizes: "46, 48, 50, 52, 54, 56", img: "photo_2026-01-06_23-11-02.jpg" },
            { id: 10, name: "#10 Trendivi vecherkamiz", cat: "Materiali: Fransuzki Gipyur + atlasivi", price: 320000, sizes: "42, 44, 46, 48", img: "photo_2026-01-06_23-13-43.jpg" },
            { id: 11, name: "#11 вечерни куйнегимиз", cat: "NEWW MODEL", price: 299000, sizes: "46, 52", img: "photo_2026-01-06_23-25-29.jpg" },
            { id: 12, name: "#12 Navinka koyne", cat: "Mayerial barxt", price: 290000, sizes: "S, M, L, xl", img: "photo_2026-01-06_23-28-20.jpg" },
            { id: 13, name: "#13 PREMIUM STYLE — ҲАММА УЧУН! ", cat: "Янги коллекция билан образингизга янгилик қўшинг!", price: 390000, sizes: "46, 48, 50, 52", img: "photo_2026-01-06_23-32-32.jpg" },
            { id: 14, name: "#14 DVOYKA", cat: "NEW NAVINKA", price: 270000, sizes: "standart", img: "photo_2026-01-06_23-52-19.jpg" },
            { id: 15, name: "#15 Pushti ko'ylak", cat: "New collection", price: 320000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-06_23-59-25.jpg" },
            { id: 16, name: "#16 Trendivi vecherkamiz", cat: "Materiali: Fransuzki Gipyur + atlasivi", price: 320000, sizes: "42, 44, 46, 48", img: "photo_2026-01-06_23-17-08.jpg" },
            { id: 17, name: "#17 Italyanka+shifon", cat: "New collection", price: 250000, sizes: "44, 50", img: "photo_2026-01-07_00-04-33.jpg" },
            { id: 18, name: "#18 Atlas+organza", cat: "New collection", price: 220000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_00-09-31.jpg" },
            { id: 19, name: "#19 material:barxt+bayan", cat: "new collection", price: 275000, sizes: "44, 50", img: "photo_2026-01-07_00-11-59.jpg" },
            { id: 20, name: "#20 Qora ko'ylak", cat: "new collection", price: 299000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_00-14-33.jpg" },
            { id: 21, name: "#21 Oq ko'ylak", cat: "new collection", price: 299000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_00-23-30.jpg" },
            { id: 22, name: "#22 Qizil ko'ylak", cat: "new collection", price: 299000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_00-25-27.jpg" },
            { id: 23, name: "#23 Oq ko'ylak", cat: "new collection", price: 299000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_00-27-44.jpg" },
            { id: 24, name: "#24 Material:mativiy atlas+piston", cat: "new collection", price: 390000, sizes: "42, 50", img: "photo_2026-01-07_00-46-22.jpg" },
            { id: 25, name: "#25 Trendivi vecherkamiz", cat: "Materiali: Fransuzki Gipyur + atlasivi", price: 320000, sizes: "42, 44, 46, 48", img: "photo_2026-01-06_23-21-21.jpg" },
            { id: 26, name: "#26 bogatiy vecherniy kofta yubkalari", cat: "new collection", price: 295000, sizes: "44, 50", img: "photo_2026-01-07_00-50-28.jpg" },
            { id: 27, name: "#27 bogatiy vecherniy kofta yubkalari", cat: "new collection", price: 295000, sizes: "44, 50", img: "photo_2026-01-07_00-55-03.jpg" },
            { id: 28, name: "#28 baza ko’yle+baska", cat: "new collection", price: 310000, sizes: "42, 48", img: "photo_2026-01-07_00-58-25.jpg" },
            { id: 29, name: "#29 bogatiy vecherniy ko’ynelari", cat: "new collection", price: 310000, sizes: "44, 50", img: "photo_2026-01-07_01-03-05.jpg" },
            { id: 30, name: "#30 MATRIALI : BARBI ", cat: "DUNYO OPTOMDA NAVINKA VECHIRINKA", price: 290000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_01-09-08.jpg" },
            { id: 31, name: "#31 Navenka divoyka", cat: "Matosi barbi", price: 290000, sizes: "46, 48, 50, 52", img: "photo_2026-01-07_01-10-13.jpg" },
            { id: 32, name: "#32 Koyne+Romol+Belbog", cat: "Assal Tvidniy Troyka", price: 290000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_01-15-37.jpg" },
            { id: 33, name: "#33 Novinka :  Ko'ylak ", cat: "New collection 2025", price: 299000, sizes: "44, 46, 48, 50 ", img: "photo_2026-01-07_01-19-51.jpg" },
            { id: 34, name: "#34 наличие ", cat: "Качество 💯 суппер", price: 299000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_01-22-26.jpg" },
            { id: 35, name: "#35 Vecherniy Ko'ylak ", cat: "New collection 2025 ", price: 299000, sizes: "44, 50", img: "photo_2026-01-07_01-31-30.jpg" },
            { id: 36, name: "#36 echerniy kiyimi", cat: "NEW COLLECTION", price: 299000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_01-34-19.jpg" },
            { id: 37, name: "#37 Navinka koyne", cat: "Materiali barxt, gipyur", price: 285000, sizes: "s, M, L, xl", img: "photo_2026-01-07_01-37-41.jpg" },
            { id: 38, name: "#38 dvoyka", cat: "New collection", price: 320000, sizes: "s, M, L, xl", img: "photo_2026-01-07_01-40-35.jpg" },
            { id: 39, name: "#39 Matosi bambuk+setka ", cat: "New collektion ", price: 285000, sizes: "S, M, L, xl", img: "photo_2026-01-07_01-43-18.jpg" },
            { id: 40, name: "#40 Asal koyne", cat: "Materal Matviy Atlas", price: 285000, sizes: "S, M, l, xl", img: "photo_2026-01-07_01-47-46.jpg" },
            { id: 41, name: "#41 Oq, qizil rang bor", cat: "Material barbi", price: 255000, sizes: "1, 2", img: "photo_2026-01-07_01-50-28.jpg" },
            { id: 42, name: "#42 Navenka kastum yubka", cat: "Matosi barbi", price: 320000, sizes: "standart", img: "photo_2026-01-07_01-51-25.jpg" },
            { id: 43, name: "#43 Material:mativiy atlas+piston", cat: "new collection", price: 350000, sizes: "42, 50", img: "photo_2026-01-07_01-55-12.jpg" },
            { id: 44, name: "#44 NAVINKA VECHIRINKA", cat: "MATOSI : BARBI", price: 299000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_01-56-18.jpg" },
            { id: 45, name: "#45 Navinka asal koyne", cat: "Materiali ruskiy atlas", price: 299000, sizes: "s, M, L, xl", img: "photo_2026-01-07_01-59-24.jpg" },
            { id: 46, name: "#46 𝔸𝕤𝕒𝕝  dvoyka", cat: "𝙈𝙖𝙩𝙚𝙧𝙞𝙖𝙡𝙞: drapp kashmirr ", price: 370000, sizes: "46, 52", img: "photo_2026-01-07_02-01-51.jpg" },
            { id: 47, name: "#47 НАЛИЧИДА КЕЛДИ", cat: "УЗБЕК ИШЛАП ЧИКАРИШ", price: 297000, sizes: "42, 44, 46, 48", img: "photo_2026-01-07_02-05-52.jpg" },
            { id: 48, name: "#48 Atlas+organza", cat: "NEW COLLECTION", price: 199000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_22-31-00.jpg" },
            { id: 49, name: "#49 ko'ylak", cat: "NEW COLLECTION", price: 199000, sizes: "razmer aloqada tanlanadi!", img: "photo_2026-01-07_22-35-29.jpg" },
            { id: 50, name: "#50 VECHERNIYLARIMIZ", cat: "Matriali: Piston Va Qimmatbaxo", price: 290000, sizes: "46, 48, 50, 52", img: "photo_2026-01-07_22-38-36.jpg" },
            { id: 51, name: "#51 yashil рангиям", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_22-56-56.jpg" },
            { id: 52, name: "#52 Trend ko’yne", cat: "NEW COLLECTION", price: 310000, sizes: "S, M, L, XL", img: "photo_2026-01-07_23-07-02.jpg" },
            { id: 53, name: "#53 YUMSHOQ SETKA matosidan", cat: "KENG. KAMARI O‘TA GO'ZAL.", price: 300000, sizes: "46, 48, 50, 52", img: "photo_2026-01-07_23-08-55.jpg" },
            { id: 54, name: "#54 YUMSHOQ SETKA matosidan", cat: "KENG. KAMARI O‘TA GO'ZAL", price: 300000, sizes: "46, 48, 50, 52", img: "photo_2026-01-07_23-14-25.jpg" },
            { id: 55, name: "#55 VECHERNIYLARIMIZ", cat: "Matriali: Piston Va Qimmatbaxo", price: 290000, sizes: "46, 48, 50, 52", img: "photo_2026-01-07_22-41-39.jpg" },
            { id: 56, name: "#56 VECHERNIYLARIMIZ", cat: "Toshlari va Kamari o‘ta go‘zal bo‘lgan.", price: 390000, sizes: "44, 46, 48, 50, 52", img: "photo_2026-01-07_23-22-16.jpg" },
            { id: 57, name: "#57 Nejniy asaal vecherniy ko’yne", cat: "Material:sholk ", price: 320000, sizes: "s, M, L, XL", img: "photo_2026-01-07_23-33-07.jpg" },
            { id: 58, name: "#58 Karsetli kofta+ yubka", cat: "Materiali . atlasnoy yumshogʻi yaxshisi havo oʻtkazadi", price: 330000, sizes: "46, 52", img: "photo_2026-01-07_23-39-09.jpg" },
            { id: 59, name: "#59  ВЕЧЕРНИЙ", cat: "МАТЕРИАЛ ПЕСОЧНЫЙ АТЛАС ", price: 370000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_23-45-19.jpg" },
            { id: 60, name: "#60  ВЕЧЕРНИЕ ПЛАТЬЯ", cat: "МАТЕРИАЛ ПЕСОЧНЫЙ АТЛАС", price: 390000, sizes: "44, 46, 48, 50", img: "photo_2026-01-07_23-48-54.jpg" },
            { id: 61, name: "#61 asal koylagi", cat: "NEW COLLECTION", price: 400000, sizes: "S, M, L, XL, 2XL", img: "photo_2026-01-07_23-57-32.jpg" },
            { id: 62, name: "#62 asal koylag", cat: "materiali barby  yenglari organza Topigi yopadi", price: 320000, sizes: "S, M, L, XL, 2XL", img: "photo_2026-01-08_00-05-28.jpg" },
            { id: 63, name: "#63 АСАЛ_ВЕЧЕРНИЙ", cat: "МАТРАЛ_SUPPER", price: 320000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-08-56.jpg" },
            { id: 64, name: "#64 vecerka", cat: "Matrali banbuk qalin", price: 330000, sizes: "44, 52", img: "photo_2026-01-08_00-12-17.jpg" },
            { id: 65, name: "#65 Vecherni", cat: "Matreali,  barbi ", price: 320000, sizes: "44, 46, 48", img: "photo_2026-01-08_00-14-19.jpg" },
            { id: 66, name: "#66 VECHERNIY", cat: "Matriali: Barxit matosidan bo‘lgan Kuzgi va Qishki ", price: 340000, sizes: "46, 48, 50, 52", img: "photo_2026-01-08_00-17-26.jpg" },
            { id: 67, name: "#67 yashil рангиям", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 300000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_22-57-33.jpg" },
            { id: 68, name: "#68  VECHERNIY", cat: "Toshlari Asl qimmatbaxo va  Setka kanbenatsiyali Uta go'zal.", price: 320000, sizes: "46, 48, 50, 52", img: "photo_2026-01-08_00-19-55.jpg" },
            { id: 69, name: "#69 Koʻyne+belbogʻi", cat: "Materiali . atlasnoy yumshogʻi yaxshisi havo oʻtkazadi.", price: 300000, sizes: "46, 52", img: "photo_2026-01-08_00-23-12.jpg" },
            { id: 70, name: "#70 New Collection Asal koyne", cat: "Materiali barbi yengi shifon ", price: 370000, sizes: "42, 50", img: "photo_2026-01-08_00-25-53.jpg" },
            { id: 71, name: "#71  vicherkamiz", cat: "matosi: barhit  gipyurlari fransuskiy ishlatilgan", price: 320000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-31-03.jpg" },
            { id: 72, name: "#72  ZERO Collection", cat: "Materiali barbi", price: 350000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-34-12.jpg" },
            { id: 73, name: "#73 Vecherniy Ko'ylak", cat: " Materiyali : Barxit", price: 350000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-36-55.jpg" },
            { id: 74, name: "#74 Yozgi vecherniy kiyimi", cat: "Materiali.Arganzani eng yaxshi.Tafta", price: 330000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-39-01.jpg" },
            { id: 75, name: "#75 Navinka kofta yupka", cat: "Material bart, shifon", price: 325000, sizes: "S, M, L, XL", img: "photo_2026-01-08_00-43-22.jpg" },
            { id: 76, name: "#76 Assal koynegimiza broshkasiyam", cat: "Matosi viyazka", price: 285000, sizes: "46, 52", img: "photo_2026-01-08_00-47-49.jpg" },
            { id: 77, name: "#77 𝙎𝘼𝙇 koynegimiz sotuvda + Remeni bilan", cat: "𝙈𝘼𝙏𝙀𝙍𝙄𝘼𝙇𝙄  qalingina trikataj turkiya", price: 300000, sizes: "44, 50", img: "photo_2026-01-08_00-49-52.jpg" },
            { id: 78, name: "#78 VECHIRINKA", cat: "MATOSI : BARBI", price: 340000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-52-14.jpg" },
            { id: 79, name: "#79 dvoyka", cat: "matosi barhit mativiy atlas", price: 330000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_00-55-04.jpg" },
            { id: 80, name: "#80 Новинка!", cat: "Тельняшка для твоего самого женственного", price: 580000, sizes: "42, 44, 46, 48, 50", img: "photo_2026-01-08_00-57-32.jpg" },
            { id: 81, name: "#81 Новинка!", cat: "Тельняшка для твоего самого женственного", price: 580000, sizes: "42, 44, 46, 48, 50", img: "photo_2026-01-08_00-58-08.jpg" },
            { id: 82, name: "#82 Новинка!", cat: "Тельняшка для твоего самого женственного", price: 580000, sizes: "42, 44, 46, 48, 50", img: "photo_2026-01-08_00-58-53.jpg" },
            { id: 83, name: "#83 Abaya+takoy", cat: "Matosi-Armani sholk", price: 340000, sizes: "46, 48, 50, 52, 54", img: "photo_2026-01-08_01-02-46.jpg" },
            { id: 84, name: "#84 Dvoyka pasadka idealniy", cat: "Material barby", price: 280000, sizes: "42, 44, 46, 48, 50, 52", img: "photo_2026-01-08_01-05-12.jpg" },
            { id: 85, name: "#85 Dvoyka pasadka idealniy", cat: "Material barby", price: 280000, sizes: "42, 44, 46, 48, 50, 52", img: "photo_2026-01-08_01-05-47.jpg" },
            { id: 86, name: "#86 Dvoyka pasadka idealniy", cat: "Material barby", price: 280000, sizes: "42, 44, 46, 48, 50, 52", img: "photo_2026-01-08_01-06-24.jpg" },
            { id: 87, name: "#87 qora рангиям", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_22-59-55.jpg" },
            { id: 88, name: "#88 двойка", cat: "материали БАРБИ", price: 330000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_01-09-16.jpg" },
            { id: 89, name: "#89 Asal koyne", c1at: "New collection", price: 310000, sizes: "S, M, L, XL", img: "photo_2026-01-08_01-11-41.jpg" },
            { id: 90, name: "#90 Trend vecherny ko'yne", cat: "Material : bambuk +shifon", price: 320000, sizes: "44, 50", img: "photo_2026-01-08_01-14-07.jpg" },
            { id: 91, name: "#91 Trend vecherny ko'yne", cat: "Material : bambuk +shifon", price: 315000, sizes: "44, 50", img: "photo_2026-01-08_01-14-54.jpg" },
            { id: 92, name: "#92 Trend Duvoyka", cat: "Bishkek🇰🇬", price: 420000, sizes: "S, M, L", img: "photo_2026-01-08_01-18-03.jpg" },
            { id: 93, name: "#93 vicherniy dvoyka ", cat: "Madeli boyi 170", price: 320000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_01-20-06.jpg" },
            { id: 94, name: "#94 vicherniy dvoyka ", cat: "Madeli boyi 170", price: 325000, sizes: "44, 46, 48, 50", img: "photo_2026-01-08_01-20-53.jpg" },
            { id: 95, name: "#95 Производств:🇨🇳", cat: "NEW COLLECTION", price: 600000, sizes: " M, L, XL", img: "photo_2026-01-08_01-23-50.jpg" },
            { id: 96, name: "#96 Trend Koyne", cat: "Materal Qattim Atlas Dubayskiy", price: 299000, sizes: "S, M, L, Xl", img: "photo_2026-01-08_01-27-14.jpg" },
            { id: 97, name: "#97 Navinka asal koyne", cat: "Materiali ruskiy atlas ", price: 295000, sizes: "S, M, L, XL", img: "photo_2026-01-08_01-31-06.jpg" },
            { id: 98, name: "#98 Navinka asal koyne", cat: "Materiali ruskiy atlas ", price: 300000, sizes: "S, M, L, XL", img: "photo_2026-01-08_01-31-48.jpg" },
            { id: 99, name: "#99 Navinka asal koyne", cat: "Materiali ruskiy atlas ", price: 290000, sizes: "S, M, L, XL", img: "photo_2026-01-08_01-32-35.jpg" },
            { id: 100, name: "*101Navinka asal koyne ", cat: "Materiali ruskiy atlas ", price: 398900, sizes: "S, M, L, XL", img: "photo_2026-01-08_01-34-38.jpg" },
            { id: 101, name: "*102 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 102, name: "*103 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 103, name: "*104 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 104, name: "*105 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 105, name: "*106 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 106, name: "*107 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 107, name: "*108 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 108, name: "*109 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 109, name: "*110 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 110, name: "*111 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 111, name: "*112 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 112, name: "*113 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 113, name: "*114 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 114, name: "*115 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 115, name: "*116 qizil rangli", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_23-01-55.jpg" },
            { id: 116, name: "*117 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 117, name: "*118 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 118, name: "*119 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 119, name: "*120 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 120, name: "*121 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 121, name: "*122 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 122, name: "*123 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 123, name: "*124 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 124, name: "*125 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 125, name: "*126 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 126, name: "*127 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 127, name: "*128 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 128, name: "*129 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 129, name: "*130 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 130, name: "*131 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 132, name: "*132 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 133, name: "*133 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 134, name: "*134 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 135, name: "*135 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 136, name: "*136 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 137, name: "*137 ", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 138, name: "*138 ", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 139, name: "*139 ", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 140, name: "*140 ", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 141, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 142, name: "*142 oq rangli", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_23-04-21.jpg" },
            { id: 143, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 144, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 145, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 146, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 147, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 148, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 149, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 150, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 26, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 27, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 28, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 29, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 30, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 31, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 32, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 33, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 34, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 35, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 36, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 37, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 38, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 39, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 40, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 41, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
        ];

        let cart = [];

        function render() {
            document.getElementById('grid').innerHTML = products.map(p => `
                <div class="card">
                    <div class="img-box"><img src="${p.img}" loading="lazy"></div>
                    <div class="info">
                        <p style="font-size:0.6rem; color:var(--gold-solid); letter-spacing:1px; text-transform:uppercase;">${p.cat}</p>
                        <h3>${p.name}</h3>
                        <p class="price">${p.price.toLocaleString()} so'm</p>
                        <select id="size-${p.id}">
                            <option value="">O'lcham tanlang</option>
                            ${p.sizes.split(', ').map(s => `<option value="${s}">${s}</option>`).join('')}
                        </select>
                        <button class="add-btn" onclick="addToCart(${p.id})">SAVATGA QO'SHISH</button>
                    </div>
                </div>
            `).join('');
        }

        function addToCart(id) {
            const sz = document.getElementById(`size-${id}`).value;
            if(!sz) return alert("Iltimos, avval o'lchamni tanlang!");
            const p = products.find(x => x.id === id);
            cart.push({...p, pickedSize: sz});
            updateCart();
        }

        function updateCart() {
            document.getElementById('count').innerText = cart.length;
            let total = 0;
            document.getElementById('cart-list').innerHTML = cart.map((item, idx) => {
                total += item.price;
                return `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:10px; border-bottom:1px solid #222;">
                        <div>
                            <p style="font-family:'Playfair Display'; font-size:1.1rem;">${item.name}</p>
                            <small style="color:var(--gold-solid)">O'lcham: ${item.pickedSize}</small>
                        </div>
                        <div style="text-align:right">
                            <p style="font-size:0.9rem;">${item.price.toLocaleString()} so'm</p>
                            <button onclick="remove(${idx})" style="color:red; background:none; border:none; cursor:pointer; font-size:0.7rem;">O'CHIRISH</button>
                        </div>
                    </div>
                `;
            }).join('');
            document.getElementById('total').innerText = total.toLocaleString() + " so'm";
        }

        function remove(idx) { cart.splice(idx, 1); updateCart(); }
        function openModal(id) { closeAll(); document.getElementById(id).classList.add('active'); }
        function closeAll() { document.querySelectorAll('.overlay').forEach(o => o.classList.remove('active')); }

        const TOKEN = "8055090268:AAHtu9cy9lnZw_GFZqo8mc860Bj9G3H7vOU";
        const CHAT_ID = "8136720315";

        document.getElementById('order-form').onsubmit = async (e) => {
            e.preventDefault();
            let msg = `👗 YANGI BUYURTMA (NAFIS)\n\n`;
            cart.forEach(c => msg += `• ${c.name} | ${c.pickedSize} | ${c.price.toLocaleString()} so'm\n`);
            msg += `\n👤 Mijoz: ${document.getElementById('user-name').value}`;
            msg += `\n📞 Tel: ${document.getElementById('user-phone').value}`;
            msg += `\n📍 Manzil: ${document.getElementById('user-addr').value}`;
            msg += `\n💰 Jami: ${document.getElementById('total').innerText}`;

            await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({chat_id: CHAT_ID, text: msg})
            });
            alert("Buyurtmangiz muvaffaqiyatli yuborildi!");
            cart = []; updateCart(); closeAll();
        }

        render();