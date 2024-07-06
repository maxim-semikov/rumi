"use client"
import React from "react";
import Slider, {Settings} from 'react-slick';
import {elMessiri} from "@/app/fonts";
import './SalesPromotionsSectionStyles.css'
import Image from "next/image";
export const SalesPromotionsSection = () =>  {
    const settings: Settings ={
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section id='salesPromotionsSection' className={'my-20 bg-bgColor'}>
            <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Акции</h2>

            <Slider {...settings}>
                <div>
                    <div className={'sales-card sales-card__one'}>
                        <div className={'price'}>- 10%</div>
                        <div className={'sales-description'}>
                            <strong>Постоянным клиентам</strong> посещающим груминг ежемесячно<br/>
                            <strong>(каждые 30 дней)</strong>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={'sales-card sales-card__second'}>
                        <div className={'price'}>- 5%</div>
                        <div className={'sales-description'}>
                            На комплекс <strong>щенкам</strong> и <strong>котятам</strong> до 6 месяцев
                        </div>
                    </div>
                </div>

                <div>
                    <div className={'sales-card sales-card__third'}>
                        <div className={'price'}>- 15%</div>
                        <div className={'sales-description'}>
                            На услуги животным <strong>из приюта</strong>
                        </div>
                    </div>
                </div>


                <div>
                    <div className={'sales-card sales-card__fourth'}>
                        <div className={'price'}>- 10%</div>
                        <div className={'sales-description'}>
                            <strong>Приведи друга</strong>  получи скидку
                        </div>
                    </div>
                </div>

                <div>
                    <div className={'sales-card sales-card__fifth'}>
                        <div className={'price'}>- 5%</div>
                        <div className={'sales-description'}>
                            <strong>Напиши отзыв</strong>   получи скидку
                        </div>
                    </div>
                </div>

                <div>
                    <div className={'sales-card sales-card__sixth'}>
                        <div className={'price'}>- 10%</div>
                        <div className={'sales-description'}>
                            Для <strong>трех питомцев</strong> и более
                        </div>
                    </div>
                </div>

            </Slider>
        </section>
    )
}





