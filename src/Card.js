import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

function Card({ text, author, index, color }) {
  return (
    <motion.div
      className="motion-div"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? 400 : -400,
      }}
      whileTap={{
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      }}
      viewport={{ once: false }}
    >
      <div className="item-text" style={{ backgroundColor: color }}>
        <p className="quote-text">"{text}"</p>
        <p className="quote-author">~ {author}</p>
      </div>
    </motion.div>
  );
}

export default Card;
