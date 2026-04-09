const _0x2d023b = _0x5b40;
(function (_0x5e6556, _0x252fb9) {
  const _0x459f06 = _0x5b40,
    _0x3e0807 = _0x5e6556();
  while (!![]) {
    try {
      const _0x13e882 =
        (-parseInt(_0x459f06(0x13a)) / 0x1) *
          (-parseInt(_0x459f06(0x147)) / 0x2) +
        (-parseInt(_0x459f06(0x109)) / 0x3) *
          (parseInt(_0x459f06(0x122)) / 0x4) +
        parseInt(_0x459f06(0x125)) / 0x5 +
        (-parseInt(_0x459f06(0x138)) / 0x6) *
          (parseInt(_0x459f06(0x128)) / 0x7) +
        parseInt(_0x459f06(0x110)) / 0x8 +
        (parseInt(_0x459f06(0x10d)) / 0x9) *
          (parseInt(_0x459f06(0x130)) / 0xa) +
        (parseInt(_0x459f06(0x15a)) / 0xb) *
          (-parseInt(_0x459f06(0x14f)) / 0xc);
      if (_0x13e882 === _0x252fb9) break;
      else _0x3e0807["push"](_0x3e0807["shift"]());
    } catch (_0x3bb03d) {
      _0x3e0807["push"](_0x3e0807["shift"]());
    }
  }
})(_0x3c90, 0x269fd);
const SUPABASE_URL = _0x2d023b(0x135),
  SUPABASE_KEY = "sb_publishable_1o9iZscYpzdpg7eEY3xwqQ_zvgsjdrX",
  supabaseClient = window["supabase"][_0x2d023b(0x165)](
    SUPABASE_URL,
    SUPABASE_KEY,
  );
let words = [],
  allFilteredResults = [];
const ITEMS_PER_PAGE = 0xa;
let currentPage = 0x1;
const prefixInput = document[_0x2d023b(0x134)](_0x2d023b(0x142)),
  suffixInput = document[_0x2d023b(0x134)]("suffixInput"),
  clearPrefix = document[_0x2d023b(0x134)]("clearPrefix"),
  clearSuffix = document["getElementById"](_0x2d023b(0x127)),
  list = document[_0x2d023b(0x134)](_0x2d023b(0x16a)),
  counter = document[_0x2d023b(0x134)](_0x2d023b(0x159)),
  toast = document[_0x2d023b(0x134)]("toast"),
  loader = document[_0x2d023b(0x134)](_0x2d023b(0x14b)),
  loaderText = document["getElementById"](_0x2d023b(0x166)),
  paginationBox = document[_0x2d023b(0x134)](_0x2d023b(0x12f)),
  prevBtn = document[_0x2d023b(0x134)](_0x2d023b(0x132)),
  nextBtn = document[_0x2d023b(0x134)](_0x2d023b(0x163)),
  pageInfo = document[_0x2d023b(0x134)]("pageInfo");
function getPlatform() {
  const _0x52995b = _0x2d023b,
    _0xf12364 =
      navigator[_0x52995b(0x171)] ||
      navigator["vendor"] ||
      window[_0x52995b(0x174)];
  if (/android/i["test"](_0xf12364)) return _0x52995b(0x173);
  if (
    /iPad|iPhone|iPod/[_0x52995b(0x118)](_0xf12364) &&
    !window[_0x52995b(0x15e)]
  )
    return _0x52995b(0x11e);
  return _0x52995b(0x149);
}
function _0x5b40(_0x3a7ebd, _0x18dce2) {
  _0x3a7ebd = _0x3a7ebd - 0x109;
  const _0x3c909c = _0x3c90();
  let _0x5b40f9 = _0x3c909c[_0x3a7ebd];
  return _0x5b40f9;
}
const sumbangModal = document["getElementById"](_0x2d023b(0x14c)),
  openSumbangBtn = document[_0x2d023b(0x134)](_0x2d023b(0x10c)),
  tutupModalBtn = document[_0x2d023b(0x134)](_0x2d023b(0x15d)),
  kirimSumbangBtn = document["getElementById"](_0x2d023b(0x114)),
  inputSumbangKata = document[_0x2d023b(0x134)](_0x2d023b(0x160)),
  inputSumbangNama = document[_0x2d023b(0x134)](_0x2d023b(0x170));
((openSumbangBtn[_0x2d023b(0x140)] = () => {
  const _0x5c2e22 = _0x2d023b;
  sumbangModal[_0x5c2e22(0x10a)][_0x5c2e22(0x158)] = _0x5c2e22(0x157);
  const _0xfbe0c = localStorage[_0x5c2e22(0x172)]("user_nickname");
  _0xfbe0c &&
    _0xfbe0c !== _0x5c2e22(0x16d) &&
    (inputSumbangNama[_0x5c2e22(0x121)] = _0xfbe0c);
}),
  (tutupModalBtn["onclick"] = () => {
    const _0x3a62e2 = _0x2d023b;
    sumbangModal[_0x3a62e2(0x10a)][_0x3a62e2(0x158)] = "none";
  }),
  (kirimSumbangBtn[_0x2d023b(0x140)] = async () => {
    const _0x3fd6fe = _0x2d023b,
      _0x3cc454 = inputSumbangNama[_0x3fd6fe(0x121)][_0x3fd6fe(0x112)](),
      _0x2ac766 = inputSumbangKata[_0x3fd6fe(0x121)]
        [_0x3fd6fe(0x133)]()
        [_0x3fd6fe(0x112)]();
    if (!_0x3cc454) return alert(_0x3fd6fe(0x162));
    if (!_0x2ac766) return alert(_0x3fd6fe(0x115));
    (localStorage[_0x3fd6fe(0x12c)](_0x3fd6fe(0x116), _0x3cc454),
      (kirimSumbangBtn[_0x3fd6fe(0x12b)] = !![]),
      (kirimSumbangBtn[_0x3fd6fe(0x16f)] = _0x3fd6fe(0x151)));
    try {
      const { error: _0x3925c0 } = await supabaseClient["from"](
        _0x3fd6fe(0x168),
      )[_0x3fd6fe(0x13e)]([
        {
          word: _0x2ac766,
          pengusul: _0x3cc454,
          platform: getPlatform(),
          status: _0x3fd6fe(0x136),
        },
      ]);
      if (_0x3925c0) throw _0x3925c0;
      (showToast(_0x3fd6fe(0x13d)),
        (inputSumbangKata[_0x3fd6fe(0x121)] = ""),
        (sumbangModal[_0x3fd6fe(0x10a)][_0x3fd6fe(0x158)] = "none"));
    } catch (_0x4de612) {
      (console["error"](_0x4de612), alert(_0x3fd6fe(0x119)));
    } finally {
      ((kirimSumbangBtn["disabled"] = ![]),
        (kirimSumbangBtn["innerText"] = _0x3fd6fe(0x11c)));
    }
  }));
