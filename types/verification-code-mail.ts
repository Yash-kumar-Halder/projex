export type EmailPurpose = "VERIFY_EMAIL" | "RESET_PASSWORD"

export interface SendVerificationCodeParams {
    name: string;
    email: string;
    code: string;
    purpose: EmailPurpose;
  }
  