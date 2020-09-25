import React from 'react';
import MenuItemComponent from '../menu-item/MenuItemComponent'

//CSS
import './Directory.scss';

//STORE
import {SECTIONS} from '../../Store'

export default function DirectoryComponent(){
    return(
        <div className="directory-menu">
            {SECTIONS.map(({title})=>{
                return(
                    <MenuItemComponent title={title.toUpperCase()} />
                )
            })}
        </div>
    )
}


