import { connectToDB } from "@/db/connectDB";
import EmailVerification from "@/models/emailVerification.model";
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

        const isEmailFound = await EmailVerification.findOne({email});
        if(!isEmailFound) return NextResponse.json({
            message: "Email not found for the verification",
            success: false
        })
        
        return NextResponse.json({
            message: "Yahhh",
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