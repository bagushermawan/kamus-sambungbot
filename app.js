const _0x34b4fa = _0x1d36;
(function (_0x486924, _0x41620e) {
  const _0x4099f8 = _0x1d36,
    _0x310183 = _0x486924();
  while (!![]) {
    try {
      const _0xc265ea =
        -parseInt(_0x4099f8(0x20b)) / 0x1 +
        (-parseInt(_0x4099f8(0x24a)) / 0x2) *
          (parseInt(_0x4099f8(0x245)) / 0x3) +
        -parseInt(_0x4099f8(0x21d)) / 0x4 +
        (-parseInt(_0x4099f8(0x1f1)) / 0x5) *
          (parseInt(_0x4099f8(0x1ed)) / 0x6) +
        parseInt(_0x4099f8(0x23c)) / 0x7 +
        (parseInt(_0x4099f8(0x1fd)) / 0x8) *
          (parseInt(_0x4099f8(0x242)) / 0x9) +
        parseInt(_0x4099f8(0x209)) / 0xa;
      if (_0xc265ea === _0x41620e) break;
      else _0x310183["push"](_0x310183["shift"]());
    } catch (_0x443551) {
      _0x310183["push"](_0x310183["shift"]());
    }
  }
})(_0x482a, 0x5e21d);
const SUPABASE_URL = _0x34b4fa(0x23d),
  SUPABASE_KEY = "sb_publishable_1o9iZscYpzdpg7eEY3xwqQ_zvgsjdrX",
  supabaseClient = window["supabase"][_0x34b4fa(0x1fc)](
    SUPABASE_URL,
    SUPABASE_KEY,
  );
function _0x482a() {
  const _0x1d7256 = [
    "none",
    "22088NiHiCt",
    "PC/Web",
    "disabled",
    "copy-btn",
    "from",
    "userAgent",
    "kamus_global",
    "word",
    "insert",
    "style",
    "innerText",
    "tutupModalBtn",
    "Tersalin:\x20",
    "toast",
    "toLowerCase",
    "item-left",
    "\x20words...",
    "white",
    "2967932hjKchU",
    "Hal\x20",
    "block",
    "✔️\x20Copied",
    "\x20kata",
    "scrollTo",
    "pageInfo",
    "🎯\x20Ditemukan:\x20",
    "getElementById",
    "black",
    "paginationBox",
    "suffixInput",
    "clearPrefix",
    "cloud-loader",
    "\x20/\x20",
    "test",
    "openSumbangBtn",
    "clipboard",
    "value",
    "startsWith",
    "addEventListener",
    "Android",
    "inputSumbangNama",
    "Mengirim...",
    "appendChild",
    "display",
    "ceil",
    "onclick",
    "✅\x20Berhasil!\x20Menunggu\x20persetujuan.",
    "opera",
    "prefixInput",
    "940170eXEljJ",
    "https://lsnomevsllvjguotwchm.supabase.co",
    "div",
    "writeText",
    "trim",
    "#00e676",
    "27iBpOvD",
    "Kata\x20tidak\x20boleh\x20kosong!",
    "user_nickname",
    "1739943pRFiqP",
    "<div\x20style=\x22text-align:center;\x20color:#ff4444;\x20margin-top:20px;\x22>❌\x20Tidak\x20ditemukan</div>",
    "item",
    "click",
    "list",
    "2AjJTjk",
    "counter",
    "item-text",
    "innerHTML",
    "endsWith",
    "background",
    "length",
    "className",
    "createElement",
    "7692yDRNSi",
    "setItem",
    "push",
    "loader-text",
    "2885bFrSaW",
    "sort",
    "focus",
    "Ditemukan:\x200\x20kata",
    "Kirim",
    "nextBtn",
    "filter",
    "button",
    "item-number",
    "kamus_usulan",
    "input",
    "createClient",
    "321968ByrEce",
    "\x20Kata\x20Siap!",
    "clearSuffix",
    "Gagal\x20mengirim\x20kata.",
    "#333",
    "color",
    "error",
    "map",
    "flex",
    "📋\x20Copy",
    "span",
    "localeCompare",
    "22142830DpPwQE",
  ];
  _0x482a = function () {
    return _0x1d7256;
  };
  return _0x482a();
}
let words = [],
  allFilteredResults = [];
