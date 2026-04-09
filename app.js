// Konfigurasi Supabase
const SUPABASE_URL = "https://lsnomevsllvjguotwchm.supabase.co";
const SUPABASE_KEY = "sb_publishable_1o9iZscYpzdpg7eEY3xwqQ_zvgsjdrX";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// State Data
let words = [];
let allFilteredResults = [];

// Pagination Config
const ITEMS_PER_PAGE = 10; // Jumlah kata per halaman
let currentPage = 1;

// DOM Elements
const prefixInput = document.getElementById("prefixInput");
const suffixInput = document.getElementById("suffixInput");
const clearPrefix = document.getElementById("clearPrefix");
const clearSuffix = document.getElementById("clearSuffix");

const list = document.getElementById("list");
const counter = document.getElementById("counter");
const toast = document.getElementById("toast");
const loader = document.getElementById("cloud-loader");
const loaderText = document.getElementById("loader-text");

const paginationBox = document.getElementById("paginationBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

// ================= FUNGSI DETEKSI PLATFORM =================
function getPlatform() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) return "Android";
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
  return "PC/Web";
}

// ================= LOGIKA MODAL SUMBANG KATA =================
const sumbangModal = document.getElementById('sumbangModal');
const openSumbangBtn = document.getElementById('openSumbangBtn');
const tutupModalBtn = document.getElementById('tutupModalBtn');
const kirimSumbangBtn = document.getElementById('kirimSumbangBtn');
const inputSumbangKata = document.getElementById('inputSumbangKata');
const inputSumbangNama = document.getElementById('inputSumbangNama'); // Elemen baru

// Buka Modal & Cek LocalStorage
openSumbangBtn.onclick = () => {
  sumbangModal.style.display = 'flex';
  
  // Kalau sebelumnya sudah pernah isi nama, otomatis panggil lagi biar gak capek ngetik
  const savedName = localStorage.getItem('user_nickname');
  if (savedName && savedName !== "Anonim") {
    inputSumbangNama.value = savedName;
  }
};

// Tutup Modal
tutupModalBtn.onclick = () => {
  sumbangModal.style.display = 'none';
};

// Eksekusi Kirim Kata
kirimSumbangBtn.onclick = async () => {
  const nicknameInput = inputSumbangNama.value.trim();
  const kataBaru = inputSumbangKata.value.toLowerCase().trim();
  
  // Validasi ketat agar tidak ada yang kosong
  if (!nicknameInput) return alert("Harap isi Nickname kamu!");
  if (!kataBaru) return alert("Kata tidak boleh kosong!");
  
  // Simpan nama ke localStorage agar auto-fill saat buka lagi besok
  localStorage.setItem('user_nickname', nicknameInput);
  
  kirimSumbangBtn.disabled = true;
  kirimSumbangBtn.innerText = "Mengirim...";

  try {
    const { error } = await supabaseClient.from('kamus_usulan').insert([
      { 
        word: kataBaru, 
        pengusul: nicknameInput, 
        platform: getPlatform(),
        status: 'pending' 
      }
    ]);

    if (error) throw error;

    showToast("✅ Berhasil! Menunggu persetujuan.");
    inputSumbangKata.value = ""; // Kosongkan kotaknya saja, namanya biarkan
    sumbangModal.style.display = 'none';
  } catch (err) {
    console.error(err);
    alert("Gagal mengirim kata.");
  } finally {
    kirimSumbangBtn.disabled = false;
    kirimSumbangBtn.innerText = "Kirim";
  }
};

// ================= LOAD DATA CLOUD =================
async function loadDataFromCloud() {
  try {
    let allWords = [];
    let isFetching = true;
    let startRow = 0;
    const limit = 1000;

    while (isFetching) {
      const { data, error } = await supabaseClient
        .from("kamus_global")
        .select("word")
        .range(startRow, startRow + limit - 1);

      if (error) throw error;

      if (data && data.length > 0) {
        allWords.push(...data.map((i) => i.word));
        startRow += limit;
        loaderText.innerText = `Loading: ${allWords.length} words...`;
        if (data.length < limit) isFetching = false;
      } else {
        isFetching = false;
      }
    }

    words = allWords;
    loader.style.display = "none";
    showToast(`✅ ${words.length} Kata Siap!`);

    performSearch();
  } catch (err) {
    console.error(err);
    alert("Gagal konek ke Cloud. Cek internet HP kamu!");
  }
}

