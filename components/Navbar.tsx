'use client'

import React, { useState } from 'react'

import styles from '@/app/styles.module.css'
import { logo } from '@/assets/images/index'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

interface Props {
   isDark: boolean,
   setTheme: any;
}

const Navbar = ({ isDark, setTheme }: Props) => {
   return (
      <nav className={styles.nav}>
         <div className={styles.logo}>
            <Image
               width={35}
               height={35}
               src={logo}
               alt='project-logo'
            />
         </div>
         <div className={styles.navLinks}>
            <Link className={styles.links} href={'./shopping'}> Shopping List </Link>
            <Link className={styles.links} href={'./auth'}> Code input </Link>
            <Link className={styles.links} href={'./carousel'}> Carousel </Link>
            <Link className={styles.links} href={'./visualisation'}> Visualisation </Link>
            <Link className={styles.links} href={'./converter'}> Crypto converter </Link>
            <Link className={styles.links} href={'./game'}> Snake game </Link>
         </div>
         <div className={styles.menuBtn} >
            <FaBars size={30} style={{ cursor: 'pointer'}} />
            {isDark
               ? <FaMoon color='darkgrey' size={25} style={{ cursor: 'pointer'}} onClick={() => { setTheme(!isDark) }} />
               : <FaSun color='yellow' size={25} style={{ cursor: 'pointer'}} onClick={() => { setTheme(!isDark) }} />}

         </div>

      </nav>
   )
}

export default Navbar