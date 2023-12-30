import React from 'react'
import styles from '@/app/styles.module.css'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.social}>
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
            <FaFacebook />
         </div>
      </div>
   )
}

export default Footer