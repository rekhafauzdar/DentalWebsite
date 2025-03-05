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
    desingerDesc: "Creating anime, games, and videos using 3D technology",
    desinger: "3D CG designer",
    ManyStud: "Many of our students go on to obtain national certifications and gain employment in Korea!",
    empsupport: "Employment Support",
    empsupportDesc: "Our school receives a large number of requests for staff, from which our students can select for themselves the company or dental clinic they want to work at. Measures for interviews and exams are also implemented on a case-by-case basis, and we aim to find employment for every one of our students.",
    supportList: ["Finding employment in Korea", "Writing a CV", "Interview practice", "Help with hiring examinations", "Consultations for employment overseas or in home country"],
    offieringGuidence: "Offering employment guidance and interview practice, our specialist staff support our students.",
    empsupportScedule: "Employment support schedule",
 sitename : "Seoul Dental College",
 supportList1 : "Support for Finding Employment",
 supportList2 : "Finding employment in Korea",
 supportList3 : "Writing a CV",
 supportList4 : "Interview practice",
 supportList5 : "Help with hiring examinations",
 supportList6 : "Consultations for employment overseas or in home country",
 doctor : "Doctors",
 dept : "Departments",
 lab : "Research Labs",
 awards : "Awards",
 voice : "Voices of seniors active in the industry",
 employedMedical : "Employed by SG Medical Implant Co., Ltd (Korea)",
 nowWorkMedical : "He now works for Misokook Dental Group (China) Dental Technician Department Group I graduate, Mr. Wang",
 employedDental : "Employed by Wee Dental Clinic Lab Co., Ltd (Korea)",
 nowWorkDental : "Advanced from the Dental Technician Preparatory Education Department, graduated from the Dental Technician Department Group I／From the Philippines Ms. D'elsa",
 employedBK : "Employed by B&K Dental Digital Studio Co., Ltd (Australia)",
 nowWorkBK : "Graduated from Dental Technician Department Group I／From China Ms. Hu",
 major : "Major",
 futureOption : "Future options after completing one year program",
 Aim : "Aim to become a member of the anime, game, video, or dental industries",
 Course : "3DCG/CAD Designer Major (3 year program)",

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
    desingerDesc: "3D 기술을 사용하여 애니메이션, 게임 및 비디오 제작",
    desinger: "3D CG 디자이너",
    ManyStud: "우리 학생들 중 많은 사람들이 국가 자격증을 취득하고 한국에서 취업합니다!",
    empsupport: "취업 지원",
    empsupportDesc: "우리 학교는 많은 채용 요청을 받고 있으며, 학생들은 자신이 일하고 싶은 회사나 치과 클리닉을 선택할 수 있습니다. 면접 및 시험에 대한 조치도 사례별로 시행되며, 모든 학생이 취업할 수 있도록 목표로 하고 있습니다.",
    supportList: ["한국에서의 취업", "이력서 작성", "면접 연습", "채용 시험 지원", "해외 또는 모국에서의 취업 상담"],
    offieringGuidence: "취업 안내 및 면접 연습을 제공하여 전문 직원이 학생들을 지원합니다.",
    empsupportScedule: "취업 지원 일정",
    sitename  : "서울 치과 대학",
    supportList1  : "취업 지원",
    supportList2  : "한국에서의 취업",
    supportList3  : "이력서 작성",
    supportList4  : "면접 연습",
    supportList5  : "채용 시험 지원",
    supportList6  : "해외 또는 모국에서의 취업 상담",
    doctor  : "의사",
    dept  : "부서",
    lab  : "연구실",
    awards  : "수상",
    voice  : "업계에서 활동 중인 선배들의 목소리",
    employedMedical  : "SG Medical Implant Co., Ltd (한국) 근무",
    nowWorkMedical  : "현재 중국 미소국 치과 그룹에서 근무 중, 치과 기술학과 Group I 졸업, Mr. Wang",
    employedDental  : "Wee Dental Clinic Lab Co., Ltd (한국) 근무",
    nowWorkDental  : "치과 기술 준비 교육부에서 진급, 치과 기술학과 Group I 졸업 / 필리핀 출신 Ms. D'elsa",
    employedBK  : "B&K Dental Digital Studio Co., Ltd (호주) 근무",
    nowWorkBK  : "치과 기술학과 Group I 졸업 / 중국 출신 Ms. Hu",
    major  : "전공",
    futureOption  : "1년 프로그램 완료 후의 미래 옵션",
    Aim  : "애니메이션, 게임, 비디오 또는 치과 산업의 구성원이 되는 것을 목표로 합니다",
    Course  : "3DCG/CAD 디자이너 전공 (3년 프로그램)",


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
    desingerDesc: "使用3D技术创建动漫、游戏和视频",
    desinger: "3D CG 设计师",
    ManyStud: "我们的许多学生获得国家认证并在韩国就业！",
    empsupport: "就业支持",
    empsupportDesc: "我们学校收到大量的员工请求，学生可以自行选择想要工作的公司或牙科诊所。根据具体情况实施面试和考试措施，我们的目标是为每位学生找到工作。",
    supportList: ["在韩国寻找工作", "撰写简历", "面试练习", "帮助招聘考试", "海外或本国就业咨询"],
    offieringGuidence: "提供就业指导和面试练习，我们的专业人员支持学生。",
    empsupportScedule: "就业支持时间表",
    sitename : "首尔牙科学院",
    supportList1 : "就业支持",
    supportList2 : "在韩国寻找工作",
    supportList3 : "撰写简历",
    supportList4 : "面试练习",
    supportList5 : "帮助招聘考试",
    supportList6 : "海外或本国就业咨询",
    doctor : "医生",
    dept : "部门",
    lab : "研究实验室",
    awards : "奖项",
    voice : "活跃在行业中的前辈声音",
    employedMedical : "受雇于SG Medical Implant Co., Ltd (韩国)",
    nowWorkMedical : "目前在中国Misokook Dental Group工作，牙科技工系Group I毕业，Mr. Wang",
    employedDental : "受雇于Wee Dental Clinic Lab Co., Ltd (韩国)",
    nowWorkDental : "从牙科技工预备教育系升学，牙科技工系Group I毕业／来自菲律宾 Ms. D'elsa",
    employedBK : "受雇于B&K Dental Digital Studio Co., Ltd (澳大利亚)",
    nowWorkBK : "牙科技工系Group I毕业／来自中国 Ms. Hu",
    major : "专业",
    futureOption : "完成一年课程后的未来选择",
    Aim : "目标成为动漫、游戏、视频或牙科行业的成员",
    Course : "3DCG/CAD 设计师专业 （3年课程）",


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
    desingerDesc: "Tạo anime, trò chơi và video bằng công nghệ 3D",
    desinger: "Nhà thiết kế 3D CG",
    ManyStud: "Nhiều sinh viên của chúng tôi đạt được chứng chỉ quốc gia và có việc làm tại Hàn Quốc!",
    empsupport: "Hỗ trợ việc làm",
    empsupportDesc: "Trường chúng tôi nhận được nhiều yêu cầu tuyển dụng, từ đó sinh viên có thể tự chọn công ty hoặc phòng khám nha khoa mà họ muốn làm việc. Các biện pháp phỏng vấn và thi tuyển cũng được thực hiện tùy từng trường hợp, và chúng tôi hướng tới việc tìm kiếm việc làm cho tất cả sinh viên.",
    supportList: ["Tìm việc làm tại Hàn Quốc", "Viết CV", "Luyện phỏng vấn", "Hỗ trợ kỳ thi tuyển dụng", "Tư vấn việc làm ở nước ngoài hoặc tại quê nhà"],
    offieringGuidence: "Cung cấp hướng dẫn việc làm và luyện phỏng vấn, đội ngũ nhân viên chuyên nghiệp hỗ trợ sinh viên.",
    empsupportScedule: "Lịch trình hỗ trợ việc làm",
    sitename : "Trường Cao đẳng Nha khoa Seoul",
    supportList1 : "Hỗ trợ tìm việc làm",
    supportList2 : "Tìm việc làm tại Hàn Quốc",
    supportList3 : "Viết CV",
    supportList4 : "Luyện phỏng vấn",
    supportList5 : "Hỗ trợ kỳ thi tuyển dụng",
    supportList6 : "Tư vấn việc làm ở nước ngoài hoặc tại quê nhà",
    doctor : "Bác sĩ",
    dept : "Khoa",
    lab : "Phòng thí nghiệm nghiên cứu",
    awards : "Giải thưởng",
    voice : "Tiếng nói của các đàn anh hoạt động trong ngành",
    employedMedical : "Làm việc tại SG Medical Implant Co., Ltd (Hàn Quốc)",
    nowWorkMedical : "Hiện đang làm việc cho Misokook Dental Group (Trung Quốc), tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I, Mr. Wang",
    employedDental : "Làm việc tại Wee Dental Clinic Lab Co., Ltd (Hàn Quốc)",
    nowWorkDental : "Tiến bộ từ Khoa Giáo dục Chuẩn bị Kỹ thuật Nha khoa, tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I／Từ Philippines Ms. D'elsa",
    employedBK : "Làm việc tại B&K Dental Digital Studio Co., Ltd (Úc)",
    nowWorkBK : "Tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I／Từ Trung Quốc Ms. Hu",
    major : "Chuyên ngành",
    futureOption : "Các lựa chọn tương lai sau khi hoàn thành chương trình một năm",
    Aim : "Mục tiêu trở thành thành viên của các ngành công nghiệp anime, trò chơi, video hoặc nha khoa",
    Course : "Chuyên ngành Thiết kế 3DCG/CAD (Chương trình 3 năm)",
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
