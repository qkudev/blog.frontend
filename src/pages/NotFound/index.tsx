import * as React from 'react'
import { Page } from '../../components'
import { Link } from 'react-router-dom'
import './style'

function NotFound() {
  return (
    <Page className='not-found'>
      <div id='page-not-found'>
        <div className='display-1'>404</div>
        <h1>NOT FOUND</h1>
      </div>
      <Link to='/'>Back to homepage</Link>
    </Page>
  )
}

export default NotFound
