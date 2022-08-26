import { FooterResponsive } from "../../../footer/assign/FooterResponsive"
import { BoxTemplates } from "../../../utils/BoxTemplates"
import { BoxCustomInnerTemplates } from "../../templates/BoxCustomInnerTemplates"
import { ManageMyNetwork } from "./ManageMyNetwork"

export const MyNetworkComponent =()=>{
    return  <BoxTemplates>
                <BoxCustomInnerTemplates>
                    
                    <ManageMyNetwork/>
                    <FooterResponsive/>
                    
                </BoxCustomInnerTemplates>
            </BoxTemplates>
}