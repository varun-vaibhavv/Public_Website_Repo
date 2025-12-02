import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    companyName: { type: String, required: true },

    description: { type: String, required: true },

    eligibility: {
        branches: [String],   // CSE, ME, EE…
        minCGPA: { type: Number, default: 0 }
    },

    ctc: { type: String, required: true },

    location: { type: String, required: true },

    lastDateToApply: { type: Date, required: true },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // recruiter or coordinator
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Job", jobSchema);
