import { useState, useRef } from "react";

import FAQ from "./components/FAQ";
import Header from "./components/Header";
import HowItWorks from './components/HowItWorks';
import ReferralBenefits from './components/ReferralBenefits';
import Footer from './components/Footer';
import ReferModal from './components/ReferModal';
import HeaderTop from './components/HeaderTop';

const App = () => {
  const referRef = useRef(null);
  const benefitsRef = useRef(null);
  const faqsRef = useRef(null);
  const supportRef = useRef(null);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

/*   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail) newErrors.referrerEmail = "Referrer email is required";
    if (!formData.refereeName) newErrors.refereeName = "Referee name is required";
    if (!formData.refereeEmail) newErrors.refereeEmail = "Referee email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
      closeModal();
    }
  }; */


  const underline = "relative text-black hover:text-blue-500 after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0";
  
  return (
    <div className="App">
      <HeaderTop />
      {/* Header Navigation */}
      <header className="bg-[#f5f9ff] py-5 mt-28">
        <nav className="flex justify-center items-center px-5 py-4">
          <div className="flex gap-5 m-0 bg-sky-100 p-3 rounded-3xl">
            <div><a href="#" onClick={() => handleScroll(referRef)} className={underline}>Refer</a></div>
            <div><a href="#" onClick={() => handleScroll(benefitsRef)} className={underline}>Benefits</a></div>
            <div><a href="#" onClick={() => handleScroll(faqsRef)} className={underline}>FAQs</a></div>
            <div><a href="#" onClick={() => handleScroll(supportRef)} className={underline}>Support</a></div>
          </div>
        </nav>
      </header>
      <ReferModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Sections */}
      <section ref={referRef}>
        <Header onReferClick={openModal} />
      </section>
      <section ref={benefitsRef} >
        <HowItWorks onReferClick={openModal} />
      </section>
      <section ref={faqsRef}>
        <ReferralBenefits />
        <FAQ />
      </section>
      <section ref={supportRef} >
        <Footer />
      </section>
    </div>
  );
};

export default App;