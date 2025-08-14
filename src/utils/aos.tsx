'use client'
import { ReactNode, useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo: React.FC<{children: ReactNode}> = ({children}) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
