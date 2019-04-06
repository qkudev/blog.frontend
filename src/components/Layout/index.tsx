import * as React from 'react'
import { Header, Spinner } from '../index'
import './style'

interface Props {
  loading: boolean
  error?: any
  children?: React.ReactNode
}

function Layout({ children, loading, error }: Props) {
  if (error) {
    return (
      <div className='app'>
        <Header />
        <div id='content' className='layout content'>
          Something went wrong :(
        </div>
      </div>
    )
  }
  if (loading) {
    return <Spinner />
  }
  return (
    <div className='app'>
      <Header />
      <div id='content' className='layout content'>
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  loading: false
}

export default Layout
