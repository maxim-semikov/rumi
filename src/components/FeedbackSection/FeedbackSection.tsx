"use client"
import React from "react";
import Image from "next/image";
import Slider, {Settings} from 'react-slick';
import {elMessiri} from "@/app/fonts";
import {feedbacks} from "@/components/FeedbackSection/feedbacks";
import './feedbackStyles.css'
export const FeedbackSection = () =>  {
    const settings: Settings ={
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    swipeToSlide: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section id='feedbacks' className={'my-20'}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Отзывы</h2>

            <Slider {...settings}>
                {feedbacks.map(feedback => (
                    <div key={feedback.avatarUrl + feedback.mainText} className={'h-full'}>
                        <div  className={'mr-2 ml-2 h-full'}>
                            <div className={'pt-[30px] pl-[30px] h-full'}>
                                <div className={'relative rounded-xl bg-rumi-light text-white h-full px-4 pt-5 pb-5'}>
                                    <div className={'absolute size-32 -top-[30px] -left-[30px]'}>
                                        <Image src={feedback.avatarUrl} alt={'Фото клиента'} fill/>
                                    </div>
                                    <div>
                                        <h4 className={'text-xl pl-[100px] pb-8'}>{feedback.mainText}</h4>
                                        <p>{feedback.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}


