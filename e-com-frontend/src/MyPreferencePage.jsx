import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import { shippingInfo } from "./utilities/rawData";
import * as connectTo from './utilities/reusables';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const MyPreferencePage = () => {

    const [dark, setDark] = React.useState(false);

    React.useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);


    return (
        <main className="flex-1 w-full m-1">
            <div className="m-5 p-2 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                <header className="flex gap-2 dark:bg-neutral-900/50 p-4 shadow-sm items-center">
                    <span className="material-symbols-outlined dark:text-white">settings</span>
                    <p className="dark:text-white font-medium">Preference</p>
                </header>
                <section className='m-3 p-3 flex overflow-hidden flex-wrap my-3'>
                    <div className='text-slate-600 dark:text-slate-400 text-sm flex flex-row justify-between items-center gap-2 border p-3 mx-3 my-1 rounded-xl w-full border-border-dark'>
                        <div>
                            <p className='font-medium text-slate-800 dark:text-slate-200'>Dark mode</p>
                        </div>
                        <div>
                            <label className="switch cursor-pointer">
                                <input type="checkbox" onChange={() => setDark(!dark)} />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='text-slate-600 dark:text-slate-400 text-sm flex flex-row justify-between items-center gap-2 border p-3 mx-3 my-1 rounded-xl w-full border-border-dark'>
                        <div>
                            <p className='font-medium text-slate-800 dark:text-slate-200'>Dark mode</p>
                        </div>
                        <div>
                            <label className="switch cursor-pointer">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </section>
            </ div>
        </ main >
    )
}
export default MyPreferencePage;