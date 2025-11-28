import React, { useState } from 'react';

// --- Sub-Components ---

const Header = () => (
    <div className="absolute top-0 left-0 w-full p-4">
        <header className="flex items-center justify-between whitespace-nowrap px-6 py-3 mx-auto max-w-7xl">
            {/* Logo */}
            <div className="flex items-center gap-4 text-[#0d131b] dark:text-slate-50">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                    </svg>
                </div>
                <h2 className="text-[#0d131b] dark:text-slate-50 text-lg font-bold leading-tight tracking-[-0.015em]">E-Commerce</h2>
            </div>
            {/* Log In Button (Desktop/Tablet) */}
            <div className="flex items-center gap-2">
                <p className="text-sm text-[#4c6c9a] dark:text-slate-400 hidden sm:block">Already have an account?</p>
                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" href="#">
                    <span className="truncate">Log In</span>
                </a>
            </div>
        </header>
    </div>
);

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const inputClassBase = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d131b] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd9e7] dark:border-slate-600 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#4c6c9a] dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal";
    const labelClass = "text-[#0d131b] dark:text-slate-200 text-base font-medium leading-normal pb-2";

    return (
        <form className="flex flex-col gap-6">
            {/* Full Name Field */}
            <label className="flex flex-col w-full">
                <p className={labelClass}>Full Name</p>
                <input className={inputClassBase} placeholder="Enter your full name" type="text" />
            </label>

            {/* Email Address Field */}
            <label className="flex flex-col w-full">
                <p className={labelClass}>Email Address</p>
                <input className={inputClassBase} placeholder="you@example.com" type="email" />
            </label>

            {/* Password Field */}
            <label className="flex flex-col w-full">
                <p className={labelClass}>Password</p>
                <div className="flex w-full flex-1 items-stretch">
                    <input
                        className={`${inputClassBase} rounded-r-none border-r-0`}
                        placeholder="Create a password"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        className="text-[#4c6c9a] dark:text-slate-400 flex border border-[#cfd9e7] dark:border-slate-600 bg-background-light dark:bg-background-dark items-center justify-center px-4 rounded-r-lg border-l-0 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </button>
                </div>
            </label>

            {/* Create Account Button */}
            <button
                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark mt-2"
                type="submit"
            >
                <span className="truncate">Create Account</span>
            </button>
        </form>
    );
};

// --- Main Page Component ---

const CreateAccountPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#0d131b] dark:text-slate-200 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">

                {/* Fixed Header/Nav */}
                <Header />

                {/* Main Content Card */}
                <main className="w-full max-w-md bg-white dark:bg-[#1C2A3A] p-8 md:p-10 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">

                    {/* Heading Block */}
                    <div className="flex flex-col gap-2 mb-8 text-center">
                        <h1 className="text-[#0d131b] dark:text-slate-50 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Create Your Account</h1>
                        <p className="text-[#4c6c9a] dark:text-slate-400 text-base font-normal leading-normal">Join us to start shopping and discover amazing products.</p>
                    </div>

                    {/* Sign Up Form */}
                    <SignUpForm />

                    {/* Legal Links */}
                    <p className="text-xs text-center text-[#4c6c9a] dark:text-slate-500 mt-6">
                        By creating an account, you agree to our <a className="font-medium text-primary hover:underline" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
                    </p>

                    {/* Log In Prompt (Mobile/Small Screen) */}
                    <p className="text-sm text-center text-[#4c6c9a] dark:text-slate-400 mt-8 sm:hidden">
                        Already have an account? <a className="font-bold text-primary hover:underline" href="#">Log In</a>
                    </p>
                </main>
            </div>
        </div>
    );
};

export default CreateAccountPage;