import React, {useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen({}) {
  const location = useLocation()
  // const {id} = useParams()
  // const productId = id
  const qty = location.search ? location.search.split('=') : 1
  console.log('qty:', qty)

  return (
    <div>Cart</div>
  )
}

export default CartScreen