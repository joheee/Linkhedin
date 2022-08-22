import { useState } from "react";
import { RichTextRenderTemplates } from "./RichTextRenderTemplates";
import './RichTextTemplates.scss'

export const RichTextTemplates =()=>{
    const [text, setText] = useState('')
	const textarea : HTMLElement = document!.querySelector('#autoresizing')!

	textarea?.addEventListener('keyup', (e:any) => {
		textarea.style.height = `auto`
		let scHeight = e.target?.scrollHeight!
		textarea.style.height = `${scHeight}px`
	})

return  <div className="rich-text-templates-container">
                <textarea value={text} onChange={(e) => setText(e.target.value)} id='autoresizing' placeholder='what do you want to talk about?'></textarea>
			    <RichTextRenderTemplates content={text} />
            </div>
}