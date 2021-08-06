import React from 'react'

const TestJSONdb2 = ({blogs , title}) => {
    return (
        <div>
            <div className = "blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className = "blog-preview" key = {blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </div>
            ))}

        </div>
        </div>
    )
}

export default TestJSONdb2


