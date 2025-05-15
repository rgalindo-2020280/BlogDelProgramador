import { body, param } from "express-validator"
import { validateErrorWithoutImg } from "./validate.error.js"

export const updatePostValidator = [
  param('id', 'ID inválido').isMongoId(),
  body('title', 'El título debe ser una cadena de texto')
    .optional()
    .notEmpty()
    .isString(),
  body('description', 'La descripción debe ser una cadena de texto')
    .optional()
    .notEmpty()
    .isString(),
  body('course', 'El curso debe ser una cadena de texto')
    .optional()
    .notEmpty()
    .isString(),
  body('year', 'El año debe ser un número entero válido')
    .optional()
    .notEmpty()
    .isInt(),
  body('projectLink', 'El enlace del proyecto debe ser una URL válida')
    .optional()
    .notEmpty()
    .isURL(),
  validateErrorWithoutImg
]

export const getPostsByCourseValidator = [
  param('course', 'El curso debe ser una cadena de texto válida')
    .notEmpty()
    .isString(),
  validateErrorWithoutImg
]

export const getPostsByYearValidator = [
  param('year', 'El año debe ser un número entero válido')
    .notEmpty()
    .isInt(),
  validateErrorWithoutImg
]

export const addCommentValidator = [
  body('postId', 'El ID del post es obligatorio y debe ser texto')
    .notEmpty()
    .isString(),
  body('name', 'El nombre es obligatorio y debe ser texto')
    .notEmpty()
    .isString(),
  body('content', 'El contenido es obligatorio y debe ser texto')
    .notEmpty()
    .isString(),
  validateErrorWithoutImg
]

export const updateCommentValidator = [
  param('id', 'El ID del comentario es obligatorio y debe ser texto')
    .notEmpty()
    .isString(),
  body('name', 'El nombre debe ser texto')
    .optional()
    .notEmpty()
    .isString(),
  body('content', 'El contenido debe ser texto')
    .optional()
    .notEmpty()
    .isString(),
  validateErrorWithoutImg
]
