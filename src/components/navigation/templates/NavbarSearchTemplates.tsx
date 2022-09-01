import { useEffect, useState } from 'react'
import { SearchPopUpOutlineTemplates } from '../../search/templates/popUp/SearchPopUpOutlineTemplates'
import './NavbarSearchTemplates.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_OTHER_USER } from '../../server/query/QueryList'


export const NavbarSearchTemplates =({...attr}:any)=>{
    const [isPopUp, setIsPopUp] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    let Placeholder ='search'
    const navigate = useNavigate()
    const {keyword} = useParams()
    const getUser = JSON.parse(localStorage.getItem('current_login')!)
    getUser === null ? "":getUser
    const {loading,data,refetch} = useQuery(GET_OTHER_USER,{
        variables: {
            username:getUser.username
        },
    })
    if(keyword !== undefined) Placeholder = keyword

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
    useEffect(()=>{
        refetch()
    },[isPopUp])
    useEffect(() => {
        if(searchInput !== '') setIsPopUp(true)
        else setIsPopUp(false)
      },[searchInput])
    
    if(loading) return <div className=""></div>
    return  <div className="navbar-search-templates-container">
                <input {...attr} type="text"  id='navbar-search-component' placeholder={Placeholder} onKeyDown={handleEnter} onChange={handleSearchInput} onClick={()=>setIsPopUp(!isPopUp)}/>
                {isPopUp === true ? <SearchPopUpOutlineTemplates prop={data.User.filter((el:any) => {
                    if(searchInput !== ''){
                        return el.username.toLowerCase().includes(searchInput)
                    } else {
                        return el
                    }
                })}/> : null}
            </div>  
}