const ITEMS_PER_PAGE = 0xa;
let currentPage = 0x1;
const prefixInput = document["getElementById"](_0x34b4fa(0x23b)),
  suffixInput = document[_0x34b4fa(0x225)](_0x34b4fa(0x228)),
  clearPrefix = document[_0x34b4fa(0x225)](_0x34b4fa(0x229)),
  clearSuffix = document["getElementById"](_0x34b4fa(0x1ff)),
  list = document[_0x34b4fa(0x225)](_0x34b4fa(0x249)),
  counter = document[_0x34b4fa(0x225)](_0x34b4fa(0x24b)),
  toast = document[_0x34b4fa(0x225)](_0x34b4fa(0x218)),
  loader = document[_0x34b4fa(0x225)](_0x34b4fa(0x22a)),
  loaderText = document["getElementById"](_0x34b4fa(0x1f0)),
  paginationBox = document["getElementById"](_0x34b4fa(0x227)),
  prevBtn = document[_0x34b4fa(0x225)]("prevBtn"),
  nextBtn = document["getElementById"](_0x34b4fa(0x1f6)),
  pageInfo = document["getElementById"](_0x34b4fa(0x223));
function _0x1d36(_0xdb6c57, _0x542ca3) {
  _0xdb6c57 = _0xdb6c57 - 0x1eb;
  const _0x482a7e = _0x482a();
  let _0x1d36a4 = _0x482a7e[_0xdb6c57];
  return _0x1d36a4;
}
function getPlatform() {
  const _0x404931 = _0x34b4fa,
    _0x2411e6 =
      navigator[_0x404931(0x210)] ||
      navigator["vendor"] ||
      window[_0x404931(0x23a)];
  if (/android/i[_0x404931(0x22c)](_0x2411e6)) return _0x404931(0x232);
  if (/iPad|iPhone|iPod/[_0x404931(0x22c)](_0x2411e6) && !window["MSStream"])
    return "iOS";
  return _0x404931(0x20c);
}
const sumbangModal = document[_0x34b4fa(0x225)]("sumbangModal"),
  openSumbangBtn = document[_0x34b4fa(0x225)](_0x34b4fa(0x22d)),
  tutupModalBtn = document[_0x34b4fa(0x225)](_0x34b4fa(0x216)),
  kirimSumbangBtn = document[_0x34b4fa(0x225)]("kirimSumbangBtn"),
  inputSumbangKata = document[_0x34b4fa(0x225)]("inputSumbangKata"),
  inputSumbangNama = document[_0x34b4fa(0x225)](_0x34b4fa(0x233));
