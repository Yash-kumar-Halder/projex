export const generateVerificationCode = (length: number = 6): string => {
    if (length <= 0) {
      throw new Error("Verification code length must be greater than 0");
    }
  
    const digits = "0123456789";
    let code = "";
  
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);
  
    for (let i = 0; i < length; i++) {
      code += digits[randomValues[i] % digits.length];
    }
  
    return code;
  };
  