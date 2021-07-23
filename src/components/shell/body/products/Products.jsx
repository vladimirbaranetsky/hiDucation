import React, {useEffect, useState} from "react";
import style from './Products.module.css'
import {useSelector} from "react-redux";
import store from "../../../../store/store";
import {getProducts} from "../../../../actions/productsAction";
import products from "../Body";

const Products = (props) => {
    const theme = useSelector(state => state.theme.theme)
    const filterProducts = props.productsFilter;
    const[value, setValue] = useState('');

    // const filteredProducts = products.filter(product => {
    //     return product.displayName.toLowerCase().includes(value.toLowerCase());
    // })


    const handleChangeCategory = (event) => {
        event.preventDefault();
        const field = event.target.name
        props.updateProductFilter(field.toLowerCase());
    }

    const itemProduct = filterProducts.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <div className={style.product__background}>
                    <div className={style.background__oval_1}/>
                    <div className={style.background__oval_2}/>
                    <div className={style.background__oval_2_1}/>
                    <div className={style.background__oval_3}/>
                    <div className={style.background__oval_3_1}/>
                    <div className={style.background__oval_3_2}/>
                    <div className={style.background__oval_3_3}/>
                    <div className={style.background__oval_3_4}/>
                    <div className={style.background__oval_3_5}/>
                    <div className={style.background__oval_3_6}/>
                    <div className={style.background__oval_3_7}/>
                    <div className={style.background__oval_3_8}/>
                    <div className={style.background__oval_3_9}/>
                    <div className={style.background__oval_3_10}/>
                    <div className={style.background__oval_3_11}/>
                    <div className={style.background__oval_3_12}/>
                    <div className={style.product__title_wrapper}
                         style={theme === "dark" ? {backgroundColor: "black"} : {backgroundColor: "white"}}>
                        <span className={style.product__field}
                              style={theme === "dark" ? {color: "#40e0d0"} : {color: "#40e0d0"}}>{product.displayName}</span>
                    </div>
                </div>
                <div className={style.product__content}>
                    <div className={style.product__info}>
                        <div>
                            <span className={style.product__info_title}>{product.field}</span>
                        </div>
                        <span className={style.product__info_subtitle}>{product.description}</span>
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

                <div className={style.search__data}>
                    <input required className={style.input__search} onChange={(event) => setValue(event.target.value)} type="search" name="search" placeholder="Search in products"/>
                </div>

                <div className={style.products__menu}>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button"
                            name="all">All
                    </button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button"
                            name="math">Math
                    </button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button"
                            name="programming">Programming
                    </button>
                    <button className={style.products__menu_link} onClick={handleChangeCategory} type="button"
                            name="physics">Physics
                    </button>
                </div>
                <div className={style.product__items}>
                    {itemProduct}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Products;