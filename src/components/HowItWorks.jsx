
import { FaUserPlus, FaCheck, FaMoneyBillWave } from 'react-icons/fa';

function HowItWorks({ onReferClick }) {
  const steps = [
    { icon: <FaUserPlus />, title: 'Submit details via our website', desc: 'Enter your information to get started.' },
    { icon: <FaCheck />, title: 'Earn rewards on your referral', desc: 'Receive rewards when your referral enrolls.' },
    { icon: <FaMoneyBillWave />, title: 'Redeem after 30 days', desc: 'Claim your rewards after 30 days of enrollment.' },
  ];

  return (
    <section className="bg-[#f5f9ff] py-10 my-5">
      <h2 className="text-4xl text-[#007bff] mb-5">How Do I Refer?</h2>
      <div className="flex justify-around flex-wrap gap-5 px-5">
        {steps.map((step, index) => (
          <div key={index} className="w-[30%] min-w-[200px] bg-white p-5 rounded shadow-md">
            <div className="text-3xl text-[#007bff] mb-2.5">{step.icon}</div>
            <h3 className="text-lg text-[#333] mb-2">{step.title}</h3>
            <p className="text-[#666]">{step.desc}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onReferClick}
        className="bg-[#007bff] text-white px-5 py-2.5 text-base rounded cursor-pointer hover:bg-[#0056b3] mt-5"
      >
        Refer Now
      </button>
    </section>
  );
}

export default HowItWorks;