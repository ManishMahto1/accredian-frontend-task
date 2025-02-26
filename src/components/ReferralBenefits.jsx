

function ReferralBenefits() {
  const programs = [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: '7,000', enrolledBonus: '3,000' },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '7,000', enrolledBonus: '3,000' },
    { name: 'Executive Program in Product Management', referrerBonus: '10,000', enrolledBonus: '5,000' },
    { name: 'Executive Program in Product & Project Management', referrerBonus: '10,000', enrolledBonus: '5,000' },
  ];

  return (
    <section className="py-10 bg-[#f5f9ff] ">
      <h2 className="text-4xl text-[#007bff] mb-5">What Are The Referral Benefits?</h2>
      <div className="flex flex-col items-center gap-5 px-5">
        
        <table className="w-[80%] border-collapse border border-[#ddd] mx-auto">
          <thead>
            <tr>
              <th className="p-2.5 bg-[#007bff] text-white border border-[#ddd]">Programs</th>
              <th className="p-2.5 bg-[#007bff] text-white border border-[#ddd]">Referrer Bonus</th>
              <th className="p-2.5 bg-[#007bff] text-white border border-[#ddd]">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index}>
                <td className="p-2.5 border border-[#ddd]">{program.name}</td>
                <td className="p-2.5 border border-[#ddd]">₹{program.referrerBonus}</td>
                <td className="p-2.5 border border-[#ddd]">₹{program.enrolledBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </section>
  );
}

export default ReferralBenefits;