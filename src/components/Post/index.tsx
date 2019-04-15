import * as React from 'react'
import Markdown from 'react-markdown'
import moment from 'moment'
import './style'

type Props = IPost

function date(date: string) {
  return moment(date).format('YYYY/MM/DD, hh:mm')
}

function Post({ body, createdAt }: Props) {
  return (
    <div className='post'>
      <Markdown className='post-body' source={body} />
      <div className='post-date'>{date(createdAt)}</div>
    </div>
  )
}

export default Post
