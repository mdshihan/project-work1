 let expanded = false;
    function toggleCards() {
      expanded = !expanded;
      const extra = document.getElementById('extraCards');
      const btnText = document.getElementById('btnText');
      const btnIcon = document.getElementById('btnIcon');
      if (expanded) {
        extra.classList.remove('hidden');
        btnText.textContent = 'সংক্ষিপ্ত';
        btnIcon.classList.add('rotate-180');
      } else {
        extra.classList.add('hidden');
        btnText.textContent = 'সকল সেবাসমূহ দেখুন';
        btnIcon.classList.remove('rotate-180');
      }
    }

  // right cart script 
// Sample JSON data - You can replace this with your actual data
const teachersData =[
  {
    "id": 1,
    "name": "মোঃ মোশাররফ হোসেন",
    "designation": "",
    "department": "",
    "email": "tangpoly1991@gmail.com",
    "phone": "+৮৮০ ১৩০৯-১৩২৬৮২",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/Rp2z3XB9/e3ab89c0f6354fc289615a516725c853.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 2,
    "name": "খ. ম. রওশন হাবিব",
    "designation": "",
    "department": "",
    "email": "kmrhabib@gmail.com",
    "phone": "০১৭১২১১৫০৩৪",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/QFFJVH8m/250acb0d604a422ab05a300400fca227.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 3,
    "name": "নাছির আহমেদ",
    "designation": "চীফ ইন্সট্রাক্টর (টেক) কম্পিউটার",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "",
    "phone": "০১৭১২৬৭৪১৭৪",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/9kDc72mJ/c0509dfa54334b6390c933e829761a2e.jpg",
    "imageIcon": "👨‍💻"
  },
  {
    "id": 4,
    "name": "রেজাউল করিম",
    "designation": "ইন্সট্রাক্টর",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "karimmpi1985@gmail.com",
    "phone": "০১৭০৫৪৩২২৯৭",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/LDZTmqJ1/be62095c00fe40f097f846883201bad7.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 5,
    "name": "প্রকৌশলী জান্নাতুল ফেরদৌসী",
    "designation": "ইন্সট্রাক্টর",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "shilpiduet@gmail.com",
    "phone": "০১৭১৬৮৩৬৯৩৯",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/35X64Vv0/4b2310bbfc094a76a9325e154997bfc3.jpg",
    "imageIcon": "👩‍🏫"
  },
  {
    "id": 6,
    "name": "শাহাদৎ হোসাইন",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ১ম শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "shahadathossainshake1@gmail.com",
    "phone": "০১৫৩১১৯৪৩৬৭",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/JFdgRQSv/ecefe6053de144e484974967cd7e9637.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 7,
    "name": "আবুল কালাম মিয়া",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ১ম শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "kalammiah068@gmail.com",
    "phone": "০১৭৯৬৩৪৬৪৮৫",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/xtQzd4Xz/e28774694c3340538ef100fb8f4dab8a.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 8,
    "name": "মোঃ তারিফুল ইসলাম",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ১ম শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "tariful38diu@gmail.com",
    "phone": "০১৭১৪২০০৫৫৫",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/k6hvm4JW/9c5b4bae5c304dc799de6898236d6a79.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 9,
    "name": "সন্তোষ কুমার কর্মকার",
    "designation": "চিফ ইন্সট্রাক্টর (টেক) কম্পিউটার",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "santoshkarmaker33@gmail.com",
    "phone": "০১৭১৪৫১৮১৮৮",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/5Xw6dPP3/ac2db3ca06574b7abe6f854672ac9a28.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 10,
    "name": "রুমা রাণী সরকার",
    "designation": "ইনস্ট্রাক্টর",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "",
    "phone": "০১৭৭৭২২৮৮৯৯",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/Vphxgb3N/cff8ab2bb90141d78bbc1443e8f5353f.jpg",
    "imageIcon": "👩‍🏫"
  },
  {
    "id": 11,
    "name": "মোঃ রিপন মিয়া",
    "designation": "ইন্সট্রাক্টর (টেক) কম্পিউটার",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "smripan20202@gmail.com",
    "phone": "০১৮৫২৫৯৯৭৩৪",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/PvLHxG2h/ac1f00c5843e4c5ba66958be62703af4.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 12,
    "name": "এস এম আব্দুল্লাহ আল শোয়ায়েব (নিক্সন)",
    "designation": "ইনস্ট্রাক্টর",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "nixon.cse28@gmail.com",
    "phone": "০১৭১৬০৯০১১৯",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/Gvh4SrJb/6038d923a60c4a66b054cf1be6ffaa8f.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 13,
    "name": "হাফেজ মোঃ আব্দুল কাদের",
    "designation": "ইনস্ট্রাক্টর (টেক) কম্পিউটার",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "kader1284@gmail.com",
    "phone": "০১৭১৯৯২৮০২৬",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/21KWFdtK/55eb6eec01b54dc392e71c32b664a70e.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 14,
    "name": "সুজন মিয়া",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ২য় শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "sujanduetfury@gmail.com",
    "phone": "০১৫৮৬৩৩৬৬১৫",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/XZZBHSfS/824936f366724e9585125348a9ee5d65.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 15,
    "name": "আঃ হামিদ মিয়া",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ২য় শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "abdulhamidmiah938@gmail.com",
    "phone": "০১৭৬৪৪৬৪৯৩৮",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/FkfW0Xm0/d72c950f523c4fd2915b00b69771867e.jpg",
    "imageIcon": "👨‍🏫"
  },
  {
    "id": 16,
    "name": "টুম্পা মনি",
    "designation": "জুনিয়র ইনস্ট্রাক্টর (টেক/কম্পিউটার) / ২য় শিফট",
    "department": "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
    "email": "tumpamony21@gmail.com",
    "phone": "০১৭৮৯৪৭৮৪৬৭",
    "qualification": "",
    "experience": "",
    "publications": "",
    "achievements": [],
    "subjects": [],
    "officeHours": "",
    "roomNo": "",
    "image": "https://i.ibb.co.com/VWwGCpPH/5d2f03c633034abb8cd576aeea6ad2e1.jpg",
    "imageIcon": "👩‍🏫"
  }
]

