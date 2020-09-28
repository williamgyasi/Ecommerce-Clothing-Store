import React,{useState,useEffect} from 'react'
import {SECTIONS} from '../../Store'

const ShopComponent=()=>{
    const [categories,setCategories]=useState(SECTIONS)
    return(
        <div>
            <h3>HELLO SHOP</h3>
        </div>
    )

} 

export default ShopComponent;