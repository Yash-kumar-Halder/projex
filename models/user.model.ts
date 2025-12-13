import bcrypt from "bcryptjs";
import mongoose, { Schema, Document, Model } from "mongoose";

// Task Schema
interface Task {
  title: string;
  description?: string;
  status: "pending" | "in-progress" | "completed" | "bug";
  priority?: "low" | "medium" | "high";
  dueDate?: Date;
  createdAt: Date;
}

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string,
  image?: string;
  authProvider: string;
  authProviderId?: string;
  tasks: Task[];
  createdAt: Date;
}

// Task sub-schema
const TaskSchema = new Schema<Task>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed", "bug"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true }
);

// User schema
const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    image: { type: String },

    // NextAuth provider data
    // authProvider: { type: String, required: true }, // e.g. "google", "github"
    // authProviderId: { type: String }, // googleId, githubId, etc.

    // Task list
    tasks: [TaskSchema],

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
  
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  UserSchema.methods.comparePassword = function (candidate: string) {
    return bcrypt.compare(candidate, this.password)
  }

// Prevent model overwrite
const User =
  (mongoose.models.User as Model<UserDocument>) ||
  mongoose.model<UserDocument>("User", UserSchema);

export default User;
