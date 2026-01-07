import { useState } from 'react';

// --- Sub-Components ---
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
            <div className="relative flex min-h-screen w-full flex-col justify-center items-center p-4">

                {/* Main Content Card */}
                <main className="w-full bg-white dark:bg-background-dark p-8 md:p-10 rounded-xl shadow-lg flex flex-col max-w-md">

                    {/* Heading Block */}
                    <div className="flex flex-col gap-2 mb-8 text-center">
                        <h1 className="text-[#0d131b] dark:text-slate-50 text-xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Create Your Account</h1>
                        <p className="text-[#4c6c9a] dark:text-slate-400 text-sm font-normal leading-normal">Join us to start shopping and discover amazing products.</p>
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