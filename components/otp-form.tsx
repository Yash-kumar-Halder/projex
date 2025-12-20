"use client";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { OTPFormProps } from "@/types/signup";
import axios from "axios";
import { useEffect, useState } from "react";

const OTPForm = ({ formData }: OTPFormProps) => {
    const [verificationCode, setVerificationCode] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const payload = {
            ...formData,
            purpose: "EMAIL_VERIFICATION",
            code: verificationCode,
        };
        const response = await axios.post("/api/verify-otp", payload);
        setResponseMessage(response?.data.message)
        setIsSubmitting(false)
        console.log(response);
    };

    useEffect(() => {
        verificationCode.trim();
            if (verificationCode.length === 6 && !isSubmitting) {
                window.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        // Api call
                        handleSubmit();
                        // console.log("Hello")
                    }
                });
            }
    }, [verificationCode]);

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-center my-5 mb-12 text-2xl font-bold">Enter your one time password</h1>
            <InputOTP
                maxLength={6}
                value={verificationCode}
                onChange={(verificationCode) => {
                    setVerificationCode(verificationCode);
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
            <p className={`font-semibold my-4 ${responseMessage ? "text-red-500" : ""}`} > {responseMessage ? responseMessage : "OTP send to your email. (Valid for 10 min)"}</p>
        </div> 
    );
};

export default OTPForm;
