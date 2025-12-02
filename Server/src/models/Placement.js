import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    companyName: { type: String, required: true },

    package: { type: String, required: true },  // CTC

    year: { type: Number, required: true },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Placement", placementSchema);
