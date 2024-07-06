import React from "react";
import {masters} from "@/components/MastersSection/masters";
import Image from "next/image";


export const MasterDetails = ({activeMasterIndex}: {activeMasterIndex: number}) => {
    const master = masters[activeMasterIndex]

    return (
        <div className={'flex flex-col md:flex-row'}>
            <Image src={master.img} alt={'sad'} width={332} height={432} className={'md:mr-10 h-[100%] shrink-0 mx-auto'}/>
            <div className={'mt-5 md:mt-0'}>
                <div className={'mb-5'}>
                    <p className={'text-2xl font-medium'}>{master.name}</p>
                    <p className={'text-xl'}>{master.title}</p>
                </div>
                <ul className={'list-disc'}>
                    {master.items.map((detail)=> (
                        <li key={detail} className={'text-2xl mb-4'}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


