import React from "react";
import InfoCard from "../../components/InfoCard/infoCard";
import HorizontalCard, { HorizontalCard3, HorizontalCard3_1 } from "../../components/HorizontalCard/horizontalCard";
import { HorizontalCard2 } from "../../components/HorizontalCard/horizontalCard";
import CardImage1 from "../../assets/images/how it work.jpg";
import CardImage2 from "../../assets/images/rfid_usage.png";
import borluulalt from "../../assets/icons/borluulalt.png";
import tailan from "../../assets/icons/tailan.png";
import toollogo from "../../assets/icons/toollogo.png";
import tracking from "../../assets/icons/tracking.png";
import cloud from "../../assets/icons/Cloud.png";
import lowcode from "../../assets/icons/low-code.png";
import RFID from "../../assets/icons/rfid1.png";
import { useTranslation } from "react-i18next";
import './systemPage.css';

export default function SystemPage() {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="bannerContainer" />
      <div className="header">
        <h2>{t("sistem.title")}</h2>
      </div>
      
      <div className="firstContainer">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HorizontalCard
            image={CardImage1}
            title={t("sistem.how_it_works.title")}
            description={t("sistem.how_it_works.description")}
          />
        </div>
      </div>

      <div className="firstContainer">
        <HorizontalCard2
          image={CardImage2}
          width="600px"
          title={t("sistem.implementation.title")}
          subTitle={t("sistem.implementation.subtitle")}
          description1={t("sistem.implementation.description1")}
          description2={t("sistem.implementation.step1")}
          description3={t("sistem.implementation.step2")}
          description4={t("sistem.implementation.step3")}
          description5={t("sistem.implementation.step4")}
        />
      </div>  
      
      <div className="header">
        <h2>{t("sistem.features.title")}</h2>
      </div>
      
      <div className="verticalCard">
        <InfoCard 
          image={toollogo}
          title={t("sistem.features.inventory.title")}
          description={t("sistem.features.inventory.description")}
        />
        <InfoCard 
          image={borluulalt}
          title={t("sistem.features.sales.title")}
          description={t("sistem.features.sales.description")}
        />
        <InfoCard
          image={tracking}
          title={t("sistem.features.tracking.title")}
          description={t("sistem.features.tracking.description")}
        />
        <InfoCard 
          image={tailan}
          title={t("sistem.features.reporting.title")}
          description={t("sistem.features.reporting.description")}
        />
      </div>
      
      <div className="header">
        <h2>{t("sistem.advantages.title")}</h2>
      </div>
      
      <div className="firstContainer">
        <HorizontalCard3
          image={cloud}
          title={t("sistem.advantages.cloud.title")}
          description1={t("sistem.advantages.cloud.point1")}
          description2={t("sistem.advantages.cloud.point1_desc")}
          description3={t("sistem.advantages.cloud.point2")}
          description4={t("sistem.advantages.cloud.point2_desc")}
          description5={t("sistem.advantages.cloud.point3")} 
          description6={t("sistem.advantages.cloud.point3_desc")}
        />
      </div>  
      
      <div className="firstContainer">
        <HorizontalCard3
          image={RFID}
          title={t("sistem.advantages.rfid.title")}
          description1={t("sistem.advantages.rfid.point1")}
          description2={t("sistem.advantages.rfid.point1_desc")}
          description3={t("sistem.advantages.rfid.point2")}
          description4={t("sistem.advantages.rfid.point2_desc")}
          description5={t("sistem.advantages.rfid.point3")} 
          description6={t("sistem.advantages.rfid.point3_desc")}
        />
      </div>  
      
      <div className="firstContainer">
        <HorizontalCard3
          image={lowcode}
          title={t("sistem.advantages.lowcode.title")}
          description1={t("sistem.advantages.lowcode.point1")}
          description2={t("sistem.advantages.lowcode.point1_desc")}
          description3={t("sistem.advantages.lowcode.point2")}
          description4={t("sistem.advantages.lowcode.point2_desc")}
          description5={t("sistem.advantages.lowcode.point3")} 
          description6={t("sistem.advantages.lowcode.point3_desc")}
        />
      </div>  
    </>
  );
}