// // App.jsx
// import { useState } from 'react';
// import { Menu, UsersIcon } from 'lucide-react';
// import ScrollAnimation from './animation/ScrollAnimation';
// import { FaCalendarAlt, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// // import Herosection from './components/Herosection';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   location: string;
//   phone: string;
//   countryCode: string;
//   countryName: string;
//   email: string;
//   status: string;
//   agreeTerms: boolean;
// }

// // interface TimeLeft {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // }

// const App = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     location: '',
//     phone: '',
//     countryCode: '',
//     countryName: '',
//     email: '',
//     status: '',
//     agreeTerms: false,
//   });

//   const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type } = e.target;
    
//     if (type === 'checkbox') {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData(prev => ({ ...prev, [name]: checked }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const handlePhoneChange = (value: string, country: any) => {
//     setFormData(prev => ({ 
//       ...prev, 
//       phone: value,
//       countryCode: country?.dialCode || '',
//       countryName: country?.name || ''
//     }));
//   };

//   const handleRegisterSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const payload = {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     location: formData.location,
//     phoneNumber: `+${formData.phone}`,
//     countryCode: formData.countryCode,
//     countryName: formData.countryName,
//     email: formData.email,
//     status: formData.status
//   };

//   try {
//     await fetch(
//       "https://script.google.com/macros/s/AKfycbyNImHddQVfANBd414_gsGSZTNO3H5THhWyN3XtQjWiIgbQfnfvZ-99tOMTUuCtEgiUaQ/exec",
//       {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       }
//     );

//     alert(
//       "Your form is submitted successfully.\nWe will get in touch within 24 hours.\nThank you for contacting us."
//     );

//     // ✅ RESET FORM AFTER OK CLICK
//     setFormData({
//       firstName: '',
//       lastName: '',
//       location: '',
//       phone: '',
//       countryCode: '',
//       countryName: '',
//       email: '',
//       status: '',
//       agreeTerms: false,
//     });

//   } catch (error) {
//     alert("Something went wrong. Please try again.");
//   }
// };

//   const statusOptions = [
//     { value: '', label: 'Select your career stage' },
//     { value: 'Planning to study in UK', label: '🎯 Planning to study in UK' },
//     { value: 'Graduate Student', label: '🎓 Graduate Student' },
//     { value: 'Offer Holder', label: '📜 Offer Holder' },
//     { value: 'Exploring UK Lifestyle', label: '🌍 Exploring UK Lifestyle' },
//     { value: 'Working Professional', label: '💼 Working Professional' },
//     { value: 'Other', label: '🤔 Other' }
//   ];

//   //  const audienceList = [
//   //   {
//   //     icon: <GraduationCap className="text-[#243b7a] text-3xl" />,
//   //     title: "Aspiring Indian Students",
//   //     description: "Dreaming of studying in the UK but unsure where to start? We'll guide you through every step."
//   //   },
//   //   {
//   //     icon: <University className="text-[#243b7a] text-3xl" />,
//   //     title: "UK Offer Holders",
//   //     description: "Already have an offer? Learn how to prepare for your move, visa process, and university life."
//   //   },
//   //   {
//   //     icon: <FaPassport className="text-[#243b7a] text-3xl" />,
//   //     title: "PSW / Graduate Visa Seekers",
//   //     description: "Understand how to leverage the Post Study Work visa to build your career in the UK."
//   //   },
//   //   {
//   //     icon: <Briefcase className="text-[#243b7a] text-3xl" />,
//   //     title: "Career-Focused Graduates",
//   //     description: "Want to work while studying? Get insights on part-time jobs, internships, and CV building."
//   //   },
//   //   {
//   //     icon: <Compass className="text-[#243b7a] text-3xl" />,
//   //     title: "Honest Career Seekers",
//   //     description: "If you're genuinely looking for a better future abroad, this session is for you."
//   //   },
//   //   {
//   //     icon: <FaGlobeAsia className="text-[#243b7a] text-3xl" />,
//   //     title: "Planning to Study Abroad",
//   //     description: "Even if you're just exploring options, join us to understand what the UK truly offers."
//   //   }
//   // ];

