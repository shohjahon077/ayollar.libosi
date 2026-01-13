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
            { id: 101, name: "*102 KOROLEVSKIY BARXITDAN", cat: "YUBKA atrigulli trend premium turk matiryal ", price: 420000, sizes: "44, 46, 48, 50, 52", img: "5317053870913555276.jpg" },
            { id: 102, name: "*103 Asal Kofta yubka", cat: "Materal Matviy atlas", price: 310000, sizes: "42, 48", img: "5404464701724365304.jpg" },
            { id: 103, name: "*104 Asal Kofta yubka", cat: "Materal Matviy atlas", price: 320000, sizes: "42, 48", img: "5404464701724365305.jpg" },
            { id: 104, name: "*105 New kofta yubka", cat: "Materali koftsi barxt yubkasi matviy atlas", price: 299000, sizes: "Standart", img: "5404464701724365309.jpg" },
            { id: 105, name: "*106 New kofta yubka", cat: "Materali koftsi barxt yubkasi matviy atlas", price: 290000, sizes: "Standart", img: "5404464701724365309.jpg" },
            { id: 106, name: "*107 New vecrni koyne", cat: "Materali barx yonlari shifon ichi astarli ", price: 285000, sizes: "50, 42", img: "5386319023244513692.jpg" },
            { id: 107, name: "*108 New vecrni koyne", cat: "Materali barx yonlari shifon ichi astarli ", price: 280000, sizes: "42, 50", img: "5386319023244513691.jpg" },
            { id: 108, name: "*109 New ko’yne vecerka", cat: "Matrali banbuk qalin", price: 335000, sizes: "44, 52", img: "5404464701724365306.jpg" },
            { id: 109, name: "*110 Trend ko’yne", cat: "NEW COLLECTION", price: 300000, sizes: "S, XL, M, L", img: "5404464701724365312.jpg" },
            { id: 110, name: "*111 Trend ko’yne", cat: "NEW COLLECTION", price: 295000, sizes: "S, XL, M, L", img: "5404464701724365313.jpg" },
            { id: 111, name: "*112 Trend ko’yne", cat: "Qora🖤", price: 300000, sizes: "S, M, L, XL", img: "5404527562865707825.jpg" },
            { id: 112, name: "*113 Производств:🇨🇳", cat: "NEW COLLECTION", price: 540000, sizes: "M, L, XL", img: "5404527562865707837.jpg" },
            { id: 113, name: "*114 Производств:🇨🇳", cat: "NEW COLLECTION", price: 540000, sizes: "M, L, XL", img: "5404527562865707833.jpg" },
            { id: 114, name: "*115 Производств:🇨🇳", cat: "NEW COLLECTION", price: 540000, sizes: "M, L, XL", img: "5404527562865707831.jpg" },
            { id: 115, name: "*116 qizil rangli", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_23-01-55.jpg" },
            { id: 116, name: "*117 НАЛИЧИДА КЕЛДИ УЗБЕК ИШЛАП ЧИКАРИШ", cat: "БАМБУК +ФРАНЦУЗСКИЙ ГИПЮР", price: 300000, sizes: "44, 46, 48, 50 ", img: "5404527562865707839.jpg" },
            { id: 117, name: "*118 Ko'ylak", cat: "NEW COLLECTION", price: 290000, sizes: "S, M, L, XL", img: "5404464701724365321.jpg" },
            { id: 118, name: "*119 Ko'ylak", cat: "NEW COLLECTION", price: 295000, sizes: "S, M, L, XL", img: "5404464701724365320.jpg" },
            { id: 119, name: "*120 Vechirniy Koylelari", cat: "Remeni bilan💕", price: 365000, sizes: "46, 48, 50, 52, 54", img: "5404527562865707984.jpg" },
            { id: 120, name: "*121 Vechirniy Koylelari", cat: "Remeni bilan💕", price: 367000, sizes: "46, 48, 50, 52, 54", img: "5404527562865707983.jpg" },
            { id: 121, name: "*122 Vechirniy Koylelari", cat: "Remeni bilan💕", price: 370000, sizes: "46, 48, 50, 52, 54", img: "5404527562865707981.jpg" },
            { id: 122, name: "*123 Vechirniy Koylelari", cat: "Remeni bilan💕", price: 360000, sizes: "46, 48, 50, 52, 54", img: "5404527562865707979.jpg" },
            { id: 123, name: "*124 TREND VECHERNIY😍", cat: "MATERIALI PISOK ASTARLI ", price: 320000, sizes: "46, 56", img: "5427049941865464547.jpg" },
            { id: 124, name: "*125 TREND VECHERNIY😍😍😍", cat: "MATERIALI PISOK ASTARLI", price: 310000, sizes: "46, 56", img: "5426900721816693399.jpg" },
            { id: 125, name: "*126 Ruma premium", cat: "Matosi dvoyka matoviy atlas eng yaxshisi ", price: 405000, sizes: "aloqada tanlanadi!", img: "5404464701724365324.jpg" },
            { id: 126, name: "*127 Ruma premium", cat: "Matosi dvoyka matoviy atlas eng yaxshisi ", price: 410000, sizes: "aloqada tanlanadi!", img: "5404464701724365326.jpg" },
            { id: 127, name: "*128 𑀉AVANDA  COLLECTION", cat: "Материали barbie Тошлари ручная работа ", price: 350000, sizes: "44, 50", img: "5371082476434350512.jpg" },
            { id: 128, name: "*129 New platye +sharf", cat: "🌷Matosi organza eng yaxshisi ", price: 400000, sizes: "42, 44, 46, 50", img: "5325549200260927222.jpg" },
            { id: 129, name: "*130 New platye +baska karset ", cat: "Matosi matoviy atlas +barxit (astarli)", price: 400000, sizes: "42, 46, 48, 52", img: "5404464701724365328.jpg" },
            { id: 130, name: "*131 🩵New platye +sharf", cat: "🌷Matosi organza yumshoq ", price: 455000, sizes: "42, 44, 46, 48", img: "5404464701724365329.jpg" },
            { id: 132, name: "*132 🩵New platye +sharf", cat: "🌷Matosi organza yumshoq ", price: 450000, sizes: "42, 44, 46, 48", img: "5404464701724365330.jpg" },
            { id: 133, name: "*133 Trend dvoyka", cat: "NEW COLLECTION", price: 335000, sizes: "aloqada tanlanadi!", img: "5469641023710953531.jpg" },
            { id: 134, name: "*134 ✨baza ko’yle+baska", cat: "Material:barxt+sholk", price: 360000, sizes: "42, 48", img: "5404464701724365332.jpg" },
            { id: 135, name: "*135 New platye +sharf", cat: "🌷Matosi organza eng yaxshisi ", price: 405000, sizes: "42, 44, 46, 50", img: "5325549200260927224.jpg" },
            { id: 136, name: "*136 ℕ𝔼𝕎  𝕐𝕆ℤ ℂ𝕆𝕃𝕃𝔼ℂ𝕋𝕀𝕆ℕ", cat: "💎💎MATOSI LUX 😍", price: 320000, sizes: "S, M, L, XL, XXL", img: "5404464701724365336.jpg" },
            { id: 137, name: "*137 ВЕЧЕРНИЙ КОЙНЕ", cat: " МАТЕРИАЛ ПЕСОЧНЫЙ АТЛАС", price: 370000, sizes: "44, 46, 48, 50", img: "5404464701724365340.jpg" },
            { id: 138, name: "*138 🌟ВЕЧЕРНИЙ ", cat: "🌟МАТЕРЯЛ БАРБИ ХИТОЙ", price: 310000, sizes: "44, 46, 48, 50", img: "5202095334610824241.jpg" },
            { id: 139, name: "*139 🌟 Novinka :  Vecherniy Ko'ylak ", cat: "🌟 Materiyali : Barxit toshsi", price: 310000, sizes: "44, 50,", img: "5325838642401972166.jpg" },
            { id: 140, name: "*140 ВЕЧЕРНЫЙ КУЙЛАКЛАР", cat: "МАТЕРЯЛИ БАРБИ", price: 380000, sizes: "44, 46, 48, 50", img: "5307990308802989283.jpg" },
            { id: 141, name: "*141 New platye +sharf", cat: "🌷Matosi organza eng yaxshisi ", price: 410000, sizes: "42, 44, 46, 50", img: "5325549200260927223.jpg" },
            { id: 142, name: "*142 oq rangli", cat: "Хитойдан арганза чиройли вечерний куйлаги", price: 490000, sizes: "M, L, XL, 2XL", img: "photo_2026-01-07_23-04-21.jpg" },
            { id: 143, name: "*143 ✨baza ko’yle+baska", cat: "Material:barxt+sholk", price: 465000, sizes: "42, 48", img: "5404464701724365334.jpg" },
            { id: 144, name: "*144 ВЕЧЕРНЫЙ КУЙЛАКЛАР", cat: "МАТЕРЯЛИ БАРБИ", price: 370000, sizes: "42, 44, 46, 50", img: "5319210279503596700.jpg" },
            { id: 145, name: "*145 ВЕЧЕРНЫЙ КУЙЛАКЛАР", cat: "МАТЕРЯЛИ БАРБИ", price: 375000, sizes: "42, 44, 46, 50", img: "5319210279503596704.jpg" },
            { id: 146, name: "*146 ВЕЧЕРНЫЙ КУЙЛАКЛАР", cat: "МАТЕРЯЛИ АТЛАС ", price: 375000, sizes: "42, 44, 46, 50", img: "5212927779005991793.jpg" },
            { id: 147, name: "*147 ASAL KOFTA YUPKA 🥰🥰", cat: "MATERILA BARXIT ", price: 360000, sizes: "46, 48, 50, 52, 54", img: "5404464701724365342.jpg" },
            { id: 148, name: "*148 VECHERKA", cat: "MATERIAL ATLAS VA BARXIT ", price: 390000, sizes: "46, 48, 50, 52", img: "5404464701724365344.jpg" },
            { id: 149, name: "*149 TRENDIVIY NOVINKA", cat: "KOFTA YUPKA KOFTA BARXIT", price: 360000, sizes: "46, 48, 50, 52, 54", img: "5404464701724365345.jpg" },
            { id: 150, name: "*150 TRENDIVIY NOVINKA", cat: "KOFTA YUPKA KOFTA BARXIT", price: 370000, sizes: "46, 48, 50, 52, 54", img: "5404464701724365346.jpg" },
            { id: 151, name: "*151 VECHERKA", cat: "MATERIAL BARXIT ", price: 330000, sizes: "44, 46, 48, 50, 52", img: "5303255292042744483.jpg" },
            { id: 152, name: "*152 vechirniy koylelari", cat: "Ustilada asaaall bolb turadi😍😍😍", price: 360000, sizes: "46, 48, 50, 52", img: "5404464701724365410.jpg" },
            { id: 153, name: "*153 vechirniy koylelari", cat: "Ustilada asaaall bolb turadi😍😍😍", price: 365000, sizes: "46, 48, 50, 52", img: "5217732769369683414.jpg" },
            { id: 154, name: "*154 materiali polnachos koja+ oisha ", cat: "YANGI YILGA SUPPER ", price: 379000, sizes: "46, 48, 50, 52", img: "5418169942365900536 (1).jpg" },
            { id: 155, name: "*155 materiali polnachos koja+ oisha", cat: "YANGI YILGA SUPPER", price: 379000, sizes: "46, 48, 50, 52", img: "5418169942365900535 (1).jpg" },
            { id: 156, name: "*156 PREMIUM STYLE — ҲАММА УЧУН! ", cat: "👗 Стиль – сиз ҳақингизда гапиради!", price: 240000, sizes: "46, 48, 50, 52", img: "5418169942365900534.jpg" },
            { id: 157, name: "*157 PREMIUM STYLE — ҲАММА УЧУН!", cat: "👗 Стиль – сиз ҳақингизда гапиради!", price: 240000, sizes: "46, 48, 50, 52", img: "5418169942365900532.jpg" },
            { id: 158, name: "*158 АСАЛ_ВЕЧЕРНИЙ", cat: "МАТРАЛ_натуралка б", price: 405000, sizes: "46, 48, 50, 52, 54", img: "5418169942365900530.jpg" },
            { id: 159, name: "*159 Kofta yupka 3 sezon", cat: "Sifati zor issiqina mazza qib kiyadigan", price: 300000, sizes: "STANDART", img: "5418169942365900524.jpg" },
            { id: 160, name: "*160  ❤️ Koʻyne + sharf + kamar", cat: "Materiali.❗️❗️❗️❗️❗️❗️ Hb arganza ichi koʻrinmidi", price: 340000, sizes: "44, 46, 50, 52", img: "5418169942365900521.jpg" },
            { id: 161, name: "*161 ❤️ Koʻyne + sharf + kamar", cat: "Materiali.❗️❗️❗️❗️❗️❗️ Hb arganza ichi koʻrinmidi", price: 340000, sizes: "44, 46, 50, 52", img: "5418169942365900518.jpg" },
            { id: 162, name: "*162 Nalichi😍 Abaya+takoy❤️", cat: "Matosi-Armani sholk", price: 350000, sizes: "46, 48, 50, 52, 54", img: "5418169942365900516.jpg" },
            { id: 163, name: "*163 💎 PREMIUM STYLE — ҲАММА УЧУН! 💎 ", cat: "👗 Стиль – сиз ҳақингизда гапиради!", price: 350000, sizes: "46, 48, 50, 52", img: "5418169942365900503.jpg" },
            { id: 164, name: "*164 💎 PREMIUM STYLE — ҲАММА УЧУН! 💎 ", cat: "👗 Стиль – сиз ҳақингизда гапиради!", price: 350000, sizes: "46, 48, 50, 52", img: "5418169942365900500.jpg" },
            { id: 26, name: "*165 vecherniy KOFTA YUBKALRI", cat: "CHEGIRMADA 🙀💣", price: 240000, sizes: "STANDART", img: "5368850150006131598.jpg" },
            { id: 27, name: "*166 vecherniy KOFTA YUBKALRI", cat: "CHEGIRMADA 🙀💣", price: 250000, sizes: "STANDART", img: "5368850150006131608 (1).jpg" },
            { id: 28, name: "*167 💎 PREMIUM STYLE — ҲАММА УЧУН! 💎 ", cat: "👗 Стиль – сиз ҳақингизда гапиради!", price: 340000, sizes: "46, 48, 50, 52", img: "5411329614241532674 (1).jpg" },
            { id: 29, name: "*168 АСАЛ_ВЕЧЕРНИЙ", cat: "МАТРАЛ_натуралка б  ", price: 409000, sizes: "46, 48, 50, 52, 54", img: "5471900696199680242.jpg" },
            { id: 30, name: "*169 ☃️koyne new vecherniy ", cat: "☃️☃️BANBUK _v tozasi ", price: 300000, sizes: "44, 46, 50, 52 ", img: "5255705906677222603 (1).jpg" },
            { id: 31, name: "*170 АСАЛ_ДВОЙКА", cat: "МАТРАЛ_ЖЕНСИЙ", price: 249000, sizes: "44, 46, 50, 52", img: "5318803361413326851 (1).jpg" },
            { id: 32, name: "*171 Baza koylagi ", cat: "Matosi qalin  kuzgi qishgi oysho arginali", price: 310000, sizes: "46, 48, 50, 52, 54, 56, 58", img: "5314270848069865957 (1).jpg" },
            { id: 33, name: "*172 NAVINKA DVOYKA", cat: "MATOSI : KOYLAGI OYSHA ", price: 340000, sizes: "46, 48, 50, 52", img: "5406960086313276038 (1).jpg" },
            { id: 34, name: "*173 NAVINKA DVOYKA", cat: "MATOSI : KOYLAGI OYSHA", price: 345000, sizes: "46, 48, 50, 52", img: "5406960086313276040 (1).jpg" },
            { id: 35, name: "*174 ❤️Kuz  Qishki vecherniy kiyimi", cat: "❤️ Materiali.Villur karaleviszkiy yaxshisi.", price: 320000, sizes: "44, 46, 48, 50", img: "5465653541713605368 (1).jpg" },
            { id: 36, name: "*175 ❤️Kuz  Qishki vecherniy kiyimi", cat: "❤️ Materiali.Villur karaleviszkiy yaxshisi.", price: 320000, sizes: "44, 46, 48, 50", img: "5402381118596049110.jpg" },
            { id: 37, name: "*176 ❤️Kuz  Qishki vecherniy kiyimi", cat: "❤️ Materiali.Villur karaleviszkiy yaxshisi.", price: 320000, sizes: "44, 46, 48, 50", img: "5402381118596049104 (1).jpg" },
            { id: 38, name: "*177 ❤️Kuz  Qishki vecherniy kiyimi", cat: "❤️ Materiali.Villur karaleviszkiy yaxshisi.", price: 320000, sizes: "44, 46, 48, 50", img: "5255862312202532492 (1).jpg" },
            { id: 39, name: "*178 chiroyli vicherniy kuylaklar", cat: "Materiali:   Setka", price: 310000, sizes: "44, 46, 48, 50, 52, 54", img: "5291969011338310681 (1).jpg" },
            { id: 40, name: "*179 dvoyka frasus gipyurli", cat: "matosi: frasus gipyur+barbi", price: 360000, sizes: "48, 50, 52, 54", img: "5413706655301569433 (1).jpg" },
            { id: 41, name: "*180 dvoyka frasus gipyurli ", cat: "matosi: frasus gipyur+barbi", price: 360000, sizes: "48, 50, 52, 54", img: "5413706655301569432 (1).jpg" },
            { id: 26, name: "*181 dvoyka frasus gipyurli", cat: "matosi: frasus gipyur+barbi", price: 360000, sizes: "48, 50, 52, 54", img: "5413706655301569434 (1).jpg" },
            { id: 27, name: "*182 ✨Двойка Пиджак✨ БИШКЕК", cat: "✨Качество отличное👍", price: 490000, sizes: "50, 52, 54", img: "5215454104539303926 (1).jpg" },
            { id: 28, name: "*183 koylak", cat: "🌺🌺NAVINKA  🌺🌺 ", price: 330000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834577 (1).jpg" },
            { id: 29, name: "*184 koylak", cat: "🌺🌺NAVINKA  🌺🌺 ", price: 330000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834581 (1).jpg" },
            { id: 30, name: "*185 koylak ", cat: "🌺🌺NAVINKA  🌺🌺 ", price: 340000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834603 (1).jpg" },
            { id: 31, name: "*186 koylak", cat: "🌺🌺Matreali,  Barbi ", price: 340000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834619 (1).jpg" },
            { id: 32, name: "*187 Koylak", cat: "🌺🌺Matreali,  Barbi ", price: 340000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834684.jpg" },
            { id: 33, name: "*188 Koylak", cat: "🌺🌺Matreali,  Barbi ", price: 340000, sizes: "44, 46, 48, 50, 52", img: "5411235674716834692.jpg" },
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