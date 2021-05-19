import React from "react";

const Products = () => {
    const products = [
        {product: "Integral Basics"},
        {product: "Indefinite Integral Basics"},
        {product: "Integration by parts"},
        {product: "Reverse Chain rule"},
    ];
    console.log(products.length)
    const itemProduct = products.map(product => {
            return <div key={product.product} className="product__item">
                <div className="product__item-wrapper">
                    <img className="product__photo" src=""  alt="" />
                    <div className="product__content">
                        <div className="product__info">
                            <div>
                                <span className="product__info-title">{product.product}</span>
                            </div>
                            <span className="product__info-subtitle">Introduction to integration operation...</span>
                        </div>
                        <div className="product__button">
                            <button className="nav__link--btn btn__purchases" type="button">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
    });


    return <React.Fragment>
        <div className="content">
            <div className="container">
                <div className="content__header">
                    <div className="content__header-strip">
                        <div/>
                    </div>
                    <span className="content__header-title">hi Math Gaming Products</span>
                </div>
                <div className="content__body">
                    <div className="menu__products">
                        <button className="nav__link menu__link" value="all" type="submit">All</button>
                        <button className="nav__link menu__link" value="math" type="submit">Math</button>
                        <button className="nav__link menu__link" value="programming" type="submit">Programming</button>
                        <button className="nav__link menu__link" value="physics" type="submit">Physics</button>
                    </div>
                    <div className="product__items">
                            {itemProduct}
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Products;