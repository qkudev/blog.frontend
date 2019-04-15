import * as React from 'react'
import './style'

interface Props {
  className?: string
  children?: React.ReactNode
}

function Page({ className, children }: Props) {
  return <div className={`page ${className || ''}`}>{children}</div>
}

export default Page