((openSumbangBtn[_0x34b4fa(0x238)] = () => {
  const _0x3149c2 = _0x34b4fa;
  sumbangModal[_0x3149c2(0x214)][_0x3149c2(0x236)] = _0x3149c2(0x205);
  const _0x21b9d8 = localStorage["getItem"](_0x3149c2(0x244));
  _0x21b9d8 &&
    _0x21b9d8 !== "Anonim" &&
    (inputSumbangNama[_0x3149c2(0x22f)] = _0x21b9d8);
}),
  (tutupModalBtn[_0x34b4fa(0x238)] = () => {
    const _0x386402 = _0x34b4fa;
    sumbangModal["style"][_0x386402(0x236)] = _0x386402(0x20a);
  }),
  (kirimSumbangBtn["onclick"] = async () => {
    const _0x21ba46 = _0x34b4fa,
      _0x2beaf4 = inputSumbangNama["value"][_0x21ba46(0x240)](),
      _0x37bf6a = inputSumbangKata[_0x21ba46(0x22f)]
        [_0x21ba46(0x219)]()
        [_0x21ba46(0x240)]();
    if (!_0x2beaf4) return alert("Harap\x20isi\x20Nickname\x20kamu!");
    if (!_0x37bf6a) return alert(_0x21ba46(0x243));
    (localStorage[_0x21ba46(0x1ee)](_0x21ba46(0x244), _0x2beaf4),
      (kirimSumbangBtn[_0x21ba46(0x20d)] = !![]),
      (kirimSumbangBtn[_0x21ba46(0x215)] = _0x21ba46(0x234)));
    try {
      const { error: _0x57bf88 } = await supabaseClient["from"](
        _0x21ba46(0x1fa),
      )[_0x21ba46(0x213)]([
        {
          word: _0x37bf6a,
          pengusul: _0x2beaf4,
          platform: getPlatform(),
          status: "pending",
        },
      ]);
      if (_0x57bf88) throw _0x57bf88;
      (showToast(_0x21ba46(0x239)),
        (inputSumbangKata["value"] = ""),
        (sumbangModal[_0x21ba46(0x214)]["display"] = _0x21ba46(0x20a)));
    } catch (_0x34c225) {
      (console[_0x21ba46(0x203)](_0x34c225), alert(_0x21ba46(0x200)));
    } finally {
      ((kirimSumbangBtn["disabled"] = ![]),
        (kirimSumbangBtn[_0x21ba46(0x215)] = _0x21ba46(0x1f5)));
    }
  }));