//   // const learnItems = [
//   //   {
//   //     icon: <FaUniversity className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "UK University Selection",
//   //     description: "How to choose the right university and course based on your profile and career goals."
//   //   },
//   //   {
//   //     icon: <FaPassport className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Visa Process Simplified",
//   //     description: "Step-by-step guidance on student visa applications, documentation, and interview preparation."
//   //   },
//   //   {
//   //     icon: <FaMoneyBillWave className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Cost of Living & Budgeting",
//   //     description: "Realistic breakdown of monthly expenses, tuition fees, and smart money management tips."
//   //   },
//   //   {
//   //     icon: <FaBriefcase className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Part-Time Work Opportunities",
//   //     description: "Understanding work rights, finding part-time jobs, and balancing work with studies."
//   //   },
//   //   {
//   //     icon: <FaFileAlt className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "CV & Interview Preparation",
//   //     description: "How to build a UK-style CV and ace interviews for internships and graduate roles."
//   //   },
//   //   {
//   //     icon: <FaHome className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Accommodation Guide",
//   //     description: "Options for student housing, halls of residence, private rentals, and tips to find safe stays."
//   //   },
//   //   {
//   //     icon: <FaPlane className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Settling in the UK",
//   //     description: "Bank accounts, SIM cards, healthcare (NHS), and cultural tips for a smooth transition."
//   //   },
//   //   {
//   //     icon: <FaComments className="text-[#243b7a] text-2xl md:text-3xl" />,
//   //     title: "Live Q&A with Experts",
//   //     description: "Get all your doubts answered directly by professionals who've helped hundreds of students."
//   //   }
//   // ];

//   // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   // const [showSuccess, setShowSuccess] = useState<boolean>(false);
//   // const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   
//   // Countdown Timer
//   // useEffect(() => {
//   //   const targetDate = new Date('2026-03-12T18:00:00').getTime();
    
//   //   const interval = setInterval(() => {
//   //     const now = new Date().getTime();
//   //     const difference = targetDate - now;

//   //     if (difference > 0) {
//   //       setTimeLeft({
//   //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//   //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//   //         minutes: Math.floor((difference / 1000 / 60) % 60),
//   //         seconds: Math.floor((difference / 1000) % 60)
//   //       });
//   //     }
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value
//   //   });
//   // };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
    
//   //   // Simulate API call
//   //   setTimeout(() => {
//   //     setIsSubmitting(false);
//   //     setShowSuccess(true);
//   //     // Redirect to WhatsApp after 2 seconds
//   //     setTimeout(() => {
//   //       window.open('https://wa.me/1234567890?text=Thank%20you%20for%20registering%20for%20UK%20Job%20Market%20Insights%202026%21%20We%27ll%20send%20you%20the%20joining%20link%20soon.', '_blank');
//   //     }, 2000);
//   //   }, 1500);
//   // };

//   // const scrollToSection = (id: string) => {
//   //   const element = document.getElementById(id);
//   //   if (element) {
//   //     const yOffset = -80; // Adjust for fixed header
//   //     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//   //     window.scrollTo({ top: y, behavior: 'smooth' });
//   //   }
//   //   setIsMenuOpen(false);
//   // };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
//       {/* Navigation */}
// <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
//   <div className="container mx-auto px-2 py-1 flex justify-between items-center">
//     <div className="flex items-center space-x-3">
//       {/* Logo Image */}
//       <img 
//         src="/da-logo2.png" 
//         alt="DA Logo" 
//         className="w-76 h-20 object-contain  cursor-pointer"
//       />
//       {/* Company Name */}
//       {/* <span className="font-bold text-xl text-gray-800">DataArtisans</span> */}
//     </div>
    
//     {/* Desktop Menu */}
//     <div className="hidden md:flex space-x-6">
//       {/* <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</button>
//       <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 cursor-pointer">Your Path</button>
//       <button onClick={() => scrollToSection('speakers')} className="text-gray-600 hover:text-blue-600 cursor-pointer">Insights</button> */}
//       {/* <button onClick={() => scrollToSection('register')} className="text-gray-600 hover:text-blue-600 cursor-pointer">Register</button> */}
//     </div>

//     {/* Mobile Menu Button */}
//     <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//       <Menu className="w-6 h-6" />
//     </button>

//     {/* Mobile Menu */}
//     {/* {isMenuOpen && (
//       <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
//         <div className="flex flex-col space-y-3 px-4">
//           <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-blue-600">Home</button>
//           <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-blue-600">Your Path</button>
//           <button onClick={() => scrollToSection('speakers')} className="text-left py-2 hover:text-blue-600">Insights</button>
//           <button onClick={() => scrollToSection('register')} className="text-left py-2 hover:text-blue-600">Register</button>
//         </div>
//       </div>
//     )} */}
//   </div>
// </nav>

