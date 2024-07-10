import React from "react";
import {masters} from "@/components/MastersSection/masters";
import Image from "next/image";


export const MasterDetails = ({activeMasterIndex}: {activeMasterIndex: number}) => {
    const master = masters[activeMasterIndex]

    return (
        <div className={'min-h-[400px]'}>
            <div className={'relative h-[400px] w-[300px] float-none mx-auto md:float-start md:mr-10 rounded-2xl'}>
                <Image
                    src={master.img}
                    alt={'sad'}
                    className={'rounded-2xl object-cover'}
                    fill
                />
            </div>
            <div className={'mt-5 md:mt-0'}>
                <div className={'mb-5'}>
                    <p className={'text-3xl font-medium'}>{master.name}</p>
                    <p className={'text-2xl'}>{master.title}</p>
                </div>
                <ul className={'list-disc'}>
                    {master.items.map((detail)=> (
                        <li key={detail} className={'text-xl mb-4'}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


