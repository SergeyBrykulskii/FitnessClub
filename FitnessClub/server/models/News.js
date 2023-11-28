import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 3,
        max: 200,
    },
    preview: {
        type: String,
        required: true,
        min: 3,
        max: 400,
    },
    content: {
        type: String,
        required: true,
        min: 3,
        max: 4000,
    },
},
{
    timestamps: true,
},
);

export default mongoose.model("News", NewsSchema)