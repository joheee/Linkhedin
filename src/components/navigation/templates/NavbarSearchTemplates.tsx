import { useEffect, useState } from 'react'
import { SearchPopUpOutlineTemplates } from '../../search/templates/popUp/SearchPopUpOutlineTemplates'
import { dummyUser } from '../../server/dummy/Data'
import './NavbarSearchTemplates.scss'

export const NavbarSearchTemplates =({...attr}:any)=>{
    const [isPopUp, setIsPopUp] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const handleSearchInput = (e:any) => {
        let lowerCase = e.target.value.toLowerCase()
        setSearchInput(lowerCase)
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

    console.log(filterData)


    return  <div className="navbar-search-templates-container">
                <input {...attr} type="text"  id='navbar-search-component' placeholder='search' onChange={handleSearchInput} onClick={()=>setIsPopUp(!isPopUp)}/>
                {isPopUp === true ? <SearchPopUpOutlineTemplates prop={filterData}/> : null}
            </div>  
}