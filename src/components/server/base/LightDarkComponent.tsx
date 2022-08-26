import { useEffect, useState } from "react"
import { HandleBackground } from "../../utils/BackgroundManager"
import './LightDarkComponent.scss'

export const handleLight =()=>{
    document.documentElement.style.setProperty('--primaryColor','#fff')
    document.documentElement.style.setProperty('--secondaryColor','#f3f2ef')
    document.documentElement.style.setProperty('--accentColor','#0a66c2')
    document.documentElement.style.setProperty('--fontColor','rgba(0,0,0,.9)')
    document.documentElement.style.setProperty('--boxColor','rgba(0,0,0,.15)')
    document.documentElement.style.setProperty('--postBorderColor','rgba(0,0,0,0.5)')
    document.documentElement.style.setProperty('--boxShadowColor','0 0 0 1px rgba(0,0,0,.08)')
    document.documentElement.style.setProperty('--anchorFontColor','rgba(0,0,0,.9)')
}
export const handleDark =()=>{
    document.documentElement.style.setProperty('--primaryColor','#1d2226')
    document.documentElement.style.setProperty('--secondaryColor','#000')
    document.documentElement.style.setProperty('--accentColor','#70b5f9')
    document.documentElement.style.setProperty('--fontColor','rgba(255,255,255,.9)')
    document.documentElement.style.setProperty('--boxColor','rgba(255,255,255,.15)')
    document.documentElement.style.setProperty('--postBorderColor','rgba(255,255,255,0.5)')
    document.documentElement.style.setProperty('--boxShadowColor','0 0 0 1px rgba(255,255,255,.08)')
    document.documentElement.style.setProperty('--anchorFontColor','rgba(254,222,179,.9)')
}
export const LightDarkComponent =()=>{
    const [isLight, setIsLight] = useState(false)
    const [isSun, setIsSun] = useState(false)

    useEffect(()=>{
        const LightDarkSign = JSON.parse(localStorage.getItem("LightDarkSign") as string)
        if(LightDarkSign !== null) {
            setIsSun(LightDarkSign.isLight)
            if(LightDarkSign.isLight === true) {
                handleLight()
                document.body.style.background = HandleBackground('--secondaryColor')
            } else {
                handleDark()
                document.body.style.background = HandleBackground('--secondaryColor')
            }
        } else {
            setIsSun(true)
            localStorage.setItem("LightDarkSign", JSON.stringify({isLight:true}))
        }
    },[isLight])

    return <div className={isSun === true ? 'fa-solid fa-sun light-dark-component':'fa-solid fa-moon light-dark-component'} onClick={()=>{
        setIsLight(!isLight)
        localStorage.setItem("LightDarkSign", JSON.stringify({isLight:isLight}))
    }}></div>
}