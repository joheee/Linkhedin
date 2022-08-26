import { BoxCustomInnerTemplates } from "../../myNetwork/templates/BoxCustomInnerTemplates"
import { BoxInnerTemplates } from "../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../utils/BoxTemplates"
import { FooterAttributeTemplates } from "../templates/FooterAttributeTemplates"
import { FooterHome } from "./home/FooterHome"

export const FooterResponsive =()=>{
    return  <BoxTemplates>
                <BoxCustomInnerTemplates>
                    <div className="responsive">
                        <BoxInnerTemplates>
                            <FooterHome/>
                        </BoxInnerTemplates>
                    </div>
                    
                    <div className="responsive">
                        <FooterAttributeTemplates fontSize='.8rem' gap='1rem' maxWidth='20rem'/>
                    </div>
                </BoxCustomInnerTemplates>
            </BoxTemplates>
}