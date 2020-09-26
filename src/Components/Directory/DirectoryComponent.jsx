import React from 'react';
import MenuItemComponent from '../menu-item/MenuItemComponent'

//CSS
import './Directory.scss';

//STORE
import {SECTIONS} from '../../Store'

export default function DirectoryComponent(){
    return(
        <div className="directory-menu">
            {SECTIONS.map(({title,id,imageUrl,size})=>{
                return(
                    <MenuItemComponent size={size} key={id} imageURL={imageUrl} title={title.toUpperCase()} />
                )
            })}
        </div>
    )
}


