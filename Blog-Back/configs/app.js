'use strict'
import Post from '../src/post/post.model.js'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import postRoutes from '../src/post/post.routes.js'
import commentRoutes from '../src/coments/comments.routes.js'

const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/post', postRoutes)
    app.use('/v1/comment', commentRoutes)
}

const createPosts = async () => {
    try {
        const postData = [
            {
                title: "Curso de React: Introducción",
                description: "Este es el primer módulo del curso de React, donde aprenderás lo básico sobre este framework.",
                course: "Taller",
                createdAt: new Date()
            },
            {
                title: "Curso de Node.js: Backend avanzado",
                description: "En este curso profundizaremos en el desarrollo de aplicaciones backend con Node.js.",
                course: "Taller",
                createdAt: new Date()
            },
            {
                title: "Curso de MongoDB: Base de datos NoSQL",
                description: "Aprende todo sobre MongoDB y cómo utilizar esta base de datos NoSQL en aplicaciones modernas.",
                course: "Tecnología",
                createdAt: new Date()
            }
        ]

        const existingPosts = await Post.find()
        if (existingPosts.length === 0) {
            await Post.insertMany(postData)
            console.log("Post created correctly")
        } else {
            console.log("Posts already exist in the database")
        }
    } catch (error) {
        console.error("Error when creating posts:", error)
    }
}

createPosts()

export const initServer = async()=>{
    const app = express()
    try {   
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    } catch (err) {
        console.error('Server init failed', err)
    }
}