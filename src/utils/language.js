import { ref } from 'vue';

// "ตอนนี้จะมีภาษาอังกฤษเป็น base นะ" -> English is the base, so let's default to 'en'
const savedLang = localStorage.getItem('lang') || 'en';
export const currentLang = ref(savedLang);

// Set initial html lang attribute
document.documentElement.setAttribute('lang', currentLang.value);

export function toggleLang() {
  currentLang.value = currentLang.value === 'en' ? 'th' : 'en';
  localStorage.setItem('lang', currentLang.value);
  document.documentElement.setAttribute('lang', currentLang.value);
}

export const translations = {
  en: {
    // Nav Links
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    contact: 'Contact',
    home: 'Home',
    name: 'Kittawit Rakkhum',
    firstName: 'Kittawit',

    // Hero
    educationTag: 'Information Technology Graduate • RMUTT',
    greeting: 'Hi,',
    intro: "I'm",
    welcome: 'Welcome to my world of development and creativity. I always enjoy improving myself and ready to take on new challenges and experiences.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    roleTag: 'Frontend • Backend • AI Usage • SQL',

    // About
    aboutMe: 'About Me',
    committed: 'Committed to developing digital experiences that are useful for users.',
    aboutP1: 'I graduated in Information Technology Digital and Communication from RMUTT. I enjoy creating web applications, designing user interfaces, and learning new technologies.',
    aboutP2: 'My interests include frontend development, backend systems, database management for modern applications.',
    aboutP3: "I'm currently looking for opportunities to grow as a Developer and contribute to real-world projects.",
    viewResume: 'View Resume PDF',

    // Skills
    techStack: 'Tech Stack',
    skillsTitle: 'Skills',

    // Projects
    portfolio: 'Portfolio',
    featuredProjects: 'Featured Projects',
    showMoreProjects: 'Show More Projects',
    showLess: 'Show Less',
    readMore: 'Read More →',

    // Resume
    expEdu: 'Experience & Education',
    workExp: 'Work Experience',
    workExpNote: 'Tap each experience card to see more details.',
    viewDetails: 'View Details →',
    clickToView: 'Click to view',
    education: 'Education',
    showLessResume: 'Show Less Resume',
    showMoreResume: 'Show More Resume',
    design: 'Design',
    activity: 'Activity',

    // Contact
    readyToBuild: 'Ready to build and collaborate on new projects',
    contactText: 'Open to opportunities in Junior Developer roles, UX/UI Design, Web Design, Front-End Development, Database Development, and other IT-related fields.',
    emailMe: 'Email Me',
    github: 'GitHub',
    facebook: 'Facebook',
    instagram: 'Instagram',
    gmailLabel: 'Gmail',
    phoneLabel: 'Phone',

    // Footer
    builtWith: '© 2026 Kittawit Rakkhum — Built with Vue.js',

    // Project Detail
    backToHome: 'Back to Home',
    loadingProject: 'Loading project details...',
    projectNotFound: 'Project not found',
    failedToLoadProject: 'Failed to load project details',
    viewAlbum: 'View Gallery',
    techUsed: 'Technologies Used',
    projectDetail: 'Project Details',
    viewProject: 'View Project',
    backToPortfolio: 'Back to Portfolio',
    imageOf: 'Image {current} of {total}',

    // General
    errorLoading: 'Error loading data',
  },
  th: {
    // Nav Links
    about: 'เกี่ยวกับฉัน',
    skills: 'ทักษะ',
    projects: 'ผลงาน',
    resume: 'เรซูเม่',
    contact: 'ติดต่อ',
    home: 'หลัก',
    name: 'กฤตวิทย์ รักคุ้ม',
    firstName: 'กฤตวิทย์',

    // Hero
    educationTag: 'บัณฑิตสาขาเทคโนโลยีสารสนเทศ • มทร.ธัญบุรี',
    greeting: 'สวัสดีครับ',
    intro: 'ผม',
    welcome: 'ยินดีต้อนรับสู่โลกแห่งการพัฒนาและความคิดสร้างสรรค์ของผม ผมรักในการพัฒนาตัวเองอยู่เสมอ และพร้อมเปิดรับความท้าทายรวมถึงประสบการณ์ใหม่ๆ',
    viewProjects: 'ดูผลงาน',
    contactMe: 'ติดต่อฉัน',
    roleTag: 'หน้าบ้าน • หลังบ้าน • การใช้งาน AI • ฐานข้อมูล',

    // About
    aboutMe: 'เกี่ยวกับฉัน',
    committed: 'มุ่งมั่นที่จะพัฒนาประสบการณ์ดิจิทัลที่เป็นประโยชน์ต่อผู้ใช้งาน',
    aboutP1: 'ผมสำเร็จการศึกษาในสาขาเทคโนโลยีสารสนเทศดิจิทัลและการสื่อสาร จากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ผมชื่นชอบการพัฒนาเว็บแอปพลิเคชัน ออกแบบยูสเซอร์อินเตอร์เฟส และเรียนรู้เทคโนโลยีใหม่ๆ',
    aboutP2: 'ความสนใจของผมคือการพัฒนาระบบ Front End , Back End และการจัดการฐานข้อมูลสำหรับเว็บแอปพลิเคชันยุคใหม่',
    aboutP3: 'ปัจจุบันผมกำลังมองหาโอกาสในการเติบโตในสายงานผู้พัฒนา (Developer) และต้องการสร้างผลงานที่เป็นประโยชน์ให้กับโครงการใหม่ๆ',
    viewResume: 'ดูเรซูเม่ PDF',

    // Skills
    techStack: 'เทคโนโลยีที่ใช้',
    skillsTitle: 'ทักษะความสามารถ',

    // Projects
    portfolio: 'แฟ้มสะสมผลงาน',
    featuredProjects: 'ผลงานที่โดดเด่น',
    showMoreProjects: 'แสดงโครงการเพิ่มเติม',
    showLess: 'แสดงน้อยลง',
    readMore: 'อ่านเพิ่มเติม →',

    // Resume
    expEdu: 'ประสบการณ์ & การศึกษา',
    workExp: 'ประสบการณ์การทำงาน',
    workExpNote: 'กดที่การ์ดงานเพื่อดูรายละเอียดเพิ่มเติม',
    viewDetails: 'ดูรายละเอียด →',
    clickToView: 'กดเพื่อดู',
    education: 'การศึกษา',
    showLessResume: 'แสดงเรซูเม่น้อยลง',
    showMoreResume: 'แสดงเรซูเม่เพิ่มเติม',
    design: 'การออกแบบ',
    activity: 'กิจกรรม',

    // Contact
    readyToBuild: 'พร้อมที่จะสร้างสรรค์และร่วมมือกันในโครงการใหม่ๆ',
    contactText: 'เปิดรับโอกาสในการทำงานตำแหน่ง Junior Developer, นักออกแบบ UX/UI, นักออกแบบเว็บไซต์, นักพัฒนา Front-End, นักพัฒนาฐานข้อมูล และสายงานอื่นๆ ที่เกี่ยวข้องกับ IT',
    emailMe: 'ส่งอีเมลหาฉัน',
    github: 'กิตฮับ',
    facebook: 'เฟซบุ๊ก',
    instagram: 'อินสตาแกรม',
    gmailLabel: 'จีเมล',
    phoneLabel: 'โทรศัพท์',

    // Footer
    builtWith: '© 2026 กฤตวิทย์ รักคุ้ม — สร้างด้วย Vue.js',

    // Project Detail
    backToHome: 'กลับสู่หน้าแรก',
    loadingProject: 'กำลังโหลดรายละเอียดโครงการ...',
    projectNotFound: 'ไม่พบโครงการที่ค้นหา',
    failedToLoadProject: 'โหลดรายละเอียดโครงการไม่สำเร็จ',
    viewAlbum: 'ดูอัลบั้มภาพ',
    techUsed: 'เทคโนโลยีที่ใช้',
    projectDetail: 'รายละเอียดโปรเจกต์',
    viewProject: 'ดูโปรเจกต์',
    backToPortfolio: 'กลับสู่พอร์ต',
    imageOf: 'รูปที่ {current} จาก {total}',

    // General
    errorLoading: 'เกิดข้อผิดพลาดในการโหลดข้อมูล',
  }
};
