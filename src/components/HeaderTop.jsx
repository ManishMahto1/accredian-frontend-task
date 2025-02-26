import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

function HeaderTop() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 ">
            <div className="flex justify-center bg-sky-100 p-3">
                <div>Navigate your ideal career path with tailored expert advice</div>
                <div className="ml-5 text-blue-500 cursor-pointer">Contact Expert</div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <img
                        src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                        alt="Accredian logo"
                        className="h-10 mx-2"
                    />
                    <div className="hidden md:flex bg-blue-600 text-white p-2 rounded-xl"> Courses <ChevronDown /></div>
                </div>

                <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className="hidden md:flex space-x-6 justify-center items-center">

                    <a href="#" className="text-gray-600 hover:text-blue-600">Refer & Earn</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>


                    <a href="#" className="text-gray-600 bg-gray-300 py-2 px-3 rounded-lg">Login</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Try for free
                    </button>
                </nav>
            </div>
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
                <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
                    <X size={24} />
                </button>
                <nav className="flex flex-col space-y-6 p-6 mt-10">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Courses</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Refer & Earn</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Try for free
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderTop;