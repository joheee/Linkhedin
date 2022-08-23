import { useEffect, useState } from 'react'
import { SearchPopUpOutlineTemplates } from '../../search/templates/popUp/SearchPopUpOutlineTemplates'
import { dummyUser } from '../../server/dummy/Data'
import { SearchPopUpInterface } from '../../server/credential/Interface'
import './NavbarSearchTemplates.scss'
import { useNavigate } from 'react-router-dom'

interface SearchUserArrayInterface {
    dummyUser: SearchPopUpInterface
}
interface SearchUserArrayInputInterface {
    userInput: string
}

export const NavbarSearchTemplates =({...attr}:any)=>{
    const [isPopUp, setIsPopUp] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const navigate = useNavigate()

    const handleSearchInput = (e:any) => {
        let lowerCase = e.target.value.toLowerCase()
        setSearchInput(lowerCase)
    }
    const handleEnter =(e:any)=>{
        if(e.key === 'Enter'){
            setIsPopUp(false)
            if(searchInput !== '') {
                navigate(`../search/${searchInput}`)
            }
        } 

    }

    const filterData = dummyUser.filter(el => {
        if(searchInput !== ''){
            return el.username.toLowerCase().includes(searchInput)
        } else {
            return el
        }
      })
      
    useEffect(() => {
        if(searchInput !== '') setIsPopUp(true)
        else setIsPopUp(false)
      },[searchInput])

    return  <div className="navbar-search-templates-container">
                <input {...attr} type="text"  id='navbar-search-component' placeholder='search' onKeyDown={handleEnter} onChange={handleSearchInput} onClick={()=>setIsPopUp(!isPopUp)}/>
                {isPopUp === true ? <SearchPopUpOutlineTemplates prop={filterData}/> : null}
            </div>  
}