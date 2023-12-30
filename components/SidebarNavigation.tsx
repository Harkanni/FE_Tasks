import React from 'react'
import { MdClose } from "react-icons/md";
import styles from '@/app/styles.module.css'
import Link from 'next/link';

interface Props {
   sidebar: boolean,
   setSidebar: any;
}


const SidebarNavigation = ({ sidebar, setSidebar }: Props) => {
   return (
      <>
         <div className={styles.blur}>
            <div className={styles.sidebarContainer}>
               <MdClose size={35} className={styles.closeBtn} color='white' onClick={() => { setSidebar(!sidebar) }} />

               <div className={styles.sidenavLinks}>
                  <ul>
                     <li>
                        <Link className={styles.links} href={'./shopping'}> Shopping List </Link>
                     </li>
                     <li>
                        <Link className={styles.links} href={'./auth'}> Code input </Link>
                     </li>
                     <li>
                        <Link className={styles.links} href={'./carousel'}> Carousel </Link>
                     </li>
                     <li>
                        <Link className={styles.links} href={'./visualisation'}> Visualisation </Link>
                     </li>
                     <li>
                        <Link className={styles.links} href={'./converter'}> Crypto converter </Link>
                     </li>
                     <li>
                        <Link className={styles.links} href={'./game'}> Snake game </Link>
                     </li>
                  </ul>
               </div>
            </div>

         </div>
      </>
   )
}

export default SidebarNavigation