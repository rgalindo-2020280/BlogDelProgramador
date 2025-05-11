import { Schema, model } from "mongoose"


const PostSchema = new Schema({
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        course: { 
            type: String,
            enum: ["Taller", "Tecnología", "Practica Supervisada"],
            required: true 
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    }
)

export default model('Post', PostSchema)