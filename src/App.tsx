import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './components/auth/page/AuthPage'
import { ForgotPage } from './components/auth/page/ForgotPage'
import { ResetPassPage } from './components/auth/page/ResetPassPage'
import { VerificationPage } from './components/auth/page/VerificationPage'
import { HomePage } from './components/home/page/HomePage'
import { SearchPage } from './components/search/page/SearchPage'

function App() {

  return  <BrowserRouter>
            <Routes>

              <Route path="/" element={<AuthPage/>}/>
              <Route path="/auth/reset-password" element={<ForgotPage/>}/>
              <Route path="/auth/reset-password/new-password" element={<ResetPassPage/>}/>
              <Route path="/auth/verification" element={<VerificationPage/>}/>

              <Route path="/home" element={<HomePage/>}/>
              <Route path="/search/:username" element={<SearchPage/>}/>

            </Routes>
          </BrowserRouter>
}

export default App