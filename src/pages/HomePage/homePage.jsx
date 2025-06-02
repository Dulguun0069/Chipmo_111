import React, { useEffect } from "react";  
import { t } from "i18next";
import "./homePage.css";
import HorizontalCard, { HorizontalCard1 } from "../../components/HorizontalCard/horizontalCard";
import RFID from "../../assets/icons/RFID_logo.png";
import Reader from "../../assets/icons/RFID_reader.png";
import chipmo from "../../assets/icons/chipmo.png";
import IntroductionCard from "../../components/introductionCard/introductionCard";
import goal from "../../assets/icons/goal.png";
import vision from "../../assets/icons/vision.png";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import InfoCard2 from "../../components/InfoCard/infoCard";
import profile1 from "../../assets/images/profileImage1.png";
import profile2 from "../../assets/images/profileImage2.png";
import profile3 from "../../assets/images/profileImage3.png";
import profile4 from "../../assets/images/profileImage4_1.webp";
import ProfileCard from "../../components/profileCard/profileCard";
import toonot from "../../assets/images/toonot.png";
import ubtz from "../../assets/images/ubtz.png";
import sbd from "../../assets/images/sbd.png";
import och from "../../assets/images/och.png"; 
import { Card, CardContent , CardHeader,CardFooter, CardTitle , CardDescription} from "../../components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from 'react-i18next';



