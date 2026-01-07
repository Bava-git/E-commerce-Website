import React, { useState } from 'react';

// --- Sub-Components ---

const BrandHeader = () => (
    <div className="flex items-center gap-2 mb-8">
        <div className="w-6 h-6 text-slate-900 dark:text-slate-50">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
            </svg>
        </div>
        <p className="font-display text-2xl font-bold text-slate-800 dark:text-slate-200 underline">Khapara</p>
    </div>
);

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Styling constants
    const labelClass = "font-display text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2";
    const inputClassBase = "font-display form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal";

    return (
        <div className="flex flex-col gap-5">
            {/* Email Field */}
            <label className="flex flex-col w-full">
                <p className={labelClass}>Email</p>
                <input
                    className={`${inputClassBase} rounded-lg`}
                    placeholder="Enter your email"
                    type="email"
                />
            </label>

            {/* Password Field */}
            <label className="flex flex-col w-full">
                <p className={labelClass}>Password</p>
                <div className="flex w-full flex-1 items-stretch">
                    <input
                        className={`${inputClassBase} rounded-l-lg border-r-0 pr-2`}
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                    />
                    <div
                        className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 items-center justify-center pr-4 rounded-r-lg border-l-0 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>
                </div>
            </label>

            {/* Forgot Password Link */}
            <p className="font-display text-primary hover:underline text-sm font-medium leading-normal text-right cursor-pointer">Forgot Password?</p>

            {/* Login Button */}
            <button className="flex items-center justify-center font-bold text-base leading-normal px-5 py-4 mt-6 w-full rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors duration-200 h-14">
                Login
            </button>

            {/* Or Separator */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
                <span className="flex-shrink mx-4 text-slate-400 dark:text-slate-500 text-sm">OR</span>
                <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>

            {/* Social Login Button (Google) */}
            <button className="flex items-center justify-center gap-3 text-base leading-normal px-5 py-4 w-full rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors duration-200 h-14">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.532 24.5528C47.532 22.9214 47.388 21.3623 47.106 19.875H24.237V28.7186H37.3197C36.7214 31.8173 34.9298 34.45 32.222 36.1772V41.9204H39.8145C44.6617 37.4182 47.532 31.5977 47.532 24.5528Z" fill="#4285F4"></path>
                    <path d="M24.237 48C30.4939 48 35.7323 45.9594 39.8145 41.9204L32.222 36.1772C30.071 37.6639 27.425 38.5682 24.237 38.5682C18.2325 38.5682 13.1093 34.6364 11.2307 29.3523H3.4375V35.2136C7.45636 43.1045 15.2636 48 24.237 48Z" fill="#34A853"></path>
                    <path d="M11.2307 29.3523C10.7483 27.8656 10.4663 26.25 10.4663 24.5795C10.4663 22.9091 10.7345 21.2932 11.2023 19.8068V13.9455H3.4375C1.64591 17.4477 0.5 21.6136 0.5 24.5795C0.5 27.5455 1.64591 31.7114 3.4375 35.2136L11.2307 29.3523Z" fill="#FBBC05"></path>
                    <path d="M24.237 10.5909C27.828 10.5909 30.8039 11.8386 32.8882 13.8295L40.0132 6.70455C35.7186 2.80909 30.4939 0.159090909 24.237 0.159090909C15.2636 0.159090909 7.45636 5.05455 3.4375 12.9455L11.2023 18.8068C13.1093 13.5227 18.2325 10.5909 24.237 10.5909Z" fill="#EA4335"></path>
                </svg>
                <span className="font-bold">Login with Google</span>
            </button>

            {/* Sign Up Prompt */}
            <p className="font-display text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal mt-8 text-center">
                Don't have an account? <a className="font-bold text-primary hover:underline" href="#">Sign Up</a>
            </p>
        </div>
    );
};

const Footer = () => (
    <div className="w-full max-w-md mt-16 text-center">
        <p className="font-display text-slate-400 dark:text-slate-500 text-xs">© 2025 Khapara. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
            <a className="font-display text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary text-xs hover:underline" href="#">Terms of Service</a>
            <a className="font-display text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary text-xs hover:underline" href="#">Privacy Policy</a>
        </div>
    </div>
);

// --- Main Page Component ---

const LoginPage = () => {
    return (
        <div className="font-display min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="flex flex-1 justify-center">
                        <div className="layout-content-container flex flex-col w-full flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                                {/* Left Column: Image */}
                                <div
                                    className="hidden md:flex w-full bg-center bg-no-repeat bg-cover flex-col justify-end overflow-hidden"
                                    data-alt="A stylish person wearing modern fashion accessories, representing the e-commerce brand's lifestyle."
                                    style={{ backgroundImage: 'url("/website/signinimagecompact.jpg")' }}
                                >
                                </div>

                                {/* Right Column: Form */}
                                <div className="flex flex-col justify-center items-center w-full bg-background-light dark:bg-background-dark p-6 sm:p-8 lg:p-12">
                                    <div className="flex flex-col w-full max-w-md">
                                        <BrandHeader />

                                        {/* Page Heading */}
                                        <div className="flex flex-wrap justify-between gap-3 mb-4">
                                            <p className="font-display text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Welcome Back</p>
                                        </div>
                                        <p className="font-display text-slate-500 dark:text-slate-400 mb-8">Enter your credentials to access your account.</p>

                                        <LoginForm />

                                        <Footer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;