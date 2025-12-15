// lib/emailTemplates.ts
export function verifyEmailTemplate(name: string, code: string): string {
  return `
    <div style="font-family: Arial; max-width: 600px; margin: auto;">
      <h2>Email Verification</h2>
      <p>Hello <strong>${name}</strong>,</p>
      <p>Use the OTP below to verify your email:</p>
      <h1 style="letter-spacing: 4px;">${code}</h1>
      <p>This code expires in <strong>10 minutes</strong>.</p>
      <p>If you didn’t request this, ignore this email.</p>
    </div>
  `;
}

export function resetPasswordTemplate(name: string, code: string): string {
  return `
    <div style="font-family: Arial; max-width: 600px; margin: auto;">
      <h2>Password Reset</h2>
      <p>Hello <strong>${name}</strong>,</p>
      <p>Use the code below to reset your password:</p>
      <h1 style="letter-spacing: 4px;">${code}</h1>
      <p>This code expires in <strong>10 minutes</strong>.</p>
      <p>If you didn’t request this, secure your account immediately.</p>
    </div>
  `;
}