// Function to display teachers using map
function displayTeachers() {
  const teacherContainer = document.getElementById("teacher-info");
  
  if (!teacherContainer) return;
  
  // Using map function to create HTML for each teacher
  const teachersHTML = teachersData.map(teacher => `
    <div onclick="showTeacherDetails(${teacher.id})" class="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div class="w-full h-72 bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center overflow-hidden">
        <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <h3 class="font-bold text-gray-800 text-lg mb-2">${teacher.name}</h3>
        <p class="text-green-600 text-base font-semibold mb-3">${teacher.designation}</p>
        <div class="border-t border-gray-100 pt-4">
          <p class="text-gray-700 text-sm mb-3"><span class="font-semibold">বিভাগ:</span> ${teacher.department}</p>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <i class="fa-solid fa-phone text-green-600 text-base"></i>
            <span>${teacher.phone}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  teacherContainer.innerHTML = teachersHTML;
}

// Function to show detailed teacher information in modal
function showTeacherDetails(teacherId) {
  const teacher = teachersData.find(t => t.id === teacherId);
  if (!teacher) return;

  const modalBody = document.getElementById("modalBody");
  
  // Creating detailed view
  const detailedHTML = `
    <div class="space-y-6">
      <!-- Profile Header -->
      <div class="flex items-center gap-4 pb-4 border-b border-gray-200">
        <div class="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-4xl overflow-hidden flex-shrink-0">
          <img src="${teacher.image}" alt="${teacher.name}" class="w-full h-full object-cover" />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-800">${teacher.name}</h3>
          <p class="text-green-600 text-lg font-semibold">${teacher.designation}</p>
          <p class="text-gray-500">${teacher.department}</p>
        </div>
      </div>
      
      <!-- Contact Information -->
      <div class="bg-gray-50 rounded-xl p-4">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-address-card text-green-600"></i>
          যোগাযোগের তথ্য
        </h4>
        <div class="space-y-2">
          <div><span class="font-semibold">ইমেইল:</span> ${teacher.email || 'N/A'}</div>
          <div><span class="font-semibold">ফোন:</span> ${teacher.phone}</div>
        </div>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = detailedHTML;
  document.getElementById("detailsModal").classList.remove("hidden");
  document.getElementById("detailsModal").classList.add("flex");
}

// Function to close modal
function closeModal() {
  document.getElementById("detailsModal").classList.add("hidden");
  document.getElementById("detailsModal").classList.remove("flex");
}

// Toggle extra cards function
function toggleCards() {
  const extraCards = document.getElementById("extraCards");
  const btnText = document.getElementById("btnText");
  const btnIcon = document.getElementById("btnIcon");
  
  if (extraCards.classList.contains("hidden")) {
    extraCards.classList.remove("hidden");
    btnText.innerText = "সকল সেবাসমূহ কম দেখুন";
    btnIcon.classList.remove("fa-chevron-down");
    btnIcon.classList.add("fa-chevron-up");
  } else {
    extraCards.classList.add("hidden");
    btnText.innerText = "সকল সেবাসমূহ দেখুন";
    btnIcon.classList.remove("fa-chevron-up");
    btnIcon.classList.add("fa-chevron-down");
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("detailsModal");
  if (event.target === modal) {
    closeModal();
  }
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  displayTeachers();
});