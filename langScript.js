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
    desinger: "3D CG Designer",
    ManyStud: "Many of our students go on to obtain national certifications and gain employment in Korea!",
    empsupport: "Employment Support",
    empsupportDesc: "Our school receives a large number of requests for staff, from which our students can select for themselves the company or dental clinic they want to work at. Measures for interviews and exams are also implemented on a case-by-case basis, and we aim to find employment for every one of our students.",
    supportList: ["Finding employment in Korea", "Writing a CV", "Interview practice", "Help with hiring examinations", "Consultations for employment overseas or in home country"],
    offieringGuidence: "Offering employment guidance and interview practice, our specialist staff support our students.",
    empsupportScedule: "Employment support schedule",
    sitename: "Seoul Dental College",
    supportList1: "Support for Finding Employment",
    supportList2: "Finding employment in Korea",
    supportList3: "Writing a CV",
    supportList4: "Interview practice",
    supportList5: "Help with hiring examinations",
    supportList6: "Consultations for employment overseas or in home country",
    doctor: "Doctors",
    dept: "Departments",
    lab: "Research Labs",
    awards: "Awards",
    voice: "Voices of seniors active in the industry",
    employedMedical: "Employed by SG Medical Implant Co., Ltd (Korea)",
    nowWorkMedical: "He now works for Misokook Dental Group (China) Dental Technician Department Group I graduate, Mr. Wang",
    employedDental: "Employed by Wee Dental Clinic Lab Co., Ltd (Korea)",
    nowWorkDental: "Advanced from the Dental Technician Preparatory Education Department, graduated from the Dental Technician Department Group I／From the Philippines Ms. D'elsa",
    employedBK: "Employed by B&K Dental Digital Studio Co., Ltd (Australia)",
    nowWorkBK: "Graduated from Dental Technician Department Group I／From China Ms. Hu",
    major: "Major",
    futureOption: "Future options after completing one year program",
    aimToBecome: "Aim to become a member of the anime, game, video, or dental industries",
    Course: "3DCG/CAD Designer Major (3 year program)",
    clickforDetail: "Click here for details",
    marketing: "Marketing",
    certification: "Obtain a national certification in as little as two years and find employment in Japan",
    dentalMajor: "Dental Technician Major (2 year program) ",
    qualification: "National Dental Technician Exam〈3rd year〉",
    jobstability: "People seeking future job stability",
    richPrivateLife: "People who want to enjoy a rich private life",
    moreDetails: "More details here",
    headingtex: "Seoul offers international student support, from enrollment to graduation and job placement",
    internationsupport: "International Student Support Center （Student Service Center）",
    visa: "Visa consultation and support",
    visarenewals: "Our students can consult with us about any problems they encounter in their international student life (visa renewals, tuition, moving, etc.)!",
    canrenew: "so students can renew their student visas without even leaving the school!",
    consult: "You can also consult with us regarding other visa types.",

    someofour: "Some of our International Students",
    someofourDesc: "Here are some of the international students that studied in our Dental Technician Preparatory Education Department for a year and then advanced onto our Dental Technician Department",
    name1: "Songyo Mo（from China）",
    shinguUniversity: "Graduate of Language School in Shingu University",
    name1Desc: "Kind teachers, considerate friends, and a beautiful school!",
    name2: "Tao V（from Vietnam）",
    name2Desc: "Seoul has high level teachers you can rely on. It gives you the courage and the confidence to stride boldly forward.",
    name3: "Brigod （from China）",
    name3Desc: "I made a lot of friends at Seoul!",
    name4: "Cho Ho（from China）",
    KyungdongUniversity: "Graduate of Language School in Kyungdong University",
    name4Desc: "The teachers at Seoul are kind and the facilities are in tip-top condition. There are a lot of fun things to do and I've made friends from around the world.",
    name5: "Chanconram（from Vietnam)",
    DongnamCollege: "Graduate of Language School in Dongnam Health College",
    name5Desc: "The teachers are really passionate, kind, and supportive. At Seoul, you can realize your dream of becoming a dental technician!",
    name6: "Nomin （from Mongolia）",
    BucheonUnivercity: "Graduate of Language School in Bucheon University",
    name6Desc: "At Seoul, you're greeted every day with a friendly smile!",
    attendedbymany: "Seoul Dental College is attended by many international students from around the world!",

    ourstaff: "Our staff includes a staff member with a visa agent certification issued by the Seoul Regional Immigration Bureau.",
    onlinesupport: "We have a full range of online support, including videos to explain technical terms!",
    supervisedbygroup: "These are supervised by Group Korean language schools to ensure the wording is easy for international students to understand, explaining difficult terms in ordinary language.",
    supportProgram: "International Student Support Program",
    classSupport: "The teachers give support outside class times for points you may not have understood or to help with reviewing key areas.",
    Orientation: "Orientation for International Students",
    OrientationDesc: "You can make friends and exchange information beyond schools, departments, and academic years. We also have comprehensive lifestyle support for international students.",
    gathering: "Scenes from an International Student social gathering",
    internationalStudent: "Countries international students come from",
    subTitle: "Dental Technician College in Korea",
    subTitle1: "〈Seoul-Gyeonggi〉",
    subTitle2: "1. Dongnam Health College, 2.Shingu University, 3.Shinhan University, 4.Bucheon University, 5.Yonsei University",
    subTitle3: "〈Gangwon-do〉",
    subTitle4: "1.Kyungdong University, 2.Kwandong University",
    subTitle5: "〈Busan-Gyeongnam〉",
    subTitle6: "1.Masan University, 2.Busan Catholic University, 3.Jinju Health College, 4.Busan National University of Science and Technology",
    subTitle7: "〈Daegu-Gyeongbuk〉",
    subTitle8: "1.Suseong University, 2.Daegu Health College, 3.Kimcheon University",
    subTitle9: "〈Daejeon-Chungcheongnam-do〉",
    subTitleA: "1.Daejeon Health College, 2.Hyejeon University",
    subTitleB: "〈Cheongju-Chungcheongbuk-do〉",
    subTitleC: "1.Chungbuk Health Science College",
    subTitleD: "〈Gwangju-Jeollanam-do〉",
    subTitleE: "1.Honam University, 2.Mokpo Science College, 3.Dong-A Health College, 4.Gwangyang Health College, 5.Gwangju Health College",
    subTitleF: "〈Jeollabuk-do〉",
    subTitleG: "1.Wonkwang Health College",
    subTitleH: "〈Jeju-do〉",
    subTitleI: "1.Jeju Tourism College",
    subTitleJ: "...and many other International students enrolling over the past five years",


    advanceSoupport: "Academic Advancement Support Major",
    Hygienist: "Dental Hygienist Department I",
    deptDesc: "Department deals with medical management of Orofacial diseases and disorders and Radiology Section which deals with diagnostic radiology facilities.",
    oralMedicineDec: "Oral medicine is a specialized field of dentistry focusing on the diagnosis and treatment of diseases affecting the mouth, jaw, and related structures. It deals with conditions like oral ulcers, infections, autoimmune disorders, and oral cancer. Oral medicine specialists often collaborate with other healthcare professionals for comprehensive patient care.",
    oralMedicine: "Oral Medicine",
    Orthodontics: "Orthodontics",
    OrthodonticsDesc: "Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating misaligned teeth and jaws. It involves the use of braces, aligners, and other corrective devices to improve oral function and aesthetics.",
    Maxillofacial: "Maxillofacial Surgery",
    MaxillofacialDesc: "Maxillofacial surgery is a specialized branch of surgery that focuses on treating conditions affecting the face, jaw, mouth, and skull.",
    location: "Corporate office: 6FL, P12,602, Yeongdong-daero, Gangnam-gu, Seoul, Republic of Korea",
    home: "Home",
    aboutus: "About Us",
    service: "Services",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    deprtment: "Departments",
    student: "Students",
    contact: "Contact",
    Accommodation : "Accommodation support",
    AccommodationDec : "We provide accommodation support and information for living on your own or in a dorm, whichever best fits your lifestyle. Don't hesitate to consult with us."
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
    sitename: "서울 치과 대학",
    supportList1: "취업 지원",
    supportList2: "한국에서의 취업",
    supportList3: "이력서 작성",
    supportList4: "면접 연습",
    supportList5: "채용 시험 지원",
    supportList6: "해외 또는 모국에서의 취업 상담",
    doctor: "의사",
    dept: "부서",
    lab: "연구실",
    awards: "수상",
    voice: "업계에서 활동 중인 선배들의 목소리",
    employedMedical: "SG Medical Implant Co., Ltd (한국) 근무",
    nowWorkMedical: "현재 중국 미소국 치과 그룹에서 근무 중, 치과 기술학과 Group I 졸업, Mr. Wang",
    employedDental: "Wee Dental Clinic Lab Co., Ltd (한국) 근무",
    nowWorkDental: "치과 기술 준비 교육부에서 진급, 치과 기술학과 Group I 졸업 / 필리핀 출신 Ms. D'elsa",
    employedBK: "B&K Dental Digital Studio Co., Ltd (호주) 근무",
    nowWorkBK: "치과 기술학과 Group I 졸업 / 중국 출신 Ms. Hu",
    major: "전공",
    futureOption: "1년 프로그램 완료 후의 미래 옵션",
    aimToBecome: "애니메이션, 게임, 비디오 또는 치과 산업의 구성원이 되는 것을 목표로 합니다",
    Course: "3DCG/CAD 디자이너 전공 (3년 프로그램)",
    clickforDetail: "자세한 내용은 여기를 클릭하세요",
    marketing: "마케팅",
    certification: "단 2년 만에 국가 자격증을 취득하고 일본에서 취업하세요",
    dentalMajor: "치과 기술 전공 (2년 과정) ",
    qualification: "국가 치과 기술사 시험〈3학년〉",
    jobstability: "미래 직업 안정성을 찾는 사람들",
    richPrivateLife: "풍요로운 사생활을 즐기고 싶은 사람들",
    moreDetails: "더 자세한 내용은 여기에서 확인하세요",
    headingtex: "서울은 입학부터 졸업 및 취업까지 국제 학생 지원을 제공합니다",
    internationsupport: "국제 학생 지원 센터 （학생 서비스 센터）",
    visa: "비자 상담 및 지원",
    visarenewals: "우리 학생들은 유학생 생활 중 겪는 모든 문제(비자 갱신, 학비, 이사 등)에 대해 상담할 수 있습니다!",

    canrenew: "학생들이 학교를 떠나지 않고도 학생 비자를 갱신할 수 있습니다!",
    consult: "다른 비자 유형에 대한 상담도 가능합니다.",
    someofour: "우리 국제 학생 중 일부",
    someofourDesc: "여기에는 1년 동안 치과 기술 준비 교육 학과에서 공부한 후 치과 기술 학과로 진학한 국제 학생들이 있습니다.",
    name1: "송요 모（중국 출신）",
    shinguUniversity: "신구대학교 어학원 졸업",
    name1Desc: "친절한 선생님, 배려 깊은 친구들, 그리고 아름다운 학교!",
    name2: "타오 V（베트남 출신）",
    name2Desc: "서울에는 신뢰할 수 있는 수준 높은 교사들이 있습니다. 여러분에게 용기와 자신감을 줍니다.",
    name3: "브리고드（중국 출신）",
    name3Desc: "서울에서 많은 친구를 사귀었습니다!",
    name4: "조 호（중국 출신）",
    KyungdongUniversity: "경동대학교 어학원 졸업",
    name4Desc: "서울의 선생님들은 친절하고 시설은 최상의 상태입니다. 할 수 있는 재미있는 일이 많고 세계 각국의 친구들을 사귀었습니다.",
    name5: "찬콘람（베트남 출신）",
    DongnamCollege: "동남보건대학교 어학원 졸업",
    name5Desc: "선생님들은 정말 열정적이고 친절하며 지원적입니다. 서울에서는 치과 기술사가 되는 꿈을 실현할 수 있습니다!",
    name6: "노민（몽골 출신）",
    BucheonUnivercity: "부천대학교 어학원 졸업",
    name6Desc: "서울에서는 매일 친절한 미소로 맞이합니다!",
    attendedbymany: "서울 치과대학에는 세계 각국에서 온 많은 국제 학생들이 다니고 있습니다!",

    ourstaff: "우리 직원에는 서울출입국관리사무소에서 발급한 비자 대행 인증을 받은 직원이 포함되어 있습니다.",
    onlinesupport: "전문 용어를 설명하는 동영상을 포함하여 다양한 온라인 지원을 제공합니다!",
    supervisedbygroup: "이 과정은 국제 학생들이 이해하기 쉽도록 한국어 학교 그룹에서 감독하며, 어려운 용어를 평이한 언어로 설명합니다.",
    supportProgram: "국제 학생 지원 프로그램",
    classSupport: "수업 시간 외에도 이해하지 못한 부분이나 주요 내용을 복습할 수 있도록 지원합니다.",
    Orientation: "국제 학생 오리엔테이션",
    OrientationDesc: "학교, 학과 및 학년을 초월하여 친구를 사귀고 정보를 교환할 수 있습니다. 또한 국제 학생을 위한 포괄적인 생활 지원을 제공합니다.",
    gathering: "국제 학생 소셜 모임 장면",
    internationalStudent: "국제 학생들이 오는 국가",
    subTitle: "한국의 치과 기술사 대학",
    subTitle1: "〈서울-경기〉",
    subTitle2: "1. 동남보건대학, 2. 신구대학교, 3. 신한대학교, 4. 부천대학교, 5. 연세대학교",
    subTitle3: "〈강원도〉",
    subTitle4: "1. 경동대학교, 2. 관동대학교",
    subTitle5: "〈부산-경남〉",
    subTitle6: "1. 마산대학교, 2. 부산가톨릭대학교, 3. 진주보건대학, 4. 부산과학기술대학교",
    subTitle7: "〈대구-경북〉",
    subTitle8: "1. 수성대학교, 2. 대구보건대학교, 3. 김천대학교",
    subTitle9: "〈대전-충남〉",
    subTitleA: "1. 대전보건대학교, 2. 혜전대학교",
    subTitleB: "〈청주-충북〉",
    subTitleC: "1. 충북보건과학대학교",
    subTitleD: "〈광주-전남〉",
    subTitleE: "1. 호남대학교, 2. 목포과학대학교, 3. 동아보건대학, 4. 광양보건대학, 5. 광주보건대학교",
    subTitleF: "〈전북〉",
    subTitleG: "1. 원광보건대학",
    subTitleH: "〈제주도〉",
    subTitleI: "1. 제주관광대학교",
    subTitleJ: "...지난 5년 동안 많은 국제 학생들이 등록했습니다.",

    advanceSoupport: "학문 발전 지원 전공",
    Hygienist: "치과 위생사 학과 I",
    deptDesc: "학과는 구강 질환의 의료 관리와 진단 방사선 시설을 다루는 방사선학 섹션을 담당합니다.",
    oralMedicineDec: "구강 의학은 입, 턱 및 관련 구조에 영향을 미치는 질병의 진단과 치료에 중점을 둔 치과의 전문 분야입니다.",
    oralMedicine: "구강 의학",
    Orthodontics: "교정학",
    OrthodonticsDesc: "교정학은 치아와 턱의 불균형을 진단, 예방 및 치료하는 치과의 전문 분야입니다.",
    Maxillofacial: "악안면 수술",
    MaxillofacialDesc: "악안면 수술은 얼굴, 턱, 입 및 두개골에 영향을 미치는 질환을 치료하는 데 중점을 둡니다.",
    location: "본사: 서울특별시 강남구 영동대로 602, P12, 6층",
    home: "홈",
    aboutus: "회사 소개",
    service: "서비스",
    terms: "서비스 약관",
    privacy: "개인정보 보호정책",
    deprtment: "학과",
    student: "학생",
    contact: "연락처",
    Accommodation : "숙박 지원",
    AccommodationDec : "혼자 살거나 기숙사에 거주할 수 있도록 숙박 지원 및 정보를 제공합니다. 귀하의 라이프스타일에 가장 적합한 옵션을 선택하십시오. 주저하지 말고 상담해 주세요."
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
    sitename: "首尔牙科学院",
    supportList1: "就业支持",
    supportList2: "在韩国寻找工作",
    supportList3: "撰写简历",
    supportList4: "面试练习",
    supportList5: "帮助招聘考试",
    supportList6: "海外或本国就业咨询",
    doctor: "医生",
    dept: "部门",
    lab: "研究实验室",
    awards: "奖项",
    voice: "活跃在行业中的前辈声音",
    employedMedical: "受雇于SG医疗植入有限公司 (韩国)",
    nowWorkMedical: "目前在中国Misokook牙科集团工作，牙科技工系Group I毕业，王先生",
    employedDental: "受雇于Wee牙科诊所实验室有限公司 (韩国)",
    nowWorkDental: "从牙科技工预备教育系升学，牙科技工系Group I毕业／来自菲律宾 D'elsa女士",
    employedBK: "受雇于B&K牙科数字工作室有限公司 (澳大利亚)",
    nowWorkBK: "牙科技工系Group I毕业／来自中国 Hu女士",
    major: "专业",
    futureOption: "完成一年课程后的未来选择",
    aimToBecome: "目标成为动漫、游戏、视频或牙科行业的成员",
    Course: "3DCG/CAD 设计师专业 （3年课程）",
    clickforDetail: "点击此处查看详细信息",
    marketing: "市场营销",
    certification: "仅需两年即可获得国家认证，并在日本找到工作",
    dentalMajor: "牙科技师专业 (2年课程) ",
    qualification: "国家牙科技师考试〈第3年〉",
    jobstability: "寻求未来工作稳定性的人",
    richPrivateLife: "希望享受丰富私人生活的人",
    moreDetails: "更多详细信息请点击这里",
    headingtex: "首尔提供国际学生支持，从入学到毕业及就业安置",
    internationsupport: "国际学生支持中心 （学生服务中心）",
    visa: "签证咨询与支持",
    visarenewals: "我们的学生可以就国际学生生活中遇到的任何问题（签证续签、学费、搬家等）向我们咨询！",

    canrenew: "因此学生甚至无需离开学校即可续签学生签证！",
    consult: "您还可以咨询其他类型的签证。",
    someofour: "我们的一些国际学生",
    someofourDesc: "这里是一些在牙科技师预科教育部门学习一年后升入牙科技师部门的国际学生。",
    name1: "宋耀模（来自中国）",
    shinguUniversity: "新宫大学语言学校毕业",
    name1Desc: "亲切的老师，体贴的朋友，美丽的学校！",
    name2: "陶 V（来自越南）",
    name2Desc: "首尔有可以依赖的高水平教师。它给你勇气和信心大胆向前迈进。",
    name3: "布里戈德（来自中国）",
    name3Desc: "我在首尔交了很多朋友！",
    name4: "赵浩（来自中国）",
    KyungdongUniversity: "庆东大学语言学校毕业",
    name4Desc: "首尔的老师很亲切，设施非常完善。有很多有趣的事情可以做，我结识了来自世界各地的朋友。",
    name5: "陈康然（来自越南）",
    DongnamCollege: "东南保健学院语言学校毕业",
    name5Desc: "老师们真的很有激情、亲切且支持。在首尔，您可以实现成为牙科技师的梦想！",
    name6: "诺明（来自蒙古）",
    BucheonUnivercity: "富川大学语言学校毕业",
    name6Desc: "在首尔，每天都会迎接你一个友善的微笑！",
    attendedbymany: "首尔牙科大学吸引了来自世界各地的众多国际学生！",

    ourstaff: "我们的员工包括持有首尔地区入境管理局签发的签证代理认证的工作人员。",
    onlinesupport: "我们提供全面的在线支持，包括解释技术术语的视频！",
    supervisedbygroup: "这些由韩国语言学校集团监督，确保国际学生能够理解，用通俗语言解释难懂的术语。",
    supportProgram: "国际学生支持计划",
    classSupport: "教师在课外时间提供支持，帮助理解难点或复习重点。",
    Orientation: "国际学生迎新会",
    OrientationDesc: "您可以结交朋友并在学校、部门和年级之间交换信息。我们还提供全面的生活支持。",
    gathering: "国际学生社交聚会场景",
    internationalStudent: "国际学生来自的国家",
    subTitle: "韩国牙科技师学院",
    subTitle1: "〈首尔-京畿〉",
    subTitle2: "1. 东南保健学院, 2. 新宫大学, 3. 新韩大学, 4. 富川大学, 5. 延世大学",
    subTitle3: "〈江原道〉",
    subTitle4: "1. 京东大学, 2. 关东大学",
    subTitle5: "〈釜山-庆南〉",
    subTitle6: "1. 马山大学, 2. 釜山天主教大学, 3. 晋州保健学院, 4. 釜山国立科学技术大学",
    subTitle7: "〈大邱-庆北〉",
    subTitle8: "1. 寿城大学, 2. 大邱保健学院, 3. 金泉大学",
    subTitle9: "〈大田-忠南〉",
    subTitleA: "1. 大田保健学院, 2. 慧泉大学",
    subTitleB: "〈清州-忠北〉",
    subTitleC: "1. 忠北保健科学学院",
    subTitleD: "〈光州-全南〉",
    subTitleE: "1. 湖南大学, 2. 木浦科学学院",
    subTitleF: "〈全罗北〉",
    subTitleG: "1. 原州保健学院",
    subTitleH: "〈济州道〉",
    subTitleI: "1. 济州观光学院",
    subTitleJ: "...过去五年入学的众多国际学生",

    advanceSoupport: "学术进阶支持专业",
    Hygienist: "牙科卫生员系 I",
    deptDesc: "该部门负责口面疾病和紊乱的医疗管理，以及诊断放射科提供的放射诊断设施。",
    oralMedicineDec: "口腔医学是牙科的一个专门领域，专注于口腔、下颌及相关结构疾病的诊断和治疗。",
    oralMedicine: "口腔医学",
    Orthodontics: "正畸学",
    OrthodonticsDesc: "正畸学是牙科的一个专门分支，致力于诊断、预防和治疗牙齿和下颌错位。",
    Maxillofacial: "颌面外科",
    MaxillofacialDesc: "颌面外科是专门治疗面部、下颌、口腔和颅骨相关疾病的外科领域。",
    location: "公司总部：韩国首尔市江南区永东大路602号 P12 6层",
    home: "首页",
    aboutus: "关于我们",
    service: "服务",
    terms: "服务条款",
    privacy: "隐私政策",
    deprtment: "部门",
    student: "学生",
    contact: "联系",
    Accommodation : "住宿支持",
    AccommodationDec : "我们提供住宿支持和信息，您可以选择独自居住或住在宿舍，取决于最适合您的生活方式。欢迎随时咨询我们。"
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
    sitename: "Trường Cao đẳng Nha khoa Seoul",
    supportList1: "Hỗ trợ tìm việc làm",
    supportList2: "Tìm việc làm tại Hàn Quốc",
    supportList3: "Viết CV",
    supportList4: "Luyện phỏng vấn",
    supportList5: "Hỗ trợ kỳ thi tuyển dụng",
    supportList6: "Tư vấn việc làm ở nước ngoài hoặc tại quê nhà",
    doctor: "Bác sĩ",
    dept: "Khoa",
    lab: "Phòng thí nghiệm nghiên cứu",
    awards: "Giải thưởng",
    voice: "Tiếng nói của các đàn anh hoạt động trong ngành",
    employedMedical: "Làm việc tại SG Medical Implant Co., Ltd (Hàn Quốc)",
    nowWorkMedical: "Hiện đang làm việc cho Misokook Dental Group (Trung Quốc), tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I, Mr. Wang",
    employedDental: "Làm việc tại Wee Dental Clinic Lab Co., Ltd (Hàn Quốc)",
    nowWorkDental: "Tiến bộ từ Khoa Giáo dục Chuẩn bị Kỹ thuật Nha khoa, tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I／Từ Philippines Ms. D'elsa",
    employedBK: "Làm việc tại B&K Dental Digital Studio Co., Ltd (Úc)",
    nowWorkBK: "Tốt nghiệp Khoa Kỹ thuật Nha khoa Nhóm I／Từ Trung Quốc Ms. Hu",
    major: "Chuyên ngành",
    futureOption: "Các lựa chọn tương lai sau khi hoàn thành chương trình một năm",
    aimToBecome: "Mục tiêu trở thành thành viên của các ngành công nghiệp anime, trò chơi, video hoặc nha khoa",
    Course: "Chuyên ngành Thiết kế 3DCG/CAD (Chương trình 3 năm)",
    clickforDetail: "Nhấp vào đây để biết chi tiết",
    marketing: "Tiếp thị",
    certification: "Nhận chứng chỉ quốc gia chỉ trong hai năm và tìm việc làm tại Nhật Bản",
    dentalMajor: "Chuyên ngành Kỹ thuật viên Nha khoa (Chương trình 2 năm) ",
    qualification: "Kỳ thi Kỹ thuật viên Nha khoa Quốc gia〈Năm thứ 3〉",
    jobstability: "Những người tìm kiếm sự ổn định trong công việc tương lai",
    richPrivateLife: "Những người muốn tận hưởng cuộc sống cá nhân phong phú",
    moreDetails: "Xem thêm chi tiết tại đây",
    headingtex: "Seoul cung cấp hỗ trợ sinh viên quốc tế, từ nhập học đến tốt nghiệp và tìm việc làm",
    internationsupport: "Trung tâm Hỗ trợ Sinh viên Quốc tế （Trung tâm Dịch vụ Sinh viên）",
    visa: "Tư vấn và hỗ trợ thị thực",
    visarenewals: "Sinh viên của chúng tôi có thể tham khảo ý kiến về bất kỳ vấn đề nào họ gặp phải trong cuộc sống du học (gia hạn visa, học phí, chuyển nhà, v.v.)!",
    canrenew: "vì vậy sinh viên có thể gia hạn thị thực của họ mà không cần rời khỏi trường!",
    consult: "Bạn cũng có thể tham khảo về các loại thị thực khác.",
    someofour: "Một số sinh viên quốc tế của chúng tôi",
    someofourDesc: "Dưới đây là một số sinh viên quốc tế đã học tại Khoa Chuẩn bị Kỹ thuật viên Nha khoa của chúng tôi trong một năm và sau đó chuyển sang Khoa Kỹ thuật viên Nha khoa.",
    name1: "Songyo Mo（từ Trung Quốc）",
    shinguUniversity: "Tốt nghiệp Trường Ngôn ngữ Đại học Shingu",
    name1Desc: "Giáo viên tốt bụng, bạn bè chu đáo và một ngôi trường đẹp!",
    name2: "Tao V（từ Việt Nam）",
    name2Desc: "Seoul có các giáo viên trình độ cao mà bạn có thể tin tưởng. Nó mang lại cho bạn sự can đảm và tự tin để tiến lên phía trước.",
    name3: "Brigod（từ Trung Quốc）",
    name3Desc: "Tôi đã kết bạn rất nhiều ở Seoul!",
    name4: "Cho Ho（từ Trung Quốc）",
    KyungdongUniversity: "Tốt nghiệp Trường Ngôn ngữ Đại học Kyungdong",
    name4Desc: "Giáo viên tại Seoul rất tốt bụng và cơ sở vật chất ở trong tình trạng tuyệt vời. Có rất nhiều điều thú vị để làm và tôi đã kết bạn từ khắp nơi trên thế giới.",
    name5: "Chanconram（từ Việt Nam）",
    DongnamCollege: "Tốt nghiệp Trường Ngôn ngữ Cao đẳng Y tế Dongnam",
    name5Desc: "Các giáo viên rất nhiệt tình, tốt bụng và hỗ trợ. Tại Seoul, bạn có thể thực hiện ước mơ trở thành kỹ thuật viên nha khoa của mình!",
    name6: "Nomin（từ Mông Cổ）",
    BucheonUnivercity: "Tốt nghiệp Trường Ngôn ngữ Đại học Bucheon",
    name6Desc: "Tại Seoul, bạn được chào đón mỗi ngày với một nụ cười thân thiện!",
    attendedbymany: "Trường Cao đẳng Nha khoa Seoul có nhiều sinh viên quốc tế từ khắp nơi trên thế giới!",

    ourstaff: "Nhân viên của chúng tôi bao gồm thành viên có chứng nhận đại lý visa do Cục Quản lý Xuất nhập cảnh Seoul cấp.",
    onlinesupport: "Chúng tôi có đầy đủ hỗ trợ trực tuyến, bao gồm video giải thích các thuật ngữ kỹ thuật!",
    supervisedbygroup: "Chương trình được giám sát bởi các trường ngôn ngữ Hàn Quốc để đảm bảo từ ngữ dễ hiểu cho sinh viên quốc tế.",
    supportProgram: "Chương trình Hỗ trợ Sinh viên Quốc tế",
    classSupport: "Giáo viên hỗ trợ ngoài giờ học cho các điểm bạn chưa hiểu hoặc giúp ôn tập các phần chính.",
    Orientation: "Buổi Định hướng cho Sinh viên Quốc tế",
    OrientationDesc: "Bạn có thể kết bạn và trao đổi thông tin giữa các trường, khoa và niên khóa. Chúng tôi cũng có hỗ trợ toàn diện về đời sống cho sinh viên quốc tế.",
    gathering: "Hình ảnh từ buổi giao lưu xã hội của sinh viên quốc tế",
    internationalStudent: "Các quốc gia sinh viên quốc tế đến từ",
    subTitle: "Trường Cao đẳng Kỹ thuật Nha khoa tại Hàn Quốc",
    subTitle1: "〈Seoul-Gyeonggi〉",
    subTitle2: "1. Dongnam Health College, 2. Shingu University, 3. Shinhan University, 4. Bucheon University, 5. Yonsei University",
    subTitle3: "〈Gangwon-do〉",
    subTitle4: "1. Kyungdong University, 2. Kwandong University",
    subTitle5: "〈Busan-Gyeongnam〉",
    subTitle6: "1. Masan University, 2. Busan Catholic University, 3. Jinju Health College, 4. Busan National University of Science and Technology",
    subTitle7: "〈Daegu-Gyeongbuk〉",
    subTitle8: "1. Suseong University, 2. Daegu Health College, 3. Kimcheon University",
    subTitle9: "〈Daejeon-Chungcheongnam-do〉",
    subTitleA: "1. Daejeon Health College, 2. Hyejeon University",
    subTitleB: "〈Cheongju-Chungcheongbuk-do〉",
    subTitleC: "1. Chungbuk Health Science College",
    subTitleD: "〈Gwangju-Jeollanam-do〉",
    subTitleE: "1. Honam University, 2. Mokpo Science College, 3. Dong-A Health College, 4. Gwangyang Health College, 5. Gwangju Health College",
    subTitleF: "〈Jeollabuk-do〉",
    subTitleG: "1. Wonkwang Health College",
    subTitleH: "〈Jeju-do〉",
    subTitleI: "1. Jeju Tourism College",
    subTitleJ: "...và nhiều sinh viên quốc tế đã nhập học trong năm năm qua",


    advanceSoupport: "Ngành Hỗ trợ Phát triển Học thuật",
    Hygienist: "Khoa Vệ sinh Nha khoa I",
    deptDesc: "Khoa phụ trách quản lý y tế các bệnh và rối loạn vùng miệng mặt và khoa Chẩn đoán hình ảnh với các thiết bị chẩn đoán tiên tiến.",
    oralMedicineDec: "Y học miệng là một lĩnh vực chuyên biệt của nha khoa tập trung vào chẩn đoán và điều trị các bệnh ảnh hưởng đến miệng, hàm và các cấu trúc liên quan.",
    oralMedicine: "Y học Miệng",
    Orthodontics: "Chỉnh nha",
    OrthodonticsDesc: "Chỉnh nha là một nhánh chuyên biệt của nha khoa nhằm chẩn đoán, phòng ngừa và điều trị răng và hàm bị lệch.",
    Maxillofacial: "Phẫu thuật hàm mặt",
    MaxillofacialDesc: "Phẫu thuật hàm mặt tập trung vào điều trị các bệnh lý ảnh hưởng đến mặt, hàm, miệng và hộp sọ.",
    location: "Văn phòng chính: Tầng 6, P12,602, Yeongdong-daero, Gangnam-gu, Seoul, Hàn Quốc",
    home: "Trang chủ",
    aboutus: "Giới thiệu",
    service: "Dịch vụ",
    terms: "Điều khoản dịch vụ",
    privacy: "Chính sách bảo mật",
    deprtment: "Khoa",
    student: "Sinh viên",
    contact: "Liên hệ",
    Accommodation : "Hỗ trợ chỗ ở",
    AccommodationDec : "Chúng tôi cung cấp hỗ trợ chỗ ở và thông tin để bạn sống một mình hoặc ở ký túc xá, phù hợp nhất với phong cách sống của bạn. Đừng ngần ngại tham khảo ý kiến của chúng tôi."
}
};