//      {/* Hero Section */}
//      {/* <Herosection/> */}
//      {/* <ScrollAnimation delay={300}>
//     <section id="home"
//   className="relative w-full md:h-[560px] h-auto  flex flex-col md:flex-row items-center justify-between px-6 md:px-12 overflow-hidden mt-20 md:mt-8"
//   style={{
//     backgroundImage: 'url("/Hero BG.png")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   }}
// > */}
//       {/* --- Left Content (Text) --- */}
//       {/* <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2 z-10 order-first"> */}
//         {/* Tagline with Image */}
//         {/* <div className="flex items-center gap-2 justify-center md:justify-start mt-6 md:mt-0">
//           <ScrollAnimation delay={600}><img
//             src="/waving.png"
//             alt="Waving Hand"
//             className="w-5 h-5 md:w-7 md:h-7 animate-bounce"
//           /></ScrollAnimation>
//           <ScrollAnimation delay={900}>
//           <h6 className="text-sm md:text-base text-[#fdba02] font-medium tracking-wide uppercase">
//             We're Here to Help You Grow
//           </h6></ScrollAnimation>
//         </div> */}

//         {/* Title */}
//         {/* <ScrollAnimation delay={1200}>
//         <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight leading-tight font-sans">
//   Turn Your <span className="text-[#243b7a]">UK Dream</span> <br/>
//   Into <span className="text-[#243b7a]">Reality</span>
// </h1></ScrollAnimation>

// <ScrollAnimation delay={1500}>
// <p className="text-xs md:text-base opacity-90 leading-relaxed font-sans">
//   Confused about where to start? From choosing the right university to understanding <span className="text-[#243b7a] font-semibold">part-time work</span> and <span className="text-[#243b7a] font-semibold">living costs</span>, our seminar gives you a complete roadmap. Get personalized guidance to study, work, and settle in the UK with confidence.
// </p></ScrollAnimation> */}

//         {/* Date, Time, and Slots Info */}
//         {/* <ScrollAnimation delay={1650}>
//         <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start text-sm md:text-base">
//           <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
//             <span className="text-[#243b7a] font-semibold">📅</span>
//             <span className="text-gray-700">11th April 2026</span>
//           </div>
//           <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
//             <span className="text-[#243b7a] font-semibold">⏰</span>
//             <span className="text-gray-700">4:30 PM IST</span>
//           </div>
//           <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full">
//             <UsersIcon className="text-orange-500 font-semibold"/>
//             <span className="text-gray-700 font-medium">Limited Seats</span>
//           </div>
//         </div>
//         </ScrollAnimation> */}

//         {/* Register Button */}
//         {/* <ScrollAnimation delay={1600}>
//         <button 
//           onClick={() => scrollToSection('register')}
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//         >
//           Register Now – Free Seminar
//         </button></ScrollAnimation> */}

//         {/* --- Right Hero Image moved inside left content on mobile --- */}
//         {/* <div className="w-full flex justify-center md:hidden mt-2">
//           <ScrollAnimation delay={1000}><img
//             src="/landing-logo.png"
//             alt="Digital innovation at Infovance"
//             className="w-full sm:w-2/3 max-w-md"
//           /></ScrollAnimation>
//         </div>
//       </div> */}

//       {/* --- Right Hero Image (Hidden on mobile, visible on desktop) --- */}
//       {/* <div className="hidden md:flex md:w-1/2 justify-center md:order-last md:mt-46">
//         <ScrollAnimation delay={1000}><img
//           src="/landing-logo.png"
//           alt="Digital innovation at Infovance"
//           className="w-full sm:w-2/3 md:w-full max-w-md"
//         /></ScrollAnimation>
//       </div> */}

//       {/* --- Sloped Bottom Shape --- */}
//       {/* <div className="hidden lg:block absolute bottom-0 left-0 w-full h-40 bg-white [clip-path:polygon(0%_40%,100%_100%,100%_100%,0_100%)]"></div>
//       </section></ScrollAnimation> */}

//       {/* Register form - On mobile/tablet, form appears first */}
//       <section id="register" className="w-full py-5 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        
//         {/* 80% width container */}
//         <div className="w-full md:w-4/5 mx-auto">
          
//           {/* Single container with border radius */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
//             {/* Flex layout for left and right - on mobile, order changes */}
//             <div className="flex flex-col md:flex-row">
              
//               {/* Right Side - Form - On mobile/tablet, this appears first */}
//               <div className="order-first md:order-last md:w-[65%]">
//                 <ScrollAnimation delay={500}>
//                   <div className="h-full p-6 md:p-8">
                    
