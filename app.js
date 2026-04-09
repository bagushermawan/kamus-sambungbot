const _0x5395d8 = _0x1fdc;
(function (_0x6bbb18, _0x180bd2) {
  const _0x4508e3 = _0x1fdc,
    _0x2b2499 = _0x6bbb18();
  while (!![]) {
    try {
      const _0x392ce6 =
        parseInt(_0x4508e3(0xc1)) / 0x1 +
        -parseInt(_0x4508e3(0x8c)) / 0x2 +
        parseInt(_0x4508e3(0x7e)) / 0x3 +
        (-parseInt(_0x4508e3(0x9e)) / 0x4) *
          (-parseInt(_0x4508e3(0x71)) / 0x5) +
        (-parseInt(_0x4508e3(0x86)) / 0x6) * (parseInt(_0x4508e3(0xaa)) / 0x7) +
        (parseInt(_0x4508e3(0xcd)) / 0x8) * (-parseInt(_0x4508e3(0xb0)) / 0x9) +
        parseInt(_0x4508e3(0x84)) / 0xa;
      if (_0x392ce6 === _0x180bd2) break;
      else _0x2b2499["push"](_0x2b2499["shift"]());
    } catch (_0x2ad61a) {
      _0x2b2499["push"](_0x2b2499["shift"]());
    }
  }
})(_0x5d5d, 0x66521);
const SUPABASE_URL = _0x5395d8(0xc9),
  SUPABASE_KEY = "sb_publishable_1o9iZscYpzdpg7eEY3xwqQ_zvgsjdrX",
  supabaseClient = window["supabase"][_0x5395d8(0xab)](
    SUPABASE_URL,
    SUPABASE_KEY,
  );
let words = [],
  allFilteredResults = [];
function _0x5d5d() {
  const _0x396c37 = [
    "\x20kata...",
    "Mengirim...",
    "value",
    "992324jtXUfA",
    "item-text",
    "none",
    "trim",
    "Kata\x20tidak\x20boleh\x20kosong!",
    "focus",
    "toLowerCase",
    "black",
    "innerHTML",
    "scrollTo",
    "Loading:\x20",
    "kamus_usulan",
    "Anonim",
    "loader-text",
    "localeCompare",
    "insert",
    "prevBtn",
    "flex",
    "2783448JRglCg",
    "\x20/\x20",
    "Hal\x20",
    "range",
    "getItem",
    "addEventListener",
    "endsWith",
    "forEach",
    "item-left",
    "disabled",
    "inputSumbangNama",
    "createElement",
    "749XnBkxJ",
    "createClient",
    "push",
    "click",
    "nextBtn",
    "Kirim",
    "5666382JCdweR",
    "opera",
    "ceil",
    "Ditemukan:\x200\x20kata",
    "setItem",
    "userAgent",
    "iOS",
    "pageInfo",
    "#00e676",
    "className",
    "clipboard",
    "MSStream",
    "suffixInput",
    "Android",
    "style",
    "getElementById",
    "sumbangModal",
    "127410jaMnlV",
    "\x20kata",
    "Harap\x20isi\x20Nickname\x20kamu!",
    "filter",
    "openSumbangBtn",
    "display",
    "✅\x20Berhasil!\x20Menunggu\x20persetujuan.",
    "appendChild",
    "https://lsnomevsllvjguotwchm.supabase.co",
    "cloud-loader",
    "select",
    "innerText",
    "8ePYrMl",
    "vendor",
    "✔️\x20Copied",
    "color",
    "background",
    "item",
    "onclick",
    "word",
    "inputSumbangKata",
    "📋\x20Copy",
    "5WDAxbg",
    "length",
    "input",
    "counter",
    "item-number",
    "user_nickname",
    "prefixInput",
    "clearSuffix",
    "Gagal\x20mengirim\x20kata.",
    "paginationBox",
    "kirimSumbangBtn",
    "white",
    "pending",
    "138258UWmhDm",
    "test",
    "error",
    "Tersalin:\x20",
    "copy-btn",
    "span",
    "14832500sVPePO",
    "toast",
    "45294BCqySk",
    "from",
    "slice",
  ];
  _0x5d5d = function () {
    return _0x396c37;
  };
  return _0x5d5d();
}
const ITEMS_PER_PAGE = 0xa;
let currentPage = 0x1;
const prefixInput = document["getElementById"](_0x5395d8(0x77)),
  suffixInput = document["getElementById"](_0x5395d8(0xbc)),
  clearPrefix = document[_0x5395d8(0xbf)]("clearPrefix"),
  clearSuffix = document["getElementById"](_0x5395d8(0x78)),
  list = document[_0x5395d8(0xbf)]("list"),
  counter = document[_0x5395d8(0xbf)](_0x5395d8(0x74)),
  toast = document[_0x5395d8(0xbf)](_0x5395d8(0x85)),
  loader = document["getElementById"](_0x5395d8(0xca)),
  loaderText = document[_0x5395d8(0xbf)](_0x5395d8(0x99)),
  paginationBox = document[_0x5395d8(0xbf)](_0x5395d8(0x7a)),
  prevBtn = document[_0x5395d8(0xbf)](_0x5395d8(0x9c)),
  nextBtn = document[_0x5395d8(0xbf)](_0x5395d8(0xae)),
  pageInfo = document["getElementById"](_0x5395d8(0xb7));
