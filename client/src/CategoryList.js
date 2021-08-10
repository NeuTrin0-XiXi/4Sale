import React from 'react';
import {Checkbox , Collapse} from 'antd';
const {Panel} = Collapse;

const categories = [
    {
        "id" : 1,
        "category": "sports"
    },
    
    {
        "id" : 2,
        "category": "books"
    },
    
    {
        "id": 3,
        "category": "utilities"
    },
    
    {
        "id" : 4,
        "category": "games"
    }
    
];

const renderCheckboxLists = () => {
    categories.map(({id , category}) => (
        <React.Fragment key = {id}>
            <Checkbox
            onChange 
            // = {() => handleToggle(value.id)}
            type = "checkbox"
            checked
            />
            <span>{category}</span>
            </React.Fragment>
    ))
} 

const CategoryList = () => {
    return (
        <div>
            <Collapse defaultActiveKey = {['0']}>
                <Panel header key = "1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CategoryList;
