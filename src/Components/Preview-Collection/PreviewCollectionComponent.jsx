import React from 'react'
import './PreviewCollection.scss'
import CollectionItemComponent from  '../Collection-Item/CollectionItemComponent'

const PreviewCollectionComponent=({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items      
                    .filter((item,index)=>index <4)             
                    .map(({id,...otherItemProps})=>{
                        return(
                    
                            <CollectionItemComponent key={id}  {...otherItemProps} />
                            
                        )
                    })
                }


            </div>
            

        </div>
    )
}

export default PreviewCollectionComponent;