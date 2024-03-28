import React from "react";
import footerStyles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Elearn Infotech</p>
          </div>
          <div className="col-md-6">
            <p className="text-end">Designed by Elearn Infotech.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
