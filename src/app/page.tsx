import Image from "next/image";
import {elMessiri} from "@/app/fonts";
import Header from "@/components/Header/Header";
import {siteMetadata} from "@/data/siteMetadata";
import SocialIcon from "@/components/icons";
import {MakeAnAppointmentBtn} from "@/components/buttons";
import {Shape} from "@/components/shape";
import {Footer} from "@/components/Footer/Footer";
import {ContactSection} from "@/components/ContactSection/ContactSection";
import {FeedbackSection} from "@/components/FeedbackSection/FeedbackSection";
import {TrustSection} from "@/components/TrustSection/TrustSection";
import {MasterSection} from "@/components/MastersSection/MasterSection";
import {SalesPromotionsSection} from "@/components/SalesPromotionsSection/SalesPromotionsSection";

export default function Home() {
  return (
      <div className="flex h-screen flex-col circles">
          <Header/>

          <main className="container">

              <section id='about' className={'my-20'}>

                  <div className="flex flex-col mb-48 items-center lg:flex-row lg:justify-center lg:gap-6">

                      <div className={'flex flex-col bg-bgColor'}>
                          <Image src={siteMetadata.siteLogo} alt={'Rumi logo'} width={249} height={220}
                                 className={'self-center'}/>

                          <h2 className={`${elMessiri.className} text-6xl uppercase mb-10 text-center lg:text-left tracking-wider`}>Бережная
                              забота о лучшем друге</h2>
                          <p className={'text-3xl text-center lg:text-left font-light tracking-wider'}>Доверьте уход и
                              красоту вашего питомца
                              лучшим грумерам</p>
                      </div>

                      <div className={'mt-10 flex-shrink-0 flex justify-end max-w-[612px] md:pl-[100px] lg:mt-0' +
                          ' relative'}>
                          <div className={'relative'}>
                              <Image src={'/assets/images/main_banner_photo.png'}
                                     alt={'Груммер дерржит собаку на руках'}
                                     width={556}
                                     height={612}
                              />
                              <div className={'absolute md:w-[170px] bottom-3 right-0 flex justify-end px-1'}
                              >
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 mr-2 md:mr-3'}
                                      kind={'telegram'}
                                      href={siteMetadata.telegram}
                                  />
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 mr-2 md:mr-3'}
                                      kind={'vk'}
                                      href={siteMetadata.telegram}
                                  />
                                  <SocialIcon
                                      className={'w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11'}
                                      kind={'whatsApp'}
                                      href={siteMetadata.telegram}
                                  />
                              </div>
                          </div>

                          <MakeAnAppointmentBtn/>
                      </div>
                  </div>


                  <Shape>
                      <>
                          <h2 className={`${elMessiri.className} text-[2.5rem] text-center uppercase leading-relaxed tracking-wider mb-10 pt-4`}>Наша
                              философия</h2>
                          <p className={'text-2xl font-light text-center leading-relaxed tracking-wider'}>В основе нашей работы лежит глубокое понимание и любовь к животным.
                              <br />Мы стремимся создать для них их собственный маленький рай, где каждый четвероногий друг
                              будет чувствовать себя как дома. Вместе с нами ваш питомец получит не только качественный уход,
                              но и море заботы и внимания.</p>
                      </>
                  </Shape>

              </section>


              <TrustSection/>

              <SalesPromotionsSection />

              <MasterSection/>

              <FeedbackSection/>

              <ContactSection/>

          </main>

          <Footer/>
      </div>
  );
}
