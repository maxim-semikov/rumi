import React from "react";
import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import {trustPoints} from "@/data/trustPoints";

export const TrustSection = () => (
    <section id='tryst' className={'my-40'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>почему нам доверяют</h2>

        <div className={'flex gap-4 justify-center items-stretch'}>
            <Image
                className={'hidden lg:block h-[100%]'}
                src={'/assets/images/kissDog.png'}
                alt={'Груммер целует собаку'}
                width={498}
                height={623}
            />

            <ul className={'flex flex-col justify-between'}>
                {trustPoints.map(({title, description, imgUrl}) => (
                    <li key={title} className={'ml-4 mb-4 flex'}>
                        <div className={'flex items-center justify-center w-[100px] h-[100px] border-2 rounded-full' +
                            ' border-rumi-light flex-shrink-0 mr-4 bg-bgColor'}>
                            <div className={'w-[73px] h-[73px] bg-rumi-light rounded-full flex justify-center' +
                                ' items-center'}>
                                <Image src={imgUrl} alt={'сервис'} width={40} height={40}/>
                            </div>
                        </div>
                        <div>
                            <p className={'uppercase text-2xl mb-2'}>{title}</p>
                            <p className={'text-xl font-light'}>{description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    </section>
)


