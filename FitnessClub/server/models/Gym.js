import mongoose from "mongoose";

const GymSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 40,
    },
    address: {
        type: String,
        required: true,
        min: 3,
        max: 40,
    },
},
{
    timestamps: true,
},
);

export default mongoose.model("Gym", GymSchema);