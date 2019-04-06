import * as React from 'react'
import Markdown from 'react-markdown'
import './style'

interface Props extends IPost {}

function Post({ id, body }: Props) {
  return (
    <div className='post'>
      <div className='post-header'>
        <a href='#'>#{id}</a>
      </div>
      <Markdown className='post-body' source={body} />
    </div>
  )
}

export default Post
