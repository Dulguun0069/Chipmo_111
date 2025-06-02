import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page-container">
      <div className="contact-content">
        <div className="map-container">
          <h2>{t("contct.location")}</h2>
          <MapContainer
            center={[47.91845, 106.91768]}
            zoom={16}
            className="map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[47.91845, 106.91768]}
              eventHandlers={{
                add: (e) => {
                  e.target.openPopup();
                },
              }}
            >
              <Popup>{t("contct.mapLocation")}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contact-info">
          <h2>{t("contct.title")}</h2>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p>{t("contct.address")}</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </span>
            <p>
              {t("contct.phone")} 
              <a href="tel:88108766">88108766</a>,{" "}
              <a href="tel:99192846">99192846</a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-envelope"></i>
            </span>
            <p>
              {t("contct.email")} <a href="mailto:info@chipmo.mn">info@chipmo.mn</a>
            </p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fas fa-clock"></i>
            </span>
            <p>{t("contct.workHours")}</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon">
              <i className="fab fa-facebook-f"></i>
            </span>
            <p>
              <a href="https://www.facebook.com/ChipmoMongolia" target="_blank" rel="noopener noreferrer">
                {t("contct.facebook")}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>{t("contct.connect")}</h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder={t("contct.yourName")} required />
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder={t("contct.country")} required />
            <input type="text" placeholder={t("contct.phoneWhatsapp")} />
          </div>
          <textarea placeholder={t("contct.message")} rows="6" required></textarea>
          <button type="submit">{t("contct.send")}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;