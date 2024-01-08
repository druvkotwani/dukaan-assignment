import React from 'react'

const Header = () => {
    return (
        <div className="py-4 px-8  border-b border-[#ccc] flex justify-between bg-white   ">
            <div className="flex items-center gap-3">
                <div className="text-[20px] font-medium ">Payouts</div>
                <div className="mt-1 flex gap-[6px] text-[12px] cursor:pointer text-[#71717a] items-center justify-center ">
                    <div className="">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                    <div className="">How it works?</div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-[6px] py-[6px] px-4 rounded-lg bg-[#f7f7f7] text-[#71717a]">
                    <div className="">
                        <svg width="20" height="20" xmlns=" http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="svg-search-icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input className="placeholder:text-[#71717a] outline-none border-none bg-transparent w-[334px]" type="text" placeholder="Search features, tutorial, etc." />
                </div>
            </div>

            <div className="flex gap-[10px] ">
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] " >
                    <iconify-icon icon="gridicons:speaker" width="22" height="22"></iconify-icon>                </div>
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] ">
                    <iconify-icon icon="icon-park-solid:down-one" width="22" height="22"></iconify-icon>
                </div>
            </div>

        </div>
    )
}

export default Header