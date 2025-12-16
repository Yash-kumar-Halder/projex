"use client"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { useEffect, useState } from "react"

const OTPForm = () => {

    const [value, setValue] = useState("");
    const handleSubmit = () => {
        console.log("Submited")
    }

    useEffect(() => {
        value.trim();
      if(value.length === 6) {
        window.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                // Api call
                console.log("Api calling", value)
            }
        })
      }
    }, [value])
    

  return (
    <div className="scale-150" >
        <InputOTP 
        maxLength={6} 
        value={value}
        onChange={(value) => setValue(value)}
        onSubmit={handleSubmit}
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
