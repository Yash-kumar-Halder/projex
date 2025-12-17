"use client"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { OTPFormProps } from "@/types/signup";
import axios from "axios";
import { useEffect, useState } from "react"

const OTPForm = ({formData}: OTPFormProps) => {

    const [verificationCode, setVerificationCode] = useState("");

    const handleSubmit = async () => {
        const payload = {
            ...formData,
            purpose: "EMAIL_VERIFICATION",
            code: verificationCode
        }
        const response = await axios.post("/api/verify-otp", payload);
        console.log(response)
    }

    useEffect(() => {
        verificationCode.trim();
      if(verificationCode.length === 6) {
        window.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                // Api call
                handleSubmit();
            }
        })
      }
    }, [verificationCode])
    

  return (
    <div className="scale-150" >
        <InputOTP 
        maxLength={6} 
        value={verificationCode}
        onChange={(verificationCode) => {
            setVerificationCode(verificationCode)
        }}
        >
        <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    
    <p className="text-center mt-4" >Enter your one time password</p>
    </div>
  )
}

export default OTPForm
