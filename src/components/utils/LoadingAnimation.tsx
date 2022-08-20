import { HandleBackground } from "./BackgroundManager"
import { Bars } from  'react-loader-spinner'
import './LoadingAnimation.scss'
import { LoadingAnimationInterface } from "../server/credential/Interface"


export const LoadingAnimation =(prop:LoadingAnimationInterface)=>{
    return  <div className="loading-set-center">
                <Bars height ={prop.height} width = {prop.width} color = {HandleBackground('--accentColor')} ariaLabel = 'three-dots-loading'/>
            </div>
}