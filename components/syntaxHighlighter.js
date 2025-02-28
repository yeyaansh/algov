import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import { motion } from "motion/react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import copyButton from "../utils/imageFolder/clipboardCopy.svg";
import copiedButton from "../utils/imageFolder/clipboardCopied.svg";

export default function SyntaxHighlighter({ code, language }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  async function copyingCode() {
    try {
      const store = await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.log("Failed to copy! " + err);
    }
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="hover:cursor-pointer"
        onClick={copyingCode}
      >
        {isCopied ? (
          <img src={copiedButton} height="1rem"></img>
        ) : (
          <img src={copyButton} height="1rem"></img>
        )}
      </motion.div>
    </>
  );
}