// ================= FUNGSI PENCARIAN UTAMA =================
function performSearch() {
  const prefix = prefixInput.value.toLowerCase().trim();
  const suffix = suffixInput.value.toLowerCase().trim();

  // Atur Visibilitas Tombol X
  clearPrefix.style.display = prefix ? "block" : "none";
  clearSuffix.style.display = suffix ? "block" : "none";

  // Filter kata berdasarkan input
  allFilteredResults = words.filter((w) => {
    const matchPrefix = prefix ? w.startsWith(prefix) : true;
    const matchSuffix = suffix ? w.endsWith(suffix) : true;
    return matchPrefix && matchSuffix;
  });

  // Urutkan dari yang terpendek
  allFilteredResults.sort((a, b) => a.length - b.length || a.localeCompare(b));

  // Reset ke halaman 1 setiap kali ngetik input baru
  currentPage = 1;
  updatePagination();
}

// ================= LOGIKA PAGINATION (CIRCULAR MODE) =================
function updatePagination() {
  const totalItems = allFilteredResults.length;

  if (totalItems === 0) {
    list.innerHTML = `<div style="text-align:center; color:#ff4444; margin-top:20px;">❌ Tidak ditemukan</div>`;
    paginationBox.style.display = "none";
    counter.innerText = "Ditemukan: 0 kata";
    return;
  }

  paginationBox.style.display = "flex";
  counter.innerText = `🎯 Ditemukan: ${totalItems} kata`;

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Validasi halaman agar tetap dalam range
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  pageInfo.innerText = `Hal ${currentPage} / ${totalPages}`;

  // HAPUS ATAU KOMENTARI kode .disabled agar tombol tetap aktif
  // prevBtn.disabled = false;
  // nextBtn.disabled = false;

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const displayResults = allFilteredResults.slice(start, end);

  renderList(displayResults);
}

// Update Listener Tombol Prev (Lompat ke Akhir jika di Hal 1)
prevBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(allFilteredResults.length / ITEMS_PER_PAGE);
  if (currentPage === 1) {
    currentPage = totalPages; // Lompat ke halaman terakhir
  } else {
    currentPage--;
  }
  updatePagination();
  list.scrollTo(0, 0);
});

// Update Listener Tombol Next (Lompat ke Awal jika di Hal Terakhir)
nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(allFilteredResults.length / ITEMS_PER_PAGE);
  if (currentPage === totalPages) {
    currentPage = 1; // Lompat kembali ke halaman pertama
  } else {
    currentPage++;
  }
  updatePagination();
  list.scrollTo(0, 0);
});

// Aksi Tombol Pagination
prevBtn.addEventListener("click", () => {
  currentPage--;
  updatePagination();
  list.scrollTo(0, 0);
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  updatePagination();
  list.scrollTo(0, 0);
});

// ================= RENDER LIST (DENGAN NOMOR) =================
function renderList(resultArray) {
  list.innerHTML = "";

  // Hitung angka awal berdasarkan halaman sekarang
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  resultArray.forEach((word, index) => {
    const li = document.createElement("div");
    li.className = "item";

    // Bungkus Kiri (Nomor + Kata)
    const leftDiv = document.createElement("div");
    leftDiv.className = "item-left";

    const numSpan = document.createElement("span");
    numSpan.className = "item-number";
    numSpan.innerText = `${startIndex + index + 1}.`; // Logika penomoran

    const wordSpan = document.createElement("span");
    wordSpan.className = "item-text";
    wordSpan.innerText = word;

    leftDiv.appendChild(numSpan);
    leftDiv.appendChild(wordSpan);

    // Tombol COPY 📋
    const copyBtn = document.createElement("button");
    copyBtn.innerText = "📋";
    copyBtn.className = "copy-btn";

    copyBtn.onclick = () => {
      navigator.clipboard.writeText(word);
      showToast(`Tersalin: ${word}`);
      copyBtn.innerText = "✔️ Copied";
      copyBtn.style.background = "#00e676";
      copyBtn.style.color = "black";
      setTimeout(() => {
        copyBtn.innerText = "📋 Copy";
        copyBtn.style.background = "#333";
        copyBtn.style.color = "white";
      }, 1500);
    };

    li.appendChild(leftDiv);
    li.appendChild(copyBtn);
    list.appendChild(li);
  });
}

// ================= EVENT LISTENERS =================
prefixInput.addEventListener("input", performSearch);
suffixInput.addEventListener("input", performSearch);

// Aksi Klik Tombol X (Clear)
clearPrefix.addEventListener("click", () => {
  prefixInput.value = "";
  performSearch();
  prefixInput.focus(); // Arahkan kursor balik ke input
});

clearSuffix.addEventListener("click", () => {
  suffixInput.value = "";
  performSearch();
  suffixInput.focus();
});

function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 1500);
}

// Mulai
loadDataFromCloud();
