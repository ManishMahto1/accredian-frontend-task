import  { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'Do I need prior Product Management and Project Management experience to enroll in the program?', answer: 'No prior experience is required. All topics will be covered from basics, ensuring you gain the necessary skills.' },
    { question: 'What is the minimum system configuration required?', answer: 'A stable internet connection and a laptop/desktop with at least 8GB RAM and 256GB storage are recommended.' },
  ];

  return (
    <section className=" bg-[#f5f9ff]">
      <h2 className="text-2xl text-[#007bff] mb-5">Frequently Asked Questions</h2>
      <div className="max-w-[600px] mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2.5">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full p-2.5 bg-white border-none text-left cursor-pointer flex justify-between items-center rounded"
            >
              <span className="text-[#333]">{faq.question}</span>
              <span className="text-[#007bff]">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="p-2.5 bg-white rounded">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-[#007bff] text-white p-5 mt-5 rounded">
        <h3 className="text-xl mb-2.5">Want to delve deeper into the program?</h3>
        <p className="mb-2.5">Share your details to receive insights from our program team</p>
        <button className="bg-white text-blue-600 px-5 py-2.5 rounded cursor-pointer hover:bg-gray-200">
          Get in touch
        </button>
      </div>
    </section>
  );
}

export default FAQ;