async function loadDataFromCloud() {
  const _0xdbcf4f = _0x34b4fa;
  try {
    let _0x19410c = [],
      _0xaff8f1 = !![],
      _0x4924f6 = 0x0;
    const _0x2797c8 = 0x3e8;
    while (_0xaff8f1) {
      const { data: _0x5ec842, error: _0x4982ca } = await supabaseClient[
        _0xdbcf4f(0x20f)
      ](_0xdbcf4f(0x211))
        ["select"](_0xdbcf4f(0x212))
        ["range"](_0x4924f6, _0x4924f6 + _0x2797c8 - 0x1);
      if (_0x4982ca) throw _0x4982ca;
      if (_0x5ec842 && _0x5ec842[_0xdbcf4f(0x250)] > 0x0) {
        (_0x19410c[_0xdbcf4f(0x1ef)](
          ..._0x5ec842[_0xdbcf4f(0x204)]((_0x1b6e75) => _0x1b6e75["word"]),
        ),
          (_0x4924f6 += _0x2797c8),
          (loaderText[_0xdbcf4f(0x215)] =
            "Loading:\x20" + _0x19410c["length"] + _0xdbcf4f(0x21b)));
        if (_0x5ec842["length"] < _0x2797c8) _0xaff8f1 = ![];
      } else _0xaff8f1 = ![];
    }
    ((words = _0x19410c),
      (loader[_0xdbcf4f(0x214)][_0xdbcf4f(0x236)] = _0xdbcf4f(0x20a)),
      showToast("✅\x20" + words[_0xdbcf4f(0x250)] + _0xdbcf4f(0x1fe)),
      performSearch());
  } catch (_0x4266c9) {
    (console[_0xdbcf4f(0x203)](_0x4266c9),
      alert(
        "Gagal\x20konek\x20ke\x20Cloud.\x20Cek\x20internet\x20HP\x20kamu!",
      ));
  }
}
function performSearch() {
  const _0xd5c688 = _0x34b4fa,
    _0x46a415 = prefixInput[_0xd5c688(0x22f)]
      [_0xd5c688(0x219)]()
      [_0xd5c688(0x240)](),
    _0x4f1ecd = suffixInput[_0xd5c688(0x22f)]
      ["toLowerCase"]()
      [_0xd5c688(0x240)]();
  ((clearPrefix[_0xd5c688(0x214)]["display"] = _0x46a415
    ? "block"
    : _0xd5c688(0x20a)),
    (clearSuffix[_0xd5c688(0x214)]["display"] = _0x4f1ecd
      ? "block"
      : _0xd5c688(0x20a)),
    (allFilteredResults = words[_0xd5c688(0x1f7)]((_0x4ef015) => {
      const _0xe366c2 = _0xd5c688,
        _0x4f23aa = _0x46a415 ? _0x4ef015[_0xe366c2(0x230)](_0x46a415) : !![],
        _0x2ba65d = _0x4f1ecd ? _0x4ef015[_0xe366c2(0x24e)](_0x4f1ecd) : !![];
      return _0x4f23aa && _0x2ba65d;
    })),
    allFilteredResults[_0xd5c688(0x1f2)](
      (_0x1be7d3, _0x24bfe3) =>
        _0x1be7d3[_0xd5c688(0x250)] - _0x24bfe3[_0xd5c688(0x250)] ||
        _0x1be7d3[_0xd5c688(0x208)](_0x24bfe3),
    ),
    (currentPage = 0x1),
    updatePagination());
}
function updatePagination() {
  const _0x1f232e = _0x34b4fa,
    _0x5f1258 = allFilteredResults[_0x1f232e(0x250)];
  if (_0x5f1258 === 0x0) {
    ((list[_0x1f232e(0x24d)] = _0x1f232e(0x246)),
      (paginationBox[_0x1f232e(0x214)][_0x1f232e(0x236)] = _0x1f232e(0x20a)),
      (counter[_0x1f232e(0x215)] = _0x1f232e(0x1f4)));
    return;
  }
  ((paginationBox["style"][_0x1f232e(0x236)] = "flex"),
    (counter[_0x1f232e(0x215)] =
      _0x1f232e(0x224) + _0x5f1258 + _0x1f232e(0x221)));
  const _0x921998 = Math[_0x1f232e(0x237)](_0x5f1258 / ITEMS_PER_PAGE);
  if (currentPage > _0x921998) currentPage = _0x921998;
  if (currentPage < 0x1) currentPage = 0x1;
  pageInfo[_0x1f232e(0x215)] =
    _0x1f232e(0x21e) + currentPage + _0x1f232e(0x22b) + _0x921998;
  const _0x24f1bf = (currentPage - 0x1) * ITEMS_PER_PAGE,
    _0x3feb81 = _0x24f1bf + ITEMS_PER_PAGE,
    _0x278d5c = allFilteredResults["slice"](_0x24f1bf, _0x3feb81);
  renderList(_0x278d5c);
}
(prevBtn[_0x34b4fa(0x231)](_0x34b4fa(0x248), () => {
  const _0xaf3b6c = _0x34b4fa,
    _0x55bd3b = Math[_0xaf3b6c(0x237)](
      allFilteredResults[_0xaf3b6c(0x250)] / ITEMS_PER_PAGE,
    );
  (currentPage === 0x1 ? (currentPage = _0x55bd3b) : currentPage--,
    updatePagination(),
    list[_0xaf3b6c(0x222)](0x0, 0x0));
}),
  nextBtn[_0x34b4fa(0x231)](_0x34b4fa(0x248), () => {
    const _0x466a3a = _0x34b4fa,
      _0x298772 = Math[_0x466a3a(0x237)](
        allFilteredResults[_0x466a3a(0x250)] / ITEMS_PER_PAGE,
      );
    (currentPage === _0x298772 ? (currentPage = 0x1) : currentPage++,
      updatePagination(),
      list[_0x466a3a(0x222)](0x0, 0x0));
  }),
  prevBtn["addEventListener"]("click", () => {
    const _0x2eafd4 = _0x34b4fa;
    (currentPage--, updatePagination(), list[_0x2eafd4(0x222)](0x0, 0x0));
  }),
  nextBtn[_0x34b4fa(0x231)](_0x34b4fa(0x248), () => {
    const _0x15cae8 = _0x34b4fa;
    (currentPage++, updatePagination(), list[_0x15cae8(0x222)](0x0, 0x0));
  }));