function getPlatform() {
  const _0x3562fa = _0x5395d8,
    _0x5af842 =
      navigator[_0x3562fa(0xb5)] ||
      navigator[_0x3562fa(0xce)] ||
      window[_0x3562fa(0xb1)];
  if (/android/i[_0x3562fa(0x7f)](_0x5af842)) return _0x3562fa(0xbd);
  if (
    /iPad|iPhone|iPod/[_0x3562fa(0x7f)](_0x5af842) &&
    !window[_0x3562fa(0xbb)]
  )
    return _0x3562fa(0xb6);
  return "PC/Web";
}
const sumbangModal = document[_0x5395d8(0xbf)](_0x5395d8(0xc0)),
  openSumbangBtn = document[_0x5395d8(0xbf)](_0x5395d8(0xc5)),
  tutupModalBtn = document["getElementById"]("tutupModalBtn"),
  kirimSumbangBtn = document[_0x5395d8(0xbf)](_0x5395d8(0x7b)),
  inputSumbangKata = document[_0x5395d8(0xbf)](_0x5395d8(0x6f)),
  inputSumbangNama = document[_0x5395d8(0xbf)](_0x5395d8(0xa8));
((openSumbangBtn["onclick"] = () => {
  const _0x1fe588 = _0x5395d8;
  sumbangModal[_0x1fe588(0xbe)][_0x1fe588(0xc6)] = _0x1fe588(0x9d);
  const _0x34981c = localStorage[_0x1fe588(0xa2)](_0x1fe588(0x76));
  _0x34981c &&
    _0x34981c !== _0x1fe588(0x98) &&
    (inputSumbangNama[_0x1fe588(0x8b)] = _0x34981c);
}),
  (tutupModalBtn[_0x5395d8(0x6d)] = () => {
    const _0x4981fa = _0x5395d8;
    sumbangModal[_0x4981fa(0xbe)]["display"] = "none";
  }),
  (kirimSumbangBtn[_0x5395d8(0x6d)] = async () => {
    const _0x3c816e = _0x5395d8,
      _0x44a7c9 = inputSumbangNama[_0x3c816e(0x8b)][_0x3c816e(0x8f)](),
      _0x1bd40f = inputSumbangKata[_0x3c816e(0x8b)]
        [_0x3c816e(0x92)]()
        [_0x3c816e(0x8f)]();
    if (!_0x44a7c9) return alert(_0x3c816e(0xc3));
    if (!_0x1bd40f) return alert(_0x3c816e(0x90));
    (localStorage[_0x3c816e(0xb4)](_0x3c816e(0x76), _0x44a7c9),
      (kirimSumbangBtn["disabled"] = !![]),
      (kirimSumbangBtn[_0x3c816e(0xcc)] = _0x3c816e(0x8a)));
    try {
      const { error: _0x3559c4 } = await supabaseClient[_0x3c816e(0x87)](
        _0x3c816e(0x97),
      )[_0x3c816e(0x9b)]([
        {
          word: _0x1bd40f,
          pengusul: _0x44a7c9,
          platform: getPlatform(),
          status: _0x3c816e(0x7d),
        },
      ]);
      if (_0x3559c4) throw _0x3559c4;
      (showToast(_0x3c816e(0xc7)),
        (inputSumbangKata[_0x3c816e(0x8b)] = ""),
        (sumbangModal[_0x3c816e(0xbe)][_0x3c816e(0xc6)] = _0x3c816e(0x8e)));
    } catch (_0x9cea50) {
      (console[_0x3c816e(0x80)](_0x9cea50), alert(_0x3c816e(0x79)));
    } finally {
      ((kirimSumbangBtn[_0x3c816e(0xa7)] = ![]),
        (kirimSumbangBtn[_0x3c816e(0xcc)] = _0x3c816e(0xaf)));
    }
  }));
