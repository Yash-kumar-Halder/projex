import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export interface EmailVerification extends Document {
  name: string;
  email: string;
  password: string,
  code:string,
  codeExpireAt: Date,
  createdAt: Date;
  updatedAt: Date
}

const EmailVerificationSchema = new mongoose.Schema<EmailVerification>(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: {type: String, required: true},
        code: {type: String, required: true},
        codeExpireAt: {type: Date, required: true}
    },
    {timestamps: true}
)

EmailVerificationSchema.pre("save", async function () {
    if(!this.isModified("password")) return;
    if(!this.isModified("code")) return;

    this.password = await bcrypt.hash(this.password, 10);
    this.code = await bcrypt.hash(this.code, 10);
})

// Prevent model overwrite
const EmailVerification =
  (mongoose.models.EmailVerification as mongoose.Model<EmailVerification>) ||
  mongoose.model<EmailVerification>("EmailVerification", EmailVerificationSchema);

export default EmailVerification;