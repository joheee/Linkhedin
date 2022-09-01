import { useQuery } from '@apollo/client'
import { dummyUser } from '../../server/dummy/Data'
import { GET_CURRENT_USER, GET_OTHER_USER } from '../../server/query/QueryList'
import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import { PeopleRecommendCard } from '../card/PeopleRecommendCard'
import './PeopleAlsoView.scss'

export const PeopleAlsoView =()=>{
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const otherUser = useQuery(GET_OTHER_USER,{
        variables: {
            username:getUser.username
        },
    })
    
    if(!otherUser.loading) {

    }
    return  <BoxInnerTemplates>
                <div className="people-also-view-parent-container">
                    <div className="people-also-view-header">people also viewed</div>
                    <div className="">
                    {
                        dummyUser.slice(0,3).map((user, i) => 
                            <div className="" key={i}>
                                <PeopleRecommendCard {...user}/>
                            </div>
                        )
                    }
                    </div>
                </div>
            </BoxInnerTemplates>
}