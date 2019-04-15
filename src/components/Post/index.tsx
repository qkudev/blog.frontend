import * as React from 'react'
import Markdown from 'react-markdown'
import './style'

interface Props extends IPost {}

function Post({ body }: Props) {
  return (
    <div className='post'>
      <Markdown className='post-body' source={body} />
    </div>
  )
}

export default Post
