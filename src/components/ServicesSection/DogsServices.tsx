"use client"
import React, {useState} from "react";
import Image from "next/image";
import {rubik} from "@/app/fonts";
import {dogServices} from "@/data/dogServices";
import {Button} from "@/components/buttons";
import {DOGS_SERVICE_NAME} from "@/types/services";

export const DogsServices = () => {
    const [service, setService] = useState<DOGS_SERVICE_NAME>('Стрижка');
    const { serviceImg, serviceList, priceList = []} = dogServices[service];
    return (
        <>
            <div className={'flex flex-row justify-around flex-wrap gap-5 pb-6'}>
                {Object.values(dogServices)?.map(({serviceName}) => (
                    <Button key={serviceName} name={serviceName} onClick={() => setService(serviceName)} isActive={serviceName === service}/>
                ))}
            </div>

            <div className={'flex gap-10 p-10'}>
                <div className={'mr-5 flex-grow'}>

                    <ul className={'service-list'}>
                        {serviceList?.map(({name, description}, index) => (
                            <li key={`${name}${index}`}>
                                <div className={'service-list-item'}>{name}</div>
                                {description && <div className={'service-list-item-description'}>{description}</div>}
                            </li>
                        ))}

                    </ul>

                    {!!priceList?.length && (
                        <ul className={`${rubik.className} price-list mt-10`}>
                            {priceList.map(({name, cost}, index) => (
                                <li key={`${name+cost}${index}`}>
                                    <div className={'price-item'}>
                                        <div className={'price-item-description'}>{name}</div>
                                        <div className={'price-item-cost'}>{cost}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}


                </div>

                <div className={'hidden xl:block flex-shrink-0'}>
                    <Image src={serviceImg} alt={'сервис'} width={542} height={533}/>
                </div>

            </div>
        </>
    )
}
