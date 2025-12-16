import { verifyEmailTemplate } from "@/lib/email-templetes";
import { transporter } from "@/lib/mailer";
import { SendVerificationCodeParams } from "@/types/verification-code-mail"

export const sendVerificationCode = async (params: SendVerificationCodeParams): Promise<void> => {
 
    const {name, email, code, purpose} = params;
    let subject: string;
    let html: string;

    if (purpose === "VERIFY_EMAIL") {
        subject = "Verify you email";
        html = verifyEmailTemplate(name, code);    
    }else if (purpose === "RESET_PASSWORD") {
        subject = "Reset your password";
        html = verifyEmailTemplate(name, code);
    }else {
        throw new Error("Invalid send email password");
    }

    await transporter.sendMail({
        from: `Projex <${process.env.SMTP_EMAIL}>`,
        to: email,
        subject,
        html
    })

}