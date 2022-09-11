import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const RefreshProfile =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/myprofile/')
    })
    return <div className=""></div>
}