import React from "react";
import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import {feedbacks} from "@/components/FeedbackSection/feedbacks";

export const FeedbackSection = () => (
    <section id='feedbacks' className={'my-20'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Отзывы</h2>

        <div className={'flex justify-center md:justify-between gap-2 flex-wrap'}>

            {feedbacks.map(feedback => (
                <div key={feedback.author} className={'w-80'}>
                    <div className={'pt-[30px] pl-[30px] h-full'}>
                        <div className={'relative rounded-xl bg-rumi-light text-white h-full px-4 pt-10 pb-5'}>
                            <div className={'absolute size-32 -top-[30px] -left-[30px]'}>
                                <Image src={feedback.avatarUrl} alt={'Фото клиента'} fill/>
                            </div>
                            <div>
                                <h4 className={'text-xl pl-[100px] pb-9'}>{feedback.author}</h4>
                                <p>{feedback.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    </section>
)


