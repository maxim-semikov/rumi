import React from "react";
import {elMessiri, rubik} from "@/app/fonts";
import './ServicesStylesStyles.css'
import Image from "next/image";

export const ServicesSection = () => (
    <section id='tryst' className={'my-40'}>
        <h2 className={`${elMessiri.className} text-4xl uppercase text-center mb-10`}>Услуги</h2>

        <div className={'flex flex-row justify-center flex-wrap gap-5 pb-6 w-[50%] mx-auto'}>
            <div className={'service-button service-button__active'}>собака</div>
            <div className={'service-button flex-grow-0'}>кошка</div>
        </div>
        <div className={'flex flex-row justify-around flex-wrap gap-5 pb-6'}>
            <div className={'service-button service-button__active'}>Стрижка</div>
            <div className={'service-button'}>триминг</div>
            <div className={'service-button'}>экспресс-линька</div>
            <div className={'service-button'}>дополнительно</div>
        </div>

        <div className={'flex gap-10 p-10'}>
            <div className={'mr-5'}>
                <ul className={'service-list'}>
                    <li>
                        <div className={'service-list-item'}>Вычес подшёрстка</div>
                        <div className={'service-list-item-description'}>(распутывание колтунов, исходя из породы)</div>
                    </li>
                    <li>
                        <div className={'service-list-item'}>Гигиена подушечек лап</div>
                        <div className={'service-list-item-description'}>(выбривание)</div>
                    </li>
                    <li>
                        <div className={'service-list-item'}>Гигиена ушей и глаз</div>
                    </li>
                    <li>
                        <div className={'service-list-item'}>Стрижка + подпил когтей</div>
                    </li>
                    <li>
                        <div className={'service-list-item'}>Вычес подшёрстка</div>
                        <div className={'service-list-item-description'}>(очищение, увлажнение, придание ярости цвета/осветление, питание)</div>
                    </li>
                    <li>
                        <div className={'service-list-item'}>Стрижка допустимая породой</div>
                        <div className={'service-list-item-description'}>(с учётом пожелания владельца)</div>
                    </li>
                </ul>

                <ul className={`${rubik.className} price-list mt-10`}>
                    <li>
                        <div className={'price-item'}>
                            <div className={'price-item-description'}>
                                Маленькие породы
                            </div>
                            <div className={'price-item-cost'}>
                                от 1600 руб
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={'price-item'}>
                            <div className={'price-item-description'}>
                                Средние породы
                            </div>
                            <div className={'price-item-cost'}>
                                от 3000 руб
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={'price-item'}>
                            <div className={'price-item-description'}>
                                крупные породы
                            </div>
                            <div className={'price-item-cost'}>
                                от 4500 руб
                            </div>
                        </div>
                    </li>
                </ul>

            </div>

            <div className={'hidden xl:block flex-shrink-0'}>
                <Image src={'/assets/images/services-dog-1.png'} alt={'сервис'} width={542} height={533}/>
            </div>

        </div>
    </section>
)