//                     {/* Form Title */}
//                     <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//                       Secure Your Seat
//                     </h3>
//                     <p className="text-gray-500 text-sm mb-6">
//                       Fill in your details below to register for the free seminar
//                     </p>
                    
//                     {/* Registration Form */}
//                      <form onSubmit={handleRegisterSubmit} className="space-y-4">
//               {/* First Name and Last Name Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleRegisterChange}
//                     required
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm cursor-pointer"
//                     placeholder="Enter your First Name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name 
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleRegisterChange}
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm cursor-pointer"
//                     placeholder="Enter your Last Name"
//                   />
//                 </div>
//               </div>

//               {/* Email Address */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleRegisterChange}
//                   required
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm cursor-pointer"
//                   placeholder="Enter Your Email Address"
//                 />
//               </div>

//               {/* Location (Free Text Input) */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Location *
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleRegisterChange}
//                   required
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors placeholder:text-sm cursor-pointer"
//                   placeholder="e.g., Mumbai, India"
//                 />
//               </div>
//               </div>

//               {/* Phone with react-phone-input-2 */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <div className="react-phone-input-custom">
//                   <style>{`
//                     .react-tel-input .form-control {
//                       position: relative;
//                     }
                    
//                     .react-tel-input .form-control::before {
//                       content: "";
//                       position: absolute;
//                       top: 50%;
//                       left: 50px;
//                       transform: translateY(-50%);
//                       height: 24px;
//                       width: 1px;
//                       background-color: #d1d5db;
//                       z-index: 1;
//                       pointer-events: none;
//                     }
                    
//                     .react-tel-input .form-control {
//                       padding-left: 60px !important;
//                     }
                    
//                     .react-tel-input .flag-dropdown {
//                       border-right: 1px solid #d1d5db;
//                       background: white;
//                     }
                    
//                     .react-tel-input .selected-flag {
//                       width: auto !important;
//                       padding-right: 8px;
//                     }
                    
//                     .react-tel-input .country-list {
//                       z-index: 9999;
//                     }
                    
//                     .react-tel-input .selected-flag .country-name {
//                       margin-right: 4px;
//                     }
//                   `}</style>
//                   <PhoneInput
//                     country={'in'}
//                     value={formData.phone}
//                     onChange={handlePhoneChange}
//                     inputProps={{
//                       name: 'phone',
//                       required: true,
//                       autoFocus: false
//                     }}
//                     inputStyle={{
//                       width: '100%',
//                       height: '42px',
//                       paddingLeft: '60px',
//                       borderRadius: '0.5rem',
//                       border: '1px solid #d1d5db',
//                       fontSize: '0.875rem',
//                       transition: 'all 0.2s',
//                       position: 'relative'
//                     }}
//                     buttonStyle={{
//                       border: '1px solid #d1d5db',
//                       borderRight: '1px solid #d1d5db',
//                       background: 'white',
//                       borderTopLeftRadius: '0.5rem',
//                       borderBottomLeftRadius: '0.5rem',
//                       padding: '4px 8px',
//                       width: '46px'
//                     }}
//                     dropdownStyle={{
//                       borderRadius: '0.5rem',
//                       marginTop: '4px',
//                       fontSize: '0.875rem',
//                       zIndex: 9999
//                     }}
//                     containerStyle={{
//                       width: '100%'
//                     }}
//                     placeholder="+1 (555) 123-4567"
//                     searchPlaceholder="Search country..."
//                     enableSearch={true}
//                     disableSearchIcon={true}
//                     searchStyle={{
//                       padding: '8px',
//                       margin: '4px',
//                       borderRadius: '0.375rem',
//                       border: '1px solid #d1d5db',
//                       fontSize: '0.875rem'
//                     }}
//                     countryCodeEditable={false}
//                   />
//                 </div>
//               </div>

//               {/* Current Status Dropdown */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Your Career Stage *
//                 </label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleRegisterChange}
//                   required
//                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white cursor-pointer"
//                 >
//                   {statusOptions.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               </div>

