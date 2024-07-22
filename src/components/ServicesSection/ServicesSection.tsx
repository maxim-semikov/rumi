"use client"
import React, {useState} from "react";
import {elMessiri} from "@/app/fonts";
import './ServicesStylesStyles.css'
import {NAV_LINKS_SECTIONS_IDS} from "@/data/headerNavLinks";
import {Button} from "@/components/buttons/Button";
import {DogsServices} from "@/components/ServicesSection/DogsServices";
import {CatsServices} from "@/components/ServicesSection/CatsServices";

export const ServicesSection = () => {
    const [activeService, setActiveService] = useState<'DOGS' | "CATS">('DOGS')
    return (
        <section id={NAV_LINKS_SECTIONS_IDS.SERVICES} className={'my-40'}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Услуги</h2>


            <div className={'flex flex-row justify-center flex-wrap gap-5 pb-6 w-[50%] mx-auto'}>
                <Button name={'собака'} onClick={() => setActiveService('DOGS')} isActive={activeService === 'DOGS'} />
                <Button name={'кошка'} onClick={() => setActiveService('CATS')} isActive={activeService === 'CATS'}/>
            </div>

            {activeService === 'DOGS' ? <DogsServices /> : <CatsServices />}
        </section>
    )
}


