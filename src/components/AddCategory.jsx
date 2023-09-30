import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValues, setInputValues] = useState('')


    const onInputChange = ({target}) =>{
        setInputValues(target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const newInputValue = inputValues.trim();
        if(newInputValue.length <=1)return;
        onNewCategory(newInputValue);
        setInputValues('');
    }
  return (
    <form onSubmit={onSubmit}>
         <input
        type='text'
        placeholder='Buscar gifs...'
        value={inputValues}
        onChange={onInputChange}
    />
    </form>
    )
}
