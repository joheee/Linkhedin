import { Link } from "react-router-dom";
import { RichTextInterface } from "../../../../server/credential/Interface";
import './RichTextRenderTemplates.scss'

const URL_REGEX =	/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
const MENTION_REGEX = /^\B@\w+$/gm
const HASHTAG_REGEX = /^\B#\w+$/gm

export const RichTextRenderTemplates =({ content }: RichTextInterface)=> {
	const words = content.split(' ');
	return	<p className="rich-text-render-templates-component">
                {words.map((word,i) => {
                    if(word.match(URL_REGEX)) {
                        
                        return <a href={`${word}`} target="_blank" key={i}>{word} </a>
                    } else if(word.match(MENTION_REGEX)) {
                        
                        return <a href={word} key={i}>{word} </a>
                    } else if(word.match(HASHTAG_REGEX)) {
                        return <Link to={`/search/${word.replace('#','')}`} key={i}>{word} </Link>
                    } else return word + ' '
                })}
            </p>
}