async function loadDataFromCloud() {
  const _0x2dc5ca = _0x5395d8;
  try {
    let _0x42b71a = [],
      _0x2939d9 = !![],
      _0x41a39d = 0x0;
    const _0x117972 = 0x3e8;
    while (_0x2939d9) {
      const { data: _0xec1297, error: _0x396df7 } = await supabaseClient[
        _0x2dc5ca(0x87)
      ]("kamus_global")
        [_0x2dc5ca(0xcb)](_0x2dc5ca(0x6e))
        [_0x2dc5ca(0xa1)](_0x41a39d, _0x41a39d + _0x117972 - 0x1);
      if (_0x396df7) throw _0x396df7;
      if (_0xec1297 && _0xec1297[_0x2dc5ca(0x72)] > 0x0) {
        (_0x42b71a[_0x2dc5ca(0xac)](
          ..._0xec1297["map"]((_0x37fc2a) => _0x37fc2a[_0x2dc5ca(0x6e)]),
        ),
          (_0x41a39d += _0x117972),
          (loaderText[_0x2dc5ca(0xcc)] =
            _0x2dc5ca(0x96) + _0x42b71a["length"] + _0x2dc5ca(0x89)));
        if (_0xec1297["length"] < _0x117972) _0x2939d9 = ![];
      } else _0x2939d9 = ![];
    }
    ((words = _0x42b71a),
      (loader["style"][_0x2dc5ca(0xc6)] = "none"),
      showToast("✅\x20" + words[_0x2dc5ca(0x72)] + "\x20Kata\x20Siap!"),
      performSearch());
  } catch (_0x4bae04) {
    (console[_0x2dc5ca(0x80)](_0x4bae04),
      alert(
        "Gagal\x20konek\x20ke\x20Cloud.\x20Cek\x20internet\x20HP\x20kamu!",
      ));
  }
}
function performSearch() {
  const _0x4d82db = _0x5395d8,
    _0x48c1c8 = prefixInput[_0x4d82db(0x8b)][_0x4d82db(0x92)]()["trim"](),
    _0xd0a4e7 = suffixInput["value"][_0x4d82db(0x92)]()[_0x4d82db(0x8f)]();
  ((clearPrefix[_0x4d82db(0xbe)]["display"] = _0x48c1c8 ? "block" : "none"),
    (clearSuffix[_0x4d82db(0xbe)][_0x4d82db(0xc6)] = _0xd0a4e7
      ? "block"
      : _0x4d82db(0x8e)),
    (allFilteredResults = words[_0x4d82db(0xc4)]((_0x2f7f84) => {
      const _0x7994fa = _0x4d82db,
        _0x2407cf = _0x48c1c8 ? _0x2f7f84["startsWith"](_0x48c1c8) : !![],
        _0x1b3068 = _0xd0a4e7 ? _0x2f7f84[_0x7994fa(0xa4)](_0xd0a4e7) : !![];
      return _0x2407cf && _0x1b3068;
    })),
    allFilteredResults["sort"](
      (_0x27fdcd, _0x38527d) =>
        _0x27fdcd[_0x4d82db(0x72)] - _0x38527d["length"] ||
        _0x27fdcd[_0x4d82db(0x9a)](_0x38527d),
    ),
    (currentPage = 0x1),
    updatePagination());
}
function updatePagination() {
  const _0x49e179 = _0x5395d8,
    _0x507b39 = allFilteredResults[_0x49e179(0x72)];
  if (_0x507b39 === 0x0) {
    ((list[_0x49e179(0x94)] =
      "<div\x20style=\x22text-align:center;\x20color:#ff4444;\x20margin-top:20px;\x22>❌\x20Tidak\x20ditemukan</div>"),
      (paginationBox[_0x49e179(0xbe)]["display"] = _0x49e179(0x8e)),
      (counter[_0x49e179(0xcc)] = _0x49e179(0xb3)));
    return;
  }
  ((paginationBox[_0x49e179(0xbe)]["display"] = _0x49e179(0x9d)),
    (counter["innerText"] =
      "🎯\x20Ditemukan:\x20" + _0x507b39 + _0x49e179(0xc2)));
  const _0x4b4e5b = Math["ceil"](_0x507b39 / ITEMS_PER_PAGE);
  if (currentPage > _0x4b4e5b) currentPage = _0x4b4e5b;
  if (currentPage < 0x1) currentPage = 0x1;
  pageInfo["innerText"] =
    _0x49e179(0xa0) + currentPage + _0x49e179(0x9f) + _0x4b4e5b;
  const _0x4b744e = (currentPage - 0x1) * ITEMS_PER_PAGE,
    _0x2b749b = _0x4b744e + ITEMS_PER_PAGE,
    _0x16a736 = allFilteredResults[_0x49e179(0x88)](_0x4b744e, _0x2b749b);
  renderList(_0x16a736);
}
function _0x1fdc(_0x4fcfeb, _0x5d4b1c) {
  _0x4fcfeb = _0x4fcfeb - 0x6d;
  const _0x5d5d9f = _0x5d5d();
  let _0x1fdcb9 = _0x5d5d9f[_0x4fcfeb];
  return _0x1fdcb9;
}
(prevBtn[_0x5395d8(0xa3)](_0x5395d8(0xad), () => {
  const _0x3f8a0f = _0x5395d8,
    _0x1a3cea = Math[_0x3f8a0f(0xb2)](
      allFilteredResults[_0x3f8a0f(0x72)] / ITEMS_PER_PAGE,
    );
  (currentPage === 0x1 ? (currentPage = _0x1a3cea) : currentPage--,
    updatePagination(),
    list[_0x3f8a0f(0x95)](0x0, 0x0));
}),
  nextBtn[_0x5395d8(0xa3)](_0x5395d8(0xad), () => {
    const _0x3ef4fa = _0x5395d8,
      _0x34186b = Math[_0x3ef4fa(0xb2)](
        allFilteredResults[_0x3ef4fa(0x72)] / ITEMS_PER_PAGE,
      );
    (currentPage === _0x34186b ? (currentPage = 0x1) : currentPage++,
      updatePagination(),
      list[_0x3ef4fa(0x95)](0x0, 0x0));
  }),
  prevBtn[_0x5395d8(0xa3)](_0x5395d8(0xad), () => {
    const _0x9a5e2a = _0x5395d8;
    (currentPage--, updatePagination(), list[_0x9a5e2a(0x95)](0x0, 0x0));
  }),
  nextBtn[_0x5395d8(0xa3)](_0x5395d8(0xad), () => {
    const _0x3d4215 = _0x5395d8;
    (currentPage++, updatePagination(), list[_0x3d4215(0x95)](0x0, 0x0));
  }));
