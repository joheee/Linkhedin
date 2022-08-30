import { ApolloProvider } from '@apollo/client'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './components/auth/page/AuthPage'
import { ForgotPage } from './components/auth/page/ForgotPage'
import { ResetPassPage } from './components/auth/page/ResetPassPage'
import { VerificationPage } from './components/auth/page/VerificationPage'
import { HomePage } from './components/home/page/HomePage'
import { JobPage } from './components/jobs/page/JobPage'
import { MessagesPage } from './components/messages/page/MessagesPage'
import { MyNetworkPage } from './components/myNetwork/page/MyNetworkPage'
import { NotificationPage } from './components/notification/page/NotificationPage'
import { ProfilePage } from './components/profile/page/ProfilePage'
import { SearchPage } from './components/search/page/SearchPage'
import { handleDark, handleLight } from './components/server/base/LightDarkComponent'
import { GetClient } from './components/server/graphql/Client'
import { AuthContextProvider } from './components/utils/AuthContextProvider'
import { HandleBackground } from './components/utils/BackgroundManager'
import { Toaster } from 'react-hot-toast';

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

  return  <ApolloProvider client={GetClient()}>
            <AuthContextProvider>
              <div><Toaster position="top-left" reverseOrder={false}/></div>
              <BrowserRouter>
                <Routes>

                  <Route path="/" element={<AuthPage/>}/>
                  <Route path="/auth/reset-password" element={<ForgotPage/>}/>
                  <Route path="/auth/reset-password/new-password" element={<ResetPassPage/>}/>
                  <Route path="/auth/verification/:email" element={<VerificationPage/>}/>

                  <Route path="/home" element={<HomePage/>}/>
                  <Route path="/search/:keyword" element={<SearchPage/>}/>
                  <Route path="/mynetwork" element={<MyNetworkPage/>}/>
                  <Route path="/jobs" element={<JobPage/>}/>
                  <Route path="/notifications" element={<NotificationPage/>}/>

                  <Route path="/messages/:messageIndex" element={<MessagesPage/>}/>
                  <Route path="/messages/" element={<MessagesPage/>}/>
                  <Route path="/myprofile/" element={<ProfilePage/>}/>

                </Routes>
              </BrowserRouter>
            </AuthContextProvider>
          </ApolloProvider>
}

export default App