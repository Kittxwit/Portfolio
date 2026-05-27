import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
let currentPort = DEFAULT_PORT;

const projects = [
  {
    id: 1,
    title: 'เว็บแอปพลิเคชันยืมคืนอุปกรณ์กีฬา RMUTT',
    titleEn: 'RMUTT Sports Equipment Rental Web Application',
    description:
      'เว็บแอปพลิเคชันสำหรับการยืมและคืนอุปกรณ์กีฬา ของมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) พร้อมระบบแดชบอร์ด การจัดการสมาชิก และฟีเจอร์อื่นๆ',
    descriptionEn:
      'A web application for borrowing and returning sports equipment at Rajamangala University of Technology Thanyaburi (RMUTT), complete with a dashboard, member management, and more.',
    fullDescription: `
      เว็บแอปพลิเคชันระบบยืม-คืนอุปกรณ์กีฬา ถูกสร้างและพัฒนาขึ้นเพื่อเพิ่มประสิทธิภาพและลดขั้นตอนในการจัดการอุปกรณ์กีฬาของมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) ให้มีความถูกต้อง, ปลอดภัย, รวดเร็ว และเป็นระบบมากขึ้น 
      
ฟีเจอร์:
-UI ที่ใช้งานง่ายสำหรับการค้นหาและยืมอุปกรณ์: ออกแบบมาเพื่อให้ผู้ใช้งานทั่วไป (นักศึกษาและบุคลากร) ค้นหาและทำรายการขอยืมอุปกรณ์กีฬาได้อย่างสะดวกรวดเร็ว
-ระบบแดชบอร์ดสำหรับผู้ดูแลระบบ: หน้าต่างจัดการอุปกรณ์และข้อมูลอุปกรณ์ทั้งหมดแบบเรียลไทม์
-ระบบจัดการสมาชิกและการควบคุมสตาฟ: จัดสิทธิ์การเข้าถึงข้อมูลตามประเภทผู้ใช้งาน เช่น นักศึกษา, บุคลากร, แอดมิน และ แอดมิน
-ระบบพิมพ์รายงานเพื่อการวิเคราะห์: พิมพ์ข้อมูลการยืม-คืนและสถิติต่างๆ ในรูปแบบ Excel, PDF เพื่อนำไปใช้วิเคราะห์ผล
-ระบบติดตามสถานะการยืม-คืนแบบเรียลไทม์: ช่วยให้แอดมินและผู้ยืมตรวจสอบสถานะล่าสุดของอุปกรณ์แต่ละชิ้นได้ตลอดเวลา
-ระบบส่งการแจ้งเตือนอัตโนมัติเมื่อใกล้ถึงกำหนดคืน: ระบบแจ้งเตือนทางอีเมลและ Push Notification แจ้งเตือนผู้ใช้งานเมื่อถึงกำหนดเวลาคืนอุปกรณ์

เทคโนโลยีที่ใช้:
-Frontend: Vue.js Vue 3, Composition API ร่วมกับ Vite และตกแต่ง UI ด้วย Tailwind CSS และรองรับ Responsive Design ทุกขนาดหน้าจอ
-Backend: Node.js Express.js สำหรับเชื่อมต่อกับฐานข้อมูลและประมวลผล และใช้ Node-cron ในการจัดการ Background Tasks อัตโนมัติ
-Database & Cache: MySQL ร่วมกับ Redis เพื่อเพิ่มความเร็วในการดึงข้อมูลและจัดการ Session
-DevOps & Security: ติดตั้งระบบผ่าน Docker / Docker Compose แยกเครือข่ายภายในเพื่อความปลอดภัย และมีการยืนยันตัวตนด้วยระบบ JWT และ Content Security Policy

ผลลัพธ์ของโปรเจกต์:
ระบบสามารถรองรับผู้ใช้งานพร้อมกันจำนวนมากและทำงานร่วมกับข้อมูลผู้ใช้งานและข้อมูลอุปกรณ์กีฬาของมหาวิทยาลัยได้อย่างดีและราบรื่น โดยหลังจากการนำระบบนี้มาใช้งานจริงพบว่าสามารถ ลดการสูญหายของอุปกรณ์กีฬา, บัตรนักศึกษา เพราะมีการติดตามสถานะและรูปถ่ายการ ก่อนการเริ่ม    ยืม-คืนทุกครั้งที่ทำรายการ และ ลดการใช้กระดาษได้
    `,
    fullDescriptionEn: `
The Sports Equipment Rental Web Application was designed and developed to improve efficiency and streamline sports equipment management at Rajamangala University of Technology Thanyaburi (RMUTT), ensuring accuracy, security, speed, and systematic tracking.

Features:
- Intuitive UI for searching and borrowing equipment: Designed for students and staff to easily and quickly search and request sports equipment rentals.
- Admin Dashboard: Real-time dashboard for administrators to manage equipment inventory and usage data.
- Member & Staff Management: Access control and role-based permissions for students, staff, admins, and super admins.
- Analytical Report Generation: Export rental history and statistics in Excel and PDF formats for further analysis.
- Real-time Status Tracking: Allows both admins and borrowers to check the latest status of each equipment item anytime.
- Automatic Notifications: Email and push notifications to alert users when rental return deadlines are approaching.

Tech Stack:
- Frontend: Vue 3 (Composition API) with Vite, Tailwind CSS for modern and fully responsive design.
- Backend: Node.js and Express.js for server logic and database connections, with Node-cron for scheduled background tasks.
- Database & Cache: MySQL and Redis for fast data retrieval and session management.
- DevOps & Security: Deployment via Docker / Docker Compose, isolated internal network for security, JWT for authentication, and Content Security Policy.

Project Outcomes:
The system supports concurrent users and integrates seamlessly with university student and equipment databases. Since implementation, it has successfully reduced equipment loss (such as student cards) through status tracking and mandatory photo confirmation prior to rental/return, while also significantly reducing paper waste.
    `,
    tech: ['Vue.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'Docker', 'Express.js', 'Vite', 'JWT', 'firebase'],
    image: '1_1.png',
    images: ['1_1.png', '1_2.png', '1_3.png', '1_4.png'],
    link: 'https://hspdrmutt.com',
  },
  {
    id: 2,
    title: 'ออกแบบและพัฒนาหน้าตาแอปพลิเคชันมือถือโดยใช้ Flutter',
    titleEn: 'Mobile Application UI Design & Development using Flutter',
    description:
      'ออกแบบและพัฒนาหน้าตาแอปพลิเคชันมือถือด้วยภาษา Dart และ Flutter โดยเน้น UI ที่ทันสมัย สวยงาม และใช้งานง่ายสำหรับผู้ใช้',
    descriptionEn:
      'Designed and developed a modern, beautiful, and user-friendly mobile application interface using Dart and Flutter.',
    fullDescription: `
-มีหน้าที่ในการออกแบบและพัฒนาหน้าตาของแอปพลิเคชันมือถือสำหรับระบบยืมคืนอุปกรณ์กีฬาของวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) โดยให้ความสำคัญกับประสบการณ์การใช้งานของผู้ใช้เป็นหลัก ทั้งความสวยงาม ความทันสมัย และความสะดวกในการใช้งาน

-การออกแบบระบบจะเน้นให้ผู้ใช้งานสามารถเข้าถึงฟังก์ชันต่าง ๆ ได้ง่าย ไม่ซับซ้อน และลดขั้นตอนที่ยุ่งยาก เพื่อให้สามารถใช้งานได้อย่างรวดเร็วและเข้าใจได้ทันที นอกจากนี้ยังให้ความสำคัญกับการจัดวางองค์ประกอบของหน้าจอ สี และรูปแบบการแสดงผล เพื่อให้แอปพลิเคชันมีความทันสมัย ดูสะอาดตา และทำให้คลายกับเว็บที่กำลังพัฒนา

-รวมถึงมีการออกแบบให้รองรับการใช้งานบนอุปกรณ์มือถืออย่างเหมาะสม เพื่อให้ผู้ใช้ได้รับประสบการณ์การใช้งานที่ลื่นไหล สบายตา และใช้งานได้จริง
    `,
    fullDescriptionEn: `
- Responsible for designing and developing the mobile application user interface for the RMUTT sports equipment rental system, prioritizing user experience (UX), modern aesthetics, and ease of use.

- The system design focuses on simple, intuitive navigation, reducing redundant steps so users can perform actions quickly. Screen layouts, color palettes, and visual hierarchy were tailored to align with the web application under development.

- Optimized for mobile screens to ensure a smooth, comfortable, and practical user experience.
    `,
    tech: ['Dart', 'MySQL', 'Flutter', 'Firebase'],
    image: '2_1.png',
    images: ['2_1.png', '2_2.png', '2_3.png'],
    link: 'https://hspdrmutt.com',
  },
  {
    id: 3,
    title: 'ห้องเรียนอัจฉริยะ IOT & Webpage',
    titleEn: 'Smart Classroom IoT & Webpage',
    description:
      'โปรเจกต์ระหว่างการฝึกงานที่ประเทศไตหวัน ระบบห้องเรียนอัจฉริยะที่พัฒนาด้วยเทคโนโลยี IoT เพื่อช่วยตรวจสอบและควบคุมสภาพแวดล้อมภายในห้องเรียนแบบอัตโนมัติ',
    descriptionEn:
      'An internship project in Taiwan: A smart classroom system built with IoT technology to automatically monitor and control classroom environments.',
    fullDescription: `
      โดยระบบสามารถตรวจวัดอุณหภูมิ ความชื้น แสงสว่าง PM2.5 และก๊าซคาร์บอนไดออกไซด์แบบเรียลไทม์ พร้อมแสดงผลผ่านหน้าแดชบอร์ด

ภายในโปรเจกต์มีการเชื่อมต่อเซนเซอร์และอุปกรณ์ต่าง ๆ เข้ากับบอร์ด Arduino และส่งข้อมูลผ่าน Wi-Fi ไปยัง Firebase Realtime Database เพื่อใช้ในการแสดงผลและควบคุมระบบผ่านเว็บแอปพลิเคชัน

ระบบสามารถทำงานอัตโนมัติตามค่าที่ตรวจจับได้ เช่น เปิดพัดลมหรือเครื่องปรับอากาศเมื่ออุณหภูมิสูง เปิดไฟเมื่อแสงภายในห้องไม่เพียงพอ และควบคุมพัดลมระบายอากาศเพื่อช่วยรักษาสภาพแวดล้อมที่เหมาะสมต่อการเรียนรู้

โปรเจกต์นี้มุ่งเน้นการสร้างห้องเรียนที่ทันสมัย ใช้งานได้จริง และช่วยเพิ่มประสิทธิภาพในการเรียนการสอนผ่านเทคโนโลยีอัจฉริยะ
    `,
    fullDescriptionEn: `
The system monitors temperature, humidity, ambient light, PM2.5, and CO2 in real-time, displaying data on an interactive dashboard.

Equipped with sensors connected to Arduino microcontrollers, transmitting data via Wi-Fi to Firebase Realtime Database for visualization and remote web-based control.

The classroom operates automatically based on sensor readings: activating fans/AC when temperature rises, turning on lights when natural light is insufficient, and operating ventilation fans to maintain an optimal learning environment.

This project focuses on creating a modern, functional smart classroom that enhances teaching and learning efficiency using smart technologies.
    `,
    tech: ['Arduino', 'ESP8266', 'C++', 'Firebase'],
    image: '3_1.png',
    images: ['3_1.png', '3_2.png' , '3_3.png', '3_4.png'],
    link: 'https://canva.link/s97orhslst795sk',
  },
  {
    id: 4,
    title: 'KIB Cinema Project',
    titleEn: 'KIB Cinema Project',
    description:
      'ออกแบบหน้าตาเว็บจองตั๋วหนัง โดยการศึกษาผ่าน Youtube และศึกษาการใช้ภาษาคอมพิวเตอร์ในช่วงแรกของการเรียนรู้ HTML CSS และ MySQL',
    descriptionEn:
      'Designed a movie ticket booking web interface, studied self-taught through YouTube to learn HTML, CSS, and MySQL in the early stages of programming.',
    fullDescription: `
      การออกแบบเน้นความสวยงาม ทันสมัย เพื่อให้ผู้ใช้งานสามารถเลือกชมภาพยนตร์ ตรวจสอบรายละเอียด และจองตั๋วได้สะดวกมากยิ่งขึ้น อีกทั้งยังเป็นโปรเจกต์ที่ช่วยพัฒนาทักษะด้านการเรียนรู้ด้วยตนเอง การแก้ปัญหา และการนำความรู้มาประยุกต์ใช้ในการพัฒนาเว็บไซต์จริง
    `,
    fullDescriptionEn: `
The design emphasizes modern and beautiful aesthetics, allowing users to browse movies, check showtimes, and book tickets conveniently. This project helped develop self-learning, problem-solving skills, and practical web design concepts.
    `,
    tech: ['HTML', 'CSS', 'MySQL'],
    image: '4_1.png',
    images: ['4_1.png'],
    link: 'https://github.com/Kittxwit/',
  },
  {
    id: 5,
    title: 'Blender 3D Animation',
    titleEn: 'Blender 3D Animation',
    description:
      'การสร้างแอนิเมชันสามมิติด้วย Blender โดยการออกแบบโมเดล การจัดองค์ประกอบฉาก การสร้างแอนิเมชัน และการ Render วิดีโอ',
    descriptionEn:
      'Created 3D animations using Blender, including modeling, scene composition, keyframe animation, and video rendering.',
    fullDescription: `
      -โดยมีการศึกษาการใช้งานโปรแกรมผ่านสื่อการเรียนรู้ออนไลน์และทดลองพัฒนาด้วยตนเอง

-ภายในโปรเจกต์ได้เรียนรู้การสร้างโมเดลสามมิติ การปรับแต่ง Material และสี การจัดแสงภายในฉาก การกำหนดมุมกล้อง รวมถึงการใช้ Keyframe เพื่อสร้างการเคลื่อนไหวของวัตถุให้มีความสมจริง

และมีการศึกษาการตั้งค่าการ Render เพื่อช่วยลดเวลาในการประมวลผลและเพิ่มประสิทธิภาพในการสร้างวิดีโอแอนิเมชัน โดยโปรเจกต์นี้ช่วยพัฒนาทักษะด้านการเรียนรู้เทคโนโลยีใหม่ด้วยตนเอง`,
    fullDescriptionEn: `
- Studied Blender through online learning resources and experimented with self-driven development.

- Gained hands-on experience in 3D modeling, material/color adjustment, scene lighting, camera framing, and keyframe animation to create realistic movements.

- Explored render settings to optimize processing time and enhance animation output quality. This project strengthened the ability to learn new creative technologies independently.
    `,
    tech: ['Blender'],
    image: '5_1.png',
    images: ['5_1.png', '5_2.png', '5_3.png'],
    link: 'https://canva.link/wowomc9210yev51',
  },
  {
    id: 6,
    title: 'Entry&Exit System',
    titleEn: 'Entry & Exit System',
    description:
      'ระบบตรวจจับการเข้า–ออกด้วยเทคโนโลยี IoT',
    descriptionEn:
      'An entry and exit detection system powered by IoT technology.',
    fullDescription: `
    โดยใช้เซนเซอร์ IR สำหรับตรวจจับทิศทางการเคลื่อนไหวของผู้ใช้งาน ไม่ว่าจะเป็นการเคลื่อนที่จากซ้ายไปขวา หรือขวาไปซ้าย เพื่อนำข้อมูลมาคำนวณจำนวนคนเข้าและออกภายในพื้นที่

ระบบทำงานผ่านบอร์ดไมโครคอนโทรลเลอร์ที่ประมวลผลข้อมูลจากเซนเซอร์ และส่งค่าข้อมูลไปจัดเก็บบน Firebase แบบเรียลไทม์ เพื่อใช้ในการบันทึกและแสดงผลข้อมูลจำนวนผู้ใช้งาน

นอกจากนี้ยังมีการแสดงผลผ่านจอ LED เพื่อให้สามารถตรวจสอบจำนวนคนเข้า–ออกได้ทันทีแบบเรียลไทม์ โดยโปรเจกต์นี้ช่วยพัฒนาทักษะด้าน IoT การเชื่อมต่อเซนเซอร์ การประมวลผลข้อมูล และการจัดการฐานข้อมูลออนไลน์ร่วมกับอุปกรณ์ฮาร์ดแวร์ต่าง ๆ
    `,
    fullDescriptionEn: `
Utilizes IR sensors to detect the direction of movement (left-to-right or right-to-left) to calculate the live count of people entering and leaving a physical space.

Operates via a microcontroller board that processes sensor data and sends real-time updates to Firebase to record and display occupancy stats.

Includes an LED display for immediate, real-time onsite occupancy tracking. This project enhanced skills in IoT, sensor integration, data processing, and hardware-to-database communications.
    `,
    tech: ['Arduino', 'Firebase' ,'C++'],
    image: '6_1.png',
    images: ['6_1.png', '6_2.png', '6_3.png'],
    link: 'https://github.com/Kittxwit/',
  },
  {
    id: 7,
    title: 'Flutter Chat & Admin',
    titleEn: 'Flutter Chat & Admin',
    description:
      'โปรเจกต์ Flutter Chat & Admin เป็นแอปพลิเคชันสำหรับการสนทนาแบบ Real-time',
    descriptionEn:
      'A real-time chat application and administration system built with Flutter and Dart.',
    fullDescription: `
       โดยพัฒนาด้วยภาษา Dart ผ่าน Flutter
       รองรับการสมัครสมาชิกและเข้าสู่ระบบ รวมถึงการส่งข้อความ รูปภาพ และวิดีโอระหว่างผู้ใช้งาน 
       พร้อมเชื่อมต่อฐานข้อมูล MySQL ผ่าน REST API เพื่อจัดเก็บข้อมูลผู้ใช้ ข้อความ และไฟล์วีดิโอ
      นอกจากนี้ยังมีระบบ Admin สำหรับจัดการผู้ใช้งาน ตรวจสอบข้อมูล และดูแลความเรียบร้อยภายในระบบ 
      ช่วยเพิ่มประสิทธิภาพในการสื่อสารและการจัดการข้อมูลภายในแอปพลิเคชันได้อย่างสะดวกและทันสมัย
    `,
    fullDescriptionEn: `
Developed with Flutter and Dart, supporting user registration, secure login, and real-time exchange of text, images, and videos.

Connected to a MySQL database via REST APIs to manage users, messages, and media files.

Includes an Admin panel to manage users, monitor database entries, and ensure platform safety, enhancing communication efficiency through a modern mobile application.
    `,
    tech: ['Flutter', 'Dart', 'MySQL'],
    image: '7_1.png',
    images: ['7_1.png', '7_2.png', '7_3.png', '7_4.png'],
    link: 'https://github.com/Kittxwit/',
  },
  {
    id: 8,
    title: ' Smart Helmet',
    titleEn: 'Smart Helmet',
    description:
      'โปรเจกต์ Smart Helmet เป็นอุปกรณ์เพื่อช่วยเพิ่มความปลอดภัยให้กับผู้ประสบภัยในสถานการณ์แผ่นดินไหว',
    descriptionEn:
      'An IoT-enabled smart helmet designed to enhance survival and safety for rescue operations in earthquake scenarios.',
    fullDescription: `
      โดยออกแบบมาเพื่อรองรับกรณีที่เครือข่ายโทรศัพท์หรือ Wi-Fi ไม่สามารถใช้งานได้ ระบบจึงใช้เทคโนโลยี LoRa ร่วมกับ ESP32 สำหรับการสื่อสารระยะไกล เพื่อให้ผู้ประสบภัยสามารถติดต่อและประสานงานกับเจ้าหน้าที่ได้อย่างมีประสิทธิภาพ

ตัวอุปกรณ์ถูกออกแบบให้ช่วยป้องกันศีรษะ พร้อมทั้งสามารถระบุตำแหน่งปัจจุบันของผู้ใช้งานผ่านระบบ GPS เพื่อช่วยให้เจ้าหน้าที่ค้นหาและเข้าช่วยเหลือได้รวดเร็วยิ่งขึ้น นอกจากนี้ยังรองรับการสื่อสารด้วยเสียงผ่านไมโครโฟนและลำโพง รวมถึงสามารถบันทึกข้อมูลผ่าน SD Card Module ได้

ภายในระบบมีการใช้งานอุปกรณ์ต่าง ๆ เช่น ESP32, โมดูล LoRa RFM95, GPS Ublox NEO-6M, โมดูลเสียง MAX9814 และแอปพลิเคชันมือถือ เพื่อช่วยติดตามข้อมูลและประสานงานกับผู้ประสบภัยแบบเรียลไทม์

โปรเจกต์นี้มุ่งเน้นการนำเทคโนโลยี IoT และระบบสื่อสารระยะไกลมาประยุกต์ใช้ในการช่วยเหลือผู้ประสบภัย เพื่อเพิ่มความปลอดภัย ลดระยะเวลาในการค้นหา และช่วยให้การช่วยเหลือเป็นไปอย่างรวดเร็วและมีประสิทธิภาพ
    `,
    fullDescriptionEn: `
Designed for emergency situations where mobile networks or Wi-Fi are unavailable, using LoRa technology and ESP32 for long-range communication to coordinate with rescue teams.

Features head protection, GPS positioning for search and rescue location mapping, voice communication via integrated microphone and speakers, and SD Card storage.

Integrates hardware components including ESP32, LoRa RFM95 module, GPS Ublox NEO-6M, MAX9814 audio module, and a mobile application for real-time tracking and rescue coordination.

Aims to apply IoT and long-range communications to assist disaster victims, expedite search times, and maximize safety.
    `,
    tech: ['Canva', 'AI Integration'],
    image: '8_1.png',
    images: ['8_1.png', '8_2.png'],
    link: 'https://canva.link/qxz9hiqxalmv6mw',
  },
];

const skills = [
  'Vue.js',
  'JavaScript',
  'Node.js',
  'MySQL',
  'Tailwind CSS',
  'Dart',
  'PHP',
  'Arduino',
  'Figma',
  'Git Control Version',
  'REST API',
  'Firebase',

];

const resume = {
  education: [
    {
      title: 'Bachelor of Science in Information Technology Digital and Communication',
      titleTh: 'ปริญญาตรี สาขาเทคโนโลยีสารสนเทศดิจิทัลและการสื่อสาร',
      institution: 'RMUTT',
      institutionTh: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
      details: 'Rajamangala University of Technology Thanyaburi',
      detailsTh: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
    },
    {
      title: 'High Vocational Certificate in Business Computer',
      titleTh: 'ประกาศนียบัตรวิชาชีพชั้นสูง สาขาคอมพิวเตอร์ธุรกิจ',
      institution: 'SBAC',
      institutionTh: 'วิทยาลัยการบริหารธุรกิจและเทคโนโลยีสยาม (สะพานใหม่)',
      details: 'Siam Business Administration Technological College (Saphanmai)',
      detailsTh: 'วิทยาลัยการบริหารธุรกิจและเทคโนโลยีสยาม (สะพานใหม่)',
    },
  ],
  experience: [
    {
      role: 'Research Assistant',
      roleTh: 'ผู้ช่วยวิจัย',
      company: 'National Pingtung University',
      companyTh: 'มหาวิทยาลัยแห่งชาติผิงตง',
      period: '4 months',
      periodTh: '4 เดือน',
      details: `
      
      

      ระหว่างการฝึกงานที่ประเทศไตหวัน จะมีอาจารย์ไต้หวันเป็นผู้ควบคุมดูแลแนวทางของโปรเจกต์และจะได้ทำโปรเจกต์ระบบห้องเรียนอัจฉริยะที่พัฒนาด้วยเทคโนโลยี IoT เพื่อช่วยตรวจสอบและควบคุมสภาพแวดล้อมภายในห้องเรียนแบบอัตโนมัติ
      โดยระบบสามารถตรวจวัดอุณหภูมิ ความชื้น แสงสว่าง PM2.5 และก๊าซคาร์บอนไดออกไซด์แบบเรียลไทม์ พร้อมแสดงผลผ่านหน้าแดชบอร์ด

      ภายในโปรเจกต์มีการเชื่อมต่อเซนเซอร์และอุปกรณ์ต่าง ๆ เข้ากับบอร์ด Arduino และส่งข้อมูลผ่าน Wi-Fi ไปยัง Firebase Realtime Database เพื่อใช้ในการแสดงผลและควบคุมระบบผ่านเว็บแอปพลิเคชัน

      ระบบสามารถทำงานอัตโนมัติตามค่าที่ตรวจจับได้ เช่น เปิดพัดลมหรือเครื่องปรับอากาศเมื่ออุณหภูมิสูง เปิดไฟเมื่อแสงภายในห้องไม่เพียงพอ และควบคุมพัดลมระบายอากาศเพื่อช่วยรักษาสภาพแวดล้อมที่เหมาะสมต่อการเรียนรู้

      โปรเจกต์นี้มุ่งเน้นการสร้างห้องเรียนที่ทันสมัย ใช้งานได้จริง และช่วยเพิ่มประสิทธิภาพในการเรียนการสอนผ่านเทคโนโลยีอัจฉริยะ
      
      สิ่งที่ได้เรียนรู้จากการไปฝึกงานที่ประเทศไตหวันคือ: ได้เรียนรู้ภาษาอังกฤษและจีน การใช้ชีวิตในต่างประเทศการเอาตัวรอดในต่างประเทศ การทำงานร่วมกับทีม , วัฒนธรรมและภาษาที่แตกต่างกัน การปรับตัวให้เข้ากับสภาพแวดล้อมใหม่ และการเรียนรู้เทคโนโลยีใหม่ ๆ ที่เกี่ยวข้องกับ IoT และการพัฒนาเว็บแอปพลิเคชัน รวมถึงการพัฒนาทักษะในการแก้ปัญหาและการสื่อสารในการทำงานระหว่างประเทศ `,
      detailsEn: `
      During my internship in Taiwan, a Taiwanese professor supervised the project and I developed a smart classroom system using IoT technology to automatically monitor and control the learning environment.
      The system measures temperature, humidity, lighting, PM2.5, and carbon dioxide in real time and displays results on a dashboard.

      Sensors and devices connect to Arduino boards, and data is sent over Wi-Fi to Firebase Realtime Database for display and control through a web application.

      The system can operate automatically based on sensor readings, such as turning on fans or air conditioning when the temperature rises, switching on lights when natural light is insufficient, and controlling ventilation fans to maintain a suitable learning environment.

      This project focuses on building a modern, practical classroom that improves teaching efficiency through intelligent technology.

      From this internship in Taiwan, I learned English and Chinese, how to live abroad, how to survive in a foreign environment, how to work with a team, and how to adapt to different cultures and languages. I also gained experience in IoT, web development, problem solving, and international communication.`,
      image: 'exp1.png',
      images: ['exp1.png', 'exp1_1.png', 'exp1_2.png', 'exp1_3.png', 'exp1_4.png', 'exp1_5.png'],
      link: 'https://canva.link/s97orhslst795sk',
    },
  ],
  design: [
    { id: 1, title: 'GrabRader', details: 'ออกแบบหน้าตา Feature ตามความต้องการของผู้มอบหมาย โดยใช้ Figma', detailsEn: 'Designed the feature interface according to the client’s requirements using Figma.', image: 'design1.png', images: ['design1.png'] },
    { id: 2, title: 'Poster', details: 'ทำโปสเตอร์สำหรับกิจกรรมต่างๆ ในสาขา', detailsEn: 'Created posters for various department events.', image: 'design2.png', images: ['design2.png', 'design2_1.png', 'design2_2.png', 'design2_3.png'] },
    { id: 3, title: 'Sandwish', details: 'ออกแบบโลโก้แซนด์วิช เป็นธุรกิจในห้องเรียนและประกวดธุรกิจ', detailsEn: 'Designed a sandwich logo for a classroom business and competition.', image: 'design3.png', images: ['design3.png', 'design3_1.png'] },
    { id: 4, title: 'Bisou Webpage', details: 'โปรเจกต์ออกแบบหน้าเว็บไซต์ให้ธุรกิจ Bisou', detailsEn: 'Designed a webpage layout for the Bisou business.', image: 'design4.png', images: ['design4.png', 'design4_1.png'] },
  ],
  activity: [
    { id: 1, title: 'SBAC Valorant', details: 'แข่งขันเกม Valorant ในการแข่งขัน SBAC', detailsEn: 'Competed in Valorant at the SBAC tournament.', image: 'activity1.png', images: ['activity1.png', 'activity1_1.png'] },
    { id: 2, title: 'Present IOT Taiwan', details: 'พรีเซนต์โครงการ กับโปรเฟสเซอร์ที่ไต้หวันทุกสัปดาห์', detailsEn: 'Presented the project weekly to professors in Taiwan.', image: 'activity2.png', images: ['activity2.png', 'activity2_1.png'] },
    { id: 3, title: 'Meeting for Internship', details: 'การพรีเซนต์แนะนำตัวเองและความสนใจในที่เกี่ยวข้องสำหรับการไปฝึกงานก่อนการไปฝึกงาน', detailsEn: 'Presented myself and my interests before the internship.', image: 'activity3.png', images: ['activity3.png', 'activity3_1.png'] },
  ],
};

app.use(express.static(path.join(__dirname, 'dist')));

const localizeProject = (p, lang) => {
  if (lang === 'en') {
    return {
      ...p,
      title: p.titleEn || p.title,
      description: p.descriptionEn || p.description,
      fullDescription: p.fullDescriptionEn || p.fullDescription,
    };
  }
  return p;
};

const localizeFields = (item, lang, fields) => {
  const localized = { ...item };
  fields.forEach(field => {
    if (lang === 'en' && item[`${field}En`]) {
      localized[field] = item[`${field}En`];
    }
    if (lang === 'th' && item[`${field}Th`]) {
      localized[field] = item[`${field}Th`];
    }
  });
  return localized;
};

const localizeResume = (lang) => ({
  education: resume.education.map(item => localizeFields(item, lang, ['title', 'institution', 'details'])),
  experience: resume.experience.map(item => localizeFields(item, lang, ['role', 'company', 'period', 'details'])),
  design: resume.design.map(item => localizeFields(item, lang, ['title', 'details'])),
  activity: resume.activity.map(item => localizeFields(item, lang, ['title', 'details'])),
});

app.get('/api/projects', (req, res) => {
  const lang = req.query.lang;
  res.json(projects.map(p => localizeProject(p, lang)));
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  const lang = req.query.lang;
  res.json(localizeProject(project, lang));
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/experience/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lang = req.query.lang;
  if (Number.isNaN(id) || id < 1 || id > resume.experience.length) {
    return res.status(404).json({ error: 'Experience not found' });
  }
  res.json(localizeFields(resume.experience[id - 1], lang, ['role', 'company', 'period', 'details']));
});

app.get('/api/design/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lang = req.query.lang;
  if (Number.isNaN(id) || id < 1 || id > resume.design.length) {
    return res.status(404).json({ error: 'Design not found' });
  }
  res.json(localizeFields(resume.design[id - 1], lang, ['title', 'details']));
});

app.get('/api/activity/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lang = req.query.lang;
  if (Number.isNaN(id) || id < 1 || id > resume.activity.length) {
    return res.status(404).json({ error: 'Activity not found' });
  }
  res.json(localizeFields(resume.activity[id - 1], lang, ['title', 'details']));
});

app.get('/api/resume', (req, res) => {
  const lang = req.query.lang;
  res.json(localizeResume(lang));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const startServer = (portToTry) => {
  const server = app.listen(portToTry, () => {
    console.log(`Server running at http://localhost:${portToTry}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`Port ${portToTry} is in use. Trying port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error(err);
      process.exit(1);
    }
  });
};

startServer(currentPort);
