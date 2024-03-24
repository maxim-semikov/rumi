import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import Header from "@/components/Header/Header";
import {siteMetadata} from "@/data/siteMetadata";
import SocialIcon from "@/components/icons";

export default function Home() {
  return (
      <div className="flex h-screen flex-col">
          <Header/>

          <main className="container">

              <section id='about' className={'my-20'}>

                  <div className="block mb-48 lg:flex lg:justify-center lg:gap-6">

                      <div className={'flex flex-col'}>
                          <Image src={siteMetadata.siteLogo} alt={'Rumi logo'} width={193} height={168}
                                 className={'self-center'}/>

                          <h2 className={`${elMessiri.className} text-6xl mb-10 text-center lg:text-left`}>Бережная забота о лучшем друге</h2>
                          <p className={'text-3xl text-center lg:text-left'}>Доверьте уход и красоту вашего питомца лучшим грумерам</p>
                      </div>

                      <div className={'mt-10 lg:mt-0 flex-shrink-0 flex justify-end relative'}>
                          <Image src={'/assets/images/main_banner_photo.png'} alt={'Rumi logo'} width={556} height={612}/>

                          <div className={'absolute w-[160px] md:w-[180px] bottom-0 flex justify-around'}>
                              <SocialIcon kind={'telegram'} href={'alsjdk'} size={42}/>
                              <SocialIcon kind={'vk'} href={'alsjdk'} size={42}/>
                              <SocialIcon kind={'whatsApp'} href={'alsjdk'} size={42}/>
                          </div>
                      </div>
                  </div>


                  <div className={'bg-rumi-light text-white rounded-md my-10 py-10 px-20 '}>
                      <h2 className={`${elMessiri.className} text-4xl text-center mb-10`}>Наша философия</h2>
                      <p className={'font-light text-center'}>В основе нашей работы лежит глубокое понимание и любовь к
                          животным.
                          Мы стремимся создать для них их собственный маленький рай, где каждый четвероногий друг будет
                          чувствовать себя как дома. Вместе с нами ваш питомец получит не только качественный уход, но и
                          море заботы и внимания.</p>
                  </div>

              </section>

          </main>
      </div>
  );
}
