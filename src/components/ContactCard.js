import React from "react";
import { motion } from "framer-motion";
import "./ContactCard.css";

export function ContactCard() {
  return (
    <motion.div
      variants={{
        hidden: { y: 28, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ 
          type: 'keyframes',
          default: { duration: 0.6 }
      }}
      initial="hidden"
      animate="visible"
      className="contact"
    >
      <div>
        <div className="contact-title">최소혜, Choi Sohye</div>
        <div className="contact-subtitle">Web Front-End, Devops.</div>
      </div>
      <div>
        <div className="contact-desc">
          Git |&nbsp;
          <a href="https://github.com/purelledhand">
            https://github.com/purelledhand
          </a>
        </div>
        <div className="contact-desc">Email | purelledhand@gmail.com</div>
      </div>
    </motion.div>
  );
}

export default ContactCard;
