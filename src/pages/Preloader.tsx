import logoIcon from "../assets/images/logo-icon.png";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        <div className="spinner"></div>
        <div className="logo">
          <img src={logoIcon} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
