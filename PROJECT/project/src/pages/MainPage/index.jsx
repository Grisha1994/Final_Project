import React from 'react'
import NewSeason from '../../components/NewSeason'
import Catalog from '../../components/Catalog'
import Discount from '../../components/Discount'
import Sale from '../../components/Sale'

export default function MainPage() {
  
  return (
    <div>
        <NewSeason/>
        <Catalog/>
        <Discount/>
        <Sale/>
    </div>
  )
}
