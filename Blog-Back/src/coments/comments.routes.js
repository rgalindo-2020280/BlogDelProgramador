import { Router } from 'express'
import { 
    addComment,
    getComments,
    deleteComment,
    updateComment
} from './comments.controller.js'

import { addCommentValidator, updateCommentValidator } from '../../helpers/validator.js'

const api = Router();

api.post(
    '/comment',
    [addCommentValidator],
    addComment
)

api.get(
    '/comments/:postId',
    getComments
)

api.delete(
    '/comment/:id',
    deleteComment
)

api.put(
    '/comment/:id',
    [updateCommentValidator],
    updateComment
)

export default api
