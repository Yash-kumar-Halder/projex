import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/db/connectDB";
import User from "@/models/user.model";
import { generateVerificationCode } from "@/utils/generate-verification-code";
import { sendVerificationCode } from "@/utils/send-verification-code";
import EmailVerificationModel from "@/models/emailVerification.model";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { name, email, password } = await request.json();

    const isExistingEmail = await User.findOne({email});
    
    if(isExistingEmail) return NextResponse.json(
        {
            message: "User already exist with this email",
            success: false,
            error: "EMAIL"
        },
        {status: 400}
    )

    const isPendingRequestByEmail = await EmailVerificationModel.findOne({email});
    if(isPendingRequestByEmail) {
        if((isPendingRequestByEmail?.verificationCodeExpireAt > new Date(Date.now()))) {
            return NextResponse.json(
                {
                    message: "Verification code already send on this email that valid for 10 min",
                    success: true
                },
                {status: 400}
            )
        }else {
            const code = generateVerificationCode();
      
            await sendVerificationCode({
            name,
            email,
            code,
            purpose: "VERIFY_EMAIL",
            });

            return NextResponse.json(
                { message: "Varification code was send", success: true },
                { status: 201 }
              );
        }
    }

    const code = generateVerificationCode();
      
        await sendVerificationCode({
          name,
          email,
          code,
          purpose: "VERIFY_EMAIL",
        });

        const newEmailVerificationUser = await EmailVerificationModel.create({
            name,
            email,
            password,
            code,
            verificationCodeExpireAt: new Date(Date.now() + 10*60*1000)
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