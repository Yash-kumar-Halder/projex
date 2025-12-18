import { connectToDB } from "@/db/connectDB";
import EmailVerificationModel from "@/models/emailVerification.model";
import EmailVerification from "@/models/emailVerification.model";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        connectToDB();

        const {email, code} = await request.json();

        if(!email || !code) {
            return NextResponse.json({
                message: "All credientials are required",
                success: false
            })
        } 

        const emailVerificationModel = await EmailVerification.findOne({email});
        if(!emailVerificationModel) return NextResponse.json({
            message: "Email not found for the verification",
            success: false
        })

        const isVerificationCodeMatch = bcrypt.compare(code, emailVerificationModel.password);
        if(!isVerificationCodeMatch) return NextResponse.json({
            message: "Verification code was wrong",
            success: false
        })

        await User.create({
            name: emailVerificationModel.name,
            email: emailVerificationModel.email,
            password: emailVerificationModel.password,
            authProvider: "credentials"
        })

        await EmailVerificationModel.findOneAndDelete({email});

        
        return NextResponse.json({
            message: "Registered successfully",
            success: true
        })

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Internal server error",
            success: false
        })
    }
}