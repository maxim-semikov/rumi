import React from "react";
import './shapeStyles.css'

export const Shape = ({children}:React.PropsWithChildren) => (
    <div className={'text-white my-10'}>
        <div className={'h-[50px] flex'}>
            <div className={'round-out'}/>

            <div className={'grow bg-rumi-light rounded-ss-[26px] rounded-se-[40px]'}/>
        </div>

        <div className={'bg-rumi-light rounded-ss-[40px] rounded-ee-[40px] py-2 px-5'}>
            {children}
        </div>

        <div className={'h-[50px] flex'}>
            <div className={'bg-rumi-light rounded-es-[40px] rounded-ee-[26px] grow'}/>
            <div className={'round-out-second'}/>
        </div>
    </div>
)
