import Comment from './comments.model.js';

export const addComment = async (req, res) => {
    try {
        const { postId, name, content } = req.body
        const newComment = new Comment({
        postId,
        name,
        content
        }
    )
        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
    res.status(400).send({
            message: "Error al crear el comentario",
            error
            }
        )
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const { name, content } = req.body

        const updatedComment = await Comment.findByIdAndUpdate(
        id,
        { name, content },
        { new: true }
        )
        if (!updatedComment) {
        return res.status(404).send(
            { 
                message: "Comentario no encontrado" 
            })
        }
        res.status(200).send(updatedComment);
    } catch (error) {
    res.status(400).send({
            message: "Error al actualizar el comentario",
            error
            }
        )
    }
}

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params   
    const deletedComment = await Comment.findByIdAndDelete(id)
    if (!deletedComment) {
      return res.status(404).send(
        { 
            message: "Comentario no encontrado" 
        })
    }
    res.status(200).send(
        { message: "Comentario eliminado con éxito" }
    )
  } catch (error) {
    res.status(400).send({
      message: "Error al eliminar el comentario",
      error
    })
  }
}

export const getComments = async (req, res) => {
    try {
        const { postId } = req.params
        const comments = await Comment.find({ postId }).sort({ createdAt: -1 })
        if (comments.length === 0) {
            return res.status(200).send({
                message: "No hay comentarios para esta publicación",
                comments: [] 
            })
        }
        res.status(200).send(comments);
    } catch (error) {
        console.error('Error al obtener los comentarios:', error)
        res.status(500).send({
            message: "Error al obtener los comentarios",
            error
        })
    }
}

