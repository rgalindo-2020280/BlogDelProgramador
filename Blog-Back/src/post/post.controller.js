import Post from './post.model.js'

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, course } = req.body
        const post = await Post.findByIdAndUpdate(id, { title, description, course }, { new: true })

        if (!post) {
            return res.status(404).send(
                { 
                    message: "Publicación no encontrada" 
                }
            )
        }
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({
            message: "Error al actualizar publicación",
            error
        })
    }
}

export const getPostsByCourse = async (req, res) => {
    try {
        const { course } = req.params
        const posts = await Post.find({ course }).sort({ createdAt: -1 })
        if (posts.length === 0) {
            return res.status(404).send(
                { 
                    message: `No se encontraron publicaciones para el curso: ${course}` 
                }
            )
        }
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({
                message: "Error al obtener publicaciones filtradas",
                error
            }
        )
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).send({
                message: "Error al obtener publicaciones",
                error
            }
        )
    }
}
