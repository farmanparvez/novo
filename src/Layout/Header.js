import NEOHUBLOGO from "../assets/image/NEOHUB LOGO.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={NEOHUBLOGO} alt="" />
      </div>
      <div className="link-wrapper">
        <div className="link-container">
          <div className="py-2">Home</div> 
          <div className="py-2">Locations</div>{" "}
          <div className="py-2">Spaces</div>
          <div className="py-2">Ideas</div>{" "}
          <div className="py-2">Solutions</div>{" "}
          <div className="py-2">About</div>
          <div className="py-2">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
