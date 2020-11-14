import React from 'react'


const Menu = ({menuItems}) => {
    return(
    <div className="container">
        {menuItems.map(menu=>{
            const {id, title, price, img, desc, category} = menu
            return (
            <div key={id} className="menu">
                <img src={img} alt={title} className="photo"/>
                <div>
                    <div className="title-price">
                        <h3>{title}</h3>
                        <p className="price">${price}</p>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
            )
        })}
    </div>
    )
}

export default Menu