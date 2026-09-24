import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/shared/SectionWrapper';
import Card from '../components/shared/Card';
import Hero from '../components/sections/Hero';
import { popularPrograms, professionalCatalog } from '../data/coursesData';
import { 
  FaGraduationCap, 
  FaGlobeAmericas, 
  FaLaptop, 
  FaHeadphonesAlt, 
  FaAward, 
  FaUserTie, 
  FaBriefcase, 
  FaBullhorn, 
  FaCode, 
  FaArrowUp, 
  FaPlusCircle,
  FaSearch,
  FaStar,
  FaClock,
  FaBookmark,
  FaRegBookmark,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaEye,
  FaFilter,
  FaCertificate,
  FaBookOpen,
  FaHeart,
  FaRobot,
  FaHardHat,
  FaDraftingCompass,
  FaTools,
  FaCogs
} from 'react-icons/fa';

// Import high-quality course illustration covers
import GloballyRespectedImg from '../assets/images/Globally Respected Certifications.webp';
import IndustryStandardsImg from '../assets/images/Industry-Leading Standards & Frameworks.jpg';
import ExtensiveLearningImg from '../assets/images/Extensive Learning & Knowledge Resources.jpg';
import WhatLearnersSayImg from '../assets/images/What Our Learners Say.jpg';
import FlexibleLearningImg from '../assets/images/Flexible Learning & Exam Preparation Options.jpg';
import EmpoweringJourneyImg from '../assets/images/Empowering Your Professional Journey.jpg';
import ProfessionalCommunityImg from '../assets/images/Professional Communit.jpg';

// Dynamic import of Course 1-100 images
const course100Glob = import.meta.glob('../assets/images/Course 1-100/*.png', { eager: true });
const course100ImageMap = {};
Object.entries(course100Glob).forEach(([imgPath, module]) => {
  const filename = imgPath.split('/').pop().replace(/\.png$/i, '');
  const dashIdx = filename.indexOf('_');
  if (dashIdx !== -1) {
    const courseId = filename.substring(dashIdx + 1);
    course100ImageMap[courseId] = module.default || module;
  }
});

