import { Link, useParams } from "react-router-dom"
import { RecommendPersonTemplates } from "../../home/templates/feedTemplates/RecommendPersonTemplates"
import { dummyUser } from "../../server/dummy/Data"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"

import './MessagePageAssign.scss'
import { PopUpChat } from "./PopUpChat"

export const MessagePageAssign =()=>{
    const {messageIndex} = useParams()

return  <BoxTemplates>
                <BoxInnerTemplates>
                        <div className="message-page-assign-header-search-people-container">
                            <div className="message-page-assign-container">
                                <div className="set-width-message-page-assign"></div>
                                <div className="message-page-assign-header-container">
                                    <div className="">messaging</div>
                                    <div className="fa-solid fa-pen-to-square"></div>
                                </div>
                            </div>
                            <input type="text" placeholder="search messages"/>
                            <div className="">
                                {
                                    dummyUser.map((user,i) => 
                                    <Link to={`/messages/${user.username}`} key={i}>
                                        <RecommendPersonTemplates {...user}/>
                                    </Link>
                                    )
                                }
                            </div>
                            {messageIndex === undefined ? null : <PopUpChat/>}
                        </div>
                </BoxInnerTemplates>
            </BoxTemplates>
}