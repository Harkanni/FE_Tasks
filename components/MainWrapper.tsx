'use client'

import React, { useState, createContext } from 'react'
import { Theme } from '@radix-ui/themes';
import Navbar from './Navbar';
import Footer from './Footer';
import SidebarNavigation from './SidebarNavigation';

interface ThemeManagementContextType { }

export const ThemeManagementContext = createContext<ThemeManagementContextType | any>(undefined);

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   const [isDark, setTheme] = useState<boolean>(true);
   const [sidebarActive, setSidebarActive] = useState(false);
   return (
      <ThemeManagementContext.Provider value={[isDark, setTheme]}>

         <Theme appearance={isDark ? 'dark' : 'light'} style={{ minHeight: '84vh' }}>
            <Navbar isDark={isDark} setTheme={setTheme} sidebar={sidebarActive} setSidebar={setSidebarActive} />
            {sidebarActive && <SidebarNavigation sidebar={sidebarActive} setSidebar={setSidebarActive} />}



            {children}

         </Theme>
      </ThemeManagementContext.Provider>
   )
}

export default MainWrapper