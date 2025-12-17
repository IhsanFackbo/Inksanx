const BRAND = {
  name: "Iniisanx",
  desc: `Silahkan kunjungi akun media sosial saya yang lain nya.<br/>Fast response • Trusted • `,
  avatar: "https://files.catbox.moe/dgpuur.jpg",
  wm: "Iniisnx",
  hours: "Bio buatan gua, untuk informasi tentang preset dll",
  pills: ["🥳go to 2k followers","bagi-bagi preset"],
  contact: {
    fullName: "Isan",
    phone: "+62 851-3521-4510",
    email: "anomalitulilut@gmail.com",
    website: "https://",
  }
};

const LINKS = [
  { title: "Instagram", subtitle: "bisa lah di follow ygy", href: "https://www.instagram.com/isan_myo7?igsh=MThncTFqZjE2NnlyNg==", icon: "IG" },
  { title: "Saluran Whatsaap", subtitle: "Informasi mendatang", href: "https://whatsapp.com/channel/0029Vb6s3rm4o7qMg3w0KE0K", icon: "WA" },
  { title: "Order Am prem", subtitle: "Order alight motion premium", href: "https://wa.me/6285800742763?text=mau+order+am+prem+isan", icon: "WA" },
  { title: "Youtube", subtitle: "Official Youtube", href: "https://youtube.com/@esfour00?si=G5D1guQhKax4hkXo", icon: "YT" },
  { title: "Gc Bot v 2.0", subtitle: "Group Bots whatsaap", href: "https://chat.whatsapp.com/C7SgXo9bdbE1eAqmjwIeb9?mode=hqrc", icon: "WA" },
];

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
  $("#year").textContent = new Date().getFullYear();

  const pillWrap = $("#pillWrap");
  pillWrap.innerHTML = "";
  BRAND.pills.forEach((p) => {
    const div = document.createElement("div");
    div.className = "pill";
    div.textContent = p;
    pillWrap.appendChild(div);
  });
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
    logo.textContent = item.icon || "🔗";

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

async function copyLink(){
  try{
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link disalin ✅");
  }catch{
    showToast("Gagal copy ❌");
  }
}

async function shareLink(){
  const data = { title: document.title, text: `Cek link ${BRAND.name}:`, url: window.location.href };
  if (navigator.share){
    try { await navigator.share(data); } catch {}
  } else {
    await copyLink();
    showToast("Share tidak support, link disalin ✅");
  }
}

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

renderProfile();
renderLinks();
tickClock();
setInterval(tickClock, 1000 * 30);

$("#copyBtn").addEventListener("click", copyLink);
$("#shareBtn").addEventListener("click", shareLink);
$("#saveContactBtn").addEventListener("click", downloadVCard);