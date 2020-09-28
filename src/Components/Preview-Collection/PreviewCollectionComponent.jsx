import React from 'react'
import './PreviewCollection.scss'

const PreviewCollectionComponent=({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.map((item)=>{
                        return(
                            <div>
                                item.name
                            </div>
                        )
                    })
                }


            </div>
            

        </div>
    )
}

export default PreviewCollectionComponent;