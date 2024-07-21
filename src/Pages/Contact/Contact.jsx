import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from 'react-intersection-observer';


const Contact = () => {
    const form = useRef();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6ip17cg', 'template_ux1hgph',  form.current, {
            publicKey: '4qck_ZO7w5reRgF0e',
          })
            .then(() => {
                // console.log(result.text);
                e.target.reset()
                toast.success('Message sent successfully!');
              
            }, () => {
                // console.log(error.text);
                toast.info('Failed to send the message, please try again.');
            });
    };

    return (
        <div ref={ref} id='contact' className="bg-black-p  md:p-7 p-4 lg:p-10 lg:pl-14 md:pl-12">
            <div className="max-w lg:p-5 md:p-3 p-1">
                <h1 className="text-color-p font-bold \ text-3xl">CONTACT</h1>
                <div className={` bg-color-p  pb-4 animated-line ${inView ? 'animate' : ''}`} />
                <p className="text-slate-500 mb-8 lg:w-1/2 md:w-1/2 ">Feel free to reach out to me using the contact information below or by sending a message through the form.</p>
                <div className="flex lg:flex-row md:flex-row flex-col gap-5 w-full my-16">
                    <div className="flex-1 p-">
                        <h2 className="text-xl font-bold text-white">Contact Information</h2>
                        <p className="text-slate-500 mt-4 flex items-center">
                            <FaEnvelope className="mr-2" /> sahalom4729@gmail.com
                        </p>
                        <p className="text-slate-500 mt-2 flex items-center">
                            <FaPhone className="mr-2" /> +971562596833
                        </p>
                        <p className="text-slate-500 mt-2 flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> Sylhet , Bangladesh
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/sai.ami.393" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="w-6 h-6 text-blue-600" />
                            </a>
                            <a href="https://github.com/ShahAlom47" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 text-gray-800" />
                            </a>
                            <a href="https://www.linkedin.com/in/shah-alom-626322290/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-6 h-6 text-blue-700" />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 p-">
                        <h2 className="text-xl font-bold text-white">Send a Message</h2>
                        <form ref={form} onSubmit={sendEmail} className="mt-4 border-2 p-4 rounded-lg">
                            <div className="mb-4">
                                <label className="block text-slate-500 mb-2" htmlFor="name">Name</label>
                                <input type="text" id="name" name="user_name" className="w-full p-2 rounded bg-gray-700 text-white" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-slate-500 mb-2" htmlFor="email">Email</label>
                                <input type="email" id="email" name="user_email" className="w-full p-2 rounded bg-gray-700 text-white" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-slate-500 mb-2" htmlFor="message">Message</label>
                                <textarea id="message" name="message" className="w-full p-2 rounded bg-gray-700 text-white" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn w-full bg-black border-2 border-color-p hover:text-stone-950 text-white mt-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
