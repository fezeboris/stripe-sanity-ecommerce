import React, { useEffect, useState } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { runFireworks } from '../components/lib/utils'

function success () {
  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()
  const [order, setOrder] = useState()
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0),
    setTotalQuantities(0)
    runFireworks()
  }, [])
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill/>
        </p>
        <h2>Thank you for four order!</h2>
        <p className='email-msg'>
          Check your email inbox for the receipt
        </p>
        <p className='description'>
          If you have any question, please email
          <a href='mailto:borisfeze9@gmail.com'>borisfeze9@gmail.com</a>
        </p>
        <Link href='/'>
        <button className='btn' width='300px'>
          Continue Shopping
        </button>
        </Link>
      </div>
    </div>
  )
}

export default success
