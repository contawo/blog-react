import React from 'react'

const Comment = ({author, comment}) => {
  return (
    <div className="blogs-view-container-comment-show-each">
        <h4>{author}</h4>
        <p>{comment}</p>
    </div>
  )
}

export default Comment