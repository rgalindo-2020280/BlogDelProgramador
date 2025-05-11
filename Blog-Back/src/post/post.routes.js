import { Router } from 'express'
import { 
    getAllPosts,
    getPostsByCourse,
    updatePost
} from './post.controller.js'

const api = Router()

api.get(
    '/getPosts',
    getAllPosts
)

api.get(
    '/:course',
    getPostsByCourse
)

api.put(
    '/post/:id',
    updatePost
)

export default api