// Dedicated Interactive Course Card Component
const CourseCard = ({ 
  course, 
  categoryLabel, 
  imageUrl, 
  isSaved, 
  onToggleSave, 
  isExpanded, 
  onToggleExpand 
}) => {
  const targetPath = course.path ? (course.path === '/' ? '/' : course.path) : `/course/${course.id}`;

  return (
    <div className={`interactive-course-card ${isSaved ? 'is-bookmarked' : ''}`}>
      {/* 1. Media Area with Interactive Overlays */}
      <div className="card-media-wrap">
        <img 
          src={imageUrl} 
          alt={course.title} 
          className="card-media-img" 
          loading="lazy" 
        />
        <div className="card-media-overlay" />

        {/* Top Badges: Category & Interactive Bookmark */}
        <div className="card-media-top">
          <span className="card-category-badge">
            {categoryLabel || course.category || "Professional Cert"}
          </span>
          <button 
            type="button"
            className={`card-bookmark-btn ${isSaved ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleSave(course.id);
            }}
            aria-label={isSaved ? "Remove from saved courses" : "Save course"}
            title={isSaved ? "Saved to Favorites" : "Save for Later"}
          >
            {isSaved ? <FaBookmark size={13} /> : <FaRegBookmark size={13} />}
          </button>
        </div>

        {/* Bottom Media Bar: Live Enrollment Pulse & Preview Action */}
        <div className="card-media-bottom">
          <span className="live-enrollment-badge">
            <span className="live-pulse-dot" /> Live Enrollment
          </span>
          <Link to={targetPath} className="card-hover-hint">
            <FaEye size={12} /> Preview
          </Link>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="card-content-wrap">
        {/* Meta Pills Row */}
        <div className="card-meta-row">
          <span className="meta-pill meta-rating">
            <FaStar className="star-icon" size={11} /> 4.9
          </span>
          <span className="meta-pill meta-mode">
            <FaClock size={11} /> {course.duration || "30 to 45 Days"}
          </span>
          <span className="meta-pill meta-cert">
            <FaCertificate size={11} /> Official Cert
          </span>
        </div>

        {/* Course Title */}
        <h3 className="course-card-title">
          <Link to={targetPath} className="title-link">
            {course.title}
          </Link>
        </h3>

        {/* Interactive Curriculum Highlights Accordion */}
        <div className="card-highlights-box">
          <button 
            type="button" 
            className="highlights-toggle-btn"
            onClick={(e) => {
              e.preventDefault();
              onToggleExpand(course.id);
            }}
            aria-expanded={isExpanded}
          >
            <span className="highlights-btn-label">
              <FaAward size={12} className="highlights-icon" /> Program Inclusions
            </span>
            {isExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
          </button>

          {isExpanded && (
            <div className="highlights-expanded-content animate-fade-in">
              <ul className="highlights-list">
                <li><FaCheckCircle size={11} className="check-icon" /> 100% Online self-paced master modules</li>
                <li><FaCheckCircle size={11} className="check-icon" /> Official Cambridge Learning Services verifiable credential</li>
                <li><FaCheckCircle size={11} className="check-icon" /> Practical real-world case scenarios</li>
                <li><FaCheckCircle size={11} className="check-icon" /> Dedicated career mentor support</li>
              </ul>
            </div>
          )}
        </div>

        {/* 3. Card Footer: Pricing & Action Button */}
        <div className="card-footer-row">
          <div className="card-price-col">
            <span className="price-label">Tuition Fee</span>
            <span className="price-amount">{course.price}</span>
          </div>

          <Link to={targetPath} className="btn btn-primary card-action-btn">
            <span>{course.path === '/' ? 'Explore Program' : 'View Details'}</span>
            <FaArrowRight size={11} className="btn-arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState('popular'); // 'popular', 'all-catalog', 'saved', or category name
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [expandedCards, setExpandedCards] = useState({});

  // Persistent bookmarked courses
  const [savedCourses, setSavedCourses] = useState(() => {
    try {
      const stored = localStorage.getItem('saved_courses');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  const toggleSaveCourse = (id) => {
    setSavedCourses(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('saved_courses', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Course-relevant images keyed by course ID
  const courseImageMap = {
    // Popular Programs
    "self-confidencebuildingtraining":          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    "resiliencecoachtraining":                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    "motivationalspeakertraining":              "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    "bodylanguageexperttraining":               "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    "personalbrandingstrategisttraining":       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    "mindsetmasterytraining":                   "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
    "relationshipcoachingtraining":             "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    "decisionmakingmasterytraining":            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    "adaptiveleadershiptraining":               "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    "theeverydayaitoolkit":                     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
    "confidenceandcharismatraining":            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    "aiproductivitypowerup":                    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80",
    // General Professional
    "professionaldevelopmentcertification":     "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    "advancedcareerskillscertification":        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    "workplaceexcellencecertification":         "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    "professionalgrowthcertification":          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    "careerdevelopmentcertification":           "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
    "workplacereadinesscertification":          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    // Business & Management
    "certificateinbusinessmanagement":          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    "certificateinleadershipteammanagement":    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    "certificateinprojectcoordination":         "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    "certificateinofficeadministration":        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "certificateinbusinessoperations":          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    "certificateinsupervisoryskills":           "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
    // Productivity & Office Skills
    "advancedmsexcelcertification":             "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    "businesscommunicationcertification":       "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
    "timemanagementproductivitycertification":  "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80",
    "professionalemailwritingcertification":    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    "officeproductivitycertification":          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    "datahandlingcertification":               "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    // Marketing & Communication
    "digitalmarketingcertification":            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
    "socialmediamanagementcertification":       "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80",
    "contentwritingcertification":              "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    "customerrelationshipmanagementcertification": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80",
    "brandcommunicationcertification":          "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=600&q=80",
    "publicrelationscertification":             "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=600&q=80",
    // Technology & Digital Skills
    "webdevelopmentcertification":              "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80",
    "computerapplicationscertification":        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "itskillscertification":                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    "digitalskillscertification":               "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    "basicprogrammingcertification":            "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=600&q=80",
    "websitemanagementcertification":           "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&q=80",
    // Career Development
    "careeradvancementcertification":           "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "professionalexcellencecertification":      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    "corporatereadinesscertification":          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
    "industryreadinesscertification":           "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80",
    "employabilityskillscertification":         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    "workplacesuccesscertification":            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80",
    // Additional Professional Skills
    "customerservicecertification":             "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
    "salesskillscertification":                 "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    "businessetiquettecertification":           "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    "problemsolvingcertification":              "https://images.unsplash.com/photo-1503551723145-6c040742065b?auto=format&fit=crop&w=600&q=80",
    "decisionmakingcertification":              "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?auto=format&fit=crop&w=600&q=80",
    "leadershipessentialscertification":        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    "communicationskillscertification":         "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
  };

  const getCourseImageUrl = (id) => {
    if (id && course100ImageMap[id]) return course100ImageMap[id];
    if (id && courseImageMap[id]) return courseImageMap[id];
    return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80";
  };

  const benefits = [
    {
      title: "Industry-Relevant Skills",
      desc: "Courses designed and structured around active real-world scenarios, equipping you with instantly applicable toolsets.",
      icon: <FaGraduationCap size={32} />
    },
    {
      title: "Global Learning",
      desc: "Standards-aligned learning systems recognized by global companies, expanding your corporate reach across countries.",
      icon: <FaGlobeAmericas size={32} />
    },
    {
      title: "100% Online Learning",
      desc: "Completely self-paced recorded material allowing you to manage your certification path on your own timeline.",
      icon: <FaLaptop size={32} />
    },
    {
      title: "Counselor Support",
      desc: "Dedicated counselor assistance and expert team access throughout your enrollment and exam scheduling phase.",
      icon: <FaHeadphonesAlt size={32} />
    }
  ];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'FaRobot': return <FaRobot size={17} />;
      case 'FaHardHat': return <FaHardHat size={17} />;
      case 'FaDraftingCompass': return <FaDraftingCompass size={17} />;
      case 'FaTools': return <FaTools size={17} />;
      case 'FaCogs': return <FaCogs size={17} />;
      case 'FaUserTie': return <FaUserTie size={17} />;
      case 'FaBriefcase': return <FaBriefcase size={17} />;
      case 'FaLaptop': return <FaLaptop size={17} />;
      case 'FaBullhorn': return <FaBullhorn size={17} />;
      case 'FaCode': return <FaCode size={17} />;
      case 'FaArrowUp': return <FaArrowUp size={17} />;
      case 'FaPlusCircle': return <FaPlusCircle size={17} />;
      default: return <FaGraduationCap size={17} />;
    }
  };

  // Helper to retrieve all courses flattened
  const getAllCourses = () => {
    const all = [];
    popularPrograms.forEach(p => {
      all.push({ ...p, category: "Popular Program", id: p.id });
    });
    professionalCatalog.forEach(cat => {
      cat.courses.forEach(c => {
        if (!all.some(item => item.id === c.id)) {
          all.push({ ...c, category: cat.category, id: c.id });
        }
      });
    });
    return all;
  };

  const allCourses = getAllCourses();

  // Price parser for sorting
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  // Sorting function
  const sortCourses = (coursesList) => {
    const list = [...coursesList];
    if (sortBy === 'price-asc') {
      return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sortBy === 'price-desc') {
      return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    if (sortBy === 'name-asc') {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list; // 'featured' retains curated order
  };

  // Filtered courses based on search
  const searchedCourses = searchQuery.trim() !== ''
    ? allCourses.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Saved courses list
  const savedCoursesList = allCourses.filter(c => savedCourses.includes(c.id));

  // Determine current active count for toolbar counter
  const getCurrentCount = () => {
    if (searchQuery) return searchedCourses.length;
    if (activeTab === 'popular') return popularPrograms.length;
    if (activeTab === 'all-catalog') return allCourses.length;
    if (activeTab === 'saved') return savedCoursesList.length;
    const cat = professionalCatalog.find(c => c.category === activeTab);
    return cat ? cat.courses.length : 0;
  };

  return (
    <div className="courses-page">
      {/* 0. Full-Width Hero Section */}
      <Hero
        title="Courses & Programs"
        subtitle="Explore our professional certifications"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
        className="courses-hero animate-fade-in"
      />

      {/* 1. Page Header */}
      <section className="page-header py-xl bg-gray">
        <div className="container animate-fade-in">
          <span className="section-label">Education Portfolio</span>
          <h1>Courses & Programs</h1>
          <p className="lead-p">
            At Cambridge Learning Services, we offer a diverse range of professional training programs designed to enhance your leadership, personal development, and technical capabilities. Our courses are structured to provide practical insights, real-world scenarios, and expert-led guidance, helping you achieve measurable success.
          </p>
          <p className="lead-p">
            Whether you're looking to build self-confidence, master agile methodologies, explore AI tools, or enhance your professional branding, we have a specialized program tailored to your needs. Discover our offerings and take the next step in your professional journey.
          </p>
        </div>
      </section>

      {/* 2. Dynamic Search & Interactive Catalog */}
      <SectionWrapper bg="white">
        <div className="catalog-header-block flex-column align-center gap-md text-center my-md">
          <h2 className="catalog-main-title">Professional Certification Catalog</h2>
          <p className="catalog-subtitle">Search or filter through our complete industry-leading qualifications</p>
          
          {/* Elegant Search Input */}
          <div className="search-bar-wrapper flex align-center gap-sm shadow-sm rounded">
            <FaSearch className="search-icon text-muted" />
            <input 
              type="text" 
              placeholder="Search 150+ courses (e.g. AI, construction, excel, operations, leadership)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="clear-search-btn" aria-label="Clear Search">✕</button>
            )}
          </div>
        </div>

        {/* Category Navigation Bar (only visible when not searching) */}
        {!searchQuery && (
          <div className="category-tabs flex justify-center flex-wrap gap-xs my-lg">
            <button 
              className={`cat-tab-btn flex align-center gap-xs ${activeTab === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveTab('popular')}
            >
              <FaGraduationCap /> Popular Programs ({popularPrograms.length})
            </button>
            <button 
              className={`cat-tab-btn flex align-center gap-xs ${activeTab === 'all-catalog' ? 'active' : ''}`}
              onClick={() => setActiveTab('all-catalog')}
            >
              <FaGlobeAmericas /> All Categories ({allCourses.length})
            </button>
            
            {professionalCatalog.map((cat, idx) => (
              <button 
                key={idx}
                className={`cat-tab-btn flex align-center gap-xs ${activeTab === cat.category ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.category)}
              >
                {getCategoryIcon(cat.icon)} {cat.category} ({cat.courses.length})
              </button>
            ))}

            {savedCourses.length > 0 && (
              <button 
                className={`cat-tab-btn saved-tab-btn flex align-center gap-xs ${activeTab === 'saved' ? 'active' : ''}`}
                onClick={() => setActiveTab('saved')}
              >
                <FaBookmark className="text-accent" /> Saved ({savedCourses.length})
              </button>
            )}
          </div>
        )}

        {/* Interactive Toolbar: Live Counter + Sorting Controls */}
        <div className="catalog-toolbar">
          <div className="catalog-counter-wrap">
            <span>Showing <strong>{getCurrentCount()}</strong> certifications</span>
          </div>

          <div className="catalog-controls-right">
            <label htmlFor="course-sort" className="sort-label">
              <FaFilter size={12} /> Sort:
            </label>
            <select 
              id="course-sort"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="sort-select"
            >
              <option value="featured">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Alphabetical: A to Z</option>
            </select>
          </div>
        </div>

        {/* Course Grid Render Area */}
        <div className="courses-render-area my-lg">
          {/* CASE A: Active Search Results */}
          {searchQuery && (
            <div className="search-results-wrapper">
              <h3 className="category-section-heading">Search Results ({searchedCourses.length})</h3>
              {searchedCourses.length > 0 ? (
                <div className="grid grid-3 gap-lg">
                  {sortCourses(searchedCourses).map((course) => (
                    <CourseCard 
                      key={course.id}
                      course={course}
                      categoryLabel={course.category}
                      imageUrl={getCourseImageUrl(course.id)}
                      isSaved={savedCourses.includes(course.id)}
                      onToggleSave={toggleSaveCourse}
                      isExpanded={!!expandedCards[course.id]}
                      onToggleExpand={toggleExpand}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-results py-xl text-center">
                  <p className="text-muted" style={{fontSize: '1.2rem'}}>No courses found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="btn btn-outline mt-sm">
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>
          )}

          {/* CASE B: Static Popular Programs Tab */}
          {!searchQuery && activeTab === 'popular' && (
            <div>
              <h3 className="category-section-heading">Popular Professional Programs</h3>
              <div className="grid grid-3 gap-lg">
                {sortCourses(popularPrograms).map((course) => (
                  <CourseCard 
                    key={course.id}
                    course={course}
                    categoryLabel="Popular Certification"
                    imageUrl={getCourseImageUrl(course.id)}
                    isSaved={savedCourses.includes(course.id)}
                    onToggleSave={toggleSaveCourse}
                    isExpanded={!!expandedCards[course.id]}
                    onToggleExpand={toggleExpand}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CASE C: Saved Courses Tab */}
          {!searchQuery && activeTab === 'saved' && (
            <div>
              <h3 className="category-section-heading">Your Saved Programs ({savedCoursesList.length})</h3>
              {savedCoursesList.length > 0 ? (
                <div className="grid grid-3 gap-lg">
                  {sortCourses(savedCoursesList).map((course) => (
                    <CourseCard 
                      key={course.id}
                      course={course}
                      categoryLabel={course.category}
                      imageUrl={getCourseImageUrl(course.id)}
                      isSaved={true}
                      onToggleSave={toggleSaveCourse}
                      isExpanded={!!expandedCards[course.id]}
                      onToggleExpand={toggleExpand}
                    />
                  ))}
                </div>
              ) : (
                <div className="no-results py-xl text-center">
                  <p className="text-muted" style={{fontSize: '1.15rem'}}>You haven't bookmarked any courses yet.</p>
                  <p className="text-muted" style={{fontSize: '0.95rem'}}>Click the bookmark icon on any course card to add it to your personal shortlist!</p>
                  <button onClick={() => setActiveTab('popular')} className="btn btn-primary mt-md">
                    Explore Popular Courses
                  </button>
                </div>
              )}
            </div>
          )}

          {/* CASE D: Specific Category Filter Tab */}
          {!searchQuery && activeTab !== 'popular' && activeTab !== 'all-catalog' && activeTab !== 'saved' && (
            <div>
              {professionalCatalog.filter(cat => cat.category === activeTab).map((cat, idx) => (
                <div key={idx}>
                  <h3 className="category-section-heading flex align-center gap-sm">
                    {getCategoryIcon(cat.icon)} {cat.category}
                  </h3>
                  <div className="grid grid-3 gap-lg">
                    {sortCourses(cat.courses).map((course) => (
                      <CourseCard 
                        key={course.id}
                        course={course}
                        categoryLabel={cat.category}
                        imageUrl={getCourseImageUrl(course.id)}
                        isSaved={savedCourses.includes(course.id)}
                        onToggleSave={toggleSaveCourse}
                        isExpanded={!!expandedCards[course.id]}
                        onToggleExpand={toggleExpand}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CASE E: All Catalog Categories tab */}
          {!searchQuery && activeTab === 'all-catalog' && (
            <div className="all-catalog-sections flex-column gap-xxl">
              {professionalCatalog.map((cat, idx) => (
                <div key={idx} className="catalog-category-block my-lg" style={{borderBottom: '1px solid #e2e8f0', paddingBottom: '3rem'}}>
                  <h3 className="category-section-heading flex align-center gap-sm" style={{color: 'var(--primary-color)', fontSize: '1.4rem', borderBottom: '2px solid var(--accent-color)', paddingBottom: '0.5rem', display: 'inline-flex'}}>
                    {getCategoryIcon(cat.icon)} {cat.category}
                  </h3>
                  <div className="grid grid-3 gap-lg my-md">
                    {sortCourses(cat.courses).map((course) => (
                      <CourseCard 
                        key={course.id}
                        course={course}
                        categoryLabel={cat.category}
                        imageUrl={getCourseImageUrl(course.id)}
                        isSaved={savedCourses.includes(course.id)}
                        onToggleSave={toggleSaveCourse}
                        isExpanded={!!expandedCards[course.id]}
                        onToggleExpand={toggleExpand}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* 3. Why Learn With Us Section */}
      <SectionWrapper bg="gray" title="Why Learn With Us" subtitle="Accelerate your professional advancement with a framework designed for your lifestyle.">
        <div className="grid grid-4 gap-md">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="benefit-card text-center flex-column align-center gap-sm">
              <span className="benefit-icon-circle flex-center">{benefit.icon}</span>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc text-muted">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <style>{`
        .courses-page {
          overflow-x: hidden;
        }

        .page-header {
          padding-top: 8.5rem; /* account for fixed header */
        }

        .lead-p {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.68;
          max-width: 900px;
          margin-bottom: var(--spacing-md);
        }

        /* Catalog styling */
        .catalog-main-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .catalog-subtitle {
          font-size: 1.12rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* Modern Frosted Search Bar */
        .search-bar-wrapper {
          display: flex;
          align-items: center;
          background-color: #FFFFFF;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-pill);
          padding: 0.65rem 1.35rem;
          width: 100%;
          max-width: 640px;
          margin: var(--spacing-md) auto;
          box-shadow: 0 4px 18px rgba(10, 30, 52, 0.06);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
        }

        .search-bar-wrapper:focus-within {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 4px rgba(232, 130, 38, 0.2), 0 8px 25px rgba(10, 30, 52, 0.08);
          transform: translateY(-1px);
        }

        .search-icon {
          font-size: 1.15rem;
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .search-input {
          border: none;
          outline: none;
          font-size: 1rem;
          width: 100%;
          padding: 4px 12px;
          background: transparent;
          color: var(--text-dark);
          font-weight: 500;
        }

        .clear-search-btn {
          border: none;
          background: rgba(10, 30, 52, 0.06);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 0.85rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .clear-search-btn:hover {
          background: var(--accent-color);
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        /* Interactive Category Pills */
        .category-tabs {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.35rem;
          margin-bottom: var(--spacing-md);
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .cat-tab-btn {
          border: 1.5px solid var(--border-color);
          background-color: var(--bg-primary);
          color: var(--primary-color);
          font-size: 0.86rem;
          font-weight: 650;
          padding: 0.58rem 1.2rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .cat-tab-btn:hover {
          background-color: var(--accent-light);
          border-color: rgba(200, 125, 67, 0.45);
          color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(200, 125, 67, 0.15);
        }

        .cat-tab-btn.active {
          background: var(--primary-gradient);
          color: #FFFFFF;
          border-color: transparent;
          box-shadow: 0 6px 16px rgba(15, 56, 42, 0.25);
          transform: translateY(-1px);
        }

        .saved-tab-btn {
          border-color: rgba(200, 125, 67, 0.5);
          background: rgba(200, 125, 67, 0.08);
        }

        /* Interactive Catalog Toolbar */
        .catalog-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.85rem;
          padding: 0.95rem 1.35rem;
          background: #FFFFFF;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          border-radius: var(--radius-lg);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .catalog-counter-wrap {
          font-size: 0.94rem;
          color: var(--text-dark);
          font-weight: 550;
        }

        .catalog-counter-wrap strong {
          color: var(--primary-color);
          font-weight: 800;
        }

        .catalog-controls-right {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .sort-label {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85rem;
          font-weight: 650;
          color: var(--text-muted);
        }

        .sort-select {
          padding: 0.5rem 1.15rem;
          font-size: 0.86rem;
          font-weight: 600;
          border-radius: var(--radius-pill);
          border: 1.5px solid var(--border-color);
          background: #FFFFFF;
          color: var(--primary-color);
          outline: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .sort-select:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(232, 130, 38, 0.18);
        }

        .category-section-heading {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: var(--spacing-lg);
          letter-spacing: -0.025em;
        }

        /* ============================================================
           INTERACTIVE COURSE CARD COMPONENT - Modern & Dynamic
           ============================================================ */
        .interactive-course-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 18px rgba(18, 51, 38, 0.04);
          overflow: hidden;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.38s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
          height: 100%;
        }

        .interactive-course-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200, 125, 67, 0.4);
          box-shadow: 0 18px 38px -10px rgba(15, 56, 42, 0.12), 0 0 0 1px rgba(200, 125, 67, 0.2);
        }

        .interactive-course-card.is-bookmarked {
          border-color: rgba(200, 125, 67, 0.65);
        }

        /* 1. Media Area */
        .card-media-wrap {
          position: relative;
          width: 100%;
          height: 195px;
          overflow: hidden;
          background: #09241B;
        }

        .card-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease;
        }

        .interactive-course-card:hover .card-media-img {
          transform: scale(1.08);
          filter: brightness(0.94);
        }

        .card-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 36, 27, 0.45) 0%, transparent 45%, rgba(9, 36, 27, 0.85) 100%);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .interactive-course-card:hover .card-media-overlay {
          background: linear-gradient(180deg, rgba(9, 36, 27, 0.55) 0%, transparent 40%, rgba(9, 36, 27, 0.9) 100%);
        }

        .card-media-top {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .card-category-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(15, 56, 42, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #FAF8F5;
          border: 1px solid rgba(200, 125, 67, 0.35);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-pill);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          max-width: 78%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-bookmark-btn {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.55);
          color: var(--primary-color);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color var(--transition-fast);
        }

        .card-bookmark-btn:hover {
          transform: scale(1.18);
          background: #FFFFFF;
          color: var(--accent-color);
        }

        .card-bookmark-btn.active {
          background: var(--accent-gradient);
          color: #FFFFFF;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(200, 125, 67, 0.45);
        }

        .card-media-bottom {
          position: absolute;
          bottom: 10px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }

        .live-enrollment-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(9, 36, 27, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #FAF8F5;
          font-size: 0.72rem;
          font-weight: 650;
          padding: 0.25rem 0.68rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(200, 125, 67, 0.25);
        }

        .live-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #10B981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: radarPing 2s infinite ease-out;
        }

        .card-hover-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(232, 130, 38, 0.95);
          color: #FFFFFF;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.7rem;
          border-radius: var(--radius-pill);
          opacity: 0;
          transform: translateY(4px);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .interactive-course-card:hover .card-hover-hint {
          opacity: 1;
          transform: translateY(0);
        }

        /* 2. Card Content Area */
        .card-content-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 1.45rem;
          gap: 0.85rem;
        }

        .card-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.32rem;
          font-size: 0.74rem;
          font-weight: 650;
          padding: 0.24rem 0.6rem;
          border-radius: var(--radius-pill);
          background: var(--bg-tertiary);
          color: var(--text-dark);
          transition: transform var(--transition-fast);
        }

        .meta-pill:hover {
          transform: translateY(-1px);
        }

        .meta-pill.meta-rating {
          background: rgba(251, 191, 36, 0.18);
          color: #B45309;
        }

        .meta-pill.meta-rating .star-icon {
          color: #F59E0B;
        }

        .meta-pill.meta-mode {
          background: rgba(15, 56, 42, 0.08);
          color: var(--primary-color);
        }

        .meta-pill.meta-cert {
          background: rgba(200, 125, 67, 0.12);
          color: var(--accent-color);
        }

        .course-card-title {
          font-size: 1.18rem;
          font-weight: 750;
          line-height: 1.35;
          margin: 0;
          min-height: 3.2rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .course-card-title .title-link {
          color: var(--primary-color);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .interactive-course-card:hover .course-card-title .title-link {
          color: var(--accent-color);
        }

        /* Interactive Highlights Box */
        .card-highlights-box {
          background: #FAF8F5;
          border: 1px dashed rgba(200, 125, 67, 0.25);
          border-radius: var(--radius-md);
          padding: 0.5rem 0.75rem;
          transition: all 0.25s ease;
        }

        .interactive-course-card:hover .card-highlights-box {
          border-color: rgba(200, 125, 67, 0.45);
          background: #FFFFFF;
        }

        .highlights-toggle-btn {
          width: 100%;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-color);
          cursor: pointer;
          padding: 0.25rem 0;
          transition: color var(--transition-fast);
        }

        .highlights-btn-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .highlights-icon {
          color: var(--accent-color);
        }

        .highlights-toggle-btn:hover {
          color: var(--accent-color);
        }

        .highlights-expanded-content {
          margin-top: 0.55rem;
          padding-top: 0.55rem;
          border-top: 1px solid rgba(226, 232, 240, 0.85);
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .highlights-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.48rem;
          font-size: 0.75rem;
          color: var(--text-dark);
          line-height: 1.4;
        }

        .highlights-list .check-icon {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* 3. Card Footer */
        .card-footer-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border-color);
          padding-top: 0.95rem;
          gap: 0.5rem;
        }

        .card-price-col {
          display: flex;
          flex-direction: column;
        }

        .price-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--text-muted);
          font-weight: 650;
        }

        .price-amount {
          font-size: 1.28rem;
          font-weight: 800;
          color: var(--accent-color);
          font-family: var(--font-heading);
          line-height: 1.1;
          margin-top: 2px;
        }

        .card-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 0.65rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 700;
          border-radius: var(--radius-pill);
          text-decoration: none;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .card-action-btn .btn-arrow-icon {
          transition: transform var(--transition-fast);
        }

        .interactive-course-card:hover .card-action-btn .btn-arrow-icon {
          transform: translateX(4px);
        }

        /* Benefits cards styling */
        .benefit-icon-circle {
          background: linear-gradient(135deg, rgba(232, 130, 38, 0.14) 0%, rgba(245, 158, 11, 0.2) 100%);
          color: var(--accent-color);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          margin-bottom: var(--spacing-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(232, 130, 38, 0.3);
          transition: all var(--transition-normal);
        }

        .benefit-card {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2rem;
          transition: all var(--transition-normal);
          background: #FFFFFF;
        }

        .benefit-card:hover {
          border-color: rgba(232, 130, 38, 0.45);
          transform: translateY(-6px);
          box-shadow: 0 16px 36px -6px rgba(10, 30, 52, 0.12);
        }

        .benefit-card:hover .benefit-icon-circle {
          transform: scale(1.1) rotate(6deg);
          background: var(--accent-color);
          color: #FFFFFF;
          box-shadow: 0 0 20px rgba(232, 130, 38, 0.5);
        }

        .benefit-title {
          font-size: 1.18rem;
          font-weight: 750;
          color: var(--primary-color);
          margin-bottom: 0.35rem;
        }

        .benefit-desc {
          font-size: 0.92rem;
          line-height: 1.62;
          color: var(--text-muted);
        }

        .courses-hero {
          position: relative;
          width: 100%;
          height: 440px;
          margin-top: 76px;
        }

        @media (max-width: 992px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }

          .courses-hero {
            height: 240px;
            margin-top: 72px;
          }

          .page-header {
            padding-top: 2rem !important;
            text-align: center;
          }
          
          .catalog-main-title {
            font-size: 1.85rem;
          }
          
          .cat-tab-btn {
            font-size: 0.78rem;
            padding: 0.48rem 0.9rem;
          }

          .catalog-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .catalog-controls-right {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default Courses;
