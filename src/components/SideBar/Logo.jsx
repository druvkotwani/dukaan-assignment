import React from 'react';

const Logo = () => {
    return (
        <div className="p-4 pb-5 flex items-center justify-between">

            <div className="flex items-center gap-3">

                <div className="">
                    <img src="/Image.jpg" className='rounded-md h-10 w-10' alt="user logo" />
                </div>

                <div className="flex flex-col">
                    <div className="text-[15px] font-medium text-white">Nishyan</div>
                    <div className="text-sm underline text-[#ccc] hover:text-white">Visit store</div>
                </div>

            </div>

            <iconify-icon className="self-end" icon="mingcute:down-line" width="22" height="22"></iconify-icon>
        </div>
    )
}

export default Logo;
