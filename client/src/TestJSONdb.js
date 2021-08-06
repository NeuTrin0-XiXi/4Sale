import React from 'react';
import { useState , useEffect } from 'react';
import TestJSONdb2 from './TestJSONdb2';

const TestJSONdb = () => {

    const [blogs , setBlogs] = useState(null);

    useEffect (() => {
        fetch(" http://localhost:5000/database")
        .then(res => {
                return res.json();
            })
            
            .then((data) => setBlogs(data.productDetails))  //note = map function accepts arrays and not object , so , we are supposed to write the database in the form of an array(like we have written the product details in the database) and not as an object (ie not with curly braces but with [])
           
            },[]
        )
    

    return (
        <div>
            Hello ;
           {blogs?.map(blog => <div>{blog.author}</div>)}
            
        </div>
    );
}

export default TestJSONdb
