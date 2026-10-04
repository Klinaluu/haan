// ============================================================
// CẤU HÌNH RIÊNG CHO KHÁCH: haan
// Điền nội dung vào đây rồi chạy:  python3 tools/build_customer.py haan
// Ảnh để trong customers/haan/assets/photos/ và trỏ tới bằng
// đường dẫn "assets/photos/<tên file>" (script tự thu nhỏ khi build).
// ============================================================

// ---------- thương hiệu ----------
export const GAME_TITLE = "MADE FOR US";
export const GAME_SUBTITLE = "Our love journey";
export const WINDOW_NAME = "MADE_FOR_US.EXE"; // chữ trên thanh tiêu đề cửa sổ

// ---------- lời thoại & văn bản ----------
// Game có 2 thứ tiếng: mặc định tiếng Anh, nút VIE ở màn hình mở đầu đổi sang tiếng Việt.
// Các câu dưới đây giữ nguyên câu mẫu tiếng Anh = tự dùng câu mẫu đúng thứ tiếng (js/i18n.js).
// Khách viết câu riêng: ghi 1 chuỗi (dùng cho cả hai thứ tiếng) hoặc { en: "...", vi: "..." }.
// Cách ghi { en, vi } dùng được cả cho GIFTS[].label, MILESTONES[].date/name, GAME_SUBTITLE.
export const TEXT = {
  // đoạn gặp nhau: câu chàng trai nói, rồi câu cô gái đáp lại (2 bong bóng thoại).
  // Để "" thì bong bóng đó không hiện. Khách xin: Nam "mái ràaa" → Nữ "Làm sao đấy?"
  manLine: "mái ràaa",
  womanLine: "Làm sao đấy?",
  // dòng chữ trên màn hình bầu trời sao sau khi gặp nhau
  meetText: "I'm on my solo mission but the stars guide me to you",
  // hộp thoại "System Message" ở chiếc hòm hồng
  systemMessage: "The next level is not unlocked yet.\nWould you like to continue the journey?",
  envelopeLabel: "Highly confidential document",
  // lá thư: thay bằng lời của bạn (xuống dòng bằng \n hoặc dùng chuỗi nhiều dòng)
  letterTitle: "Your love letter",
  letter: `hi chối,
không biết chơi game xong anh thấy thế nào nhỉ, có thấy món quà này đặc biệt khum kkk.
cũng nhanh ha, nay là sinh nhật anh, cũng tròn 1 năm mình ở bên nhau rùi. thế liệu trong suốt quãng thời gian đấy, có bao giờ anh tự đặt câu hỏi: “tình yêu rốt cuộc là gì?” chưa. em thì đã tự hỏi mình câu đấy ngàn vạn lần rồi. và cho đến bây giờ, em nghĩ em đã biết câu trả lời của em là gì^^ nếu muốn biết thì tiếp tục chơi game thứ 2 để unlock được món quà cuối cùng của em nhéee
love uuuu❤️
“đôi khi thử thách mới khiến cho ta có động lực để đi đến đích, và để đạt được điều gì đó cũng cần 1 quá trình”`,
  // hiện khi chưa có file video
  videoMissing: "Wait for your video 🎬",
  // chữ trong khung ảnh còn trống
  photoPlaceholder: "(insert pictures here)",
  // nhắc xoay ngang trên điện thoại / máy tính bảng
  rotateTitle: "Please rotate to landscape",
  rotateText: "This journey is made for a sideways screen.",
  rotateTip: "⟳ Hold your device sideways to play",
  // Hướng dẫn thêm vào màn hình chính (chỉ hiện trên điện thoại / máy tính bảng).
  // Để trống thì dùng hướng dẫn mặc định (tiếng Anh / tiếng Việt) trong js/install.js.
  install: {},
};

// ---------- ảnh & video của khách ----------
// Thời gian hiện bong bóng thoại ở đoạn gặp nhau (mili giây, 1000 = 1 giây): chàng trai nói
// trước, cô gái đáp sau (mỗi bên chỉ hiện khi câu có chữ), hết thì sang màn bầu trời sao.
export const MEET_BUBBLE_MS = { man: 2500, woman: 2500 };

// Ảnh polaroid: đặt file vào assets/photos/ rồi điền đường dẫn vào từng mốc bên dưới.
// Video: đặt file .mp4 vào assets/video/ rồi điền tên vào đây (nên dưới 15MB).
export const VIDEO_SRC = "assets/video/video.mp4"; // khách gửi .mov dọc 1080x1920 50MB → avconvert Preset960x540 (540x960, ~19MB)
// Nhạc nền: đặt file .mp3 vào assets/audio/ rồi điền tên vào đây. Để "" thì không có nhạc nền
// (vẫn còn đủ hiệu ứng nhảy/bấm nút). Tự tắt khi phát video, tự nhỏ lại một chút mỗi lần nhảy.
export const MUSIC_SRC = "assets/audio/bgm.mp3";
// Ảnh ở màn hình mở đầu (ảnh dọc kiểu photobooth rất hợp). Để "" thì hiện khung trống.
export const TITLE_PHOTO = "assets/photos/title.jpg"; // khách gửi "ảnh mở đầu game.jpg"
// true  = luôn vẽ khung ảnh trống kèm chữ hướng dẫn (dùng cho bản demo)
// false = mốc nào chưa có ảnh thì không treo khung
export const SHOW_EMPTY_PHOTO_FRAMES = false; // bản khách: mốc chưa có ảnh thì không treo khung

