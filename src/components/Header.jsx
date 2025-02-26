import '../../public/right-image.png';
function Header({ onReferClick }) {
  return (
    <header className="bg-[#f5f9ff] py-5 ">
      {/* <nav className="flex justify-center items-center px-5 py-4]">
        <div className="flex gap-5  m-0 bg-sky-100 p-3 rounded-3xl">
          <div><a href="#" className="text-[#333] no-underline">Refer</a></div>
          <div><a href="#" className="text-[#333] no-underline">Benefits</a></div>
          <div><a href="#" className="text-[#333] no-underline">FAQs</a></div>
          <div><a href="#" className="text-[#333] no-underline">Support</a></div>
        </div>
      </nav> */}
     
      <div className="flex justify-between items-center bg-blue-50 mt-5 mx-10 rounded-2xl shadow-2xl shadow-gray-400 ">
        {/* left side content */}
      <div className="px-5 py-10 flex flex-col gap-5 text-start ">
        <div><h1 className="text-5xl text-black font-bold mb-0 ">Let's learn & earn</h1></div>
       <div> <p className="text-3xl text-black ">Get a chance to earn <span className='text-blue-500 font-bold'>₹10,000</span> for every friend who enrolls!</p></div>
       <div> <button
          onClick={onReferClick}
          className="bg-[#007bff] text-white px-5 py-2.5 text-base rounded cursor-pointer hover:bg-[#0056b3]"
        >
          Refer Now
        </button></div>
      </div>
      {/* right side div image */}
      <div>
        <img
          src="right-image.png"
          alt="image"
          className="w-full rounded-2xl hidden md:block"
        />
      </div>
      </div>
    </header>
  );
}

export default Header;