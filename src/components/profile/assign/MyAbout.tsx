import { BoxInnerTemplates } from '../../utils/BoxInnerTemplates'
import './MyAbout.scss'
export const MyAbout =()=>{
    return  <BoxInnerTemplates>
                <div className="my-about-parent-container">
                    <div className="my-about-parent-header">
                        <div className="my-about-text">about</div>
                        <div className="fa-solid fa-pen feed-hover"></div>
                    </div>
                    <div className="my-about-core">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptatum vel itaque necessitatibus voluptate architecto molestiae, sequi veniam, molestias perferendis, esse repellat voluptates est officia ipsam? Quas ipsa ducimus voluptate.</div>
                </div>
            </BoxInnerTemplates>
}