// Ảnh xe chở đôi. Để [] = dùng bộ 4 khung chạy xe mặc định. Chỉ có 1 ảnh thì ghi 1 file —
// game tự thêm hiệu ứng chạy (rung máy, khói, bụi, vệt gió) nên xe vẫn trông đang chạy.
//   export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];
export const COUPLE_FRAMES = ["assets/characters/Couple-Bike-Side-01.png"];

// ---------- 5 món quà của chặng solo ----------
// icon: để trống ("") thì game tự vẽ hình thay thế.
export const GIFTS = [
  // Khách: hamburger, bóng đá, trà sữa, máy chơi game, gà rán — icon cắt từ trang 11 design Canva "Hà An".
  // id giữ nguyên (khớp js/levels.js dùng chung) — chỉ đổi label/icon.
  { id: "matcha", label: { en: "Hamburger", vi: "Hamburger" }, icon: "assets/characters/Item-Burger-01.png" },
  { id: "chocolate", label: { en: "Football", vi: "Bóng đá" }, icon: "assets/characters/Item-Football-01.png" },
  { id: "flower", label: { en: "Milk tea", vi: "Trà sữa" }, icon: "assets/characters/Item-MilkTea-01.png" },
  { id: "lipstick", label: { en: "Game console", vi: "Máy chơi game" }, icon: "assets/characters/Item-GameConsole-01.png" },
  { id: "letter", label: { en: "Fried chicken", vi: "Gà rán" }, icon: "assets/characters/Item-FriedChicken-01.png" },
];

// ---------- các mốc của chặng đi đôi ----------
// Mỗi mốc là một khung polaroid treo trên nền, theo thứ tự thời gian.
//   date, name : chú thích in dưới khung ảnh — để "" thì khung không hiện chữ gì (như ở
//                đây, bản demo cố tình để trống); điền cả hai thì khung tự hiện caption
//   photo      : đường dẫn ảnh (để "" nếu chưa có)
//   sky        : hai màu gradient bầu trời [trên, dưới]
//   event      : "rain"  → trời mưa, nhảy chướng ngại để nhặt ô rồi mới đi tiếp
//                "chest" → hòm hồng: System Message → Level Unlocked → lá thư
//                "gift"  → hòm quà rơi từ trời → video
// Ba mốc có event là phần kịch bản, nên giữ nguyên thứ tự ở cuối danh sách và luôn để
// date/name trống (không phải ảnh kỷ niệm của khách).
export const MILESTONES = [
  { date: "", name: "ảnh chung đầu tiên…", sky: ["#dfe9ff", "#f6c7d8"], photo: "assets/photos/anh-chung-dau-tien.jpg" },
  { date: "24.11.25", name: "ngày gì tự biết?", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/ngay-gi-tu-biet.jpg" },
  { date: "", name: "Red’s Burger", sky: ["#bcd7ff", "#ffd9e8"], photo: "assets/photos/reds-burger.jpg" },
  { date: "05.04.26", name: "bị chụp trộm =)))))", sky: ["#3b2a5a", "#b57aa8"], photo: "assets/photos/bi-chup-trom.jpg" },
  { date: "29.04.26", name: "cậu ăn xôi =))))", sky: ["#e3d3dc", "#b391a6"], photo: "assets/photos/cau-an-xoi.jpg" },
  { date: "", name: "chuchu", sky: ["#ffe6c9", "#ffd9e8"], photo: "assets/photos/chuchu.jpg" },
  { date: "29.08.26", name: "bó hoa to nhất!!", sky: ["#cfe6ff", "#ffe6c9"], photo: "assets/photos/bo-hoa-to-nhat.jpg" },
  { date: "02.09.26", name: "cáu đói tại eco", sky: ["#ffd9c4", "#ffe7ef"], photo: "assets/photos/cau-doi-tai-eco.jpg" },
  { date: "", name: "con của thần mưa", sky: ["#e7d6ea", "#f6d3de"], photo: "assets/photos/con-cua-than-mua.jpg" },
  { date: "01.10.26", name: "len lén", sky: ["#ffd9e0", "#ffe9d6"], photo: "assets/photos/len-len.jpg" },
  {
    date: "", name: "", sky: ["#7fb7d9", "#cfe7f2"], photo: "",
    event: "rain",
    blocks: [{ x: 300 }, { x: 520, h: 2 }],
    platforms: [{ x: 640, w: 2, y: 110 }],
    itemAt: { x: 664, y: 166 },
  },
  { date: "", name: "", sky: ["#ffd9c4", "#ffe7ef"], photo: "", event: "chest" },
  { date: "", name: "", sky: ["#bfe0f2", "#e8f3ee"], photo: "", event: "gift" },
];

// ---------- nền parallax riêng (tuỳ chọn) ----------
// Để trống = dùng bộ nền 3 lớp mặc định (Hồ Gươm ban ngày + hoàng hôn, xem js/assets.js).
// Muốn nền riêng: bỏ ảnh vào customers/<slug>/assets/scenes/<id>/ rồi khai báo lớp (xa → gần)
// + tốc độ trôi (0 = đứng yên, 1 = trôi cùng đường). id: "ho-guom" (đi bộ, solo, gặp nhau),
// "ho-tay" (đi đôi). Ví dụ:
//   "ho-guom": { layers: ["L1.png", "L2.png", "L3.png"], speeds: [0.05, 0.16, 0.4] },
export const SCENE_LAYERS = {};
