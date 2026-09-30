// Database kamus
const kamus = {
    "makan": {
        inggris: "Eat",
        jepang: "食べる",
        romaji: "Taberu",
        mandarin: "吃",
        pinyin: "Chī"
    },

    "minum": {
        inggris: "Drink",
        jepang: "飲む",
        romaji: "Nomu",
        mandarin: "喝",
        pinyin: "Hē"
    },

    "rumah": {
        inggris: "House",
        jepang: "家",
        romaji: "Ie",
        mandarin: "房子",
        pinyin: "Fángzi"
    },

    "sekolah": {
        inggris: "School",
        jepang: "学校",
        romaji: "Gakkou",
        mandarin: "学校",
        pinyin: "Xuéxiào"
    },

    "buku": {
        inggris: "Book",
        jepang: "本",
        romaji: "Hon",
        mandarin: "书",
        pinyin: "Shū"
    },

    "meja": {
        inggris: "Table",
        jepang: "机",
        romaji: "Tsukue",
        mandarin: "桌子",
        pinyin: "Zhuōzi"
    },

    "kursi": {
        inggris: "Chair",
        jepang: "椅子",
        romaji: "Isu",
        mandarin: "椅子",
        pinyin: "Yǐzi"
    },

    "air": {
        inggris: "Water",
        jepang: "水",
        romaji: "Mizu",
        mandarin: "水",
        pinyin: "Shuǐ"
    },

    "api": {
        inggris: "Fire",
        jepang: "火",
        romaji: "Hi",
        mandarin: "火",
        pinyin: "Huǒ"
    },

    "matahari": {
        inggris: "Sun",
        jepang: "太陽",
        romaji: "Taiyou",
        mandarin: "太阳",
        pinyin: "Tàiyáng"
    },

    "bulan": {
        inggris: "Moon",
        jepang: "月",
        romaji: "Tsuki",
        mandarin: "月亮",
        pinyin: "Yuèliang"
    },

    "teman": {
        inggris: "Friend",
        jepang: "友達",
        romaji: "Tomodachi",
        mandarin: "朋友",
        pinyin: "Péngyou"
    },

    "guru": {
        inggris: "Teacher",
        jepang: "先生",
        romaji: "Sensei",
        mandarin: "老师",
        pinyin: "Lǎoshī"
    },

    "murid": {
        inggris: "Student",
        jepang: "学生",
        romaji: "Gakusei",
        mandarin: "学生",
        pinyin: "Xuéshēng"
    },

    "cinta": {
        inggris: "Love",
        jepang: "愛",
        romaji: "Ai",
        mandarin: "爱",
        pinyin: "Ài"
    },

    "selamat": {
        inggris: "Congratulations",
        jepang: "おめでとう",
        romaji: "Omedetou",
        mandarin: "恭喜",
        pinyin: "Gōngxǐ"
    }
};


// Fungsi mencari kata
function cariKata() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const hasil = document.getElementById("hasil");

    if (input === "") {
        hasil.innerHTML = `
            <p class="petunjuk">
                Silakan masukkan kata yang ingin dicari.
            </p>
        `;
        return;
    }

    if (kamus[input]) {

        const data = kamus[input];

        hasil.innerHTML = `
            <h2 style="margin-bottom:15px;">
                Hasil: ${input}
            </h2>

            <div class="hasil-kamus">

                <div class="kartu">
                    <h3>🇬🇧 Inggris</h3>
                    <div class="kata">
                        ${data.inggris}
                    </div>
                </div>

                <div class="kartu">
                    <h3>🇯🇵 Jepang</h3>
                    <div class="kata">
                        ${data.jepang}
                    </div>
                    <div class="cara-baca">
                        ${data.romaji}
                    </div>
                </div>

                <div class="kartu">
                    <h3>🇨🇳 Mandarin</h3>
                    <div class="kata">
                        ${data.mandarin}
                    </div>
                    <div class="cara-baca">
                        ${data.pinyin}
                    </div>
                </div>

            </div>
        `;

    } else {

        hasil.innerHTML = `
            <div class="petunjuk">
                ❌ Kata "<b>${input}</b>" tidak ditemukan.
                <br>
                Coba gunakan kata lain.
            </div>
        `;
    }
}


// Menampilkan semua kata
function tampilkanSemua() {

    const tempat = document.getElementById("semuaKata");

    tempat.innerHTML = "";

    Object.keys(kamus).forEach(function(kata) {

        const item = document.createElement("div");

        item.className = "item-kata";

        item.innerHTML = `
            <b>${kata}</b>
            → ${kamus[kata].inggris}
            | ${kamus[kata].jepang}
            | ${kamus[kata].mandarin}
        `;

        item.onclick = function() {
            document.getElementById("searchInput").value = kata;
            cariKata();
        };

        tempat.appendChild(item);
    });
}


// Reset
function resetKamus() {

    document.getElementById("searchInput").value = "";

    document.getElementById("hasil").innerHTML = `
        <p class="petunjuk">
            Ketik kata bahasa Indonesia untuk mencari terjemahan.
        </p>
    `;

    document.getElementById("semuaKata").innerHTML = "";
}