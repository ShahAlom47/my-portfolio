import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer footer-center bg-black-p lg:pl-14 md:pl-12 text-white rounded p-1 ">
     
      <nav className=" ">
        <div className="flex space-x-4 ">
          <a href="https://www.facebook.com/sai.ami.393" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-blue-600" />
          </a>
          <a href="https://github.com/ShahAlom47" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/shah-alom-626322290/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-700" />
          </a>
        </div>
      </nav>
      <aside className=" border-t-2 w-full py-2 ">
        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Shah Alom</p>
      </aside>
    </footer>
  );
};

export default Footer;