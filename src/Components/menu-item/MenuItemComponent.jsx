import React from 'react'
import './MenuItem.scss'

export default function MenuItem({title,imageURL,size}){
    return(
        <div className={`${size} menu-item`}>
        
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