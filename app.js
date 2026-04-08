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
const list = document.getElementById("list");
const counter = document.getElementById("counter");
const toast = document.getElementById("toast");
const loader = document.getElementById("cloud-loader");
const loaderText = document.getElementById("loader-text");

const paginationBox = document.getElementById("paginationBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

// ================= LOAD DATA CLOUD (SANGAT CEPAT) =================
async function loadDataFromCloud() {
  try {
    let allWords = [];
    let isFetching = true;
    let startRow = 0;
    const limit = 1000;

    // HANYA narik kamus utama, tinggalkan data used & deleted biar ngebut!
    while (isFetching) {
      const { data, error } = await supabaseClient
        .from("kamus_global")
        .select("word")
        .range(startRow, startRow + limit - 1);

      if (error) throw error;

      if (data && data.length > 0) {
        allWords.push(...data.map((i) => i.word));
        startRow += limit;
        loaderText.innerText = `Loading: ${allWords.length} kata...`;
        if (data.length < limit) isFetching = false;
      } else {
        isFetching = false;
      }
    }

    words = allWords;
    loader.style.display = "none";
    showToast(`✅ ${words.length} Kata Siap!`);

    performSearch(); // Tampilkan awal
  } catch (err) {
    console.error(err);
    alert("Gagal konek ke Cloud. Cek internet HP kamu!");
  }
}

// ================= FUNGSI PENCARIAN UTAMA =================
function performSearch() {
  const prefix = prefixInput.value.toLowerCase().trim();
  const suffix = suffixInput.value.toLowerCase().trim();

  // Filter kata berdasarkan input
  allFilteredResults = words.filter((w) => {
    const matchPrefix = prefix ? w.startsWith(prefix) : true;
    const matchSuffix = suffix ? w.endsWith(suffix) : true;
    return matchPrefix && matchSuffix;
  });

  // Urutkan dari yang terpendek (biar cepat ngetiknya di game)
  allFilteredResults.sort((a, b) => a.length - b.length || a.localeCompare(b));

  // Reset ke halaman 1 setiap kali ngetik input baru
  currentPage = 1;
  updatePagination();
}

// ================= LOGIKA PAGINATION =================
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
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  pageInfo.innerText = `Hal ${currentPage} / ${totalPages}`;

  // Matikan tombol kalau mentok
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  // Potong array sesuai halaman
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const displayResults = allFilteredResults.slice(start, end);

  renderList(displayResults);
}

// Aksi Tombol Pagination
prevBtn.addEventListener("click", () => {
  currentPage--;
  updatePagination();
  list.scrollTo(0, 0); // Scroll ke atas otomatis
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  updatePagination();
  list.scrollTo(0, 0);
});

// ================= RENDER LIST =================
function renderList(resultArray) {
  list.innerHTML = "";

  resultArray.forEach((word) => {
    const li = document.createElement("div");
    li.className = "item";

    const span = document.createElement("span");
    span.className = "item-text";
    span.innerText = word;

    // Tombol COPY 📋
    const copyBtn = document.createElement("button");
    copyBtn.innerText = "📋 Copy";
    copyBtn.className = "copy-btn";

    copyBtn.onclick = () => {
      navigator.clipboard.writeText(word);
      showToast(`Tersalin: ${word}`);
      // Ubah visual sedikit biar tahu udah dicopy
      copyBtn.innerText = "✔️ Copied";
      copyBtn.style.background = "#00e676";
      copyBtn.style.color = "black";
      setTimeout(() => {
        copyBtn.innerText = "📋 Copy";
        copyBtn.style.background = "#333";
        copyBtn.style.color = "white";
      }, 1500);
    };

    li.appendChild(span);
    li.appendChild(copyBtn);
    list.appendChild(li);
  });
}

// ================= EVENT LISTENERS =================
prefixInput.addEventListener("input", performSearch);
suffixInput.addEventListener("input", performSearch);

function showToast(msg) {
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 1500);
}

// Mulai
loadDataFromCloud();
