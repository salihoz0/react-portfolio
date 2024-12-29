import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AppBar,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Avatar,
  IconButton,
  Button,
  ThemeProvider,
  CssBaseline,
  Paper,
  Divider,
  TextField,
  Grid2,
  Tooltip,
} from '@mui/material';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import TimelineDot from '@mui/lab/TimelineDot';
import { GitHub, LinkedIn, Code, Email, Language, Article, School, Work, BusinessCenter, InsertDriveFile, Download } from '@mui/icons-material';
import pp from "./assets/images/pp.jpeg"
import nodeImage from "./assets/images/node-js.webp"
import rezztoranImage from "./assets/images/rezztoran.png"
import ImageModal from './components/showSelectedImageModal';
import vecizeler from './assets/images/vecizeler.webp'
import secureText from './assets/images/secureText.webp'
import aktarim from './assets/images/aktarim.png'
import offerwiz from './assets/images/offerwiz.png'
import beyan from './assets/images/beyan.png'
import ShowSelectedDocModal from './components/showSelectedDocModal';
import LanguageSwitcher from './components/languageSwitcher';
import { ThemeToggle, lightTheme, darkTheme } from './components/themeController';

// Animasyon varyantları
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Animasyonlu komponent
const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};
const data = {
  tr: {
    "personalInfo": {
      "name": "Salih Öz",
      "title": "Full Stack Developer",
      "subtitle": "Node.js & React & React Native & PostgreSQL Developer",
      "bio": "4 yıllık kişisel ve 1.5 yıllık profesyonel toplam 5.5 yıl deneyime sahip, modern web teknolojilerinde kendini geliştirmiş full stack developer. Kullanıcı deneyimini ön planda tutan, performans odaklı uygulamalar geliştiriyorum.",
      "image": pp,
      "resume": "/docs/cv.pdf",
      "contact": {
        "email": "slhoz.developer@gmail.com",
        "github": "https://github.com/salihoz0",
        "linkedin": "https://www.linkedin.com/in/salih-öz/",
        "website": "salihoz.com.tr",
      },
      "skills": [
        { "name": "Node.js", "level": 90 },
        { "name": "Express", "level": 90 },
        { "name": "Fastify", "level": 70 },
        { "name": "React", "level": 85 },
        { "name": "MUI", "level": 85 },
        { "name": "JavaScript", "level": 90 },
        { "name": "PostgreSQL", "level": 85 },
        { "name": "SQL", "level": 80 },
        { "name": "Git", "level": 85 },
        { "name": "Github", "level": 85 },
        { "name": "Redis", "level": 75 },
        { "name": "RabbitMQ", "level": 75 },
        { "name": "Socket.io", "level": 75 },
        { "name": "Prisma ORM", "level": 95 },
        { "name": "React Native", "level": 80 },
        { "name": "Electron", "level": 65 },
        { "name": "EJS", "level": 40 }
      ],
    },
    "projects": [
      {
        "title": "Rezztoran Mobil Uygulaması",
        "description": "Üniversite bitirme projesi olarak geliştirilen Rezztoran mobil uygulaması. React Native ile geliştirilmiş olup, kullanıcıların restoranları inceleyebileceği, rezervasyon yapabileceği ve yorum yapabileceği bir uygulamadır. Backend tarafında ise Node.js ve PostgreSQL kullanılmıştır.",
        "technologies": ["React Native", "Axios"],
        "github": "https://github.com/salihoz0/Rezztoran_mobile",
        "doc": "/docs/rezztoranMobil.pdf",
        "image": rezztoranImage,
      },
      {
        "title": "Vecizeler Mobil Uygulaması",
        "description": "React Native ile geliştirilmiş olup, kullanıcıların vecizeleri okuyabileceği ve paylaşabileceği, Soru cevap mini oyunu oynayabileceği bir uygulamadır. Projede Firebase storage, Firebase Auth ve Firebase Push Notification kullanılmıştır. Google Play Store'da yayında olan uygulama 4000+ indirme sayısına ulaşmıştır.",
        "technologies": ["React Native", "Firebase", "Axios"],
        "live": "https://play.google.com/store/apps/details?id=com.vecizeler&hl=tr&pli=1",
        "image": vecizeler
      },
      {
        "title": "SecureText Mobil Uygulaması",
        "description": "Bu uygulama, kullanıcıların metinlerini 20 farklı şifreleme yöntemiyle güvenli bir şekilde şifrelemelerine olanak tanır. Şifrelenen mesajlar başka bir kullanıcıya iletilebilir ve yalnızca doğru şifre çözme anahtarına sahip olan kişiler bu mesajları okuyabilir. Arayüz 15 dil desteklemektedir. Firebase Push Notification kullanılarak bildirim gönderme özelliği de bulunmaktadır. Google Play Store'da yayınlanmıştır.",
        "technologies": ["React Native", "Firebase", "Axios", "Encryption"],
        "live": "https://play.google.com/store/apps/details?id=com.securetext&hl=tr",
        "image": secureText
      },
      {
        "title": "Rahat Aktarım Web Sitesi",
        "description": "Çalışmakta olduğum firma için geliştirdiğim Rahat Aktarım web sitesi. React ve Node.js kullanılarak geliştirdim. Site üzerinden kullanıcılar mükelleflerinin işlenmesi gereken faturalarını, banka ekstrelerini vb. otomatik olarak Genel Muhasebe programına aktarabilirler.",
        "technologies": ["React", "Socket.io", "BullMQ", "Node.js", "PostgreSQL", "Prisma ORM", "Electron"],
        "live": "https://rahataktarim.com",
        "image": aktarim
      },
      {
        "title": "Rahat Beyan Web Sitesi",
        "description": "Çalışmakta olduğum firma için geliştirdiğim Rahat Beyan web sitesi. React ve Node.js kullanılarak geliştirdim. Site üzerinden kullanıcılar mükelleflerinin tahakkuk ve tebligatlarını otomatik olarak mükelleflerine whatsapp ve e-mail araclığıyla bildirebilirler.",
        "technologies": ["React", "Socket.io", "BullMQ", "Node.js", "PostgreSQL", "Prisma ORM", "Electron"],
        "live": "https://rahatbeyan.com",
        "image": beyan
      },
      {
        "title": "OfferWiz AI Web Sitesi",
        "description": "Freelance olarak yaptığım   web sitesi. Tasarımcının verdiği figma tasarımı üzerine React frontend kısmını MUI kullanarak geliştirdim. Web sitesinin amacı B2B müşte  rine hizmet veren bir yapay zeka kullanarak ve müşteriye özel teklif sunan bir site. Backend olarak Python kullanıldı.",
        "technologies": ["React", "MUI", "Python"],
        "image": offerwiz
      },
      {
        "title": "İlan Ver Express API",
        "description": "Yazılıma giriş kursu verdiğim zamanlarda basit örnek proje olarak yaptığımız ilan verme Express API servisi. Projede Framework olarak Express, Database olarak PostgreSQL ve ORM olarak Prisma kullanılmıştır.",
        "technologies": ["Express", "Node.js", "PostgreSQL"],
        "github": "https://github.com/salihoz0/ilan-ver-backend",
        "image":nodeImage
      },
      {
        "title": "İlan Ver React Frontend",
        "description": "Yazılıma giriş kursu verdiğim zamanlarda eğitim amaçlı olarak geliştirilen ilan verme projesinin frontend kısmı. Bu proje, React temellerini, bileşen yapısını, durum yönetimini ve Material-UI uygulamasını gösteren eğitici bir örnek olarak hizmet veriyor. Öğrenciler, ilan listeleme, ilan oluşturma formları ve temel CRUD işlemleri gibi özelliklere sahip modern bir kullanıcı arayüzü oluşturmayı öğreniyor. Proje, React geliştirmedeki en iyi uygulamaları ve duyarlı tasarım prensiplerini vurguluyor.",
        "technologies": ["React", "Material-UI"],
        "github": "https://play.google.com/store/apps/details?id=com.vecizeler&hl=tr&pli=1",
        "image": nodeImage
      },
      {
        "title": "React Portfolio",
        "description": "Bu portfolyo web sitesi. React ve Material-UI kullanılarak geliştirilen bu portfolyo şablonu, temiz, modern ve duyarlı bir tasarım sunuyor. Şablon, özelleştirme göz önünde bulundurularak tasarlandı ve diğer geliştiricilerin bölümleri kolayca değiştirmesine, yeni bileşenler eklemesine ve stillendirmeyi kişiselleştirmesine olanak tanıyor. Projelerini ve profesyonel deneyimlerini zarif, profesyonel bir formatta sergilemek isteyen geliştiriciler için mükemmel bir seçenek.",
        "technologies": ["React", "MUI"],
        "github": "https://github.com/salihoz0/react-portfolio"
      }
    ],
    "experiences": [
      {
        "company": "HIGHTECH Natural Bilişim A.Ş.",
        "position": "Middle Full Stack Developer",
        "period": "2023 Kasım - Devam Ediyor",
        "description": "Mikroservis mimarisi ile ölçeklenebilir uygulamalar geliştirme, teknik liderlik.",
        "technologies": ["React", "Node.js"]
      },
      {
        "company": "Freelance",
        "position": "React Frontend, Python Django Developer",
        "period": "2023 Ağustos - 2023 Aralık",
        "description": "Freelance olarak React, Python Django ve ChatGPT API ile web siteleri geliştirme.",
        "technologies": ["React", "Python", "Django", "Chat GPT API", "MUI"]
      },
      {
        "company": "Hobi Projeleri",
        "position": "React, React Native, Node.js Developer",
        "period": "2019 - Devam Ediyor",
        "description": "React, React Native, Node.js, Express ve PostgreSQL ile hobi projeleri geliştirme.",
        "technologies": ["React", "Python", "Django", "Chat GPT API", "MUI", "React Native", "Node.js", "Express", "PostgreSQL"]
      }
    ],
    "education": [
      {
        "year": "2024-Devam",
        "school": "Anadolu Üniversitesi",
        "degree": "Lisans - Açıköğretim - Bilişim Teknolojileri",
        "description": "Bilişim Teknolojileri alanında açıköğretim programında eğitim görüyorum."
      },
      {
        "year": "2019-2023",
        "school": "Trakya Üniversitesi",
        "degree": "Lisans - Bilgisayar Mühendisliği",
        "description": "Bilgisayar mühendisliği eğitimi aldım ve 2023 Temmuz ayında mezun oldum."
      },
      {
        "year": "2015-2019",
        "school": "İhsan Mermerci Anadolu Lisesi",
        "degree": "Lise",
        "description": "Lise eğitimimi burada tamamladım. İkinci dil olarak bir yıl Çince, 3 yıl Almanca eğitimi aldım."
      },
      {
        "year": "2013-2015",
        "school": "Ali Karay Ortaokulu",
        "degree": "Ortaöğretim",
        "description": "Ortaokul eğitiminin son iki yılını burada tamamladım."
      },
      {
        "year": "2011-2013",
        "school": "Nihat Çandarlı Ortaokulu",
        "degree": "Ortaöğretim",
        "description": "Ortaokul eğitiminin ilk iki yılını burada tamamladım."
      },
      {
        "year": "2007-2011",
        "school": "Seyit Onbaşı İlkokulu",
        "degree": "İlköğretim",
        "description": "Temel eğitim hayatına başlangıç."
      }
    ],
    "certifications": [
      {
        "name": "Yüksek Trafikli Yazılım Mimarisi",
        "issuer": "Bedirhan Güven",
        "date": "2024 - Devam Ediyor"
      },
      {
        "name": "EF SET English Certificate 58/100 (B2 UPPER INTERMEDIATE)",
        "issuer": "EFSET English",
        "date": "2023 Mart",
        "link": "https://cert.efset.org/GDMJo2"
      }
    ]
  },
  en: {
    "personalInfo": {
      "name": "Salih Öz",
      "title": "Full Stack Developer",
      "subtitle": "Node.js & React & React Native & PostgreSQL Developer",
      "bio": "Full stack developer with 5.5 years of experience, including 4 years of personal and 1.5 years of professional experience, specialized in modern web technologies. I develop performance-focused applications with a strong emphasis on user experience.",
      "image": pp,
      "resume": "/docs/cv.pdf",
      "contact": {
        "email": "slhoz.developer@gmail.com",
        "github": "https://github.com/salihoz0",
        "linkedin": "https://www.linkedin.com/in/salih-öz/",
        "website": "salihoz.com.tr",
      },
      "skills": [
        { "name": "Node.js", "level": 90 },
        { "name": "Express", "level": 90 },
        { "name": "Fastify", "level": 70 },
        { "name": "React", "level": 85 },
        { "name": "MUI", "level": 85 },
        { "name": "JavaScript", "level": 90 },
        { "name": "PostgreSQL", "level": 85 },
        { "name": "SQL", "level": 80 },
        { "name": "Git", "level": 85 },
        { "name": "Github", "level": 85 },
        { "name": "Redis", "level": 75 },
        { "name": "RabbitMQ", "level": 75 },
        { "name": "Socket.io", "level": 75 },
        { "name": "Prisma ORM", "level": 95 },
        { "name": "React Native", "level": 80 },
        { "name": "Electron", "level": 65 },
        { "name": "EJS", "level": 40 }
      ],
    },
    "projects": [
      {
        "title": "Rezztoran Mobile Application",
        "description": "Rezztoran mobile application developed as a university graduation project. Built with React Native, it allows users to browse restaurants, make reservations, and write reviews. The backend is developed using Node.js and PostgreSQL.",
        "technologies": ["React Native", "Axios"],
        "github": "https://github.com/salihoz0/Rezztoran_mobile",
        "doc": "/docs/rezztoranMobil.pdf",
        "image": rezztoranImage,
      },
      {
        "title": "Vecizeler Mobile Application",
        "description": "Developed with React Native, this app allows users to read and share quotes, and play a Q&A mini-game. The project utilizes Firebase Storage, Firebase Auth, and Firebase Push Notification. The app has reached over 4000+ downloads on Google Play Store.",
        "technologies": ["React Native", "Firebase", "Axios"],
        "live": "https://play.google.com/store/apps/details?id=com.vecizeler&hl=tr&pli=1",
        "image":vecizeler
      },
      {
        "title": "SecureText Mobile Application",
        "description": "This application enables users to securely encrypt their texts using 20 different encryption methods. Encrypted messages can be shared with other users and can only be read by those with the correct decryption key. The interface supports 15 languages. It features push notifications using Firebase Push Notification and is published on Google Play Store.",
        "technologies": ["React Native", "Firebase", "Axios", "Encryption"],
        "live": "https://play.google.com/store/apps/details?id=com.securetext&hl=tr",
        "image": secureText
      },
      {
        "title": "Rahat Aktarim Website",
        "description": "Rahat Aktarim website developed for my current company. Built with React and Node.js, the site allows users to automatically transfer their taxpayers' invoices, bank statements, etc. to the General Accounting program.",
        "technologies": ["React", "Socket.io", "BullMQ", "Node.js", "PostgreSQL", "Prisma ORM", "Electron"],
        "live": "https://rahataktarim.com",
        "image": aktarim
      },
      {
        "title": "Rahat Beyan Website",
        "description": "Rahat Beyan website developed for my current company. Built with React and Node.js, the site enables users to automatically notify their taxpayers of assessments and notifications via WhatsApp and email.",
        "technologies": ["React", "Socket.io", "BullMQ", "Node.js", "PostgreSQL", "Prisma ORM", "Electron"],
        "live": "https://rahatbeyan.com",
        "image": beyan
      },
      {
        "title": "OfferWiz AI Website",
        "description": "A freelance website project. I developed the React frontend using MUI based on the designer's Figma design. The website's purpose is to serve B2B customers using AI and provide customized offers. Python was used for the backend.",
        "technologies": ["React", "MUI", "Python"],
        "image": offerwiz
      },
      {
        "title": "Post Ad Express API",
        "description": "A simple Express API service for posting ads, created as an example project while teaching an introduction to programming course. The project uses Express as the framework, PostgreSQL as the database, and Prisma as the ORM.",
        "technologies": ["Express", "Node.js", "PostgreSQL"],
        "github": "https://github.com/salihoz0/ilan-ver-backend",
        "image":nodeImage
      },
      {
        "title": "Post Ad React Frontend",
        "description": "A simple frontend part of the ad posting project created while teaching an introduction to programming course. This project serves as an educational example demonstrating React fundamentals, component structure, state management, and Material-UI implementation. Students learn how to create a modern user interface with features like ad listing, ad creation forms, and basic CRUD operations. The project emphasizes best practices in React development and responsive design principles.",
        "technologies": ["React", "Material-UI"],
        "github": "https://play.google.com/store/apps/details?id=com.vecizeler&hl=tr&pli=1",
        "image": nodeImage
      },
      {
        "title": "React Portfolio",
        "description": "This portfolio website. Developed using React and Material-UI, this portfolio template offers a clean, modern, and responsive design. Features include dynamic content management, smooth animations, and multilingual capabilities. The template is built with customization in mind, allowing other developers to easily modify sections, add new components, and personalize the styling. Perfect for developers looking to showcase their projects and professional experience in a polished, professional format.",
        "technologies": ["React", "MUI"],
        "github": "https://github.com/salihoz0/react-portfolio"
      }
    ],

    "experiences": [
      {
        "company": "HIGHTECH Natural Information Technologies Inc.",
        "position": "Middle Full Stack Developer",
        "period": "November 2023 - Present",
        "description": "Developing scalable applications with microservice architecture, technical leadership.",
        "technologies": ["React", "Node.js"]
      },
      {
        "company": "Freelance",
        "position": "React Frontend, Python Django Developer",
        "period": "August 2023 - December 2023",
        "description": "Developing websites using React, Python Django, and ChatGPT API as a freelancer.",
        "technologies": ["React", "Python", "Django", "Chat GPT API", "MUI"]
      },
      {
        "company": "Hobby Projects",
        "position": "React, React Native, Node.js Developer",
        "period": "2019 - Present",
        "description": "Developing hobby projects using React, React Native, Node.js, Express, and PostgreSQL.",
        "technologies": ["React", "Python", "Django", "Chat GPT API", "MUI", "React Native", "Node.js", "Express", "PostgreSQL"]
      }
    ],
    "education": [
      {
        "year": "2024-Present",
        "school": "Anadolu University",
        "degree": "Bachelor's - Distance Learning - Information Technologies",
        "description": "Currently studying in the Information Technologies distance learning program."
      },
      {
        "year": "2019-2023",
        "school": "Trakya University",
        "degree": "Bachelor's - Computer Engineering",
        "description": "Studied Computer Engineering and graduated in July 2023."
      },
      {
        "year": "2015-2019",
        "school": "İhsan Mermerci Anatolian High School",
        "degree": "High School",
        "description": "Completed high school education here. Studied Chinese for one year and German for 3 years as second languages."
      },
      {
        "year": "2013-2015",
        "school": "Ali Karay Middle School",
        "degree": "Secondary Education",
        "description": "Completed the last two years of middle school education here."
      },
      {
        "year": "2011-2013",
        "school": "Nihat Çandarlı Middle School",
        "degree": "Secondary Education",
        "description": "Completed the first two years of middle school education here."
      },
      {
        "year": "2007-2011",
        "school": "Seyit Onbaşı Primary School",
        "degree": "Primary Education",
        "description": "Started basic education journey."
      }
    ],
    "certifications": [
      {
        "name": "High Traffic Software Architecture",
        "issuer": "Bedirhan Güven",
        "date": "2024 - Present"
      },
      {
        "name": "EF SET English Certificate 58/100 (B2 UPPER INTERMEDIATE)",
        "issuer": "EFSET English",
        "date": "March 2023",
        "link": "https://cert.efset.org/GDMJo2"
      }
    ]
  },
}


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('preferredTheme') || 'light');
  const [currentThemeInstance, setCurrentThemeInstance] = useState(currentTheme === 'dark' ? darkTheme : lightTheme);

  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('preferredLanguage') || 'en'
  );

  const [dataInSelectedLanguage, setDataInSelectedLanguage] = useState(
    data[localStorage.getItem('preferredLanguage')] || data.en
  );

  useEffect(() => {
    setCurrentThemeInstance(currentTheme === 'dark' ? darkTheme : lightTheme);
    localStorage.setItem('preferredTheme', currentTheme);
  }, [currentTheme]);
  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    setDataInSelectedLanguage(data[currentLanguage] || data.en);
  }, [currentLanguage]);


  const handleOpenModal = (doc) => {
    console.log(doc);
    setSelectedDoc(doc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDoc(null);
    setModalOpen(false);
  };
  const handleSubmit = () => {
    const mailtoLink = `mailto:${dataInSelectedLanguage.personalInfo.contact.email}?subject=İletişim Formu&body=Ad Soyad: ${name}%0D%0AMesaj: ${message}`;
    window.location.href = mailtoLink; // mailto linkine yönlendirme yap
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{
        flexGrow: 1,
        minHeight: '100vh'
      }}>
        {/* Header */}
        <AppBar position="fixed" sx={{ backdropFilter: 'blur(20px)', }}>
          <Container>
            <Box py={2} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" sx={{ color: "gray" }}>{dataInSelectedLanguage.personalInfo.name}</Typography>
              <Box>
                <Tooltip title={dataInSelectedLanguage.personalInfo.contact.github}>
                  <IconButton href={dataInSelectedLanguage.personalInfo.contact.github} target="_blank">
                    <GitHub />
                  </IconButton>
                </Tooltip>
                <Tooltip title={dataInSelectedLanguage.personalInfo.contact.linkedin}>
                  <IconButton href={dataInSelectedLanguage.personalInfo.contact.linkedin} target="_blank">
                    <LinkedIn />
                  </IconButton>
                </Tooltip>
                <Tooltip title={dataInSelectedLanguage.personalInfo.contact.email}>
                  <IconButton href={`mailto:${dataInSelectedLanguage.personalInfo.contact.email}`}>
                    <Email />
                  </IconButton>
                </Tooltip>
                <ThemeToggle  isDarkMode={currentTheme === 'dark'} toggleTheme={() => setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')}/>
                <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
              </Box>
            </Box>
          </Container>
        </AppBar>

        {/* Hero Section */}
        <Box sx={{ pt: 10 }}>
          <Container maxWidth="lg">
            <AnimatedSection>
              <Paper sx={{
                p: 4,
                mt: 8,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <Grid2 container spacing={4} alignItems="center">
                  <Grid2 item xs={12} md={4}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Avatar
                        src={dataInSelectedLanguage.personalInfo.image}
                        sx={{
                          width: 250,
                          height: 250,
                          mx: "auto",
                          border: '5px solid white',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }}
                      />
                    </motion.div>
                  </Grid2>
                  <Grid2 item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography variant="h3" gutterBottom fontWeight="bold">
                        {dataInSelectedLanguage.personalInfo.name}
                      </Typography>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {dataInSelectedLanguage.personalInfo.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" paragraph>
                        {dataInSelectedLanguage.personalInfo.subtitle}
                      </Typography>
                      <Button
                        variant='contained'
                        sx={{ backgroundColor: "gray", borderRadius: "20px", textTransform: "none" }}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = dataInSelectedLanguage.personalInfo.resume;
                          link.download = 'Salih Öz CV.pdf';
                          link.click();
                        }}                      >
                        CV {currentLanguage === 'en' ? 'Download' : 'İndir'}
                        <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
                      </Button>
                    </motion.div>
                  </Grid2>
                  <Grid2 item xs={12} md={8}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography variant="body1" paragraph>
                        {dataInSelectedLanguage.personalInfo.bio}
                      </Typography>
                      <Box sx={{ mt: 3 }}>
                        {dataInSelectedLanguage.personalInfo.skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            variants={fadeInUp}
                            style={{ display: 'inline-block' }}
                          >
                            <Chip
                              label={`${skill.name} ${skill.level}%`}
                              sx={{
                                mr: 1,
                                mb: 1,
                                background: `linear-gradient(90deg, ${ currentThemeInstance.palette.primary.main} ${skill.level}%, #e0e0e0 ${skill.level}%)`,
                                color: 'white'
                              }}
                            />
                          </motion.div>
                        ))}
                      </Box>
                    </motion.div>
                  </Grid2>
                </Grid2>
              </Paper>
            </AnimatedSection>

            {/* Projects Section */}
            <Box sx={{ py: 8 }}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Projeler
                </Typography>
                <Divider sx={{ mb: 4 }} />
              </AnimatedSection>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Grid2 container spacing={4}>
                  {dataInSelectedLanguage.projects.map((project, index) => (
                    <Grid2 item xs={12} md={6} lg={4} xl={4} key={index}>
                      <motion.div variants={fadeInUp}>
                        <Card >
                          <Box sx={{
                            height: 200,
                            position: 'relative',
                            overflow: 'hidden',
                            ...(project.image ? {
                              '& img': {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease-in-out',
                              },
                              '&:hover img': {
                                transform: 'scale(1.1)',
                              },
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.3)',
                                transition: 'background 0.3s ease',
                              },
                              '&:hover::after': {
                                background: 'rgba(0, 0, 0, 0.5)',
                              }
                            } : {
                              background: `linear-gradient(135deg, ${currentThemeInstance.palette.primary.main} 0%, ${currentThemeInstance.palette.secondary.main} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            })
                          }}


                            onClick={() => project.image && setSelectedImage(project.image)}

                          >
                            {project.image ? (
                              <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                              />
                            ) : (
                              <Code sx={{ fontSize: 60, color: 'white' }} />
                            )}
                            {/* Proje başlığı overlay */}
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                p: 2,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                color: 'white',
                                display: project.image ? 'block' : 'none'
                              }}
                            >
                              <Typography variant="h6" sx={{ color: 'white' }}>
                                {project.title}
                              </Typography>
                            </Box>
                          </Box>
                          <CardContent xs={12} md={6} lg={4} xl={4}>
                            {!project.image && (
                              <Typography variant="h6" gutterBottom>
                                {project.title}
                              </Typography>
                            )}
                            <Typography variant="body2" color="textSecondary" >
                              {project.description}
                            </Typography>
                            <Box sx={{ mt: 2, }}>
                              {project.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    mr: 1,
                                    mb: 1,
                             
                                  }}
                                />
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              {project.github && (
                                <IconButton
                                  size="small"
                                  onClick={() => window.open(project.github)}
                                  sx={{
                                  
                                  }}
                                >
                                  <GitHub />
                                </IconButton>
                              )}
                              {project.live && (
                                <IconButton
                                  size="small"
                                  onClick={() => window.open(project.live)}
                              
                                >
                                  <Language />
                                </IconButton>
                              )}
                              {project.doc && (
                                <IconButton
                                  size="small"
                                  onClick={() => handleOpenModal(project.doc)}
                                >
                                  <PlagiarismIcon />
                                </IconButton>
                              )}
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid2>
                  ))}
                </Grid2>
              </motion.div>
            </Box>

            {/* Experience Section */}
            <Box sx={{ py: 8 }}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Deneyim
                </Typography>
                <Divider sx={{ mb: 4 }} />
              </AnimatedSection>
              <Timeline position="alternate">
                {dataInSelectedLanguage.experiences.map((exp, index) => (
                  <AnimatedSection key={index}>
                    <TimelineItem position={index % 2 === 0 ? "left" : "right"}>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <Work />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                          <Typography variant="h6">{exp.position}</Typography>
                          <Typography variant="subtitle1" color="primary">
                            {exp.company}
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {exp.period}
                          </Typography>
                          <Typography variant="body2" paragraph>
                            {exp.description}
                          </Typography>
                          <Box>
                            {exp.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{ mr: 1, mb: 1 }}
                              />
                            ))}
                          </Box>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  </AnimatedSection>
                ))}
              </Timeline>
            </Box>

            {/* Education Section */}
            <Box sx={{ py: 8 }}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Eğitim
                </Typography>
                <Divider sx={{ mb: 4 }} />
              </AnimatedSection>
              <Timeline position="alternate">
                {dataInSelectedLanguage.education.map((edu, index) => (
                  <AnimatedSection key={index}>
                    <TimelineItem position={index % 2 === 0 ? "left" : "right"}>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          <School />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                          <Typography variant="h6">{edu.school}</Typography>
                          <Typography variant="subtitle1" color="secondary">
                            {edu.degree}
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary">
                            {edu.year}
                          </Typography>
                          <Typography variant="body2">
                            {edu.description}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  </AnimatedSection>
                ))}
              </Timeline>

            </Box>

            {/* Certifications Section */}
            <Box sx={{ py: 8 }}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Sertifikalar
                </Typography>
                <Divider sx={{ mb: 4 }} />
              </AnimatedSection>
              <Grid2 container spacing={4}>
                {dataInSelectedLanguage.certifications.map((cert, index) => (
                  <Grid2 item xs={12} md={6} key={index}>
                    <AnimatedSection>
                      <Card sx={{
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                        }
                      }}>
                        <CardContent>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 2
                          }}>
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2
                            }}>
                              <Box sx={{
                                borderRadius: '12px',
                                p: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <Article sx={{
                                  fontSize: 28,
                                }} />
                              </Box>
                              {cert.link && (
                                <Tooltip title="Sertifikayı Görüntüle">
                                  <IconButton
                                    href={cert.link}
                                    target="_blank"
                                 
                                  >
                                    <OpenInNewIcon />
                                  </IconButton>
                                </Tooltip>
                              )}
                            </Box>
                            <Chip
                              label={cert.date}
                              size="small"
                              sx={{
                                color: 'primary.main',
                                fontWeight: 500
                              }}
                            />
                          </Box>

                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{
                              fontWeight: 600,
                              fontSize: '1.1rem',
                              color: 'text.primary'
                            }}
                          >
                            {cert.name}
                          </Typography>

                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1
                          }}>
                            <BusinessCenter
                              sx={{
                                fontSize: 20,
                                color: 'text.secondary'
                              }}
                            />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: 'text.secondary',
                                fontWeight: 500
                              }}
                            >
                              {cert.issuer}
                            </Typography>
                          </Box>

                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  </Grid2>
                ))}
              </Grid2>
            </Box>

            {/* Contact Section */}
            <Box sx={{ py: 8 }}>
              <AnimatedSection>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                  İletişim
                </Typography>
                <Divider sx={{ mb: 4 }} />
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                  }}
                >
                  <Grid2 item alignItems="center">
                    <Grid2 item xs={12} md={6}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 3,
                          color: 'text.primary',
                        }}
                      >
                        Bana Ulaşın
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 2,
                        }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<Email />}
                          href={`mailto:${dataInSelectedLanguage.personalInfo.contact.email}`}
                          sx={{
                            color: 'white',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease-in-out',
                            boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                            },
                          }}
                        >
                          Email
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<LinkedIn />}
                          href={dataInSelectedLanguage.personalInfo.contact.linkedin}
                          target="_blank"
                          sx={{
                            color: '#0077b5',
                            borderColor: '#0077b5',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                              bgcolor: 'rgba(0, 119, 181, 0.1)',
                              borderColor: '#0077b5',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          LinkedIn
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<GitHub sx={{ color: '#24292e' }} />}
                          href={dataInSelectedLanguage.personalInfo.contact.github}
                          target="_blank"
                          sx={{
                            color: '#24292e',
                            borderColor: '#24292e',
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                              bgcolor: 'rgba(36, 41, 46, 0.1)',
                              borderColor: '#24292e',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          GitHub
                        </Button>
                      </Box>
                    </Grid2>
                    <Grid2 item xs={12} sx={{ mt: 3 }} >
                      <Grid2 container xs={12} spacing={3}>
                        <TextField
                          fullWidth
                          label="Ad Soyad"
                          variant="outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />

                        <TextField
                          fullWidth

                          label="Mesaj"
                          variant="outlined"
                          multiline
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        />
                        <Grid2 item xs={12}>
                          <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                            sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              py: 1.5,
                              borderRadius: 2,
                              textTransform: 'none',
                              fontSize: '1rem',
                              fontWeight: 500,
                              transition: 'all 0.2s ease-in-out',
                              boxShadow: '0 2px 8px rgba(33, 150, 243, 0.3)',
                              '&:hover': {
                                bgcolor: 'primary.dark',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
                              },
                            }}
                            onClick={() => handleSubmit()}
                          >
                            Gönder
                            <ForwardToInboxIcon sx={{ ml: 1 }} />
                          </Button>
                        </Grid2>
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Paper>
              </AnimatedSection>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', py: 4, mt: 8 }}>
          <Container>
            <Typography variant="body2" color="textSecondary" align="center">
              © {new Date().getFullYear()} {dataInSelectedLanguage.personalInfo.name}. Tüm hakları saklıdır.
            </Typography>
          </Container>
        </Box>
      </Box>
      <ShowSelectedDocModal selectedDoc={selectedDoc} isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </ThemeProvider>
  );
};

export default Portfolio;