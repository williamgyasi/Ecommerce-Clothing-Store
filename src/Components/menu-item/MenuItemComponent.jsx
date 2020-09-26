import React from 'react'
import './MenuItem.scss'
import {withRouter} from 'react-router-dom'

const MenuItem =({title,imageURL,size,history,linkURL,match})=>{
    return(
        <div onClick={()=>history.push(`${match.url}${linkURL}`)} className={`${size} menu-item`}>
            <div className="background-image" 
            style={{
                backgroundImage:`url(${imageURL})`
            }} 
            />
                <div className="content"> 
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default withRouter(MenuItem)