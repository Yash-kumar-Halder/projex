import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/db/connectDB";
import User from "@/models/user.model";
import { generateVerificationCode } from "@/utils/generate-verification-code";
import { sendVerificationCode } from "@/utils/send-verification-code";
import EmailVerification from "@/models/emailVerification.model";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { name, email, password } = await request.json();

    const isExistingEmail = await User.findOne({email});
    
    if(isExistingEmail) return NextResponse.json(
        {message: "User already exist with this email"},
        {status: 400}
    )

    const code = generateVerificationCode();
      
        await sendVerificationCode({
          name,
          email,
          code,
          purpose: "VERIFY_EMAIL",
        });

        const newEmailVerificationUser = await EmailVerification.create({
            name,
            email,
            password,
            code
        })

    return NextResponse.json(
      { message: "Varification code was send", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
