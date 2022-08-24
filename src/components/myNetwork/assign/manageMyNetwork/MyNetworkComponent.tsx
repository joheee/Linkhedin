import { FooterHome } from "../../../footer/assign/home/FooterHome"
import { FooterAttributeTemplates } from "../../../footer/templates/FooterAttributeTemplates"
import { BoxInnerTemplates } from "../../../utils/BoxInnerTemplates"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { BoxCustomInnerTemplates } from "../../templates/BoxCustomInnerTemplates"
import { ManageMyNetwork } from "./ManageMyNetwork"

export const MyNetworkComponent =()=>{
    return  <BoxTemplates>
                <BoxCustomInnerTemplates>
                    
                    <ManageMyNetwork/>
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