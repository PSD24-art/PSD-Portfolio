import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../components/Loader"; // adjust path if different
import { motion } from "framer-motion";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          form.current.reset();
          setLoader(false);
          setShowAlert(true);
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Something went wrong!");
          form.current.reset();
          setLoader(false);
        }
      );
  };

  const handleAlertButton = () => {
    setShowAlert(false);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] text-white py-16 px-6 sm:px-12"
    >
      {loader && <Loader />}

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          📬 Get in Touch
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 bg-[#111] p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-fuchsia-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-fuchsia-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
            className="bg-transparent border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-fuchsia-500"
          ></textarea>

          <button
            type="submit"
            className="download_CV download_CV_lg download_CV_text relative px-6 py-3 text-lg bg-fuchsia-600 hover:bg-fuchsia-700 rounded-md font-semibold transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {showAlert && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-[#121212] p-8 rounded-xl shadow-lg border border-fuchsia-600 text-center max-w-sm mx-auto">
              <h3 className="text-xl font-bold text-green-400 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-300 mb-4">
                Thank you for reaching out. I’ll get back to you soon.
              </p>
              <button
                onClick={handleAlertButton}
                className="px-6 py-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-md font-semibold transition-all"
              >
                OK
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