function renderList(_0x41c749) {
  const _0x28b5a9 = _0x5395d8;
  list[_0x28b5a9(0x94)] = "";
  const _0x243731 = (currentPage - 0x1) * ITEMS_PER_PAGE;
  _0x41c749[_0x28b5a9(0xa5)]((_0xc01b44, _0x3e5230) => {
    const _0x525d04 = _0x28b5a9,
      _0x4a584d = document[_0x525d04(0xa9)]("div");
    _0x4a584d[_0x525d04(0xb9)] = _0x525d04(0xd2);
    const _0x48a31e = document["createElement"]("div");
    _0x48a31e["className"] = _0x525d04(0xa6);
    const _0x103e8c = document[_0x525d04(0xa9)]("span");
    ((_0x103e8c[_0x525d04(0xb9)] = _0x525d04(0x75)),
      (_0x103e8c[_0x525d04(0xcc)] = _0x243731 + _0x3e5230 + 0x1 + "."));
    const _0x47c89f = document[_0x525d04(0xa9)](_0x525d04(0x83));
    ((_0x47c89f[_0x525d04(0xb9)] = _0x525d04(0x8d)),
      (_0x47c89f[_0x525d04(0xcc)] = _0xc01b44),
      _0x48a31e["appendChild"](_0x103e8c),
      _0x48a31e[_0x525d04(0xc8)](_0x47c89f));
    const _0x468ce1 = document["createElement"]("button");
    ((_0x468ce1[_0x525d04(0xcc)] = "📋"),
      (_0x468ce1["className"] = _0x525d04(0x82)),
      (_0x468ce1[_0x525d04(0x6d)] = () => {
        const _0x937e11 = _0x525d04;
        (navigator[_0x937e11(0xba)]["writeText"](_0xc01b44),
          showToast(_0x937e11(0x81) + _0xc01b44),
          (_0x468ce1[_0x937e11(0xcc)] = _0x937e11(0xcf)),
          (_0x468ce1[_0x937e11(0xbe)][_0x937e11(0xd1)] = _0x937e11(0xb8)),
          (_0x468ce1[_0x937e11(0xbe)][_0x937e11(0xd0)] = _0x937e11(0x93)),
          setTimeout(() => {
            const _0x1660a8 = _0x937e11;
            ((_0x468ce1[_0x1660a8(0xcc)] = _0x1660a8(0x70)),
              (_0x468ce1[_0x1660a8(0xbe)][_0x1660a8(0xd1)] = "#333"),
              (_0x468ce1[_0x1660a8(0xbe)][_0x1660a8(0xd0)] = _0x1660a8(0x7c)));
          }, 0x5dc));
      }),
      _0x4a584d[_0x525d04(0xc8)](_0x48a31e),
      _0x4a584d[_0x525d04(0xc8)](_0x468ce1),
      list[_0x525d04(0xc8)](_0x4a584d));
  });
}
(prefixInput[_0x5395d8(0xa3)](_0x5395d8(0x73), performSearch),
  suffixInput["addEventListener"](_0x5395d8(0x73), performSearch),
  clearPrefix[_0x5395d8(0xa3)]("click", () => {
    ((prefixInput["value"] = ""), performSearch(), prefixInput["focus"]());
  }),
  clearSuffix[_0x5395d8(0xa3)](_0x5395d8(0xad), () => {
    const _0x3994c1 = _0x5395d8;
    ((suffixInput[_0x3994c1(0x8b)] = ""),
      performSearch(),
      suffixInput[_0x3994c1(0x91)]());
  }));
function showToast(_0x129d86) {
  const _0x3733bf = _0x5395d8;
  ((toast[_0x3733bf(0xcc)] = _0x129d86),
    (toast[_0x3733bf(0xbe)][_0x3733bf(0xc6)] = "block"),
    setTimeout(
      () => (toast[_0x3733bf(0xbe)][_0x3733bf(0xc6)] = _0x3733bf(0x8e)),
      0x5dc,
    ));
}
loadDataFromCloud();
