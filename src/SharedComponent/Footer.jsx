import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="footer footer-center bg-stone-900 text-white rounded p-10">
  <nav className="grid grid-flow-col gap-4 text-lg">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
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
  <aside className=" border-t-2 w-full py-4 ">
    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Shah Alom</p>
  </aside>
</footer>
    );
};

export default Footer;