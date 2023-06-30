import React, { Fragment, useState } from "react";
import {FiPlusCircle,FiMinusCircle} from "react-icons/fi"
const sellData=[
    {"id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{"rate":3.9,"count":120}}
    ,{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}}
]

const Sell =()=>{
    const [products,setProducts] = useState(sellData)
    // const [sellMap,setSellMap]=useState([])
// const sellFunc=(id)=>{
//     const filtersell = sellData.find((item) => item.id === id)
//     setSellMap(filtersell)
// }


    const crease = (id) => {
        // const find = sellData.find(item => item.id === id)
        setProducts((prevProducts) => 
        prevProducts.map(product => 
            product.id === id ? {...product, count:product.rating.count}:product)
        )
    };
    return <Fragment>
        <div className="sell">
            {products.map((e)=>(
                <div className="sell_main">
                    <img className="sell_img" src={e.image} alt="" />
                    <h1 className="sell_count"><span className="sell_spam">Count</span>: {e.rating.count}$</h1>
                    <div className="sell_icons">
                        {/* <FiMinusCircle onClick={()=>sell<=0?setSell(0):setSell(sell-1)} className="sell_icons-react"/> */}
                            <div className="sell_number">
                                {e.rating.count}
                            </div>
                        <FiPlusCircle onClick={()=> crease(e.id)} className="sell_icons-react"/>
                    </div>
                </div>
            ))}
        </div>
    </Fragment>

}

export default Sell