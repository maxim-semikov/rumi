import React from "react";
import Image from "next/image";
import {catServices} from "@/data/catServices";

export const CatsServices = () => (
        <div className={'flex gap-10 p-10 mt-[80px]'}>
            <div className={'mr-5 flex-grow'}>

                <ul className={'service-list'}>
                    {catServices?.serviceList?.map(({name, description}, index) => (
                        <li key={`${name}${index}`}>
                            <div className={'service-list-item'}>{name}</div>
                            {description && <div className={'service-list-item-description'}>{description}</div>}
                        </li>
                    ))}

                </ul>
            </div>

            <div className={'hidden xl:block flex-shrink-0'}>
                <Image src={catServices?.serviceImg} alt={'сервис'} width={542} height={533}/>
            </div>

        </div>
)
