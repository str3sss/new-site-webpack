import React from 'react'
import Header from './Header'

type Props = {
  children: JSX.Element
}

function Layout({children} : Props) {
  return (
    <div className="App">
    <Header />
    {children}
    </div>
  )
}

export default Layout