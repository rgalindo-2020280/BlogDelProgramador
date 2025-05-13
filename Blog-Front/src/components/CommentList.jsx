import React from 'react'

const CommentList = ({ comments, onEditComment, onDeleteComment }) => {
    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <div key={comment._id} className="comment-item">
                    <h4>{comment.name}</h4>
                    <p>{comment.content}</p>
                    <p><small>Publicado el: {new Date(comment.createdAt).toLocaleString()}</small></p> 
                    <button onClick={() => onEditComment(comment)}>Editar</button>
                    <button onClick={() => onDeleteComment(comment._id)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}

export default CommentList
