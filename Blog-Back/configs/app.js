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
                title: "Pagina Web",
                description: "Se realizo una pagina web con 3 pestañas, una recreacion de la pagina de Kinal, una de nuestra autobiografia y otra de algo que nos gusta.",
                course: "Taller",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/PaginaWeb.git",
                createdAt: new Date()
            },
            {
                title: "Adoption System",
                description: "Se realizo un sistema de adopcion de mascotas, donde se puede ver la informacion de las mascotas y adoptar una.",
                course: "Taller",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/AdoptionSystem.git",
                createdAt: new Date()
            },
            {
                title: "Proyecto Coperex",
                description: "Se realizo un programa para ayudar a  la empresa Coperex a llevar el control de las empresas que estan afiliadas",
                course: "Taller",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/ProyectoCoperex---2020280.git",
                createdAt: new Date()
            },
            {
                title: "Proyecto Bimestral Online Store",
                description: "Se realizo un sistema de tienda online en donde el usuario puede comprar productos, visualizar su carrito y realizar los Pagos",
                course: "Taller",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/OnlineStore.git",
                createdAt: new Date()
            },
            {
                title: "Proyecto Novatec",
                description: "Se hizo una aplicacion para la venta de articulos tecnologicos, donde el usuario puede comprar productos, tambien almacena los datos de los proveedores a la empresa y guarda la informacion de los usuarios",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/sgomez-2020088/NovaTec.git",
                createdAt: new Date()
            },
            {
                title: "Actividad 1",
                description: "Se realizo una infografia sobre los conceptos de HTML, CSS, Flexbox, Bootstrap, Preprocesadores CSS, LESS, SASS y PUG.",
                course: "Tecnología",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/Tecnolog-a-6to-Perito.git",
                createdAt: new Date()
            },
            {
                title: "Actividad 2",
                description: "Se realiza un mapa conceptual sobre js, arquitectura mvc y mvvm, Ajax, Frameworks y plataformas y herramientas",
                course: "Tecnología",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/Tecnolog-a-6to-Perito.git",
                createdAt: new Date()
            },
            {
                title: "Actividad 3",
                description: "Se realizo un mapa mental sobre los temas hosting, dominio, cliente-servidor, web semantica, webm, canvas y w3c",
                course: "Tecnología",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/Tecnolog-a-6to-Perito.git",
                createdAt: new Date()
            },
            {
                title: "Actividad 4",
                description: "Se hizo una infografia sobre los conceptos de React, su documentacion, su rendimiento, su soporte y su creador",
                course: "Tecnología",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/Tecnolog-a-6to-Perito.git",
                createdAt: new Date()
            },
            {
                title: "Investigacion API's",
                description: "Se realizo una investigacion formato apa sobre las API's, su definicion, como utilizarla y su importancia",
                course: "Tecnología",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/Tecnolog-a-6to-Perito.git",
                createdAt: new Date()
            },
            {
                title: "Agenda Web",
                description: "Se realizo una agenda web, donde se podia ver los usuarios, podiamos observar nuestro perfil, ver a los usuarios destacados y una lista de tareas.",
                course: "Practica Supervisada",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/AgendaWeb.git",
                createdAt: new Date()
            },
            {
                title: "Gestor Academico",
                description: "Se realizo un gestor academico en el cual los usuarios no podian ver los cursos a los que estaban asignados mientras el administrador puede ver y agregar los cursos",
                course: "Practica Supervisada",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/GestorAcademico.git",
                createdAt: new Date()
            },
            {
                title: "Gestor de Opiniones",
                description: "Se realizo un Gestor de opiniones donde las personas podian comentar sus opiniones sobre una publicacion",
                course: "Practica Supervisada",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/GestionDeOpiniones.git",
                createdAt: new Date()
            },
            {
                title: "Gestor de Opiniones",
                description: "Se realizo un Gestor de opiniones donde las personas podian comentar sus opiniones sobre una publicacion",
                course: "Practica Supervisada",
                year: 2025,
                projectLink: "https://github.com/rgalindo-2020280/GestionDeOpiniones.git",
                createdAt: new Date()
            },
            {
                title: "Almacenadora",
                description: "Se realizo un proyecto grupal donde se hizo una almacenadora para la gestion de los productos",
                course: "Practica Supervisada",
                year: 2025,
                projectLink: "https://github.com/dreyes-2022433/Almacenadora.git",
                createdAt: new Date()
            },
            {
                title: "Calculadora Grafica",
                description: "Se realizo una calculadora grafica parecida a la de windows con varias funciones",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/CalculadoraGrafica.git",
                createdAt: new Date()
            },
            {
                title: "KinalStore",
                description: "Se realizo una aplicacion en Java Standard Edition sobre una tienda online donde se puedes hacer reportes y generacion de facturas",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/KinalStore.git",
                createdAt: new Date()
            },
            {
                title: "Spring Boot",
                description: "Primer proyecto de Spring Boot, para la gestion de clientes, facturas, empleados y productos",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/SpringBoot.git",
                createdAt: new Date()
            },
            {
                title: "VentasJavaEE",
                description: "Se realiza para el manejar Clientes, Empleados, Productos y Ventas",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/VentasJavaEE.git",
                createdAt: new Date()
            },
            {
                title: "Ahorcado",
                description: "Se hace un juego de ahorcado en js donde el usuario tiene que adivinar las palabras relacionadas al la programacion",
                course: "Tecnología",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/Ahorcado.git",
                createdAt: new Date()
            },
            {
                title: "Pagina Web - 2024",
                description: "Se realiza una pagina web sobre hollywood, donde se ven los ultimos estrenos, algunas estrellas y su historia",
                course: "Tecnología",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/PaginaWeb-2024.git",
                createdAt: new Date()
            },
            {
                title: "Compra Vehiculo",
                description: "Se realiza un CRUD en java de compra de vehiculos, donde el usuario puede ver los vehiculos, agregar uno nuevo, editarlo y eliminar",
                course: "Taller",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/CrudVehiculo.git",
                createdAt: new Date()
            },
            {
                title: "Pilares POO",
                description: "Se hace una tarea sobre los pilares de la programacion orientada a objetos",
                course: "Tecnología",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/PilaresPOO.git",
                createdAt: new Date()
            },
            {
                title: "Sistema de colegio",
                description: "Se hace un sistema de colegio donde se puedes obtener los estudiantes aprobados, reprobados, las notas de los cursos y la gestion de los cursos",
                course: "Taller",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/SistemaDeColegio.git",
                createdAt: new Date()
            },
            {
                title: "Calculadora - 2023",
                description: "Se hace una calculadora como proyecto final con 32 funciones donde se puedes hacer distintos tipos de operaciones",
                course: "Taller",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/CalculadoraBim.git",
                createdAt: new Date()
            },
            {
                title: "Sistema Libro-Persona",
                description: "Se hace un sistema de libro y persona donde se pueden ver los libros, agregar uno nuevo, editarlo y eliminar",
                course: "Tecnología",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/SistemaLibro-Persona.git",
                createdAt: new Date()
            },
            {
                title: "Ejercicios Java",
                description: "Se hicieron varios ejercicios en java para subier en plataforma de ejercicios",
                course: "Taller",
                year: 2023,
                projectLink: "https://github.com/rgalindo-2020280/EjerciciosJava.git",
                createdAt: new Date()
            },
            {
                title: "Singleton Grafico",
                description: "Se hace un singleton grafico donde se puede ver el patron de diseño singleton",
                course: "Taller",
                year: 2024,
                projectLink: "https://github.com/rgalindo-2020280/SingletonGrafico.git",
                createdAt: new Date()
            },
            {
                title: "Ejercicios JavaScript",
                description: "Se hicieron unas series de ejercicios grupales en nodejs",
                course: "Taller",
                year: 2025,
                projectLink: "https://github.com/dreyes-2022433/Ejercicios.git",
                createdAt: new Date()
            }
        ]

        for (const post of postData) {
            const existingPost = await Post.findOne({ title: post.title })
            if (!existingPost) {
                await Post.create(post) 
                console.log(`Post "${post.title}" created correctly`)
            } else {
                console.log(`Post "${post.title}" already exists in the database`)
            }
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