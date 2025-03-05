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
    clickforDetail : "Click here for details",
    marketing : "Marketing",
    certification : "Obtain a national certification in as little as two years and find employment in Japan",
    dentalMajor : "Dental Technician Major<br><span>(2 year program)</span>",
    qualification : "National Dental Technician Exam〈3rd year〉",
    jobstability : "People seeking future job stability",
    richPrivateLife : "People who want to enjoy a rich private life",
    moreDetails : "More details here",
    headingtex : "Seoul offers international student support, from enrollment to graduation and job placement",
    internationsupport : "International Student Support Center<i>（Student Service Center）</i>",
    visa : "Visa consultation and support",
    visarenewals : "Our students can consult with us about any problems they encounter in their international student life (visa renewals, tuition, moving, etc.)!",
    ourstaff : "Our staff includes a staff member with a visa agent certification issued by the Tokyo Regional Immigration Bureau,",
    canrenew : "so students can renew their student visas without even leaving the school!",
    consult : "You can also consult with us regarding other visa types.",

    someofour : "Some of our International Students",
    someofourDesc : "Here are some of the international students that studied in our Dental Technician Preparatory Education Department for a year and then advanced onto our Dental Technician Department",
    name1 : "Songyo Mo（from China）",
    shinguUniversity : "Graduate of Language School in Shingu University",
    name1Desc : "Kind teachers, considerate friends, and a beautiful school!",
    name2 : "Tao V（from Vietnam）",
    name2Desc : "Seoul has high level teachers you can rely on. It gives you the courage and the confidence to stride boldly forward.",
    name3 : "Brigod （from China）",
    name3Desc : "I made a lot of friends at Seoul!",
    name4 : "Cho Ho（from China）",
    KyungdongUniversity : "Graduate of Language School in Kyungdong University",
    name4Desc : "The teachers at Seoul are kind and the facilities are in tip-top condition. There are a lot of fun things to do and I've made friends from around the world.",
    name5 : "Chanconram（from Vietnam）",
    DongnamCollege : "Graduate of Language School in Dongnam Health College",
    name5Desc : "The teachers are really passionate, kind, and supportive. At Seoul, you can realize your dream of becoming a dental technician!",
    name6 : "Nomin （from Mongolia）",
    BucheonUnivercity : "Graduate of Language School in Bucheon University",
    name6Desc : "At Seoul, you're greeted every day with a friendly smile!",
    attendedbymany : "Seoul Dental College is attended by many international students from around the world!",
 

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
    clickforDetail : "자세한 내용은 여기를 클릭하세요",
    marketing : "마케팅",
    certification : "단 2년 만에 국가 자격증을 취득하고 일본에서 취업하세요",
    dentalMajor : "치과 기술 전공<br><span>(2년 과정)</span>",
    qualification : "국가 치과 기술사 시험〈3학년〉",
    jobstability : "미래 직업 안정성을 찾는 사람들",
    richPrivateLife : "풍요로운 사생활을 즐기고 싶은 사람들",
    moreDetails : "더 자세한 내용은 여기에서 확인하세요",
    headingtex : "서울은 입학부터 졸업 및 취업까지 국제 학생 지원을 제공합니다",
    internationsupport : "국제 학생 지원 센터<i>（학생 서비스 센터）</i>",
    visa : "비자 상담 및 지원",
    visarenewals : "우리 학생들은 유학생 생활 중 겪는 모든 문제(비자 갱신, 학비, 이사 등)에 대해 상담할 수 있습니다!",
    ourstaff : "우리 직원에는 도쿄 출입국 관리국에서 발급한 비자 에이전트 자격증을 가진 직원이 포함되어 있습니다.",
    canrenew : "학생들이 학교를 떠나지 않고도 학생 비자를 갱신할 수 있습니다!",
    consult : "다른 비자 유형에 대한 상담도 가능합니다.",
    someofour : "우리 국제 학생 중 일부",
    someofourDesc : "여기에는 1년 동안 치과 기술 준비 교육 학과에서 공부한 후 치과 기술 학과로 진학한 국제 학생들이 있습니다.",
    name1 : "송요 모（중국 출신）",
    shinguUniversity : "신구대학교 어학원 졸업",
    name1Desc : "친절한 선생님, 배려 깊은 친구들, 그리고 아름다운 학교!",
    name2 : "타오 V（베트남 출신）",
    name2Desc : "서울에는 신뢰할 수 있는 수준 높은 교사들이 있습니다. 여러분에게 용기와 자신감을 줍니다.",
    name3 : "브리고드（중국 출신）",
    name3Desc : "서울에서 많은 친구를 사귀었습니다!",
    name4 : "조 호（중국 출신）",
    KyungdongUniversity : "경동대학교 어학원 졸업",
    name4Desc : "서울의 선생님들은 친절하고 시설은 최상의 상태입니다. 할 수 있는 재미있는 일이 많고 세계 각국의 친구들을 사귀었습니다.",
    name5 : "찬콘람（베트남 출신）",
    DongnamCollege : "동남보건대학교 어학원 졸업",
    name5Desc : "선생님들은 정말 열정적이고 친절하며 지원적입니다. 서울에서는 치과 기술사가 되는 꿈을 실현할 수 있습니다!",
    name6 : "노민（몽골 출신）",
    BucheonUnivercity : "부천대학교 어학원 졸업",
    name6Desc : "서울에서는 매일 친절한 미소로 맞이합니다!",
    attendedbymany : "서울 치과대학에는 세계 각국에서 온 많은 국제 학생들이 다니고 있습니다!",


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
    clickforDetail : "点击此处查看详细信息",
    marketing : "市场营销",
    certification : "仅需两年即可获得国家认证，并在日本找到工作",
    dentalMajor : "牙科技师专业<br><span>(2年课程)</span>",
    qualification : "国家牙科技师考试〈第3年〉",
    jobstability : "寻求未来工作稳定性的人",
    richPrivateLife : "希望享受丰富私人生活的人",
    moreDetails : "更多详细信息请点击这里",
    headingtex : "首尔提供国际学生支持，从入学到毕业及就业安置",
    internationsupport : "国际学生支持中心<i>（学生服务中心）</i>",
    visa : "签证咨询与支持",
    visarenewals : "我们的学生可以就国际学生生活中遇到的任何问题（签证续签、学费、搬家等）向我们咨询！",
    ourstaff : "我们的工作人员包括一名持有东京地区入国管理局签证代理认证的员工，",
    canrenew : "因此学生甚至无需离开学校即可续签学生签证！",
    consult : "您还可以咨询其他类型的签证。",
    someofour : "我们的一些国际学生",
    someofourDesc : "这里是一些在牙科技师预科教育部门学习一年后升入牙科技师部门的国际学生。",
    name1 : "宋耀模（来自中国）",
    shinguUniversity : "新宫大学语言学校毕业",
    name1Desc : "亲切的老师，体贴的朋友，美丽的学校！",
    name2 : "陶 V（来自越南）",
    name2Desc : "首尔有可以依赖的高水平教师。它给你勇气和信心大胆向前迈进。",
    name3 : "布里戈德（来自中国）",
    name3Desc : "我在首尔交了很多朋友！",
    name4 : "赵浩（来自中国）",
    KyungdongUniversity : "庆东大学语言学校毕业",
    name4Desc : "首尔的老师很亲切，设施非常完善。有很多有趣的事情可以做，我结识了来自世界各地的朋友。",
    name5 : "陈康然（来自越南）",
    DongnamCollege : "东南保健学院语言学校毕业",
    name5Desc : "老师们真的很有激情、亲切且支持。在首尔，您可以实现成为牙科技师的梦想！",
    name6 : "诺明（来自蒙古）",
    BucheonUnivercity : "富川大学语言学校毕业",
    name6Desc : "在首尔，每天都会迎接你一个友善的微笑！",
    attendedbymany : "首尔牙科大学吸引了来自世界各地的众多国际学生！",


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
    clickforDetail : "Nhấp vào đây để biết chi tiết",
    marketing : "Tiếp thị",
    certification : "Nhận chứng chỉ quốc gia chỉ trong hai năm và tìm việc làm tại Nhật Bản",
    dentalMajor : "Chuyên ngành Kỹ thuật viên Nha khoa<br><span>(Chương trình 2 năm)</span>",
    qualification : "Kỳ thi Kỹ thuật viên Nha khoa Quốc gia〈Năm thứ 3〉",
    jobstability : "Những người tìm kiếm sự ổn định trong công việc tương lai",
    richPrivateLife : "Những người muốn tận hưởng cuộc sống cá nhân phong phú",
    moreDetails : "Xem thêm chi tiết tại đây",
    headingtex : "Seoul cung cấp hỗ trợ sinh viên quốc tế, từ nhập học đến tốt nghiệp và tìm việc làm",
    internationsupport : "Trung tâm Hỗ trợ Sinh viên Quốc tế<i>（Trung tâm Dịch vụ Sinh viên）</i>",
    visa : "Tư vấn và hỗ trợ thị thực",
    visarenewals : "Sinh viên của chúng tôi có thể tham khảo ý kiến về bất kỳ vấn đề nào họ gặp phải trong cuộc sống du học (gia hạn visa, học phí, chuyển nhà, v.v.)!",
    ourstaff : "Nhân viên của chúng tôi bao gồm một nhân viên có chứng nhận đại lý thị thực do Cục Nhập cư Tokyo cấp,",
    canrenew : "vì vậy sinh viên có thể gia hạn thị thực của họ mà không cần rời khỏi trường!",
    consult : "Bạn cũng có thể tham khảo về các loại thị thực khác.",
    someofour : "Một số sinh viên quốc tế của chúng tôi",
    someofourDesc : "Dưới đây là một số sinh viên quốc tế đã học tại Khoa Chuẩn bị Kỹ thuật viên Nha khoa của chúng tôi trong một năm và sau đó chuyển sang Khoa Kỹ thuật viên Nha khoa.",
    name1 : "Songyo Mo（từ Trung Quốc）",
    shinguUniversity : "Tốt nghiệp Trường Ngôn ngữ Đại học Shingu",
    name1Desc : "Giáo viên tốt bụng, bạn bè chu đáo và một ngôi trường đẹp!",
    name2 : "Tao V（từ Việt Nam）",
    name2Desc : "Seoul có các giáo viên trình độ cao mà bạn có thể tin tưởng. Nó mang lại cho bạn sự can đảm và tự tin để tiến lên phía trước.",
    name3 : "Brigod（từ Trung Quốc）",
    name3Desc : "Tôi đã kết bạn rất nhiều ở Seoul!",
    name4 : "Cho Ho（từ Trung Quốc）",
    KyungdongUniversity : "Tốt nghiệp Trường Ngôn ngữ Đại học Kyungdong",
    name4Desc : "Giáo viên tại Seoul rất tốt bụng và cơ sở vật chất ở trong tình trạng tuyệt vời. Có rất nhiều điều thú vị để làm và tôi đã kết bạn từ khắp nơi trên thế giới.",
    name5 : "Chanconram（từ Việt Nam）",
    DongnamCollege : "Tốt nghiệp Trường Ngôn ngữ Cao đẳng Y tế Dongnam",
    name5Desc : "Các giáo viên rất nhiệt tình, tốt bụng và hỗ trợ. Tại Seoul, bạn có thể thực hiện ước mơ trở thành kỹ thuật viên nha khoa của mình!",
    name6 : "Nomin（từ Mông Cổ）",
    BucheonUnivercity : "Tốt nghiệp Trường Ngôn ngữ Đại học Bucheon",
    name6Desc : "Tại Seoul, bạn được chào đón mỗi ngày với một nụ cười thân thiện!",
    attendedbymany : "Trường Cao đẳng Nha khoa Seoul có nhiều sinh viên quốc tế từ khắp nơi trên thế giới!"
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
