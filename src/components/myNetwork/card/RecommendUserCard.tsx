import { useMutation, useQuery, useSubscription } from '@apollo/client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { NameDescTemplates } from '../../home/templates/profileTemplates/NameDescTemplates'
import { ProfileBackgroundTemplates } from '../../home/templates/profileTemplates/ProfileBackgroundTemplates'
import { RecommendCardInterface } from '../../server/credential/Interface'
import { CONNECT_MECHANISM } from '../../server/mutation/MutationList'
import { GET_ALL_CONNECT } from '../../server/query/QueryList'
import './RecommendUserCard.scss'

export const RecommendUserCard =(prop:any)=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const [connectUser] = useMutation(CONNECT_MECHANISM)
    
    const handleConnect =()=>{
        connectUser({
            variables:{
                sender:getUser.username,
                receiver:prop.username
            }
        }).then(()=>{
            toast.success('send connect request to ' + prop.username)
        })
    }

    return  <div className="recommend-user-card-container">
                <ProfileBackgroundTemplates {...prop}/>
                <div className="name-desc-user-card-container">
                    <NameDescTemplates {...prop}/>
                </div>
                <div className="recommend-user-connect-button-container">
                    <div className="recommend-user-connect-button" onClick={()=>handleConnect()}>connect</div>
                </div>
            </div>
}