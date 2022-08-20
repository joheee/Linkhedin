import './FooterAttributeTemplates.scss'
export const FooterAttributeTemplates =({gap, fontSize, maxWidth}:any)=>{
    return  <div className="footer-attribute-wrapper-container" style={{columnGap:gap, fontSize:fontSize, maxWidth:maxWidth}}>
                 <div className="footer-header-component">
                    <img src="/linkhedin.png" alt="linkhed in logo" /> 
                    <div>© 2022</div>
                </div>
                <p>user agreement</p>
                <p> privacy policy</p>
                <p>community guidelines</p>
                <p>cookie policy</p>
                <p>copyright policy</p>
                <p>send feedback</p>
                <p>language</p>
            </div>
}