const AnimatedSection = ({ children, from = "left", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay }
    },
    hidden: { 
      opacity: 0, 
      x: from === "left" ? -100 : 100 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
    const { t } = useTranslation();
    const stats = [
  { value: "100+", label: t("homepage.partners") },
  { value: "50+", label: t("homepage.projects") },
  { value: "10+", label: t("homepage.services") },
  { value: "24/7", label: t("homepage.support") },
];
  return (
    
    <>
      <section className="relative w-full">
        <div className="w-full bg-[#1a1a1a]">
          <div className="w-full [background:linear-gradient(90deg,rgba(0,0,0,1)_100%,rgba(26,26,26,1)_50%,rgba(0,0,0,1)_0%)]">
            <div className="relative flex flex-row px-16 mt-12">
              <AnimatedSection from="left" delay={0.2}>
                <div className="flex-1">
                  <h1 className="[font-family:'Rubik',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[75px]">
                    {t("homepage.title1")}
                  </h1>
                  <h1 className="[font-family:'Rubik',Helvetica] font-bold text-6xl tracking-[0] leading-[75px] bg-gradient-to-r from-[#e88524] to-[#ffcc70] text-transparent bg-clip-text">
                    {t("homepage.title2")}
                  </h1>

                  <div className="flex gap-10 mt-6">
  <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-semibold text-xl uppercase shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-150">
    {t("homepage.button1")}
  </Button>
  <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-semibold text-xl uppercase shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-150">
    RFID
  </Button>
  <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-semibold text-xl uppercase shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-150">
    CLOUD
  </Button>
</div>


                  <div className="flex flex-wrap items-center mt-10 space-y-3">
                    <h2 className="[font-family:'Rubik',Helvetica] font-bold text-white text-[38px] tracking-[0] leading-[45px] inline-block  ">
                      {t("homepage.subtitle1")}
                    </h2>
                    <span className="[font-family:'Rubik',Helvetica] font-bold text-[#e88524] text-[38px] tracking-[0] leading-[45px]  ml-6">
                      {t("homepage.subtitle2")}
                    </span>
                  </div>

                  <p className="mt-8 w-[609px] [font-family:'Rubik',Helvetica] font-normal text-[#fffcfc] text-[21px] tracking-[0] leading-[32.5px]">
                    {t("homepage.description")}
                  </p>

                  <div className="flex gap-16 mt-12">
                    <Button className="w-64 h-[71px] !rounded-full [background:linear-gradient(90deg,rgba(255,159,58,1)_100%,rgba(232,133,36,1)_0%)] [font-family:'Rubik',Helvetica] font-bold text-black text-xl hover:scale-105 hover:shadow-lg transition-transform  duration-150">
                      {t("homepage.contact_button")}
                      <ArrowRightIcon className="w-6 h-6 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-12 border-t-[0.8px] border-[#333333] pt-8 flex justify-between max-w-[694px]">
                    {stats.map((stats, index) => (
                      <motion.div
                        key={index}
                        className="text-center transition-all duration-200 hover:scale-105 hover:bg-[#222] rounded-xl p-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <p className="[font-family:'Rubik',Helvetica] font-bold text-[#e88524] text-[40px] text-center tracking-[0] leading-9">
                          {stats.value}
                        </p>
                        <p className="[font-family:'Rubik',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 mt-2">
                          {stats.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection from="right" delay={0.4}>
  <div className="flex items-center justify-center min-h-screen ml-40">
    <div className="relative w-[690px] h-[630px] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(255,165,0,0.4)] transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-orange-500 via-yellow-400 to-yellow-200 opacity-30 blur-[200px]" />
      <div className="relative z-10  px-10 py-8 flex flex-col justify-center items-center text-white bg-[#1f1f1f]/80 rounded-[80px]  backdrop-blur-lg border border-black">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="overflow-hidden border-4 border-black shadow-xl rounded-2xl"
        >
          <iframe
            width="570"
            height="400"
            src="https://www.youtube.com/embed/8TDST3b4o88?si=bJ6nvpP5yiUGJp4b"
            title="YouTube video player"
            frameBorder="0"
            allow=""
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </motion.div>

        
        <h2 className="mt-6 text-2xl font-semibold tracking-wide text-orange-200 drop-shadow-md">
          RFID системийн танилцуулга
        </h2>
      </div>
    </div>
  </div>
</AnimatedSection>


            </div>
          </div>
        </div>
      </section>

      <motion.div 
        className="moving-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="moving-track">
          <span className="moving-content">{t("homepage.marquee")}</span>
          <span className="moving-content">{t("homepage.marquee")}</span>
          <span className="moving-content">{t("homepage.marquee")}</span>    
        </div>
      </motion.div>

      <div className="bg-[#121212] text-white px-4 py-12 text-center">
        <AnimatedSection from="bottom" delay={0.3}>
          <h2 className="inline-block pb-2 mb-10 text-3xl font-bold border-b-2 border-orange-500">
            {t("homepage.s")}
          </h2>
        </AnimatedSection>
     
        <div className="flex flex-col justify-center gap-8 mb-12 md:flex-row">
          <AnimatedSection from="left" delay={0.4}>
            <div className="bg-[#1e1e1e] rounded-xl p-8 w-full md:w-96 h-[400px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-orange-400 flex flex-col">
              <img src="chipmo_logo.png" alt="Chipmo Logo" className="h-24 mx-auto mb-6" />
              <h3 className="mb-4 text-xl font-bold text-orange-500">{t("homepage.program")}</h3>
              <p className="flex-grow text-base leading-relaxed">
                {t("homepage.program_sub")}
              </p>
              
            </div>
          </AnimatedSection>

          <AnimatedSection from="bottom" delay={0.5}>
            <div className="bg-[#1e1e1e] rounded-xl p-8 w-full md:w-96 h-[400px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-orange-400 flex flex-col">
              <img src="shoshgo.png" alt="RFID Icon" className="h-24 mx-auto mb-6" />
              <h3 className="mb-4 text-xl font-bold text-orange-500">{t("homepage.rfid")}</h3>
              <p className="flex-grow text-base leading-relaxed">
                {t("homepage.rfid_sub")}
              </p>
              
            </div>
          </AnimatedSection>

          <AnimatedSection from="right" delay={0.6}>
            <div className="bg-[#1e1e1e] rounded-xl p-8 w-full md:w-96 h-[400px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-orange-400 flex flex-col">
              <img src="rfid.png" alt="RFID Device" className="h-24 mx-auto mb-6" />
              <h3 className="mb-4 text-xl font-bold text-orange-500">{t("homepage.rfid_tuh")}</h3>
              <p className="flex-grow text-base leading-relaxed">
                {t("homepage.rfid_tuh_sub")}
              </p>
              
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection from="bottom" delay={0.7}>
          <h2 className="inline-block pb-2 text-2xl font-bold border-b-4 border-orange-500">
            {t("homepage.too")}
          </h2>
        </AnimatedSection>
      </div>
      
      <AnimatedSection from="bottom" delay={0.4}>
        <section className="video-section2"> 
          <iframe 
            width="1200" 
            height="550" 
            src="https://www.youtube.com/embed/moQrnj71RNM?si=KJc50kc2hZY1fuOj" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </section>
      </AnimatedSection>
      
      <div className="intro-card">
        <AnimatedSection from="left" delay={0.3}>
          <IntroductionCard 
            icon={goal} 
            title={t("homepage.zorilgo")} 
            description={t("homepage.zorilgo_sub")} 
            width="540px"
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.4}>
          <IntroductionCard 
            icon={vision} 
            title={t("homepage.haraa")} 
            description={t("homepage.haraa_sub")} 
            width="540px"
          />
        </AnimatedSection>
      </div>
      
      <AnimatedSection from="bottom" delay={0.5}>
        <div className="intro-card2">
          <IntroductionCard 
            icon={vision} 
            title={t("homepage.compani_tuhai")}  
            description={t("homepage.compani_tuhai_sub")} 
            width="1170px"
          />
        </div>
      </AnimatedSection>
      
      <AnimatedSection from="bottom" delay={0.3}>
        <div className="header"><h2>{t("homepage.baiguulagchid")} </h2></div>
      </AnimatedSection>
      <div className="profile-container">
        <AnimatedSection from="left" delay={0.4}>
          <ProfileCard 
            image={profile1} 
            title={t("homepage.tuguldur")} 
            description={t("homepage.tuguldur_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.5}>
          <ProfileCard 
            image={profile2} 
            title={t("homepage.hashaa")} 
            description={t("homepage.hashaa_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.6}>
          <ProfileCard 
            image={profile3} 
            title={t("homepage.dulguun")} 
            description={t("homepage.dulguun_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.7}>
          <ProfileCard 
            image={profile4} 
            title={t("homepage.io")} 
            description={t("homepage.io_sub")} 
          />
        </AnimatedSection>
      </div>

      <div className="sponsers">
        <AnimatedSection from="left" delay={0.4}>
          <InfoCard2 
            image={toonot} 
            title={t("homepage.toonot")} 
            description={t("homepage.toonot_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.5}>
          <InfoCard2 
            image={ubtz} 
            title={t("homepage.ubtz")} 
            description={t("homepage.ubtz_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.6}>
          <InfoCard2 
            image={sbd} 
            title={t("homepage.sbd")}  
            description={t("homepage.sbd_sub")} 
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.7}>
          <InfoCard2 
            image={och} 
            title={t("homepage.och")} 
            description={t("homepage.och_sub")} 
          />
        </AnimatedSection>
      </div>
    </>
  );
}