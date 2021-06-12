import React from "react";
import style from './Products.module.css'

const Products = (props) => {

    const filterProducts = props.productsFilter;

    const handleChangeCategory = (event) => {
        event.preventDefault();
        const name = event.target.name
        props.updateProductFilter(name);
    }
    const itemProducts = filterProducts.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <img className={style.product__photo} src={product.photo}  alt="" />
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
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button" name="all" >All</button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button" name="math" >Math</button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button" name="programming" >Programming</button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button" name="physics" >Physics</button>
                </div>
                <div className={style.product__items}>
                    {itemProducts}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Products;