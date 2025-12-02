import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["student", "recruiter", "coordinator", "admin"],
        required: true
    },

    department: {
        type: String,
        required: function () {
            return this.role === "student";
        }
    },

    batch: {
        type: String,
        required: function () {
            return this.role === "student";
        }
    },

    companyName: {
        type: String,
        required: function () {
            return this.role === "recruiter";
        }
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
