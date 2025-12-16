import { generateVerificationCode } from "@/utils/generate-verification-code";
import { sendVerificationCode } from "@/utils/send-verification-code";

export async function POST(req: Request) {
    const { email, name } = await req.json();
  
    const code = generateVerificationCode();
  
    await sendVerificationCode({
      name,
      email,
      code,
      purpose: "VERIFY_EMAIL",
    });
  
    return Response.json({ success: true });
  }
  