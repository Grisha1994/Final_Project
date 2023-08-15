import React from 'react'
import img from '../media/error.png'
import Container from '../UI/Container'
import s from './style.module.css'

export default function index() {
  return (
    <Container className={s.container}>
      <img src={img} alt="error" />
    </Container>
  )
}
