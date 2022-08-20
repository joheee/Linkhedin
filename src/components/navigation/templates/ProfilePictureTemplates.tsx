import './ProfilePictureTemplates.scss'

export const ProfilePictureTemplates =({src,width, height,...attr}:any)=>{
    return  <div {...attr} id='profile-picture-template-component' style={{width:width, height:height}}>
                <img src={src} alt="my profile"/>
            </div>
}