import React from "react";
import './shapeStyles.css'

export const Shape = ({children}:React.PropsWithChildren) => (
    <div className={'text-white my-10'}>
        <div className={'h-10 flex'}>
            <div className={'round-out'}/>

            <div className={'grow bg-rumi-light rounded-ss-2xl rounded-se-2xl'}/>
        </div>

        <div className={'bg-rumi-light rounded-ss-2xl rounded-ee-2xl pb-10 px-10'}>
            {children}
        </div>

        <div className={'h-10 flex'}>
            <div className={'bg-rumi-light rounded-es-2xl rounded-ee-2xl grow'}/>
            <div className={'round-out-second'}/>
        </div>
    </div>
)
