const teachersData = [
  {id: 1, name: "মোঃ মোশাররফ হোসেন", phone: "+৮৮০ ১৩০৯-১৩২৬৮২", email: "tangpoly1991@gmail.com", image: "https://i.ibb.co.com/Rp2z3XB9/e3ab89c0f6354fc289615a516725c853.jpg"},
  {id: 2, name: "খ. ম. রওশন হাবিব", phone: "০১৭১২১১৫০৩৪", email: "kmrhabib@gmail.com", image: "https://i.ibb.co.com/QFFJVH8m/250acb0d604a422ab05a300400fca227.jpg"},
  {id: 3, name: "নাছির আহমেদ", designation: "চীফ ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭১২৬৭৪১৭৪", image: "https://i.ibb.co.com/9kDc72mJ/c0509dfa54334b6390c933e829761a2e.jpg"},
  {id: 4, name: "রেজাউল করিম", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭০৫৪৩২২৯৭", email: "karimmpi1985@gmail.com", image: "https://i.ibb.co.com/LDZTmqJ1/be62095c00fe40f097f846883201bad7.jpg"},
  {id: 5, name: "প্রকৌশলী জান্নাতুল ফেরদৌসী", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭১৬৮৩৬৯৩৯", email: "shilpiduet@gmail.com", image: "https://i.ibb.co.com/35X64Vv0/4b2310bbfc094a76a9325e154997bfc3.jpg"},
  {id: 6, name: "শাহাদৎ হোসাইন", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৫৩১১৯৪৩৬৭", email: "shahadathossainshake1@gmail.com", image: "https://i.ibb.co.com/JFdgRQSv/ecefe6053de144e484974967cd7e9637.jpg"},
  {id: 7, name: "আবুল কালাম মিয়া", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭৯৬৩৪৬৪৮৫", email: "kalammiah068@gmail.com", image: "https://i.ibb.co.com/xtQzd4Xz/e28774694c3340538ef100fb8f4dab8a.jpg"},
  {id: 8, name: "মোঃ তারিফুল ইসলাম", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭১৪२००५५५", email: "tariful38diu@gmail.com", image: "https://i.ibb.co.com/k6hvm4JW/9c5b4bae5c304dc799de6898236d6a79.jpg"},
  {id: 9, name: "সন্তোষ কুমার কর্মকার", designation: "চিফ ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "০১৭१४५१८१८८", email: "santoshkarmaker33@gmail.com", image: "https://i.ibb.co.com/5Xw6dPP3/ac2db3ca06574b7abe6f854672ac9a28.jpg"},
  {id: 10, name: "রুমা রাণী সরকার", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१७७७२२८८९९", image: "https://i.ibb.co.com/Vphxgb3N/cff8ab2bb90141d78bbc1443e8f5353f.jpg"},
  {id: 11, name: "মোঃ রিপন মিয়া", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१८५२५९९७३४", email: "smripan20202@gmail.com", image: "https://i.ibb.co.com/PvLHxG2h/ac1f00c5843e4c5ba66958be62703af4.jpg"},
  {id: 12, name: "এস এম আব্দুল্লাহ আল শোয়ায়েব", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१७१६०९०११९", email: "nixon.cse28@gmail.com", image: "https://i.ibb.co.com/Gvh4SrJb/6038d923a60c4a66b054cf1be6ffaa8f.jpg"},
  {id: 13, name: "হাফেজ মোঃ আব্দুল কাদের", designation: "ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१७१९९२८०२६", email: "kader1284@gmail.com", image: "https://i.ibb.co.com/21KWFdtK/55eb6eec01b54dc392e71c32b664a70e.jpg"},
  {id: 14, name: "সুজন মিয়া", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१५८६३३६६१५", email: "sujanduetfury@gmail.com", image: "https://i.ibb.co.com/XZZBHSfS/824936f366724e9585125348a9ee5d65.jpg"},
  {id: 15, name: "আঃ হামিদ মিয়া", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१७६४४६४९३८", email: "abdulhamidmiah938@gmail.com", image: "https://i.ibb.co.com/FkfW0Xm0/d72c950f523c4fd2915b00b69771867e.jpg"},
  {id: 16, name: "টুম্পা মনি", designation: "জুনিয়র ইন্সট্রাক্টর", department: "কম্পিউটার সাইন্স এন্ড টেকনোলজি", phone: "०१७८९४७८४६७", email: "tumpamony21@gmail.com", image: "https://i.ibb.co.com/VWwGCpPH/5d2f03c633034abb8cd576aeea6ad2e1.jpg"}
];

function displayTeachers() {
  const c = document.getElementById("teacher-info");
  if (!c) return;
  c.innerHTML = teachersData.map(t => `
    <div onclick="showTeacherDetails(${t.id})" class="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div class="w-full h-72 overflow-hidden"><img src="${t.image}" alt="${t.name}" class="w-full h-full object-cover"/></div>
      <div class="p-6"><h3 class="font-bold text-lg mb-2 text-gray-800">${t.name}</h3>
      <p class="text-green-600 text-base font-semibold mb-3">${t.designation || ''}</p>
      <div class="border-t border-gray-100 pt-4"><p class="text-gray-700 text-sm mb-3"><span class="font-semibold">বিভাগ:</span> ${t.department || ''}</p>
      <div class="flex items-center gap-2 text-sm text-gray-600"><i class="fa-solid fa-phone text-green-600"></i><span>${t.phone}</span></div></div></div></div>
  `).join('');
}

function showTeacherDetails(id) {
  const t = teachersData.find(x => x.id === id);
  if (!t) return;
  const m = document.getElementById("modalBody");
  m.innerHTML = `<div class="space-y-4"><div class="flex items-center gap-4 pb-4 border-b"><div class="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"><img src="${t.image}" class="w-full h-full object-cover"/></div>
  <div><h3 class="text-2xl font-bold text-gray-800">${t.name}</h3><p class="text-green-600 text-lg font-semibold">${t.designation || ''}</p><p class="text-gray-500">${t.department || ''}</p></div></div>
  <div class="bg-gray-50 rounded-xl p-4"><h4 class="font-bold text-gray-800 mb-3"><i class="fa-solid fa-address-card text-green-600 mr-2"></i>যোগাযোগের তথ্য</h4>
  <div><span class="font-semibold">ইমেইল:</span> ${t.email || 'N/A'}</div><div><span class="font-semibold">ফোন:</span> ${t.phone}</div></div></div>`;
  document.getElementById("detailsModal").classList.remove("hidden");
  document.getElementById("detailsModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("detailsModal").classList.add("hidden");
  document.getElementById("detailsModal").classList.remove("flex");
}

function toggleCards() {
  const e = document.getElementById("extraCards");
  const b = document.getElementById("btnText");
  const i = document.getElementById("btnIcon");
  if (e.classList.contains("hidden")) {
    e.classList.remove("hidden");
    b.textContent = "সংক্ষিপ্ত";
    i.classList.add("rotate-180");
  } else {
    e.classList.add("hidden");
    b.textContent = "সকল সেবাসমূহ দেখুন";
    i.classList.remove("rotate-180");
  }
}

window.onclick = e => e.target === document.getElementById("detailsModal") && closeModal();
document.addEventListener("DOMContentLoaded", displayTeachers);
