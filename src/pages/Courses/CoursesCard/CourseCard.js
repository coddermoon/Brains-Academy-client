import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const CourseCard = () => {

    const [categories,setCategories]= useState([])

    useEffect(()=>{
        fetch('https://learning-platform-assignment.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    console.log(categories)

    return (
        <div className='mt-5'>
            <div className="courseCategory text-center">

{
    categories.map(category=> <Button
    key={category.category}
    variant="outline-primary"
    className='mx-2'
    >{category.name}</Button>)
}

        

            </div>
            thsi course card
        </div>
    );
};

export default CourseCard;