import { useState } from "react";
import { RichTextInterface } from "../../../../server/credential/Interface";
import { RichTextRenderTemplates } from "./RichTextRenderTemplates";
import './RichTextTemplates.scss'

export const RichTextTemplates =({content}:RichTextInterface)=>{
    const [text, setText] = useState('')
	const textarea : HTMLElement = document!.querySelector('#autoresizing')!

	textarea?.addEventListener('keyup', (e:any) => {
		textarea.style.height = `auto`
		let scHeight = e.target?.scrollHeight!
		textarea.style.height = `${scHeight}px`
	})

return  <div className="rich-text-templates-container">
				<div className="rich-text-render-container">
			    	<RichTextRenderTemplates content={text} />
				</div>
                <textarea value={text} onChange={(e) => setText(e.target.value)} id='autoresizing' placeholder={content}>
				</textarea>
            </div>
}