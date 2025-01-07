export const Header = () => {
  return (
    <header className="header">
      <div className="header__menu-bar">
        <div className="header__logo-box">
          <img className="logo" alt="logo" src="../img/auroHomes.png"></img>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a
                href="#main"
                className="header__nav-link header__nav-link--active"
              >
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#meet-the-team" className="header__nav-link">
                Meet The Team
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact-us" className="header__nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* <div className="header__btn-box">
          <a href="#" className="btn btn--white">
            Login
          </a>
          <a href="#" className="btn btn--green">
            Sign Up
          </a>
        </div> */}
      </div>
      <div className="header__content u-margin-bottom-big">
        <div className="header__hero-img-box">
          <img
            loading="lazy"
            src="img/hero-img-2x.png"
            alt="Auro Homes Hero"
            srcSet="img/hero-img-1x.png 1x, img/hero-img-2x.png 2x"
            className="header__hero-img"
          />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary u-margin-bottom-small">
            <span className="heading-primary--main">
              Quality <span className="emphasis">pays off</span> ,
            </span>
            <span className="heading-primary--sub">
              Cutting corners costs more.{" "}
            </span>
          </h1>
          <p className="heading-sub u-margin-bottom-mid">
            To build homes that are more than just structures, but lifelong
            spaces of comfort and belonging. We aim to deliver exceptional
            quality that lasts a lifetime, creating homes where people feel
            truly at home.
          </p>

          {/* <div className="header__form-group">
            <form action="#" className="header__form">
              <input
                className="header__form-input u-margin-bottom-mid"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                required
              />
              <button className="btn btn--green">Let's Build</button>
            </form>
          </div> */}
        </div>
      </div>
    </header>
  );
};
