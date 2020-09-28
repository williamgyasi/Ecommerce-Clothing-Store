import React,{useState,useEffect} from 'react'
import {SHOP_DATA} from '../../Store'

import './Shop.scss'

import COllectionPreview from  '../../Components/Preview-Collection/PreviewCollectionComponent'
const ShopComponent=()=>{
    const [categories,setCategories]=useState(SHOP_DATA)
    return(
        <div className="shop-page">
           {
               SHOP_DATA.map(({id ,...otherProps})=>{
                   return(
                       <COllectionPreview key={id} {...otherProps} />
                   )
               })
           }
        </div>
    )

} 

export default ShopComponent;