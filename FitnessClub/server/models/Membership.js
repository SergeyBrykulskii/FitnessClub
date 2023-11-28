import mongoose from "mongoose";

const MembershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 40,
    },
    description: {
        type: String,
        required: true,
        min: 3,
        max: 400,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    gym: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gym",
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
},
{
    timestamps: true,
},
);

export default mongoose.model("Membership", MembershipSchema);