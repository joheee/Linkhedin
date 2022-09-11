import { useSubscription } from '@apollo/client'
import { GET_OTHER_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import { LoadingAnimation } from '../../utils/LoadingAnimation'
import { PeopleRecommendCard } from '../card/PeopleRecommendCard'
import './PeopleAlsoView.scss'

export const PeopleAlsoView =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const otherUser = useSubscription(GET_OTHER_USER,{
        variables: {
            username:getUser.username
        },
    })
    
    return  <BoxInnerTemplates>
                <div className="people-also-view-parent-container">
                    <div className="people-also-view-header">people also viewed</div>
                    {
                        otherUser.loading === true ? 
                        <LoadingAnimation height="50" width="100"/>
                        :
                        <>
                        {
                            otherUser.data.User.map((user:any, i:any) => 
                            <div className="" key={i}>
                                    <PeopleRecommendCard {...user}/>
                                </div>
                            )
                        }
                        </>
                    }
                </div>
            </BoxInnerTemplates>
}