import React from "react";
import "../Styles/Header.css";
import profilPhoto from "../assets/profil-photo.jpg";

const Header = ({ header }) => {
  const { name, title, contact } = header;

  return (
    <header className="header">
      <img src={profilPhoto} alt="Meiddiel" className="profile-photo" />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>
        Email: {contact.email} <br /> Phone: {contact.phone}
      </p>
    </header>
  );
};

export default Header;
