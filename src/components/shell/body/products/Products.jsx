import React from "react";
import style from './Products.module.css'

const Products = () => {
    const products = [
        {id: 1, product: "Integral Basics"},
        {id: 2, product: "Indefinite Integral Basics"},
        {id: 3, product: "Integration by parts"},
        {id: 4, product: "Reverse Chain rule"}
    ];
    console.log(products.length)
    const itemProduct = products.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <img className={style.product__photo} src=""  alt="" />
                <div className={style.product__content}>
                    <div className={style.product__info}>
                        <div>
                            <span className={style.product__info_title}>{product.product}</span>
                        </div>
                        <span className={style.product__info_subtitle}>Introduction to integration operation...</span>
                    </div>
                    <div className={style.product__buttons}>
                        <button className={style.product__buttons_item} type="button">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    });


    return <React.Fragment>
        <div className={style.products}>
            <div className={style.products__header}>
                <div className={style.products__header_strip}>
                    <div/>
                </div>
                <span className={style.products__header_title}>Products</span>
            </div>
            <div className={style.products__body}>
                <div className={style.products__menu}>
                    <button className={style.products__menu_link} value="all" type="submit">All</button>
                    <button className={style.products__menu_link} value="math" type="submit">Math</button>
                    <button className={style.products__menu_link} value="programming" type="submit">Programming</button>
                    <button className={style.products__menu_link} value="physics" type="submit">Physics</button>
                </div>
                <div className={style.product__items}>
                    {itemProduct}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Products;