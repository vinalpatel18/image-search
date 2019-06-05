import React from 'react';
import '../style/Imagelist.css'
import ImageCard from './imagecard'

const imagelist = (props)=>{
    const images = props.images.map((image) => {
        return (        
            <ImageCard key = {image.id} image={image}/>       
        )})
    return  (<div className ='image-list'>
    {images}
</div>)
}

export default imagelist