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
    memberships: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Membership",
    },
},
{
    timestamps: true,
},
);

export default mongoose.model("Gym", GymSchema);