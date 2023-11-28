import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        unique: true,
    },  
    passwordHash: {
        type: String,
        required: true,
        min: 6,
    },
},
{
    timestamps: true,
},
);

export default mongoose.model("User", UserSchema);