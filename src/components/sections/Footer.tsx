
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

const Footer = () => {
  const [darkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

 

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Risman J. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RismanRJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-xl hover:scale-110 duration-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/rismanshanker21/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 dark:hover:text-yellow-400 transition-colors text-xl hover:scale-110 duration-300"
            title="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="mailto:rismanshanker21@gmail.com"
            className="hover:text-red-500 dark:hover:text-red-400 transition-colors text-xl hover:scale-110 duration-300"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/risman21/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl hover:scale-110 duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
