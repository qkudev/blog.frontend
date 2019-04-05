import * as React from 'react'
import { Link } from 'react-router-dom'
import './style'

function Header() {
  return (
    <div id='app-header' className='layout header'>
      <Link id='header-link' to='/'>
        Show me them all
      </Link>
    </div>
  )
}

export default Header
