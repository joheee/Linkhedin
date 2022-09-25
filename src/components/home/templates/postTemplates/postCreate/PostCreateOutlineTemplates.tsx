
import { useSubscription } from '@apollo/client'
import { RecommendPersonTemplates } from '../../feedTemplates/RecommendPersonTemplates'
import './PostCreateOutlineTemplates.scss'
import { PostPictureVideoTemplates } from './PostPictureVideoTemplates'
import { GET_LOGIN_USER } from '../../../../server/query/QueryList'
import { RichTextRenderTemplates } from './RichTextRenderTemplates'
import { useState } from 'react'

export const PostCreateOutlineTemplates =({setIsPost}:{setIsPost:(active:boolean)=>void})=>{
    const textarea : HTMLElement = document!.querySelector('.autoresizing')!
	textarea?.addEventListener('keyup', (e:any) => {
		textarea.style.height = `auto`
		let scHeight = e.target?.scrollHeight!
		textarea.style.height = `${scHeight}px`
	})
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const getCurrentLogin = useSubscription(GET_LOGIN_USER, {
        variables: {
            username:getUser.username!
        }
    })
    const [text, setText] = useState('')

    return  <div className="post-create-outline-templates-container">
                <div className="post-create-inner-box-container">
                    <div className="post-create-inner-box-header-container">
                        <div className="">create a post</div>
                        <div onClick={()=>setIsPost(false)} className="fa-solid feed-hover">x</div>
                    </div>

                    {
                        getCurrentLogin.loading === true ? null :
                        <RecommendPersonTemplates {...getCurrentLogin.data.User[0]}/>
                    }

                <div className="rich-text-templates-container">
                    <div className="rich-text-render-container">
                        <RichTextRenderTemplates content={text} />
                    </div>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className='autoresizing' placeholder={'what do you want to talk about'}>
                    </textarea>
                </div>
                    <PostPictureVideoTemplates text={text} setIsPost={setIsPost}/>
                </div>
            </div>
}