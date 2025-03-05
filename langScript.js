// function changeLanguage(language) {
//     fetch(`lang/${language}.json`) // Fetch the JSON file
//       .then(response => response.json())
//       .then(data => {
//         // Replace the content dynamically
//         document.getElementById("title").innerText = data.title;
//         document.getElementById("description").innerText = data.description;
//         document.getElementById("contact").innerText = data.contact;
//       })
//       .catch(error => console.error("Error loading language file:", error));
//   }




// function changeLanguage(language) {
//     // fetch(`lang/${language}.json`)
//     fetch(`lang/${language}.json?${new Date().getTime()}`)
//       .then(response => response.json())
//       .then(data => {
//         document.querySelectorAll("[data-key]").forEach(element => {
//           let key = element.getAttribute("data-key");
//           if (data[key]) {
//             element.innerText = data[key];
//           }
//         });
//       })
//       .catch(error => console.error("Language file not loaded", error));
//   }



const translations = {
  english: {
    title: "Seoul Dental Technician College",
    welcome: "Welcome To Seoul Dental Technician College",
    tagline: "Crafting Smiles with Precision & Passion!",
    contact: "Contact Us",
    whyChoose: "Why Choose Seoul Dental Technician College?",
    whyChooseDesc: "Seoul Dental Technician College offers top-tier education, cutting-edge facilities, and expert faculty specializing in dental technology. With hands-on training, industry partnerships, and a strong employment rate, students gain practical skills and global opportunities.",
    dentalTech: "Dental Technician",
    dentalDesc: "Repairing chipped and missing teeth. Creating dental devices for addressing problems of missing teeth, gum issues, tooth alignment, and bite alignment.",
    cadTech: "CAD Designer (Dental Technician)",
    cadDesc: "Repairing chipped and missing teeth. Designing teeth using specialized software.",
    graphicDesigner: "Graphic Designer",
    graphicDesc: "Leveraging the full potential of design software to design posters, flyers, product packages, and more.",
    accesptAd: "Now accepting applications for April admission!",
    accesptAdDesc: "At Seoul Dental Technician College, students can study to become dental technicians in a school with the latest equipment and classrooms.",
    aiming: "Aiming to find a job in Korea at Seoul",
    futurePath: "Future Career Paths",
  },
  korean: {
    title: "서울 치과 대학에 오신 것을 환영합니다",
    welcome: "서울 치기공 대학에 오신 것을 환영합니다",
    tagline: "정밀과 열정으로 미소를 만듭니다!",
    contact: "문의하기",
    whyChoose: "서울 치기공 대학을 선택해야 하는 이유는 무엇입니까?",
    whyChooseDesc: "서울 치기공 대학은 최첨단 시설과 치기공 분야 전문가 교수진과 함께 최고 수준의 교육을 제공합니다. 실습 훈련, 산업 파트너십 및 높은 취업률로 학생들은 실무 기술과 글로벌 기회를 얻습니다.",
    dentalTech: "치과 기술자",
    dentalDesc: "깨진 치아와 빠진 치아를 복구합니다. 결손 치아, 잇몸 문제, 치아 정렬 및 교합 정렬 문제를 해결하기 위한 치과 기기를 만듭니다.",
    cadTech: "CAD 디자이너 (치과 기술자)",
    cadDesc: "깨진 치아와 빠진 치아를 복구합니다. 특수 소프트웨어를 사용하여 치아를 설계합니다.",
    graphicDesigner: "그래픽 디자이너",
    graphicDesc: "디자인 소프트웨어의 모든 기능을 활용하여 포스터, 전단지, 제품 패키지 등을 디자인합니다.",
    accesptAd: "4월 입학 신청을 접수 중입니다!",
    accesptAdDesc: "서울 치기공 대학에서는 최신 장비와 교실에서 치과 기술자가 되기 위한 공부를 할 수 있습니다.",
    aiming: "서울에서 한국 취업을 목표로 하고 있습니다.",
    futurePath: "미래 경력 경로",

  },
  chinese: {
    title: "欢迎来到首尔牙科学院",
    welcome: "欢迎来到首尔牙科技工学院",
    tagline: "用精度和热情打造微笑!",
    contact: "联系我们",
    whyChoose: "为什么选择首尔牙科技工学院？",
    whyChooseDesc: "首尔牙科技工学院提供顶级教育、最先进的设施以及专注于牙科技术的专家师资。通过实践培训、行业合作伙伴关系和高就业率，学生可以获得实际技能和全球机会。",
    dentalTech: "牙科技工",
    dentalDesc: "修复破损和缺失的牙齿。创建牙科设备来解决缺牙、牙龈问题、牙齿排列和咬合排列的问题。",
    cadTech: "CAD 设计师（牙科技工）",
    cadDesc: "修复破损和缺失的牙齿。使用专业软件设计牙齿。",
    graphicDesigner: "平面设计师",
    graphicDesc: "充分利用设计软件的全部潜力来设计海报、宣传单、产品包装等。",
    accesptAd: "现接受4月入学申请！",
    accesptAdDesc: "在首尔牙科技工学院，学生可以在配备最新设备和教室的学校学习成为牙科技工。",
    aiming: "在首尔寻找韩国工作的目标",
    futurePath: "未来职业路径",

  },
  vietnam: {
    title: "Chào mừng đến với Seoul Dental College",
    welcome: "Chào mừng đến với Trường Cao đẳng Kỹ thuật Nha khoa Seoul",
    tagline: "Tạo nụ cười với độ chính xác và đam mê!",
    contact: "Liên hệ",
    whyChoose: "Tại sao chọn Trường Cao đẳng Kỹ thuật Nha khoa Seoul?",
    whyChooseDesc: "Trường Cao đẳng Kỹ thuật Nha khoa Seoul cung cấp nền giáo dục hàng đầu, cơ sở vật chất hiện đại và đội ngũ giảng viên chuyên gia trong lĩnh vực kỹ thuật nha khoa. Với đào tạo thực hành, đối tác trong ngành và tỷ lệ việc làm cao, sinh viên có được kỹ năng thực tiễn và cơ hội toàn cầu.",
    dentalTech: "Kỹ thuật viên nha khoa",
    dentalDesc: "Sửa chữa răng sứt mẻ và mất răng. Tạo các thiết bị nha khoa để giải quyết các vấn đề về mất răng, vấn đề về nướu, sắp xếp răng và sắp xếp khớp cắn.",
    cadTech: "Nhà thiết kế CAD (Kỹ thuật viên nha khoa)",
    cadDesc: "Sửa chữa răng sứt mẻ và mất răng. Thiết kế răng bằng phần mềm chuyên dụng.",
    graphicDesigner: "Nhà thiết kế đồ họa",
    graphicDesc: "Tận dụng tối đa tiềm năng của phần mềm thiết kế để thiết kế áp phích, tờ rơi, bao bì sản phẩm và hơn thế nữa.",
    accesptAd: "Hiện đang nhận đơn đăng ký cho kỳ nhập học tháng Tư!",
    accesptAdDesc: "Tại trường Cao đẳng Kỹ thuật Nha khoa Seoul, sinh viên có thể học để trở thành kỹ thuật viên nha khoa trong một trường học với các thiết bị và lớp học mới nhất.",
    aiming: "Hướng tới tìm việc làm tại Seoul, Hàn Quốc",
    futurePath: "Con đường sự nghiệp tương lai",
  }
};

function changeLanguage(lang) {
  localStorage.setItem("lang", lang); // Refresh ke baad language yaad rahegi
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "english";
  changeLanguage(savedLang);
});
