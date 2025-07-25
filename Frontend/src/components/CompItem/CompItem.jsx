
import React, { useContext } from 'react'
import './CompItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import { toast } from 'react-toastify'
import { NavLink, Link } from 'react-router-dom'
import { Items } from '../../assets/Items/Item'


const CompItem = ({ id, name, price, description, image, stock }) => {


    const { cartItems, AddToCart, RemoveFromCart, url } = useContext(StoreContext)
    const itemOutofstock = () => {
        toast.error("Item is Out of stock")
    }
   

    return (

        <div className='food-item'>

            <div className="food-item-img-container">
                {/* <Link to={`/CompInfo/${id}`}><img src={url + "/images/" + image} alt="" className="food-item-image" /></Link> */}
                <Link to={`/CompInfo/${id}`}>
                    {Items[image] ? <img src={Items[image]} alt="" className="food-item-image" /> : <img className=" picture-loader" src={assets.picture_loader} alt="" />}
                </Link>
                {/* <hr style={{ color: "gray" }} /> */}
                {cartItems && !cartItems[id] ? (
                    stock === "Out of stock" ? (
                        <img
                            className="add"
                            onClick={itemOutofstock}
                            src={assets.add_icon_white}
                            alt="Add to cart"
                        />
                    ) : (
                        <img
                            className="add"
                            onClick={() => AddToCart(id)}
                            src={assets.add_icon_white}
                            alt="Add to cart"
                        />
                    )
                ) : cartItems ? (
                    <div className="Comp-item-count">
                        {stock === "Out of stock" ? (
                            <>
                                <img
                                    onClick={() => RemoveFromCart(id)}
                                    src={assets.remove_icon_red}
                                    alt="Remove from cart"
                                />
                                <p>{cartItems[id]}</p>
                                <img
                                    onClick={itemOutofstock}
                                    src={assets.add_icon_green}
                                    alt="Add to cart"
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    onClick={() => RemoveFromCart(id)}
                                    src={assets.remove_icon_red}
                                    alt="Remove from cart"
                                />
                                <p>{cartItems[id]}</p>
                                <img
                                    onClick={() => AddToCart(id)}
                                    src={assets.add_icon_green}
                                    alt="Add to cart"
                                />
                            </>
                        )}
                    </div>
                ) : null}

            </div>

            <NavLink to={`/CompInfo/${id}`}>
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                    </div>
                    <p className="food-item-desc">{description}</p>
                    <div className='price-stock'>
                        <p className="food-item-price">₹{price}</p>
                        {/* <p className={stock === "In stock" ? "stockIn" : "stockOut"}>{stock}</p> */}
                        {stock === "Out of stock" ? <p className='stockOut'>{stock}</p> : <></>}
                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default CompItem
