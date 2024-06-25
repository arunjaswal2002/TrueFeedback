import mongoose, { Schema, Document } from "mongoose";

// Define an interface that extends Document
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// Define a schema for the user
const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});
 
export interface User extends Document {
  username: string;
  password: string;
  email: string;
  isVerified: boolean;
  verifyCode: string;
  verifyCodeExpiry: string;
  isAcceptingMessage: boolean;
  messages: Message[];
}

// Define a schema for the user
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email address"],
  },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verifyCode: { type: String, required: [true, "Verify Code is required"] },
  verifyCodeExpiry: { type: String, required: [true, "Verify Code expiry  is required"]},
  isAcceptingMessage: { type: Boolean, default: true },
  messages: { type: [MessageSchema], required: true },
});


const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', UserSchema);

export default UserModel;