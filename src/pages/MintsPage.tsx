import React from 'react'
import DropZone from '../components/DropZone'

function MintsPage() {
  return (
    <div className='mints-content'>
      <h2>Ordinals Mints</h2>
      <DropZone />
      <p>BTC address where you want the inscription set to (optional)</p>
      <input type="text" placeholder='Receive BTC Address (optional)' />
      <button type="submit" className='submit-btn'>Submit & Pay Invoice</button>
    </div>
  )
}

export default MintsPage