"use client"
import React, {useState} from "react";
import {elMessiri} from "@/app/fonts";
import {masters} from "@/components/MastersSection/masters";
import Image from "next/image";
import {MasterDetails} from "@/components/MastersSection/MasterDetails";

export const MasterSection = () => {
    const [activeMaster, setActiveMaster] = useState(0);

    return (
        <section id='tryst' className={'my-20'}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Наши мастера</h2>

            <div className={'flex flex-col lg:flex-row gap-10'}>
                <div className={'flex flex-row flex-wrap justify-center lg:flex-col lg:items-start gap-3'}>
                    {masters.map(({name, shortTitle, avatarUrl}, index) => (
                        <div key={name} className={'flex items-center gap-4 flex-shrink-0 hover:cursor-pointer'} onClick={() => setActiveMaster(index)}>
                            <div className={'flex flex-shrink-0 justify-center items-center w-28 h-28 border' +
                                ' border-rumi-light rounded-full hover:border-4'}>
                                <div className={'relative w-24 h-24 border border-rumi-light rounded-full'}>
                                    <Image src={avatarUrl} alt={`${name} - ${shortTitle}`} fill/>
                                </div>
                            </div>
                            <div>
                                <p className={'text-2xl font-medium'}>{name}</p>
                                <p className={'text-xl'}>{shortTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'border border-rumi-light rounded-2xl grow p-10'}>
                    <MasterDetails activeMasterIndex={activeMaster} />
                </div>
            </div>


        </section>
    )
}