//               {/* Terms Checkbox */}
//               <div className="flex items-start space-x-3">
//                 <input
//                   type="checkbox"
//                   id="agreeTerms"
//                   name="agreeTerms"
//                   checked={formData.agreeTerms}
//                   onChange={handleRegisterChange}
//                   className="mt-1 cursor-pointer"
//                 />
//                 <label htmlFor="agreeTerms" className="text-sm text-gray-600 cursor-pointer">
//                   I agree to the terms and conditions and acknowledge that my data will be processed in accordance with the privacy policy.
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full text-lg font-semibold py-3 px-6 rounded-4xl border border-2 border-purple-800 md:border-[#FF0000] bg-white text-black hover:bg-purple-800 active:bg-purple-800 active:text-white active:-translate-y-1 active:scale-105 md:hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer">
//                 Submit Query
//               </button>
//             </form>
//                   </div>
//                 </ScrollAnimation>
//               </div>
              
//               {/* Vertical Divider - Horizontal line on mobile, vertical on desktop */}
//               <div className="hidden md:block w-px bg-gray-200"></div>
//               <div className="block md:hidden w-full h-px bg-gray-200 my-4"></div>
              
//               {/* Left Side - Details - On mobile/tablet, this appears second */}
//               <div className="order-last md:order-first md:w-[35%] bg-gradient-to-br from-[#FFF7F0] via-[#FFE5EF] to-[#E8F1FF]">
//                 <ScrollAnimation delay={300}>
//                   <div className="h-full p-6 md:p-8 flex flex-col">
                    
//                     {/* Top Title Section */}
//                     <div className="mb-2">
//                       <h3 className="text-2xl md:text-3xl font-bold text-[#243b7a] mb-2">
//                         Ready for the UK?
//                       </h3>
//                       <h4 className="text-xl md:text-xl font-semibold text-gray-800 mb-2">
//                         Your Journey Starts Now
//                       </h4>
//                       <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
//                         Take the first step toward your UK dream. Our free seminar covers everything from university applications to settling down - so you can focus on what matters: your future.</p>
//                     </div>
                    
//                     {/* Bottom Contact Information */}
//                     <div className="backdrop-blur-sm mt-">
//                       <div className="grid grid-cols-1 gap-">
//                         {/* 1*1 - Date */}
//                         <div className="flex items-start space-x-3 p-2">
//                           <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
//                             <FaCalendarAlt className="text-blue-600 text-lg" />
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-bold text-sm text-gray-700">Date</p>
//                             <p className="text-gray-600 font-medium text-xs break-words">11th April 2026</p>
//                           </div>
//                         </div>

//                         {/* 1*2 - Time */}
//                         <div className="flex items-start space-x-3 p-2">
//                           <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
//                             <FaClock className="text-yellow-600 text-lg" />
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-bold text-xs text-gray-700">Time</p>
//                             <p className="text-gray-600 font-semibold text-xs break-words">4:30 PM IST</p>
//                           </div>
//                         </div>

//                         {/* 2*2 - Limited Seats */}
//                         <div className="flex items-start space-x-3 p-2">
//                           <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
//                             <UsersIcon className="text-orange-600 text-lg"/>
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-bold text-xs text-gray-700 -ml-1">Availability</p>
//                             <p className="text-orange-600 font-semibold text-xs break-words -ml-1">Limited Seats</p>
//                           </div>
//                         </div>

//                         {/* 3*1 - WhatsApp/Call */}
//                         <div className="flex items-start space-x-3 p-2">
//                           <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
//                             <FaPhone className="text-purple-600 text-lg" />
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-bold text-xs text-gray-700">WhatsApp/Call</p>
//                             <p className="text-gray-600 font-medium text-xs break-words">+91 9888928333</p>
//                           </div>
//                         </div>

//                         {/* 3*2 - Email */}
//                         <div className="flex items-start space-x-3 p-2">
//                           <div className="bg-pink-100 p-2 rounded-full flex-shrink-0">
//                             <FaEnvelope className="text-pink-600 text-lg" />
//                           </div>
//                           <div className="min-w-0 flex-1">
//                             <p className="font-bold text-xs text-gray-700">Email</p>
//                             <p className="text-gray-600 font-medium text-xs break-words">data.artisans23@gmail.com</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </ScrollAnimation>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
    
// {/* who this seminar is perfect for */}
//      {/* <section id="about" className="w-full py-5 bg-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8"> */}
        
//         {/* Section Header */}
//         {/* <ScrollAnimation delay={300}>
//           <div className="text-center mb-">
//             <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-sans mb-2">
//               Who This Seminar <span className="text-[#243b7a]">Is Perfect For</span>
//             </h2>
//             <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt- leading-relaxed">
//               Whether you're just exploring or already on your way, this session is tailored to help you make informed decisions about studying and living in the UK.
//             </p>
//           </div>
//         </ScrollAnimation> */}

//         {/* Audience Cards Grid */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-">
//           {audienceList.map((item, index) => (
//             <ScrollAnimation key={index} delay={400 + index * 100}>
//               <div className="p-5  hover:shadow-2xl transition-all duration-300  hover:border-[#243b7a] group h-full flex flex-col"> */}
//                 {/* Icon beside title and paragraph */}
//                 {/* <div className="flex gap-4 flex-1"> */}
//                   {/* Icon on the left */}
//                   {/* <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     {item.icon}
//                   </div> */}
                  
//                   {/* Title and paragraph on the right */}
//                   {/* <div className="flex-1">
//                     <h3 className="text-base md:text-xl font-bold text-gray-800 font-sans mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimation>
//           ))}
//         </div> */}

//         {/* Bottom CTA / Note */}
//         {/* <ScrollAnimation delay={1000}>
//           <div className="text-center mt-12 md:mt-16">
//             <p className="text-gray-500 italic text-sm md:text-base">
//               ⚡ No matter where you are in your journey — if the UK is on your mind, this session is for you.
//             </p>
//           </div>
//         </ScrollAnimation>
//       </div>
//     </section> */}

// {/* What you'll learn */}
//     {/* <section id="speakers" className="w-full py-5 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8"> */}
        
//         {/* Section Header - Left Title with Right Paragraph */}
//         {/* <ScrollAnimation delay={300}>
//           <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-16 mb-4 md:mb-6"> */}
//             {/* Left side - Title */}
//             {/* <div className="md:w-2/3">
//               <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight font-sans text-white">
//                 What <span className="text-[#fdba02]">You'll Learn</span>
//               </h2>
//             </div> */}
            
//             {/* Right side - Paragraph */}
//             {/* <div className="md:w-3/3">
//               <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 From applications to arrival  we cover everything you need to know about studying and living in the UK. Our comprehensive sessions are designed to give you clarity and confidence at every step.
//               </p>
//             </div>
//           </div>
//         </ScrollAnimation> */}

//         {/* Learning Grid - 2 columns with equal height cards */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//           {learnItems.map((item, index) => (
//             <ScrollAnimation key={index} delay={400 + index * 100}>
//               <div className=" p-2 rounded-xl hover:bg-gray-800 transition-all duration-300  hover:border-[#fdba02]/30 group h-full"> */}
                
//                 {/* Icon beside title and paragraph - consistent layout */}
//                 {/* <div className="flex gap-4">
//                   {/* Icon on the left - golden color */}
//                   {/* <div className="flex-shrink-0">
//                     <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300">
//                       <div className="text-[#fdba02] text-xl">
//                         {item.icon}
//                       </div>
//                     </div>
//                   </div> */} 
                  
//                   {/* Title and paragraph on the right - consistent spacing */}
//                   {/* <div className="flex-1">
//                     <h3 className="text-base md:text-lg font-semibold text-white font-sans mb-1.5">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </ScrollAnimation>
//           ))}
//         </div> */}

//         {/* Bottom Note */}
//         {/* <ScrollAnimation delay={1200}>
//           <div className="text-center mt-12 md:mt-16">
//             <p className="text-gray-400 text-sm md:text-base">
//               🎯 <span className="font-semibold text-[#fdba02]">Bonus:</span> All attendees get a free UK preparation checklist!
//             </p>
//           </div>
//         </ScrollAnimation> */}
//       {/* </div>
//     </section> */}

//       {/* Footer */}
// <footer className="bg-gray-900 text-white py-5">
//   <div className="container mx-auto px-4 md:px-6">
    
//     {/* Main Footer Content - Logo and Inspiring Paragraph */}
//     <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-">
      
//       {/* Logo Section */}
//       <div className="flex flex-col items-center md:items-start">
//         <img 
//           src="/da-logo.png" 
//           alt="DataArtisans Logo" 
//           className="w-40 md:w-48 h-auto object-contain md:ml-"
//         />
//         {/* <div className="w-20 h-1 bg-[#fdba02] rounded-full"></div> */}
//       </div>
      
//       {/* Inspiring Paragraph Section */}
//       <div className="max-w-3xl text-center md:text-right">
//         <p className="text-gray-300 text-sm md:text-base leading-relaxed italic md:mt-8">
//           "Every journey begins with a single step, and your UK dream is closer than you think. 
//           <span className="text-[#fdba02] font-semibold"> We don't just guide you — we walk with you</span>, 
//           turning aspirations into achievements, one student at a time. Your future starts here."
//         </p>
//         {/* <div className="flex justify-center md:justify-end mt-4">
//           <span className="text-[#fdba02] text-2xl">✦</span>
//           <span className="text-[#fdba02] text-2xl mx-2">✦</span>
//           <span className="text-[#fdba02] text-2xl">✦</span>
//         </div> */}
//       </div>
//     </div>
    
//     {/* Bottom Bar with Copyright */}
//     {/* <div className="border-t border-gray-800 pt-8 text-center">
//       <p className="text-gray-400 text-sm">
//         © {new Date().getFullYear()} DataArtisans. All rights reserved. 
//         <span className="block md:inline md:ml-2 text-gray-500">
//           Crafted with ❤️ for future UK students
//         </span>
//       </p>
//     </div> */}
//   </div>
// </footer>
//     </div>
//   );
// };

// export default App;


// App.jsx
import { useState } from 'react';
import { UsersIcon, GraduationCap, Building2, Calendar, Phone, Mail, Instagram } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BsWhatsapp } from 'react-icons/bs';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  countryName: string;
  yearOfPassing: string;
  location: string;
  university: string;
  careerStage: string;
  agreeTerms: boolean;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '',
    countryName: '',
    yearOfPassing: '',
    location: '',
    university: '',
    careerStage: '',
    agreeTerms: false,
  });

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (value: string, country: any) => {
    setFormData(prev => ({ 
      ...prev, 
      phone: value,
      countryCode: country?.dialCode || '',
      countryName: country?.name || ''
    }));
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Format phone number to remove + and add space between country code and number
  let formattedPhoneNumber = `+${formData.phone}`;
  // let countryCodeForSheet = formData.countryCode;
  
  // Format phone number to store as "91 9876543210" format
  let phoneForSheet = "";
  if (formData.phone) {
    const phoneStr = formData.phone.replace('+', '');
    if (formData.countryCode) {
      const restOfNumber = phoneStr.substring(formData.countryCode.length);
      phoneForSheet = `${formData.countryCode} ${restOfNumber}`;
    } else {
      phoneForSheet = phoneStr;
    }
  }

  const payload = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: formattedPhoneNumber,
    countryCode: formData.countryCode,
    countryName: formData.countryName,
    yearOfPassing: formData.yearOfPassing,
    location: formData.location,
    university: formData.university,
    careerStage: formData.careerStage,
    // Add formatted phone for sheet storage
    formattedPhoneForSheet: phoneForSheet
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwuDtKBUquqfUxq8cXCUxcP_qxi4UFrCaZY_uoHg-Aw3gKzL3Uks-JexdLIg5zKyx9Xhg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    alert(
      "Your form is submitted successfully.\nWe will get in touch within 24 hours.\nThank you for contacting us."
    );

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '',
      countryName: '',
      yearOfPassing: '',
      location: '',
      university: '',
      careerStage: '',
      agreeTerms: false,
    });

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};

  const careerStageOptions = [
    { value: '', label: 'Select your career stage' },
    { value: 'Planning to study in UK', label: '🎯 Planning to study in UK' },
    { value: 'Graduate Student', label: '🎓 Graduate Student' },
    { value: 'Offer Holder', label: '📜 Offer Holder' },
    { value: 'Exploring UK Lifestyle', label: '🌍 Exploring UK Lifestyle' },
    { value: 'Working Professional', label: '💼 Working Professional' },
    { value: 'Other', label: '🤔 Other' }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Header - Logo on left, Contact on right */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/da-logo2.png" 
                alt="DA Logo" 
                className="w-80 h-20 object-contain cursor-pointer"
              />
            </div>
            
            {/* Desktop Contact Details */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#243b7a]" />
                <a href="tel:+919888928333" className="text-sm text-gray-600 hover:text-[#243b7a] transition">
                  +91 98889 28333
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#243b7a]" />
                <a href="mailto:data.artisans23@gmail.com" className="text-sm text-gray-600 hover:text-[#243b7a] transition">
                  data.artisans23@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-1">
  <a 
    href="https://wa.me/919888928333" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center w-8 h-8 bg-[#25D366] rounded-full hover:scale-110 transition-transform"
  >
    <BsWhatsapp className="w-4 h-4 text-white" />
  </a>
  <a 
    href="https://wa.me/919888928333" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sm text-gray-600 hover:text-[#25D366] transition"
  >
    {/* WhatsApp */}
  </a>
</div>
              <a 
                href="https://www.instagram.com/data_artisans/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FD1D1D] rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Header - Contact details above logo */}
          <div className="md:hidden">
            <div className="flex justify-center items-center gap-4 py-1 border-b border-gray-100">
              <a href="tel:+919888928333" className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#243b7a]" />
                <span className="text-xs text-gray-600">Call</span>
              </a>
              <a href="mailto:data.artisans23@gmail.com" className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#243b7a]" />
                <span className="text-xs text-gray-600">Mail</span>
              </a>
              <a 
  href="https://wa.me/919888928333" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center justify-center w-6 h-6 bg-[#25D366] rounded-full hover:scale-110 transition-transform"
>
  <BsWhatsapp className="w-3 h-3 text-white" />
</a>
              <a 
                href="https://www.instagram.com/data_artisans/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FD1D1D] rounded-full"
              >
                <Instagram className="w-3 h-3 text-white" />
              </a>
            </div>
            <div className="flex justify-center py-1">
              <img 
                src="/da-logo2.png" 
                alt="DA Logo" 
                className="w-52 h-12 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background and Form */}
      <section className="relative w-full min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            poster="/hero-poster.jpg"
          >
            <source src="/uk-bgvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 z-1"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-5">
          <div className="flex flex-col lg:flex-row gap-12 items-center mt-20">
            
            {/* Left Side - Content */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
                Turn Your <span className="text-[#fdba02]">UK Dream</span> <br />
                Into <span className="text-[#fdba02]">Reality</span>
              </h1>
              
              <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed">
                Join our exclusive seminar designed for Indian graduates who want to study and build a career in the UK. Get expert guidance on university selection, visa process, accommodation, and job opportunities.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-200">
                  <GraduationCap className="w-5 h-5 text-[#fdba02]" />
                  <span> Expert guidance on UK university admissions</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Building2 className="w-5 h-5 text-[#fdba02]" />
                  <span> Accommodation & visa assistance</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <UsersIcon className="w-5 h-5 text-[#fdba02]" />
                  <span> Part-time work & job placement support</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Calendar className="w-5 h-5 text-[#fdba02]" />
                  <span> IT training for masters graduates</span>
                </div>
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Register for Free Seminar
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in your details to secure your seat
                </p>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className='text-red-600'>*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleRegisterChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Enter your First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleRegisterChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Enter your Last Name"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your Email Address"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className='text-red-600'>*</span>
                    </label>
                    <div className="react-phone-input-custom">
                      <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                          name: 'phone',
                          required: true
                        }}
                        inputStyle={{
                          width: '100%',
                          height: '42px',
                          borderRadius: '0.5rem',
                          border: '1px solid #d1d5db',
                          fontSize: '0.875rem'
                        }}
                        buttonStyle={{
                          border: '1px solid #d1d5db',
                          background: 'white',
                          borderTopLeftRadius: '0.5rem',
                          borderBottomLeftRadius: '0.5rem'
                        }}
                        containerStyle={{
                          width: '100%'
                        }}
                        placeholder="Enter phone number"
                        enableSearch={true}
                      />
                    </div>
                  </div>
                  </div>

                  {/* Year of Passing (Text Input) and Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Year of Passing <span className='text-red-600'>*</span>
                      </label>
                      <input
                        type="text"
                        name="yearOfPassing"
                        value={formData.yearOfPassing}
                        onChange={handleRegisterChange}
                        required
                        placeholder="e.g., 2024"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location 
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleRegisterChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="e.g., Mumbai, India"
                      />
                    </div>
                  </div>

                  {/* University Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      University / College Name 
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleRegisterChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your University/College name"
                    />
                  </div>

                  {/* Career Stage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Career Stage <span className='text-red-600'>*</span>
                    </label>
                    <select
                      name="careerStage"
                      value={formData.careerStage}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors bg-white"
                    >
                      {careerStageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleRegisterChange}
                      className="mt-1 cursor-pointer"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-gray-600 cursor-pointer">
                      I agree to the terms and conditions and acknowledge that my data will be processed in accordance with the privacy policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#fdba02] hover:bg-[#e5a902] text-[#243b7a] font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Register Now – Free Seminar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/da-logo.png" 
                alt="DataArtisans Logo" 
                className="w-40 md:w-48 h-auto object-contain"
              />
            </div>
            
            <div className="max-w-3xl text-center md:text-right">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                "Every journey begins with a single step, and your UK dream is closer than you think. 
                <span className="text-[#fdba02] font-semibold"> We don't just guide you — we walk with you</span>, 
                turning aspirations into achievements, one student at a time. Your future starts here."
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;