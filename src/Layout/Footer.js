import NEOHUBLOGO from "../assets/image/NEOHUB LOGO.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="top-box">
          <div className="link-box">
            <div className="logo-box">
              <img src={NEOHUBLOGO} alt="" />
            </div>
          </div>
          <div className="link-box">
            <div className="title">Product</div>
            <div>Sand Stone</div>
            <div>Stone</div>
            <div>Cement</div>
            <div>Soft Stone</div>
            Products
          </div>
          <div className="link-box">
            <div className="title">Service</div>
            <div>Measurement Service</div>
            <div>Product Advice</div>
            <div>Interior Design</div>
          </div>
          <div className="link-box">
            <div className="title">Contact information</div>
            <div>Address in line 1, </div>
            <div>City Name, State Name, 000 000 </div>
            <div>Country Name Here</div>
          </div>
        </div>
        <div className="bottom-box">
          <div>Copyright © 2022 | All Rights Reserved.</div>
          <div>Created with love by <span className="title">thecreation.design</span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
