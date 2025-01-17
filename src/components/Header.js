import React from "react";
import "../Styles/Header.css";
import profilPhoto from "../assets/profil-photo.jpg";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Header = ({ header }) => {
  const { name, title, contact } = header;

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
        <ul className="contact-info">
          <li>
            <FaEnvelope className="icon" />
            <span> {contact.email}</span>
          </li>
          <li>
            <FaHome className="icon" />
            <span> {contact.adress} </span>
          </li>
          <li>
            <FaPhone className="icon" />
            <span> {contact.phone}</span>
          </li>
          <li>
            <FaLocationPin className="icon" />
            <span> {contact.city} </span>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <img src={profilPhoto} alt="Meiddiel" className="profile-photo" />
      </div>
    </header>
  );
};

export default Header;
