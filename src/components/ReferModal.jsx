import { useState, useEffect } from 'react';
import { X, ChevronLeft } from 'lucide-react';

function ReferModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    friendName: '',
    friendEmail: '',
    friendPhone: '',
    vertical: '',
    userName: '',
    userEmail: '',
    userPhone: '',
  });

  const [errors, setErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const verticals = [
    'Product Management',
    'Data Science',
    'Business Analytics',
    'FinTech',
    'Digital Transformation',
    'Senior Leadership',
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.friendName.trim()) newErrors.friendName = 'Friend\'s name is required';
      if (!/^\S+@\S+\.\S+$/.test(formData.friendEmail)) newErrors.friendEmail = 'Invalid friend\'s email address';
      if (!/^\d{10}$/.test(formData.friendPhone)) newErrors.friendPhone = 'Invalid friend\'s phone number (10 digits required)';
    } else if (currentStep === 2) {
      if (!formData.userName.trim()) newErrors.userName = 'Your name is required';
      if (!/^\S+@\S+\.\S+$/.test(formData.userEmail)) newErrors.userEmail = 'Invalid your email address';
      if (!/^\d{10}$/.test(formData.userPhone)) newErrors.userPhone = 'Invalid your phone number (10 digits required)';
      if (!formData.vertical) newErrors.vertical = 'Please select a vertical';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 2));
      setErrors({}); // Clear errors when moving forward
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({}); // Clear errors when moving back
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep() && currentStep === 2) {
      try {
        const response = await fetch('http://localhost:3001/api/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit referral');
        }

        const data = await response.json();
        console.log('Referral submitted:', data);
        onClose();
      } catch (error) {
        console.error('Error submitting referral:', error);
        setErrors({ submit: 'Failed to submit referral. Please try again.' });
      }
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4 my-5">
      <div className={`bg-white rounded-lg shadow-lg w-full max-w-4xl ${isMobile ? 'h-[90vh] overflow-y-auto' : 'h-[80vh]'} flex flex-col md:flex-row`}>
        {/* Left Image - Hidden on mobile */}
        {!isMobile && (
          <div className="hidden md:block w-full md:w-1/2 bg-blue-500 p-4">
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/refer-modal-bg.svg"
              alt="Refer Your Friend"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6">
            Refer your <span className="text-blue-500">friend!</span>
          </h2>

          <div className="mb-6 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <div
                className="w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: currentStep === 2 ? '#007bff' : '#007bff' }}
              />
              <span>Step {currentStep} of 2</span>
            </div>
            <span className="text-gray-400">Refer now</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-[#007bff] h-2 rounded-full transition-all duration-300"
              style={{ width: currentStep === 1 ? '50%' : '100%' }}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Friend Details */}
            {currentStep === 1 && (
              <>
                <div>
                  <input
                    name="friendName"
                    value={formData.friendName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${errors.friendName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    placeholder="Friend's Name"
                  />
                  {errors.friendName && <p className="text-red-500 text-sm mt-1">{errors.friendName}</p>}
                </div>

                <div>
                  <input
                    name="friendEmail"
                    type="email"
                    value={formData.friendEmail}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${errors.friendEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    placeholder="Friend's Email"
                  />
                  {errors.friendEmail && <p className="text-red-500 text-sm mt-1">{errors.friendEmail}</p>}
                </div>

                <div>
                  <div className="flex">
                    <span className="p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">+91</span>
                    <input
                      name="friendPhone"
                      type="tel"
                      value={formData.friendPhone}
                      onChange={handleInputChange}
                      maxLength="10"
                      className={`w-full p-2 border ${errors.friendPhone ? 'border-red-500' : 'border-gray-300'} rounded-r-lg`}
                      placeholder="Friend's Phone Number"
                    />
                  </div>
                  {errors.friendPhone && <p className="text-red-500 text-sm mt-1">{errors.friendPhone}</p>}
                </div>

                <div>
                  <select
                    name="vertical"
                    value={formData.vertical}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${errors.vertical ? 'border-red-500' : 'border-gray-300'} rounded-lg appearance-none`}
                  >
                    <option value="">Select a Vertical</option>
                    {verticals.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.vertical && <p className="text-red-500 text-sm mt-1">{errors.vertical}</p>}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors mt-6"
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {/* Step 2: Your Details */}
            {currentStep === 2 && (
              <>
                <div>
                  <input
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    placeholder="Your Name"
                  />
                  {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
                </div>

                <div>
                  <input
                    name="userEmail"
                    type="email"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${errors.userEmail ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                    placeholder="Your Email"
                  />
                  {errors.userEmail && <p className="text-red-500 text-sm mt-1">{errors.userEmail}</p>}
                </div>

                <div>
                  <div className="flex">
                    <span className="p-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">+91</span>
                    <input
                      name="userPhone"
                      type="tel"
                      value={formData.userPhone}
                      onChange={handleInputChange}
                      maxLength="10"
                      className={`w-full p-2 border ${errors.userPhone ? 'border-red-500' : 'border-gray-300'} rounded-r-lg`}
                      placeholder="Your Phone Number"
                    />
                  </div>
                  {errors.userPhone && <p className="text-red-500 text-sm mt-1">{errors.userPhone}</p>}
                </div>



                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-1/2 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 bg-blue-500 text-white  rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Refer Now
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReferModal;