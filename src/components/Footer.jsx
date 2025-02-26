import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-5 my-5">
      <div className="flex justify-around flex-wrap gap-5">
        <div className="footer-section">
          <h3 className="text-[#007bff] mb-2.5">accredian</h3>
          <ul className="list-none p-0">
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Senior Leadership</li>
            <li>FinTech</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="text-[#007bff] mb-2.5">Contact Us</h3>
          <p>Email: admissions@accredian.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: 4th Floor, Phase II, Phoneix St, Udyog Vihar, Sector 16, Delhi</p>
        </div>
        <div className="footer-section">
          <h3 className="text-[#007bff] mb-2.5">Accredian</h3>
          <p>Career</p>
          <p>Admission Policy</p>
          <p>Privacy Policy</p>
          <p>Master FAQs</p>
        </div>
      </div>
      <div className="mt-5 pt-2.5 border-t border-[#444]">
        <p>Follow Us: <span className="text-[#007bff]">Facebook Twitter LinkedIn</span></p>
        <p>© 2025 Accredian. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;