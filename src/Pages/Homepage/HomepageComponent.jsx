import React from 'react';
import DirectoryComponent from '../../Components/Directory/DirectoryComponent'
import './HomepageComponent.scss';



const Homepage =({history})=>{
    console.log("????????//")

    console.log(history)

    return(
        <div className='homepage'>
        <DirectoryComponent />
    
    </div>
    )

}
    
    




export default Homepage
