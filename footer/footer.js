import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {LinkedIn, GitHub, Twitter} from "@mui/icons-material";
export default function Footer() {
  return (
    <><footer className="bg-primary border-t text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        {/* Quick Links Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yeyaansh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/yeyaansh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <Twitter />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="hover:text-blue-400">Email: support@algovisualizer.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" mt-6 pt-4 text-center">
        <p>© 2025 &nbsp; &nbsp;ALGO VISUALIZER  </p>
      </div>
    </div>
  </footer>
    </>
  );
}
