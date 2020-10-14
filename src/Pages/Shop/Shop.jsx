import React,{useState,useEffect} from 'react'
import {SHOP_DATA} from '../../Store'

import './Shop.scss'

import CollectionPreview from  '../../Components/Preview-Collection/PreviewCollectionComponent'
const ShopComponent=(props)=>{
    console.log("???????????????")
    console.log(props)
    const [categories,setCategories]=useState(SHOP_DATA)
    return(
        <div className="shop-page">
           {
               SHOP_DATA.map(({id ,...otherProps})=>{
                   return(
                       <CollectionPreview key={id} {...otherProps} />
                   )
               })
           }
        </div>
    )

} 

export default ShopComponent;