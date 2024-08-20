"use client"
import React, {useState} from "react";
import {elMessiri} from "@/app/fonts";
import {masters} from "@/data/masters";
import Image from "next/image";
import {MasterDetails} from "@/components/MastersSection/MasterDetails";
import './MasterSectionStyles.css'
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Section} from "@/components/Section/Section";

export const MasterSection = () => {
    const [activeMaster, setActiveMaster] = useState(0);

    return (
        <Section id={NAV_LINKS_SECTIONS_IDS.MASTERS}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Наши мастера</h2>

            <div className={'flex flex-col gap-10'}>
                <div className={'flex flex-row flex-wrap justify-center gap-3'}>
                    {masters.map(({name, shortTitle, avatarUrl}, index) => (
                        <div key={name} className={'group flex items-center gap-4 flex-shrink-0 flex-grow' +
                            ' hover:cursor-pointer'} onClick={() => setActiveMaster(index)}>
                            <div className={'flex flex-shrink-0 justify-center items-center w-28 h-28 border' +
                                ' border-rumi-light rounded-full group-hover:border-4 bg-bgColor'}>
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
                <div>
                    <div className={'details-container bg-bgColor'}>
                        <MasterDetails activeMasterIndex={activeMaster} />
                    </div>
                    <div className={'flex'}>
                        <div className={'grow flex flex-col bg-bgColor'}>
                            <div className={'h-[40px] border-l border-rumi-light'}/>
                            <div className={'h-[24px] border border-rumi-light border-t-0 rounded-bl-3xl' +
                                ' rounded-br-3xl'}/>
                        </div>

                        <div className={'flex-shrink-0 w-[200px] h-full flex flex-col'}>
                            <div className={'h-[24px] flex bg-bgColor'}>
                                <div className={'w-[40px] grow'}/>
                                <div className={'w-[160px] grow border-rumi-light border-b border-r rounded-br-3xl'}/>
                            </div>
                            <div className={'round-out-line h-[24px]'}/>
                        </div>
                    </div>
                </div>
            </div>


        </Section>
    )
}


