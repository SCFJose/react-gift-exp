import React, { useState } from 'react'
//import { AddCategory } from './components/AddCategory';
//import { GridGif } from './components/GridGif';
//simplificado usando el archivo de "barril" el index
import { GridGif, AddCategory } from './components';

export const GifExpertApp = () => {

    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState([]);

    const onAddCategory = (value) => {
        if(categories.indexOf(value) == -1){
            setCategories([value, ...categories]);
        }
        
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory = {onAddCategory} />
            {/* Forma de hacerlo sin componente
                categories.map(categories => {
                <div key={categories}>
                    <li >{categories}</li>
                </div>
            })*/
            
            categories.map(category => <GridGif key = {category} category = {category} />)
            }
        </>
    );
}
