import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector} from 'react-redux'
import DeleteIcon from "../static/icons/delete.png"
import { del } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'



export default function Cart() {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    console.log(cart)

    const delProduct = (position) => {
        dispatch(del({
            position: position
        }
        ))
    }

  return (
    <div className='container'>
        <Header/>
        <div className='row'>
            <div className='col-12 cart-text'>
                <h4>Оформление товара</h4>
            </div>
        </div>
        <div className='row'>
            <div className='col-5 col-md-7 cart-text'>
                <p class="font-weight-normal">Продукт</p>
            </div>
            <div className='col-1 col-md-1 cart-text text-center'>
                <p class="font-weight-normal">Цена</p>
            </div>
            <div className='col-3 col-md-2 cart-text text-center'>
                <p class="font-weight-normal">Количество</p>
            </div>
            <div className='col-2 col-md-1 cart-text text-center'>
                <p class="font-weight-normal">Сумма</p>
            </div>
            <div className='col-1 col-md-1 cart-text text-center'>

            </div>
        </div>
        {cart.map((e) => <div className='row mb-2'>
            <div className='col-5 col-md-7 cart-text'>
                <div className='row '>
                    <div className='col-5'>
                        <img src={e.image} className="img-fluid img-cart"></img>
                    </div>
                    <div className='col-7'>
                        <p className='cart-table-text'>{e.title}</p>
                        <p className='cart-table-text'>Аромат: {e.aroma}</p>
                        <p className='cart-table-text'>Фитиль: {e.fitil}</p>
                        <p className='cart-table-text'>Объем: {e.volume}</p>
                    </div>
                </div>
            </div>
            <div className='col-1 col-md-1 cart-text text-center'>
                <p className='cart-table-text'>{e.price}</p>
            </div>
            <div className='col-3 col-md-2 cart-text text-center'>
                <p className='cart-table-text'>{e.quantity}</p>
            </div>
            <div className='col-2 col-md-1 cart-text text-center'>
                <p className='cart-table-text'>{e.price * e.quantity}</p>
            </div>
            <div className='col-1  col-md-1 cart-text text-center'>
                <button className='btn-cart'><img src={DeleteIcon} className='btn-cart-img' onClick={() => delProduct(e.position)}/></button>
            </div>
        </div>)}
        <Link to={"/payment"}><button type="button" className={classNames("btn btn-outline-secondary btn-cart", {"disabled": cart.length <= 0})}>Заказать</button></Link>
        <Footer/>
    </div>
  )
}
