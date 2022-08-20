
export const HandleBackground=(colorCode:string)=>{
    const getColor = getComputedStyle(document.querySelector(':root')!)
    return getColor.getPropertyValue(colorCode)
}

export const BackgroundManager=({colorCode, children, ...attr}:any)=>{
    document.body.style.background = colorCode
    return  <div {...attr}>
                {children}
            </div>
}