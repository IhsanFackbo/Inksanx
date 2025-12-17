// ============================
// CONFIG (EDIT DI SINI SAJA)
// ============================
const BRAND = {
  name: "VANZEL STORE",
  desc: `Caption/Deskripsi singkat di sini. Bisa untuk brand, layanan, atau toko kamu.<br/>Fast response • Trusted • Ready stock`,
  avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=80&auto=format&fit=crop",
  wm: "VANZEL STORE",
  hours: "CS 08.00–22.00 (WIB) • Setiap hari",
  pills: ["🔥 Promo harian", "📦 Ready stock", "💬 CS 08.00–22.00"],
  // untuk vCard
  contact: {
    fullName: "VANZEL STORE",
    phone: "+62 831-0650-8500",
    email: "emailkamu@email.com",
    website: "https://contoh-domain-kamu.com",
  }
};

const LINKS = [
  {
    title: "Instagram",
    subtitle: "@usernamekamu",
    href: "https://instagram.com/",
    icon: "instagram",
  },
  {
    title: "TikTok",
    subtitle: "@usernamekamu",
    href: "https://tiktok.com/",
    icon: "tiktok",
  },
  {
    title: "WhatsApp",
    subtitle: "Chat admin sekarang",
    href: "https://wa.me/6283106508500",
    icon: "whatsapp",
  },
  {
    title: "Shopee",
    subtitle: "Official Store",
    href: "https://shopee.co.id/",
    icon: "shopee",
  },
  {
    title: "Email",
    subtitle: "Kerja sama / business inquiry",
    href: "mailto:emailkamu@email.com",
    icon: "mail",
  },
];

// ============================
// ICONS (SVG inline)
// ============================
const ICONS = {
  instagram: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" stroke="currentColor" stroke-width="1.8"/>
    <path d="M16.5 11.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="currentColor" stroke-width="1.8"/>
    <path d="M17.7 6.3h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  tiktok: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M14 3c.5 3.6 2.8 5.9 6 6.4V13c-2-.1-3.9-.8-5.5-2V16a6 6 0 1 1-6-6c.5 0 1 .1 1.5.2V13A3 3 0 1 0 14 16V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`,
  whatsapp: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M20 11.8A8 8 0 1 1 6.6 5.6 8 8 0 0 1 20 11.8Z" stroke="currentColor" stroke-width="1.8"/>
    <path d="M7 20.5 6 22l1.7-.5c1.2.4 2.4.6 3.7.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M9.2 9.6c.2-.5.6-.5 1 0l.6.9c.2.3.2.7 0 1l-.3.5c.6 1 1.4 1.8 2.4 2.4l.5-.3c.3-.2.7-.2 1 0l.9.6c.5.4.5.8 0 1-.6.4-1.3.6-2 .4-2.7-.7-4.9-2.9-5.6-5.6-.2-.7 0-1.4.4-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`,
  shopee: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 7h10l1 3H6l1-3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M6 10h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9Z" stroke="currentColor" stroke-width="1.8"/>
    <path d="M10 7a2 2 0 1 1 4 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M10 14c1.5-1 2.5-1 4 0 1.2.8 1.2 2.2 0 3-1.5 1-2.5 1-4 0-1.2-.8-1.2-2.2 0-3Z" stroke="currentColor" stroke-width="1.6"/>
  </svg>`,
  mail: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.8"/>
    <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`,
};

// ============================
// RENDER
// ============================
const $ = (q) => document.querySelector(q);

function showToast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1400);
}

function renderProfile(){
  $("#brandName").textContent = BRAND.name;
  $("#brandDesc").innerHTML = BRAND.desc;
  $("#avatarImg").src = BRAND.avatar;
  $("#wmText").textContent = BRAND.wm;
  $("#hoursText").textContent = BRAND.hours;

  const pillWrap = $("#pillWrap");
  pillWrap.innerHTML = "";
  BRAND.pills.forEach((p) => {
    const div = document.createElement("div");
    div.className = "pill";
    div.textContent = p;
    pillWrap.appendChild(div);
  });

  $("#year").textContent = new Date().getFullYear();
}

function renderLinks(){
  const wrap = $("#linksWrap");
  wrap.innerHTML = "";

  LINKS.forEach((item) => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = item.href;
    a.target = "_blank";
    a.rel = "noopener";

    const left = document.createElement("div");
    left.className = "left";

    const logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML = ICONS[item.icon] || "🔗";

    const label = document.createElement("div");
    label.className = "label";
    label.innerHTML = `<strong>${item.title}</strong><span>${item.subtitle || ""}</span>`;

    left.appendChild(logo);
    left.appendChild(label);

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.textContent = "›";

    a.appendChild(left);
    a.appendChild(arrow);

    wrap.appendChild(a);
  });
}

function tickClock(){
  const d = new Date();
  const hh = String(d.getHours()).padStart(2,"0");
  const mm = String(d.getMinutes()).padStart(2,"0");
  $("#timeText").textContent = `Local time: ${hh}:${mm}`;
}
setInterval(tickClock, 1000 * 30);

async function copyLink(){
  try{
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link disalin ✅");
  }catch{
    showToast("Gagal copy ❌");
  }
}

async function shareLink(){
  const data = {
    title: document.title,
    text: `Cek link ${BRAND.name}:`,
    url: window.location.href
  };
  if (navigator.share){
    try { await navigator.share(data); }
    catch { /* cancel */ }
  } else {
    await copyLink();
    showToast("Share tidak support, link disalin ✅");
  }
}

// vCard download
function downloadVCard(){
  const c = BRAND.contact;
  const vcf =
`BEGIN:VCARD
VERSION:3.0
FN:${c.fullName}
TEL;TYPE=CELL:${c.phone}
EMAIL:${c.email}
URL:${c.website}
END:VCARD`;

  const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${BRAND.name.replace(/\s+/g,'_')}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("Kontak tersimpan ✅");
}

// ============================
// INIT
// ============================
renderProfile();
renderLinks();
tickClock();

$("#copyBtn").addEventListener("click", copyLink);
$("#shareBtn").addEventListener("click", shareLink);
$("#saveContactBtn").addEventListener("click", downloadVCard);