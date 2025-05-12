import Post from './post.model.js'

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, course, year, projectLink } = req.body

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, description, course, year, projectLink },
            { new: true }
        )

        if (!updatedPost) {
            return res.status(404).send({ message: "Publicación no encontrada" })
        }

        res.status(200).send(updatedPost)
    } catch (error) {
        res.status(400).send({
            message: "Error al actualizar la publicación",
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

export const getPostsByYear = async (req, res) => {
    try {
        const { year } = req.params
        const posts = await Post.find({ year }).sort({ createdAt: -1 })
        if (posts.length === 0) {
            return res.status(404).send(
                { 
                    message: `No se encontraron publicaciones para el año: ${year}` 
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
