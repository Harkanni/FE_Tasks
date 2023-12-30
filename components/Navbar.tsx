'use client'

import React, { useState } from 'react'

import styles from '@/app/styles.module.css'
import { logo } from '@/assets/images/index'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { MdClose } from 'react-icons/md'

interface Props {
   isDark: boolean,
   setTheme: any;
   sidebar: boolean,
   setSidebar: any;
}

const Navbar = ({ isDark, setTheme, sidebar, setSidebar }: Props) => {
   return (
      <nav className={styles.nav}>
         <div className={styles.logo}>
            <Link href={'./'}>
               <Image
                  width={35}
                  height={35}
                  src={logo}
                  alt='project-logo'
               />
            </Link>
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
            {sidebar
               ? <MdClose size={30} style={{ cursor: 'pointer' }} onClick={() => setSidebar(!sidebar)} />
               : <FaBars size={30} style={{ cursor: 'pointer' }} onClick={() => setSidebar(!sidebar)} />}

            {isDark
               ? <FaMoon color='darkgrey' size={25} style={{ cursor: 'pointer' }} onClick={() => { setTheme(!isDark) }} />
               : <FaSun color='yellow' size={25} style={{ cursor: 'pointer' }} onClick={() => { setTheme(!isDark) }} />}
         </div>

      </nav>
   )
}

export default Navbar