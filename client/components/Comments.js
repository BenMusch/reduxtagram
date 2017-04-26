import React from 'react'


const Comment = (props) => {
  return (
    <div className="comment">
      <p>
        <strong>{props.user}</strong>
        {props.text}
        <button className="remove-comment" onClick={props.handleRemove}>&times;</button>
      </p>
    </div>
  )
}

class Comments extends React.Component {
  handleSubmit(event) {
    event.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  handleRemove(event, i) {
    const { postId } = this.props.params
    this.props.removeComment(postId, i)
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => {
          return <Comment {...comment} handleRemove={this.handleRemove.bind(this, null, i)} key={i}/>
        })}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments
