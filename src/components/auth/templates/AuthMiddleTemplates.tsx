import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './AuthMiddleTemplates.scss'

export const AuthMiddleTemplates=({children,...attr}:any)=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const getCurrentUser = JSON.parse(localStorage.getItem('current_login')!)
        console.log(getCurrentUser)
        if(getCurrentUser !== null && getCurrentUser !== undefined) {
            toast(
                `welcome ${getCurrentUser.username}`,
                {
                  duration: 3000,
                }
              )
            navigate(`/home`)
        }
    })
    
    return <div {...attr} id='auth-middle-templates-component'>{children}</div>
}