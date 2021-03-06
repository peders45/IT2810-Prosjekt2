import React, { useEffect, useState } from 'react';

import './ImageBox.css'

//Functional component for showing images
//Takes in the selected image and selected tab as props
//The prop makes up the end part path of the image to be shown which is fetched as xml using ajax
const ImageBox = ({selectedImage, selectedTab}) => {
    const [image, setImage] = useState([]);
    const url = 'media/svg/'+selectedTab+'/'+selectedImage+'.svg';

    useEffect(() => {
        const currentImage = sessionStorage.getItem(selectedImage + selectedTab);

        async function getImage() {
            const response = await fetch(url);
            const image = await response.text();
            sessionStorage.setItem(selectedImage + selectedTab, image);
            setImage(image);
        }

        if (currentImage != null) {
            setImage(currentImage);
        } else {
            getImage();
        }
    }, [selectedImage, selectedTab, url]);


    return(
        <div className="svg-container" dangerouslySetInnerHTML={{__html: image}} />
    );
};

export default ImageBox;
