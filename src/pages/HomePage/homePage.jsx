
import React from "react";  
import "./homePage.css";
import HorizontalCard, { HorizontalCard1 } from "../../components/HorizontalCard/horizontalCard";
import RFID from "../../assets/icons/RFID_logo.png"
import Reader from "../../assets/icons/RFID_reader.png"
import chipmo from "../../assets/icons/chipmo.png"
import IntroductionCard from "../../components/introductionCard/introductionCard";
import goal from "../../assets/icons/goal.png"
import vision from "../../assets/icons/vision.png"
import { icon } from "leaflet";
import InfoCard, { InfoCard2 } from "../../components/InfoCard/infoCard";
import profile1 from "../../assets/images/profileImage1.png"
import profile2 from "../../assets/images/profileImage2.png"
import profile3 from "../../assets/images/profileImage3.png"
import profile4 from "../../assets/images/profileImage4_1.webp"
import ProfileCard from "../../components/profileCard/profileCard";
import toonot from "../../assets/images/toonot.png"
import ubtz from "../../assets/images/ubtz.png"
import sbd from "../../assets/images/sbd.png"
import och from "../../assets/images/och.png" 

export default  function HomePage() {
  return (
    <>
    <div className="hero-container">
        <div className="bannerSection">
           <section className="left-section">
                <span className="features-item">агуулах, Худалдаа менежментийг</span>
                <div className="features-container">
                    <span>LOW-CODE</span>
                    <span>RFID</span>
                    <span>CLOUD</span>
                </div>
                <span className="features-item">хослуулсан шийдлээр шинэчлэе!!!</span>
                <a href="Contact" className="contactButton">CONTACT US</a>
           </section>
           <section className="video-section">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8TDST3b4o88?si=DTJQE-O2MSNnV9lW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </section>
           <section className="right-section">
               <span>Худалдаа менежментийн ухаалаг шийдэл</span>
           </section>
       </div>
    </div>
       
       <div className="moving-text">
           <div className="moving-track">
               <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>
               <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>
               <span className="moving-content">CHIP MORE CHILL MORE // тооллогоо 5-н минутанд // RFID Технологи дээр суурилсан агуулахын менежмент  // Төгс RFID шийдлийг таньд хүргэнэ!</span>    
           </div>
        </div>
        <div className="header"><h2>ҮНДСЭН БОЛОМЖУУД</h2></div>
        <div className="firstContainer">
            <HorizontalCard
            image={chipmo}
            width="150px"
            title="программ:"
            subTitle="Chipmo системийг нэвтүүлэх нь энгийн бөгөөд шуурхай байх болно."
            description="хамгийн сүүлийн Cloud low code программ  нь бараа материалын ширхэг бүрийг бодит цаг хугацаанд хянах, нарийвчилсан тайлан гаргаж бизнес эрхлэгчидэд оновчтой шийдвэр гаргах мөн цаг хугацаа, зардал хэмнэхэд тусалдаг."
            />
        </div>  
        <div className="firstContainer">
            <HorizontalCard1
            image={RFID}
            width="150px"
            title="RFID шошго:"
            subTitle="Chipmo системийг нэвтүүлэх нь энгийн бөгөөд шуурхай байх болно."
            description="Бид өндөр чанартай төрөл бүрийн ОРЧИНД АЖИЛЛАХ ЧАДВАРТАЙ RFID Шошго нийлүүлдэг. Ямар ч нөхцөлд үнэн зөв, бодит цаг хугацаанд хянах зориулалттай RFID шошгуудаар бараа материалын хяналтаа сайжруулаарай."
            />
        </div>  
        <div className="firstContainer">
            <HorizontalCard
            image={Reader}
            width="150px"
            title="RFID төхөөрөмжүүд:"
            subTitle="Chipmo системийг нэвтүүлэх нь энгийн бөгөөд шуурхай байх болно."
            description="Бид дэлхийн шилдэг 10-т багтдаг үйлдвэрлэгчийн албан ёсны борлуулалтын эрхтэйгээр хямд үнэтэй, сайн чанарын RFID уншигч, хэвлэгч, болон дохиоллын хаалга зэрэг олон төрлийн RFID төхөөрөмжүүдийг таньд санал болгоно."
            />
        </div>  
        <section className="video-section2"> 
            <iframe width="1200" height="550" src="https://www.youtube.com/embed/moQrnj71RNM?si=KJc50kc2hZY1fuOj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <div className="intro-card">
            <IntroductionCard icon={goal} title="Зорилго" description="Бидний эрхэм зорилго бол дэвшилтэт RFID технологийн хүчийг ашиглан бараа материалын менежментэд хувьсгал хийж, хэрэглэгчиддээ илүү их үр ашиг, үнэ цэнийг бий болгож, инновацийн шинэ стандартыг ДЭЛХИЙ дахинд бий болгох явдал юм." width="540px"/>
            <IntroductionCard icon={vision} title="Алсын хараа" description=" Бид Монголдоо эхэлж, дэлхийн хэмжээнд хүрээгээ тэлэх зорилготой. Үүний хүрээнд бид бараа материалын менежментэд шинэчлэл авчрах, бизнесүүдийг чадавхжуулах, тогтвортой инноваци, өсөлтийг дэмжих RFID шийдлүүдийн тэргүүлэгч нь болохыг зорьж байна." width="540px"/>    
        </div>
        <div className="intro-card2">
            <IntroductionCard icon={vision} title="Компаны тухай" description=" 2019 онд бид “desktop” хөрөнгийн удирдлагын системийг хөгжүүлсэнээр ажлын гараагаа эхлүүлж байсан түүхтэй. сүүлийн жилүүдэд Chipmo нь Cloud суурьтай, low-code платформ болон RFID шийдлийг ашиглан бий болсон бөгөөд одоогоор жижиглэн худалдааны дэлгүүр, төмөр зам, архивын модулиудыг зах зээлд нэвтрүүлсэн байна. Бид шинийг санаачилсаар байхын хэрээр үндсэн хөрөнгө, агуулах, уул уурхайн сэлбэг хэрэгсэл, багаж хэрэгсэл, үнэт эдлэл болон бүтээгдэхүүний тоо ширхэг олон  бусад салбаруудад шийдлээ нэвтрүүлж өргөжин тэлсээр байх болно. Манай дэвшилтэт RFID технологи нь бизнесүүдэд бараагаа үр ашигтай удирдах, хянах боломжийг олгож, илүү үнэ цэнэ бий болгож, өсөн тэлэх боломжийг олгох болно." width="1170px"/>
        </div>
        <div className="header"><h2>ҮҮСГЭН БАЙГУУЛАГЧИД</h2></div>

        <div className="profile-container">
            <ProfileCard 
              image={profile1} title="Э. Төгөлдөр" description="Гүйцэтгэх захирал"
            />
            <ProfileCard 
              image={profile2} title="Г. Хаш-эрдэнэ" description="Борлуулалт хариуцсан менежер"
            />
            <ProfileCard 
              image={profile3} title="Б. Дөлгөөнтамир" description="Үйл ажиллагаа хариуцсан менежер"
            />
            <ProfileCard 
              image={profile4} title="IO TECHNOLOGY" description="Програм хангамжийн түнш"
            />
        </div>

        <div className="sponsers">
            <InfoCard2 image={toonot} title="ТООНОТ БЭЛЧИР ТУР ХХК: " description='"chipmo-ийн анхны үйлчлүүлэгчийн хувьд бид тэдний нэвтрүүлсэн буй шинэ үеийн аюулгүй байдлын шийдэл болон бодит цагийн горимоор хянах чадвартай системд сэтгэл хангалуун байдаг."'/>
            <InfoCard2 image={ubtz} title="УБТЗ ХНН: " description='"CHIPMO систем нь цагаан хэрэглэлийн хяналтыг мэдэгдэхүйц сайжруулж, бидний өдөр тутмын гар ажиллагаатай төвөгтэй үйл ажиллагааг эрс сайжруулсан багасгасан."'/>
            <InfoCard2 image={sbd} title="СБД НДГ: " description='"RFID-д суурилсан DIGITAL лавлагааны системийг нэвтрүүлсэнээр манай Архивын менежментийн үйл явцыг сайжруулж, хүн бүрийн цагийг хэмнэдэг болгосон."'/>
            <InfoCard2 image={och} title="ОЧ КИДС СТОР: " description='"RFID технологи нь бидний ложистикийн үйл ажиллагааг сайжруулж, үр ашиг болон хэрэглэгчийн сэтгэл ханамжийг нэмэгдүүлсэн. Манай ажилчид ч системийг ашиглахад хялбархан байдагт талархдаг."'/>
        </div>
    </>
  );
}
