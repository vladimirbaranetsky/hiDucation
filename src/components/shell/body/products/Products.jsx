import style from './Products.module.css'
import photoMath from "../../../../images/product_math.jpg";
import photoProg from "../../../../images/product_prog.jpg";
import photoPhys from "../../../../images/product_phys.jpg";


const Products = () => {


    const productsMath = [
        {id: 1, product: "Integral Basics"},
        {id: 2, product: "Indefinite Integral Basics"},
        {id: 3, product: "Integration by parts"},
        { id: 4, product: "Reverse Chain rule"}
    ];

    const productsProg = [
        {id: 1, product: "Java"},
        {id: 2, product: "Python"},
        {id: 3, product: "JavaScript"},
        {id: 4, product: "C++"}
    ]

    const productsPhys = [
        {id: 1, product: "Classical Physic"},
        {id: 2, product: "Relativistic Physic"},
        {id: 3, product: "Quantum Physic"},
    ]


    const itemProductMath = productsMath.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <img className={style.product__photo} src={photoMath}  alt="" />
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

    const itemProductProg = productsProg.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <img className={style.product__photo} src={photoProg}  alt="" />
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

    const itemProductPhys = productsPhys.map(product => {
        return <div key={product.id} className={style.product__item}>
            <div className={style.product__item_wrapper}>
                <img className={style.product__photo} src={photoPhys}  alt="" />
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

    const allSubjects = () => {
        return {
            itemProductMath,
            itemProductProg,
            itemProductPhys
        }
    }

    const handleSubject = (e) => {
        e.preventDefault()
        const value = e.target.value
        switch (value){
            case "all":
                return allSubjects
            case "math":
                return itemProductMath
            case "programming":
                return itemProductProg
            case "physics":
                return itemProductPhys
            default :
                return allSubjects
        }
    }


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
                    <button onSubmit={handleSubject} className={style.products__menu_link} value="all" type="submit">All</button>
                    <button onSubmit={handleSubject} className={style.products__menu_link} value="math" type="submit">Math</button>
                    <button onSubmit={handleSubject} className={style.products__menu_link} value="programming" type="submit">Programming</button>
                    <button onSubmit={handleSubject} className={style.products__menu_link} value="physics" type="submit">Physics</button>
                </div>
                <div className={style.product__items}>
                    {itemProductMath}, {itemProductPhys},{itemProductProg}
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Products;