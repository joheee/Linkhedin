import './FooterAttributeTemplates.scss'
export const FooterAttributeTemplates =({gap, fontSize, maxWidth}:any)=>{
    return  <div className="footer-attribute-wrapper-container" style={{columnGap:gap, fontSize:fontSize, maxWidth:maxWidth}}>
                 <div className="footer-header-component">
                    <img src="/linkhedin.png" alt="linkhed in logo" /> 
                    <div>© 2022</div>
                </div>
                <a href='https://www.linkedin.com/legal/user-agreement?trk=d_checkpoint_lg_consumerLogin_ft_user_agreement' target='blank'>user agreement</a>
                <a href='https://www.linkedin.com/legal/privacy-policy?trk=d_checkpoint_lg_consumerLogin_ft_privacy_policy' target='blank'>privacy policy</a>
                <a href='https://www.linkedin.com/help/linkedin/answer/34593?lang=en&trk=d_checkpoint_lg_consumerLogin_ft_community_guidelines' target='blank'>community guidelines</a>
                <a href='https://www.linkedin.com/legal/cookie-policy?trk=d_checkpoint_lg_consumerLogin_ft_cookie_policy' target='blank'>cookie policy</a>
                <a href='https://www.linkedin.com/legal/privacy-policy?trk=d_checkpoint_lg_consumerLogin_ft_privacy_policy' target='blank'>copyright policy</a>
                <a href='https://www.linkedin.com/help/linkedin?trk=d_checkpoint_lg_consumerLogin_ft_send_feedback&lang=en' target='blank'>send feedback</a>
            </div>
}