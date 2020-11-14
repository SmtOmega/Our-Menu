import React from 'react'


const Category = ({categories, showMenu}) => {
    return (
    <div className="btn-container">
        {categories.map((category, index)=>{
            return(
            <div key={index} >
                <button onClick={()=> showMenu(category)} className="btn">{category}</button>
            </div>
            )
        })}
    </div>
    )
}

export default Category