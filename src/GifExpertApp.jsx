import {useState} from 'react'
import { AddCategory, GifGrid } from './components';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Gorillaz']);

    const onAddCategory = (newCategory) =>{
        const sameCategory = categories.find(cat=>cat.toLowerCase() === newCategory.toLowerCase());
        if(!sameCategory)setCategories([newCategory,...categories]);
        ;
    }
    return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
        />
            {categories.map(category=>
                 (
                    <GifGrid key={category} category={category}/>
                )
            ) }
    </>
  )
}

export default GifExpertApp