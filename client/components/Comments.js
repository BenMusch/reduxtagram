import React from 'react'

const Comment = (props) => {
  return (
    <div className="comment">
      <p>
        <strong>{props.user}</strong>
        {props.text}
        <button className="remove-comment">&times;</button>
      </p>
    </div>
  )
}

const Comments = (props) => {
  return (
    <div className="comments">
      {props.postComments.map((comment, i) => <Comment {...comment} key={i}/>)}
      <form ref="commentForm" className="comment-form">
        <input type="text" ref="author" placeholder="author"/>
        <input type="text" ref="comment" placeholder="comment"/>
        <input type="submit" hidden />
      </form>
    </div>
  )
}

export default Comments
