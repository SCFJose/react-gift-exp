import React, { useEffect, useState } from 'react'
import { getGifs } from '../Helpers/GetGifs';

export const useFetchGif = (category) => {

    const [images, setImages] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
        .then(x => {
            setImages(x);
            setIsLoading(false);
        });
    }, [ ]);

    return{
        images: images,
        isLoading: isLoading
    }
}
