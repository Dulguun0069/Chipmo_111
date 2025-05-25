import React, { useEffect } from "react";  
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

const stats = [
  { value: "100+", label: "ХАМТРАН АЖИЛЛАГСАД" },
  { value: "50+", label: "ТӨСӨЛ" },
  { value: "10+", label: "ҮЙЛЧИЛГЭЭ" },
  { value: "24/7", label: "ДЭМЖЛЭГ" },
];

const AnimatedSection = ({ children, from = "left", delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
  return (
    <>
      <section className="relative w-full">
        <div className="w-full bg-[#1a1a1a]">
          <div className="w-full [background:linear-gradient(90deg,rgba(0,0,0,1)_100%,rgba(26,26,26,1)_50%,rgba(0,0,0,1)_0%)]">
            <div className="relative flex flex-row px-16 mt-12">
              <AnimatedSection from="left" delay={0.2}>
                <div className="flex-1">
                  <h1 className="[font-family:'Rubik',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[75px]">
                    АГУУЛАХ, ХУДАЛДАА
                  </h1>
                  <h1 className="[font-family:'Rubik',Helvetica] font-bold text-6xl tracking-[0] leading-[75px] bg-gradient-to-r from-[#e88524] to-[#ffcc70] text-transparent bg-clip-text">
                    МЕНЕЖМЕНТИЙГ
                  </h1>

                  <div className="flex gap-10 mt-6">
                    <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-bold text-2xl uppercase shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200">
                      LOW-CODE
                    </Button>
                    <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-bold text-3xl hover:scale-105 hover:shadow-lg transition-all duration-200">
                      RFID
                    </Button>
                    <Button className="h-12 w-36 rounded-xl bg-gradient-to-r from-[#e88524] to-[#ff9f3a] text-black font-bold text-2xl uppercase shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200">
                      CLOUD
                    </Button>
                  </div>

                  <div className="mt-8">
                    <h2 className="[font-family:'Rubik',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[45px] inline-block">
                      ХОСЛУУЛСАН ШИЙДЛЭЭР
                    </h2>
                    <span className="[font-family:'Rubik',Helvetica] font-bold text-[#e88524] text-4xl tracking-[0] leading-[45px] ml-4">
                      ШИНЭЧЛЭЕ!!!
                    </span>
                  </div>

                  <p className="mt-8 w-[609px] [font-family:'Rubik',Helvetica] font-normal text-[#fffcfc] text-[21px] tracking-[0] leading-[32.5px]">
                    Дэвшилтэт RFID технологи болон Cloud суурьтай low-code
                    платформын хүчээр бараа материалын менежментэд хувьсгал
                    авчирч, бизнесийн үр ашгийг дээшлүүлээрэй.
                  </p>

                  <div className="flex gap-16 mt-12">
                    <Button className="w-64 h-[71px] !rounded-full [background:linear-gradient(90deg,rgba(255,159,58,1)_100%,rgba(232,133,36,1)_0%)] [font-family:'Rubik',Helvetica] font-bold text-black text-xl hover:scale-105 hover:shadow-lg transition-all duration-200">
                      CONTACT US
                      <ArrowRightIcon className="w-6 h-6 ml-2" />
                    </Button>
                    <Button
                      className="w-64 h-[71px] mb-45 !rounded-full border-2 border-solid border-[#e88524] [font-family:'Rubik',Helvetica] font-bold text-[#e88524] text-xl hover:bg-[#e88524]/10 hover:scale-105 hover:shadow-lg transition-all duration-200"
                    >
                      ШИЙДҮҮД
                      <ChevronDownIcon className="w-6 h-6 ml-10" />
                    </Button>
                  </div>

                  <div className="mt-12 border-t-[0.8px] border-[#333333] pt-8 flex justify-between max-w-[694px]">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center transition-all duration-200 hover:scale-105 hover:bg-[#222] rounded-xl p-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <p className="[font-family:'Rubik',Helvetica] font-bold text-[#e88524] text-[40px] text-center tracking-[0] leading-9">
                          {stat.value}
                        </p>
                        <p className="[font-family:'Rubik',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 mt-2">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection from="right" delay={0.4}>
                <div className="flex items-center justify-center min-h-screen ml-40 bg-black">
                  <div className="relative w-[400px] h-[400px] bg-[#1a1a1a] rounded-xl flex flex-col justify-center items-center text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-orange-400">
                    <div className="text-center">
                      <h2 className="mb-2 text-xl font-bold ">RFID TECHNOLOGY</h2>
                    </div>

                    <div className="absolute text-center bottom-4">
                      <p className="text-sm font-semibold">RFID ШИЙДЭЛ</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Ухаалаг менежментийн систем
                      </p>
                    </div>

                    <motion.div 
                      className="absolute top-[-30px] left-[-30px] bg-orange-400 text-black px-4 py-2 rounded-xl rotate-[30deg] h-[70px] border-2 border-orange-400 transition-all duration-200 hover:scale-110 hover:bg-orange-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-sm font-bold">LOW-CODE</p>
                      <p className="text-xs">Platform</p>
                    </motion.div>

                    <motion.div 
                      className="absolute top-[-30px] right-[-30px] bg-orange-400 text-black px-4 py-2 rounded-full rotate-[10deg] transition-all duration-200 hover:scale-110 hover:bg-orange-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-sm font-semibold">ШИНЭ ТЕХНОЛОГИ</p>
                    </motion.div>

                    <motion.div 
                      className="absolute bg-gray-600 h-[70px] items-center justify-center rounded-full mt-80 text-orange-400 font-bold rotate-[-10deg] w-40 text-center  mr-96 transition-all duration-200 hover:scale-110 hover:bg-gray-700"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="items-center justify-center text-sm font-semibold">REAL-TIME</p>
                      <p className="text-xs">Monitoring</p>
                    </motion.div>

                    <motion.div 
                      className="absolute bottom-[-30px] h-[70px] justify-center items-center right-[-30px] bg-blue-800 text-white px-4 py-2 rounded-md rotate-[10deg] transition-all duration-200 hover:scale-110 hover:bg-blue-900"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <p className="text-sm font-semibold">CLOUD</p>
                      <p className="text-xs">Based</p>
                    </motion.div>
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
          <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>
          <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>
          <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>    
        </div>
      </motion.div>

      <div className="bg-[#121212] text-white px-4 py-12 text-center">
        <AnimatedSection from="bottom" delay={0.3}>
          <h2 className="inline-block pb-2 mb-10 text-3xl font-bold border-b-4 border-orange-500">
            БИДНИЙ ШИЙДЭЛ
          </h2>
        </AnimatedSection>
     
        <div className="flex flex-col justify-center gap-20 mb-12 md:flex-row">
          <AnimatedSection from="left" delay={0.4}>
            <div className="bg-[#1e1e1e] rounded-xl p-6 w-full md:w-90 h-[400px] shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-orange-400">
              <img src="chipmo_logo.png" alt="Chipmo Logo" className="h-20 mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-bold text-orange-500">ПРОГРАММ:</h3>
              <p className="text-sm leading-relaxed">
                Хамгийн сүүлийн Cloud low code программ <br></br>нь бараа материалын ширхэг бүрийг<br></br>
                бодит цаг хугацаанд хянах, нарийвчилсан<br></br> тайлан гаргаж бизнес эрхлэгчид<br></br>
                оновчтой шийдвэр гаргах мөн цаг <br></br>хугацаа, зардал хэмнэхэд тусалдаг.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection from="bottom" delay={0.5}>
            <div className="bg-[#1e1e1e] rounded-xl p-6 w-full md:w-90 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-orange-400">
              <img src="shoshgo.png" alt="RFID Icon" className="h-20 mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-bold text-orange-500">RFID ШОШГО:</h3>
              <p className="text-sm leading-relaxed">
                Бид өндөр чанартай төрөл бүрийн <br></br>ОРЧИНД АЖИЛЛАХ ЧАДВАРТАЙ RFID <br></br>Шошго нийлүүлдэг.
                Ямар ч нөхцөлд үнэн <br></br>зөв, бодит цаг хугацаанд хянах <br></br>зориулалттай RFID
                шошгуудаар бараа<br></br> материалыг хянах боломжтой.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection from="right" delay={0.6}>
            <div className="bg-[#1e1e1e] rounded-xl p-6 w-full md:w-90 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-orange-400">
              <img src="rfid.png" alt="RFID Device" className="h-20 mx-auto mb-4" />
              <h3 className="mb-2 text-lg font-bold text-orange-500">RFID ТӨХӨӨРӨМЖҮҮД:</h3>
              <p className="text-sm leading-relaxed">
                Бид дэлхийн шилдэг 10-т багтдаг <br></br>үйлдвэрлэгчдийн албан ёсны<br></br> борлуулагчаар хямд<br></br>
                үнэтэй, сайн чанарын RFID уншигч,<br></br> хэвлэгч, болон дотоодын хаалга<br></br> зэрэг олон
                төрлийн RFID<br></br> төхөөрөмжүүдийг танд санал <br></br>болгоно.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection from="bottom" delay={0.7}>
          <h2 className="inline-block pb-2 text-2xl font-bold border-b-4 border-orange-500">
            ТООЛЛОГЫН ЯВЦ
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
            title="Зорилго" 
            description="Бидний эрхэм зорилго бол дэвшилтэт RFID технологийн хүчийг ашиглан бараа материалын менежментэд хувьсгал хийж, хэрэглэгчиддээ илүү их үр ашиг, үнэ цэнийг бий болгож, инновацийн шинэ стандартыг ДЭЛХИЙ дахинд бий болгох явдал юм." 
            width="540px"
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.4}>
          <IntroductionCard 
            icon={vision} 
            title="Алсын хараа" 
            description="Бид Монголдоо эхэлж, дэлхийн хэмжээнд хүрээгээ тэлэх зорилготой. Үүний хүрээнд бид бараа материалын менежментэд шинэчлэл авчрах, бизнесүүдийг чадавхжуулах, тогтвортой инноваци, өсөлтийг дэмжих RFID шийдлүүдийн тэргүүлэгч нь болохыг зорьж байна." 
            width="540px"
          />
        </AnimatedSection>
      </div>
      
      <AnimatedSection from="bottom" delay={0.5}>
        <div className="intro-card2">
          <IntroductionCard 
            icon={vision} 
            title="Компаны тухай" 
            description="2019 онд бид 'desktop' хөрөнгийн удирдлагын системийг хөгжүүлсэнээр ажлын гараагаа эхлүүлж байсан түүхтэй. Сүүлийн жилүүдэд Chipmo нь Cloud суурьтай, low-code платформ болон RFID шийдлийг ашиглан бий болсон бөгөөд одоогоор жижиглэн худалдааны дэлгүүр, төмөр зам, архивын модулиудыг зах зээлд нэвтрүүлсэн байна. Бид шинийг санаачилсаар байхын хэрээр үндсэн хөрөнгө, агуулах, уул уурхайн сэлбэг хэрэгсэл, багаж хэрэгсэл, үнэт эдлэл болон бүтээгдэхүүний тоо ширхэг олон бусад салбаруудад шийдлээ нэвтрүүлж өргөжин тэлсээр байх болно. Манай дэвшилтэт RFID технологи нь бизнесүүдэд бараагаа үр ашигтай удирдах, хянах боломжийг олгож, илүү үнэ цэнэ бий болгож, өсөн тэлэх боломжийг олгох болно." 
            width="1170px"
          />
        </div>
      </AnimatedSection>
      
      <AnimatedSection from="bottom" delay={0.3}>
        <div className="header"><h2>ҮҮСГЭН БАЙГУУЛАГЧИД</h2></div>
      </AnimatedSection>

      <div className="profile-container">
        <AnimatedSection from="left" delay={0.4}>
          <ProfileCard 
            image={profile1} 
            title="Э. Төгөлдөр" 
            description="Гүйцэтгэх захирал"
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.5}>
          <ProfileCard 
            image={profile2} 
            title="Г. Хаш-эрдэнэ" 
            description="Борлуулалт хариуцсан менежер"
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.6}>
          <ProfileCard 
            image={profile3} 
            title="Б. Дөлгөөнтамир" 
            description="Үйл ажиллагаа хариуцсан менежер"
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.7}>
          <ProfileCard 
            image={profile4} 
            title="IO TECHNOLOGY" 
            description="Програм хангамжийн түнш"
          />
        </AnimatedSection>
      </div>

      <div className="sponsers">
        <AnimatedSection from="left" delay={0.4}>
          <InfoCard2 
            image={toonot} 
            title="ТООНОТ БЭЛЧИР ТУР ХХК: " 
            description='"chipmo-ийн анхны үйлчлүүлэгчийн хувьд бид тэдний нэвтрүүлсэн буй шинэ үеийн аюулгүй байдлын шийдэл болон бодит цагийн горимоор хянах чадвартай системд сэтгэл хангалуун байдаг."'
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.5}>
          <InfoCard2 
            image={ubtz} 
            title="УБТЗ ХНН: " 
            description='"CHIPMO систем нь цагаан хэрэглэлийн хяналтыг мэдэгдэхүйц сайжруулж, бидний өдөр тутмын гар ажиллагаатай төвөгтэй үйл ажиллагааг эрс сайжруулсан багасгасан."'
          />
        </AnimatedSection>
        <AnimatedSection from="bottom" delay={0.6}>
          <InfoCard2 
            image={sbd} 
            title="СБД НДГ: " 
            description='"RFID-д суурилсан DIGITAL лавлагааны системийг нэвтрүүлсэнээр манай Архивын менежментийн үйл явцыг сайжруулж, хүн бүрийн цагийг хэмнэдэг болгосон."'
          />
        </AnimatedSection>
        <AnimatedSection from="right" delay={0.7}>
          <InfoCard2 
            image={och} 
            title="ОЧ КИДС СТОР: " 
            description='"RFID технологи нь бидний ложистикийн үйл ажиллагааг сайжруулж, үр ашиг болон хэрэглэгчийн сэтгэл ханамжийг нэмэгдүүлсэн. Манай ажилчид ч системийг ашиглахад хялбархан байдагт талархдаг."'
          />
        </AnimatedSection>
      </div>
    </>
  );
}