// function changeLanguage(lang) {
//   localStorage.setItem("lang", lang); // Refresh ke baad language yaad rahegi
//   document.querySelectorAll("[data-key]").forEach((element) => {
//     const key = element.getAttribute("data-key");
//     if (translations[lang][key]) {
//       element.textContent = translations[lang][key];
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const savedLang = localStorage.getItem("lang") || "english";
//   changeLanguage(savedLang);
// });



function changeLanguage(lang) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("lang", lang);
  }
  var elements = document.querySelectorAll("[data-key]");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  }
}

window.onload = function () {
  var savedLang = localStorage.getItem("lang") || "english";
  changeLanguage(savedLang);
};



function showPopup(e) {
  e.preventDefault(); // Form submit hone se pehle rokne ke liye
  const popup = document.getElementById("popup");

  // Popup dikhane ka kaam
  popup.style.display = "block";

  // 3 sec baad popup hide aur form reset
  setTimeout(() => {
    popup.style.display = "none";
    document.querySelector("form").reset(); // Form Reset
    e.target.submit(); // Form ko submit karne ke liye
  }, 3000);
}


function showPopup1(e) {
  e.preventDefault(); // Form submit hone se pehle rokne ke liye
  const popup = document.getElementById("popup");

  // Popup dikhane ka kaam
  popup.style.display = "block";

  // 3 sec baad popup hide aur form reset
  setTimeout(() => {
    popup.style.display = "none";
    document.querySelector("form").reset(); // Form Reset
    e.target.submit(); // Form ko submit karne ke liye
  }, 3000);
}

