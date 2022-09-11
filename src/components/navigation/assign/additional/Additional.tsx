
import { useState } from 'react'
import { NavbarAdditionalTemplates } from '../../templates/NavbarAdditionalTemplates'
import './Additional.scss'

const MobileAdditional =()=>{
    return  <div className="navbar-mobile-additional-component">
                <NavbarAdditionalTemplates/>
            </div>
}

export const Additional =()=>{
    const [isMobile, setIsMobile] = useState(false)

    return  <div>
                <div className="navbar-additional">
                    <NavbarAdditionalTemplates/>
                </div>

                <div className="navbar-mobile">
                    <div onClick={()=>setIsMobile(!isMobile)} className="fa-solid fa-bars feed-hover"></div>
                        {isMobile === true ? <MobileAdditional/> : null}
                </div>
            </div>
}