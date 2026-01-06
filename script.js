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
            { id: 48, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 49, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 50, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 51, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 52, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 53, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 54, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 55, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 56, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 57, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 58, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 59, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 60, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 61, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 62, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 63, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 64, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 65, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 66, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 67, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 68, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 69, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 70, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 71, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 72, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 73, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 74, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 75, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 76, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 77, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 78, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 79, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 80, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 81, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 82, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 83, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 84, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 85, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 86, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 87, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 88, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 89, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 90, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 91, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 92, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 93, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 94, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 95, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 96, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 97, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 98, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 99, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 100, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 101, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 102, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 103, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 104, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 105, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 106, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 107, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 108, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 109, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 110, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 111, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 112, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 113, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 114, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 115, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 116, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 117, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 118, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 119, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 120, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 121, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 122, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 123, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 124, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 125, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 126, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 127, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 128, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 129, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 130, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 131, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 132, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 133, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 134, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 135, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 136, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 137, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 138, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
            { id: 139, name: "", cat: "", price: 520000, sizes: "S, M, L", img: "" },
            { id: 140, name: "", cat: "", price: 390000, sizes: "S, M", img: "" },
            { id: 141, name: "", cat: "", price: 610000, sizes: "M, L", img: "" },
            { id: 142, name: "", cat: "", price: 750000, sizes: "M, L", img: "" },
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