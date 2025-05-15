import { Router } from 'express'
import { 
    getAllPosts,
    getPostsByCourse,
    getPostsByYear,
    updatePost
} from './post.controller.js'

import { updatePostValidator, getPostsByCourseValidator, getPostsByYearValidator } from '../../helpers/validator.js'

const api = Router()

api.get(
    '/getPosts',
    getAllPosts
)/

api.get(
    '/:course',
    [getPostsByCourseValidator],
    getPostsByCourse
)

api.put(
    '/:id',
    [updatePostValidator],
    updatePost
)

api.get(
    '/year/:year',
    [getPostsByYearValidator],
    getPostsByYear
)

export default api
