'use client'

import React, { useState } from 'react'
import { Theme } from '@radix-ui/themes';
import Navbar from './Navbar';
import Footer from './Footer';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   const [isDark, setTheme] = useState<boolean>(true);
   return (
      <Theme appearance={isDark ? 'dark' : 'light'}>
         <Navbar isDark={isDark} setTheme={setTheme} />


         {children}

         <Footer />
      </Theme>
   )
}

export default MainWrapper