function renderList(_0xb2c4b9) {
  const _0x51c063 = _0x34b4fa;
  list[_0x51c063(0x24d)] = "";
  const _0x4456ea = (currentPage - 0x1) * ITEMS_PER_PAGE;
  _0xb2c4b9["forEach"]((_0xda128d, _0x4950db) => {
    const _0x17c324 = _0x51c063,
      _0x4f6047 = document[_0x17c324(0x1ec)](_0x17c324(0x23e));
    _0x4f6047[_0x17c324(0x1eb)] = _0x17c324(0x247);
    const _0x35cff0 = document[_0x17c324(0x1ec)](_0x17c324(0x23e));
    _0x35cff0[_0x17c324(0x1eb)] = _0x17c324(0x21a);
    const _0x6e944b = document[_0x17c324(0x1ec)](_0x17c324(0x207));
    ((_0x6e944b[_0x17c324(0x1eb)] = _0x17c324(0x1f9)),
      (_0x6e944b["innerText"] = _0x4456ea + _0x4950db + 0x1 + "."));
    const _0x30997f = document["createElement"](_0x17c324(0x207));
    ((_0x30997f["className"] = _0x17c324(0x24c)),
      (_0x30997f["innerText"] = _0xda128d),
      _0x35cff0[_0x17c324(0x235)](_0x6e944b),
      _0x35cff0[_0x17c324(0x235)](_0x30997f));
    const _0x5cfbb1 = document[_0x17c324(0x1ec)](_0x17c324(0x1f8));
    ((_0x5cfbb1["innerText"] = "📋"),
      (_0x5cfbb1[_0x17c324(0x1eb)] = _0x17c324(0x20e)),
      (_0x5cfbb1[_0x17c324(0x238)] = () => {
        const _0x2155de = _0x17c324;
        (navigator[_0x2155de(0x22e)][_0x2155de(0x23f)](_0xda128d),
          showToast(_0x2155de(0x217) + _0xda128d),
          (_0x5cfbb1[_0x2155de(0x215)] = _0x2155de(0x220)),
          (_0x5cfbb1[_0x2155de(0x214)][_0x2155de(0x24f)] = _0x2155de(0x241)),
          (_0x5cfbb1[_0x2155de(0x214)]["color"] = _0x2155de(0x226)),
          setTimeout(() => {
            const _0x4a76f3 = _0x2155de;
            ((_0x5cfbb1["innerText"] = _0x4a76f3(0x206)),
              (_0x5cfbb1[_0x4a76f3(0x214)][_0x4a76f3(0x24f)] =
                _0x4a76f3(0x201)),
              (_0x5cfbb1[_0x4a76f3(0x214)][_0x4a76f3(0x202)] =
                _0x4a76f3(0x21c)));
          }, 0x5dc));
      }),
      _0x4f6047["appendChild"](_0x35cff0),
      _0x4f6047[_0x17c324(0x235)](_0x5cfbb1),
      list[_0x17c324(0x235)](_0x4f6047));
  });
}
(prefixInput[_0x34b4fa(0x231)](_0x34b4fa(0x1fb), performSearch),
  suffixInput[_0x34b4fa(0x231)](_0x34b4fa(0x1fb), performSearch),
  clearPrefix[_0x34b4fa(0x231)](_0x34b4fa(0x248), () => {
    const _0x479b1d = _0x34b4fa;
    ((prefixInput[_0x479b1d(0x22f)] = ""),
      performSearch(),
      prefixInput[_0x479b1d(0x1f3)]());
  }),
  clearSuffix[_0x34b4fa(0x231)]("click", () => {
    const _0x55b92b = _0x34b4fa;
    ((suffixInput[_0x55b92b(0x22f)] = ""),
      performSearch(),
      suffixInput[_0x55b92b(0x1f3)]());
  }));
function showToast(_0x2df83) {
  const _0x5db141 = _0x34b4fa;
  ((toast[_0x5db141(0x215)] = _0x2df83),
    (toast[_0x5db141(0x214)][_0x5db141(0x236)] = _0x5db141(0x21f)),
    setTimeout(
      () => (toast[_0x5db141(0x214)][_0x5db141(0x236)] = "none"),
      0x5dc,
    ));
}
loadDataFromCloud();
