import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/db/connectDB";
import User from "@/models/user.model";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const { name, email, password } = await request.json();

    const isExistingEmail = await User.findOne({email});
    
    if(isExistingEmail) return NextResponse.json(
        {message: "User already exist with this email"},
        {status: 400}
    )

    const newUser = await User.create({
        name,
        email,
        password
    })

    return NextResponse.json(
      { message: "User registered successfully", success: true },
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