async function loadDataFromCloud() {
  const _0x42f58b = _0x2d023b;
  try {
    let _0x290d97 = [],
      _0x489574 = !![],
      _0x55b317 = 0x0;
    const _0x5022dd = 0x3e8;
    while (_0x489574) {
      const { data: _0x457fa4, error: _0xf1a276 } = await supabaseClient[
        _0x42f58b(0x16c)
      ]("kamus_global")
        [_0x42f58b(0x12a)](_0x42f58b(0x153))
        [_0x42f58b(0x169)](_0x55b317, _0x55b317 + _0x5022dd - 0x1);
      if (_0xf1a276) throw _0xf1a276;
      if (_0x457fa4 && _0x457fa4[_0x42f58b(0x13f)] > 0x0) {
        (_0x290d97[_0x42f58b(0x146)](
          ..._0x457fa4["map"]((_0xc62e18) => _0xc62e18[_0x42f58b(0x153)]),
        ),
          (_0x55b317 += _0x5022dd),
          (loaderText[_0x42f58b(0x16f)] =
            _0x42f58b(0x137) + _0x290d97[_0x42f58b(0x13f)] + _0x42f58b(0x10e)));
        if (_0x457fa4[_0x42f58b(0x13f)] < _0x5022dd) _0x489574 = ![];
      } else _0x489574 = ![];
    }
    ((words = _0x290d97),
      (loader[_0x42f58b(0x10a)]["display"] = _0x42f58b(0x155)),
      showToast("✅\x20" + words[_0x42f58b(0x13f)] + _0x42f58b(0x167)),
      performSearch());
  } catch (_0x5d164d) {
    (console[_0x42f58b(0x16e)](_0x5d164d), alert(_0x42f58b(0x143)));
  }
}
function performSearch() {
  const _0x5bfb11 = _0x2d023b,
    _0x2aece7 = prefixInput[_0x5bfb11(0x121)]
      [_0x5bfb11(0x133)]()
      [_0x5bfb11(0x112)](),
    _0x21365c = suffixInput[_0x5bfb11(0x121)]
      [_0x5bfb11(0x133)]()
      [_0x5bfb11(0x112)]();
  ((clearPrefix["style"][_0x5bfb11(0x158)] = _0x2aece7
    ? _0x5bfb11(0x13b)
    : _0x5bfb11(0x155)),
    (clearSuffix[_0x5bfb11(0x10a)]["display"] = _0x21365c
      ? _0x5bfb11(0x13b)
      : _0x5bfb11(0x155)),
    (allFilteredResults = words[_0x5bfb11(0x156)]((_0x3d0211) => {
      const _0x3dc1f1 = _0x5bfb11,
        _0x4eef09 = _0x2aece7 ? _0x3d0211[_0x3dc1f1(0x11b)](_0x2aece7) : !![],
        _0x10123e = _0x21365c ? _0x3d0211["endsWith"](_0x21365c) : !![];
      return _0x4eef09 && _0x10123e;
    })),
    allFilteredResults[_0x5bfb11(0x145)](
      (_0x2a7822, _0x1da8cb) =>
        _0x2a7822["length"] - _0x1da8cb[_0x5bfb11(0x13f)] ||
        _0x2a7822[_0x5bfb11(0x14e)](_0x1da8cb),
    ),
    (currentPage = 0x1),
    updatePagination());
}
function updatePagination() {
  const _0x330560 = _0x2d023b,
    _0x33c4a8 = allFilteredResults[_0x330560(0x13f)];
  if (_0x33c4a8 === 0x0) {
    ((list[_0x330560(0x16b)] = _0x330560(0x150)),
      (paginationBox[_0x330560(0x10a)][_0x330560(0x158)] = _0x330560(0x155)),
      (counter["innerText"] = "Ditemukan:\x200\x20kata"));
    return;
  }
  ((paginationBox[_0x330560(0x10a)][_0x330560(0x158)] = "flex"),
    (counter["innerText"] = _0x330560(0x11a) + _0x33c4a8 + _0x330560(0x144)));
  const _0x5b49f1 = Math[_0x330560(0x126)](_0x33c4a8 / ITEMS_PER_PAGE);
  if (currentPage > _0x5b49f1) currentPage = _0x5b49f1;
  if (currentPage < 0x1) currentPage = 0x1;
  pageInfo[_0x330560(0x16f)] =
    "Hal\x20" + currentPage + _0x330560(0x15f) + _0x5b49f1;
  const _0x5f2d60 = (currentPage - 0x1) * ITEMS_PER_PAGE,
    _0x290d40 = _0x5f2d60 + ITEMS_PER_PAGE,
    _0x483a7b = allFilteredResults[_0x330560(0x111)](_0x5f2d60, _0x290d40);
  renderList(_0x483a7b);
}
(prevBtn[_0x2d023b(0x164)](_0x2d023b(0x161), () => {
  const _0x2d8787 = _0x2d023b,
    _0xe3b068 = Math[_0x2d8787(0x126)](
      allFilteredResults["length"] / ITEMS_PER_PAGE,
    );
  (currentPage === 0x1 ? (currentPage = _0xe3b068) : currentPage--,
    updatePagination(),
    list[_0x2d8787(0x139)](0x0, 0x0));
}),
  nextBtn[_0x2d023b(0x164)]("click", () => {
    const _0x3167b2 = _0x2d023b,
      _0x31230b = Math["ceil"](
        allFilteredResults[_0x3167b2(0x13f)] / ITEMS_PER_PAGE,
      );
    (currentPage === _0x31230b ? (currentPage = 0x1) : currentPage++,
      updatePagination(),
      list[_0x3167b2(0x139)](0x0, 0x0));
  }),
  prevBtn["addEventListener"](_0x2d023b(0x161), () => {
    const _0x5bb6e8 = _0x2d023b;
    (currentPage--, updatePagination(), list[_0x5bb6e8(0x139)](0x0, 0x0));
  }),
  nextBtn[_0x2d023b(0x164)](_0x2d023b(0x161), () => {
    const _0x1b97d1 = _0x2d023b;
    (currentPage++, updatePagination(), list[_0x1b97d1(0x139)](0x0, 0x0));
  }));
