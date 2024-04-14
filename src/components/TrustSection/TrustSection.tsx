import React from "react";
import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import {trustPoints} from "@/components/TrustSection/trustPoints";

export const TrustSection = () => (
    <section id='tryst' className={'my-20'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>почему нам доверяют</h2>

        <div className={'flex gap-4 justify-center items-stretch'}>
            <Image
                className={'hidden lg:block'}
                src={'/assets/images/kissDog.png'}
                alt={'Груммер целует собаку'}
                width={498}
                height={623}
            />

            <ul className={'flex flex-col justify-around'}>
                {trustPoints.map(({title, description, imgUrl}) => (
                    <li key={title} className={'ml-4 mb-4 flex'}>
                        <div className={'flex items-center justify-center w-24 h-24 border rounded-full' +
                            ' border-rumi-light flex-shrink-0 mr-4'}>
                            <div className={'w-20 h-20 bg-rumi-light rounded-full flex justify-center items-center'}>
                                <Image src={imgUrl} alt={'Фото клиента'} width={40} height={40}/>
                            </div>
                        </div>
                        <div>
                            <p className={'uppercase text-2xl mb-3'}>{title}</p>
                            <p className={'text-xl font-light'}>{description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    </section>
)


