import { useState } from 'react'
import { dummyUser } from '../../server/dummy/Data'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyProfile.scss'
export const MyProfile =()=>{
    const [isButton,setIsButton] = useState(false)
    return  <BoxInnerTemplates>
                <div className="my-profile-parent-container">
                    <div className="my-profile-banner">
                        <div className="fa-solid fa-camera camera-placement feed-hover"></div>
                        <div className="fa-solid fa-pen pen-placement feed-hover"></div>
                        <img src={dummyUser[0].banner} alt={dummyUser[0].username} />
                        <div className="my-profile-picture">
                            <img src={dummyUser[0].profile} alt={dummyUser[0].username} />
                        </div>
                    </div>

                    <div className="my-profile-info-container">
                        <div className="my-profile-full-name">
                            {dummyUser[0].username}
                        </div>
                        <div className="my-profile-follower-connections">
                            <div className="hover">{423} followers</div>
                            <div className="hover">{123} connections</div>
                        </div>
                        <div className="my-profile-button-container">
                            <div className="fa-solid fa-ellipsis feed-hover" onClick={()=>setIsButton(!isButton)}></div>
                            {
                                isButton === true ? 
                                <div className="my-profile-pop-up-button">
                                    <div className="pop-up-button feed-hover">open to</div>
                                    <div className="pop-up-button feed-hover">add profile section</div>
                                    <div className="pop-up-button feed-hover">more</div>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </BoxInnerTemplates>
}