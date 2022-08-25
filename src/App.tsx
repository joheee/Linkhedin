import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './components/auth/page/AuthPage'
import { ForgotPage } from './components/auth/page/ForgotPage'
import { ResetPassPage } from './components/auth/page/ResetPassPage'
import { VerificationPage } from './components/auth/page/VerificationPage'
import { HomePage } from './components/home/page/HomePage'
import { MyNetworkPage } from './components/myNetwork/page/MyNetworkPage'
import { SearchPage } from './components/search/page/SearchPage'
import { handleDark, handleLight } from './components/server/base/LightDarkComponent'
import { HandleBackground } from './components/utils/BackgroundManager'

function App() {

  useEffect(()=>{
    const LightDarkSign = JSON.parse(localStorage.getItem("LightDarkSign") as string)
    if(LightDarkSign !== null) {
      if(LightDarkSign.isLight === true) {
          handleLight()
          document.body.style.background = HandleBackground('--secondaryColor')
      } else {
          handleDark()
          document.body.style.background = HandleBackground('--secondaryColor')
      }
    }
  },[])
  
  return  <BrowserRouter>
            <Routes>

              <Route path="/" element={<AuthPage/>}/>
              <Route path="/auth/reset-password" element={<ForgotPage/>}/>
              <Route path="/auth/reset-password/new-password" element={<ResetPassPage/>}/>
              <Route path="/auth/verification" element={<VerificationPage/>}/>

              <Route path="/home" element={<HomePage/>}/>
              <Route path="/search/:keyword" element={<SearchPage/>}/>
              <Route path="/mynetwork" element={<MyNetworkPage/>}/>
              <Route path="/jobs" element={<MyNetworkPage/>}/>

            </Routes>
          </BrowserRouter>
}

export default App