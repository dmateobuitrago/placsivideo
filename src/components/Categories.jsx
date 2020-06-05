import React, { Children } from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children,title}) => {
    return (
        <div className="categories">
            <h3 class="categories__title">{title}</h3>
            {children}
        </div>
    )
}

export default Categories;