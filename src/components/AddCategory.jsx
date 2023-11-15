import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) =>{
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const val = inputValue.trim();
        if(val.length <= 1) return;

        onNewCategory(val); //función pasada por props
        setInputValue('');
    }
    
    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange}/>
        </form>   
    )
}
