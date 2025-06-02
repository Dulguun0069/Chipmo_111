import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import rfidbanner from "../../assets/images/rfidbanner.jpg";
import rfidlogo from "../../assets/images/rfidlogo.png";
import rfidproduct from "../../assets/images/r5.png";
import rfidproduct1 from "../../assets/images/ura4.png";
import rfidproduct2 from "../../assets/images/r20.png";
import rfidproduct3 from "../../assets/images/r3.png";
import rfidUseCase from "../../assets/images/rfidtag.png";
import rfidUseCase1 from "../../assets/images/pic1.png";
import rfidUseCase2 from "../../assets/images/pic2.png";
import rfidUseCase3 from "../../assets/images/pic3.png";
import rfidUseCase4 from "../../assets/images/pic4.png";
import rfidUseCase5 from "../../assets/images/pic5.png";
import rfidUseCase6 from "../../assets/images/pic6.png"; 
import "./AboutRFID.css";
import { useTranslation } from 'react-i18next';
import { t } from "i18next"; 
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Banner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div
  className="h-screen bg-center bg-cover"
  style={{ backgroundImage: `url(${rfidbanner})` }}
>
</div>

    </motion.div>
  );
};

const AnimatedSection = ({ children, variants = fadeInUp, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};


const TimelineItem = ({ year, title, content, side }) => {
  return (
    <div className={`timeline-entry ${side}`}>
      <motion.div 
        className="timeline-circle"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {year}
      </motion.div>
      <motion.div
        className="timeline-box"
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <strong>{title}</strong><br />
        {content}
      </motion.div>
    </div>
  );
};

const RFIDCompare = () => {
  const compareItems = [
    {
      left: t("about.radio"),
      center: "TECHNOLOGY",
      right: t("about.lazer")
    },
    {
      left: t("about.ugugdul"),
      center: "DATA STORAGE",
      right: t("about.zuwhun")
    },
  ];

  return (
    <div className="rfid-compare-container">
      <motion.div 
        className="frame-66 combined-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >  
          <div className="text-wrapper-28">
            <img
            className="element-6"
            alt="Element"
            src="https://c.animaapp.com/maweg3z5O6b9fU/img/5115664-1.png"
            loading="lazy"
          />
          <div className="aa" >RFID VS BARCODE</div>
            
            <img
            className="barcode-2"
            alt="Barcode"
            src="https://c.animaapp.com/maweg3z5O6b9fU/img/barcode-2-1.png"
            loading="lazy"
          />
            </div>
        
      </motion.div>

      {compareItems.map((item, index) => (
        <div key={index} className="rfid-compare-single">
          <div className="rfid-col left">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.left}
            </motion.p>
          </div>
          <div className="rfid-col center">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.center}
            </motion.p>
          </div>
          <div className="rfid-col right">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.right}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AboutRFID() {
  const { t } = useTranslation();
  const timelineData = [
    {
      year: "1945",
      title: t("about.2r"),
      content: t("about.2r_sub"),
      side: "left"
    },
    {
      year: "1973",
      title: t("about.3r"),
      content: t("about.3r_sub"),
      side: "right"
    },
    {
      year: "1990",
      title: t("about.4r"),
      content: t("about.4r_sub"),
      side: "left"
    },
    {
      year: "2004",
      title: t("about.5r"),
      content: t("about.5r_sub"),
      side: "right"
    },
    {
      year: "2016",
      title: t("about.6r"),
      content: t("about.6r_sub"),
      side: "left"
    },
    {
      year: "2020",
      title: t("about.7r"),
      content: t("about.7r_sub"),
      side: "right"
    },
    {
      year: "2030",
      title: t("about.8r"),
      content: t("about.8r_sub"),
      side: "left"
    },
  ];

  return (
    <div className="Container">
      <Banner />

      <div className="Container-text">
        <AnimatedSection>
          <div className="Container1">
            <motion.div 
              className="Title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t("about.title1")}
            </motion.div>
            <motion.div 
              className="whitetext"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {t("about.title1_sub")}
            </motion.div>
            <motion.div 
              className="whitetext"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {t("about.title1_sub2")}
            </motion.div>
            <motion.div 
              className="lastwhitetext"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {t("about.title1_sub3")}
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection variants={fadeInUp} delay={0.2}>
          <div className="rfid-section">
            <motion.div 
              className="rfid-left"
              variants={fadeInLeft}
            >
              <div className="rfid-title">{t("about.title2")}</div>
              <ul className="rfid-list">
                {[t("about.shoshgo"), t("about.unshigch"), t("about.antena"),t("about.hewlegch"),t("about.heregleeni"),].map((item, i) => (
                  <motion.li 
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: (i) => ({
                        opacity: 1,
                        x: 0,
                        transition: { delay: i * 0.1 + 0.3 }
                      })
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="rfid-right"
              variants={fadeInRight}
            >
              <img src={rfidlogo} alt="RFID Logo" className="rfid-logo" loading="lazy" />
            </motion.div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="rfid-reader-grid">
            {[
              { img: rfidproduct, label: t("about.r5") },
              { img: rfidproduct1, label: t("about.ura4") },
              { img: rfidproduct2, label: t("about.r20") },
              { img: rfidproduct3, label: t("about.r3") }
            ].map((item, index) => (
              <motion.div
  key={index}
  className="reader-card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05, y: -8 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
>
  <img src={item.img} alt={`Reader ${index}`} className="reader-img" loading="lazy" />
  <div className="reader-label">{item.label}</div>
</motion.div>

            ))}
          </div>
        </AnimatedSection>

        <RFIDCompare />

        <div className="rfid-advantage-block">
          <div className="rfid-advantage-text">
            <div className="rfid-advantage-title">{t("about.dawuu")}</div>
            <div className="rfid-advantage-image">
              <img src={rfidUseCase} alt="RFID Advantage" loading="lazy" />
            </div>
            <div>
             {t("about.dawuu_sub")}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="rfid-title1">{t("about.tuuh")}</div>
        </div>

        <div className="rfid-timeline">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              content={item.content}
              side={item.side}
            />
          ))}
        </div>
      </div>
    </div>
  );
}