function renderList(_0x3ba68c) {
  const _0xc1207e = _0x2d023b;
  list[_0xc1207e(0x16b)] = "";
  const _0x4677a1 = (currentPage - 0x1) * ITEMS_PER_PAGE;
  _0x3ba68c[_0xc1207e(0x15c)]((_0x5badf2, _0x395769) => {
    const _0x290886 = _0xc1207e,
      _0x457874 = document["createElement"](_0x290886(0x123));
    _0x457874["className"] = _0x290886(0x129);
    const _0x5aa385 = document[_0x290886(0x14a)]("div");
    _0x5aa385[_0x290886(0x11f)] = _0x290886(0x131);
    const _0x330be0 = document[_0x290886(0x14a)](_0x290886(0x10b));
    ((_0x330be0[_0x290886(0x11f)] = "item-number"),
      (_0x330be0[_0x290886(0x16f)] = _0x4677a1 + _0x395769 + 0x1 + "."));
    const _0x4dd614 = document[_0x290886(0x14a)](_0x290886(0x10b));
    ((_0x4dd614[_0x290886(0x11f)] = _0x290886(0x10f)),
      (_0x4dd614[_0x290886(0x16f)] = _0x5badf2),
      _0x5aa385["appendChild"](_0x330be0),
      _0x5aa385[_0x290886(0x11d)](_0x4dd614));
    const _0x5e44fa = document[_0x290886(0x14a)](_0x290886(0x152));
    ((_0x5e44fa["innerText"] = _0x290886(0x117)),
      (_0x5e44fa["className"] = _0x290886(0x113)),
      (_0x5e44fa[_0x290886(0x140)] = () => {
        const _0x19be46 = _0x290886;
        (navigator[_0x19be46(0x148)][_0x19be46(0x124)](_0x5badf2),
          showToast(_0x19be46(0x141) + _0x5badf2),
          (_0x5e44fa[_0x19be46(0x16f)] = _0x19be46(0x12e)),
          (_0x5e44fa[_0x19be46(0x10a)][_0x19be46(0x13c)] = "#00e676"),
          (_0x5e44fa[_0x19be46(0x10a)][_0x19be46(0x120)] = "black"),
          setTimeout(() => {
            const _0x4c591e = _0x19be46;
            ((_0x5e44fa[_0x4c591e(0x16f)] = _0x4c591e(0x117)),
              (_0x5e44fa["style"]["background"] = _0x4c591e(0x154)),
              (_0x5e44fa[_0x4c591e(0x10a)][_0x4c591e(0x120)] =
                _0x4c591e(0x15b)));
          }, 0x5dc));
      }),
      _0x457874["appendChild"](_0x5aa385),
      _0x457874["appendChild"](_0x5e44fa),
      list[_0x290886(0x11d)](_0x457874));
  });
}
function _0x3c90() {
  const _0x2c3fed = [
    "forEach",
    "tutupModalBtn",
    "MSStream",
    "\x20/\x20",
    "inputSumbangKata",
    "click",
    "Harap\x20isi\x20Nickname\x20kamu!",
    "nextBtn",
    "addEventListener",
    "createClient",
    "loader-text",
    "\x20Kata\x20Siap!",
    "kamus_usulan",
    "range",
    "list",
    "innerHTML",
    "from",
    "Anonim",
    "error",
    "innerText",
    "inputSumbangNama",
    "userAgent",
    "getItem",
    "Android",
    "opera",
    "13491AdIMce",
    "style",
    "span",
    "openSumbangBtn",
    "27Sdbpmi",
    "\x20kata...",
    "item-text",
    "38848vrsssG",
    "slice",
    "trim",
    "copy-btn",
    "kirimSumbangBtn",
    "Kata\x20tidak\x20boleh\x20kosong!",
    "user_nickname",
    "📋\x20Copy",
    "test",
    "Gagal\x20mengirim\x20kata.",
    "🎯\x20Ditemukan:\x20",
    "startsWith",
    "Kirim",
    "appendChild",
    "iOS",
    "className",
    "color",
    "value",
    "136PFUDkY",
    "div",
    "writeText",
    "853785btqnSe",
    "ceil",
    "clearSuffix",
    "98BRNTjp",
    "item",
    "select",
    "disabled",
    "setItem",
    "input",
    "✔️\x20Copied",
    "paginationBox",
    "108610kwwGvw",
    "item-left",
    "prevBtn",
    "toLowerCase",
    "getElementById",
    "https://lsnomevsllvjguotwchm.supabase.co",
    "pending",
    "Loading:\x20",
    "56538nEzsVN",
    "scrollTo",
    "110odkQjQ",
    "block",
    "background",
    "✅\x20Berhasil!\x20Menunggu\x20persetujuan.",
    "insert",
    "length",
    "onclick",
    "Tersalin:\x20",
    "prefixInput",
    "Gagal\x20konek\x20ke\x20Cloud.\x20Cek\x20internet\x20HP\x20kamu!",
    "\x20kata",
    "sort",
    "push",
    "4610qELUxi",
    "clipboard",
    "PC/Web",
    "createElement",
    "cloud-loader",
    "sumbangModal",
    "focus",
    "localeCompare",
    "1164nkJOsP",
    "<div\x20style=\x22text-align:center;\x20color:#ff4444;\x20margin-top:20px;\x22>❌\x20Tidak\x20ditemukan</div>",
    "Mengirim...",
    "button",
    "word",
    "#333",
    "none",
    "filter",
    "flex",
    "display",
    "counter",
    "2123OOVbfB",
    "white",
  ];
  _0x3c90 = function () {
    return _0x2c3fed;
  };
  return _0x3c90();
}
(prefixInput[_0x2d023b(0x164)](_0x2d023b(0x12d), performSearch),
  suffixInput[_0x2d023b(0x164)](_0x2d023b(0x12d), performSearch),
  clearPrefix[_0x2d023b(0x164)](_0x2d023b(0x161), () => {
    const _0x4c68e7 = _0x2d023b;
    ((prefixInput[_0x4c68e7(0x121)] = ""),
      performSearch(),
      prefixInput[_0x4c68e7(0x14d)]());
  }),
  clearSuffix[_0x2d023b(0x164)](_0x2d023b(0x161), () => {
    const _0x52b836 = _0x2d023b;
    ((suffixInput["value"] = ""),
      performSearch(),
      suffixInput[_0x52b836(0x14d)]());
  }));
function showToast(_0x244821) {
  const _0x59fc6d = _0x2d023b;
  ((toast[_0x59fc6d(0x16f)] = _0x244821),
    (toast["style"]["display"] = _0x59fc6d(0x13b)),
    setTimeout(
      () => (toast[_0x59fc6d(0x10a)][_0x59fc6d(0x158)] = _0x59fc6d(0x155)),
      0x5dc,
    ));
}
loadDataFromCloud();
