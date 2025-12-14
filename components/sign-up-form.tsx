"use client"
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { ImSpinner2 } from "react-icons/im";

const SignUpForm = () => {
    const [isPassShow, setIsPassShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showPasswordToggle = () => {
        setIsPassShow((prev) => !prev);
    };

    const handleFormsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
                
        const formData = new FormData(e.currentTarget);

        // console.log({
        //     email: formData.get("email"),
        //     password: formData.get("password"),
        // })

        const response = await signIn('credentials', {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })

        setIsSubmitting(false);
        console.log(response)

    }

    return (
        <form onSubmit={handleFormsubmit} className="shadow-md shadow-neutral-400 p-6 w-2/9 min-h-3/5 rounded-md bg-neutral-100 ">
            <h2 className="text-2xl font-bold text-center pt-3 pb-4">
                PROJEX
            </h2>
            <div className="flex flex-col">
                <div className="py-6 border-t border-dashed border-t-black flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border-black border rounded py-1 px-2 "
                    />
                    <label htmlFor="email" className="font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-black border rounded py-1 px-2 "
                    />
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <div className="flex border-black border rounded justify-between items-center pr-3">
                        <input
                            type={isPassShow ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="*******"
                            className="w-full  py-1 px-2 outline-0"
                        />
                        <div
                            onClick={showPasswordToggle}
                            className="cursor-pointer"
                        >
                            {isPassShow ? <FaRegEye /> : <IoEyeOffSharp />}
                        </div>
                    </div>
                </div>
                <Button disabled={isSubmitting} type="submit" >
                    {isSubmitting ? <ImSpinner2 className="animate-spin" /> : "Sing Up"}
                </Button>
                <span className="text-center font-semibold select-none">OR</span>
                <div className="mt-6">
                    <div>
                        <div className="flex gap-2 items-center shadow shadow-neutral-400 py-2 justify-center rounded cursor-pointer bg-blue-100 hover:bg-blue-200 transition-colors duration-150 ">
                            <FcGoogle size={30} />
                            <p className="text-xl font-semibold">
                                Continue with google
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    href={"/sign-in"}
                    className="font-semibold text-center mt-6 hover:underline select-none"
                >
                    Don't have an account?{" "}
                    <span className="text-blue-700">Singup</span>
                </Link>
            </div>
        </form>
    );
};

export default SignUpForm;
