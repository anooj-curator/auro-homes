export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row-1">
        <div className="footer__box">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#meet-the-team" className="footer__link">
                Meet The team
              </a>
            </li>
            {/* <li className="footer__item">
              <a href="#" className="footer__link">
                Estates
              </a>
            </li>
            <li className="#footer__item">
              <a href="" className="footer__link">
                Projects
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Gallery
              </a>
            </li> */}
            <li className="footer__item">
              <a href="#contact-us" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="footer__box">
          <h4 className="footer__title">Support</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Get Help
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                FAQs
              </a>
            </li>
            <li className="#footer__item">
              <a href="" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Terms of Operation
              </a>
            </li>
          </ul>
        </div> */}

        {/* <div className="footer__box">
          <h4 className="footer__title">Offices</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Accra
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Kumasi
              </a>
            </li>
            <li className="#footer__item">
              <a href="" className="footer__link">
                Takoradi
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Kasoa
              </a>
            </li>
          </ul>
        </div> */}

        {/* <div className="footer__box">
          <label htmlFor="language" className="footer__title">
            Language
          </label>
          <select name="language" id="language" className="footer__dropdown">
            <option className="footer__dropdown-item">English</option>
            <option className="footer__dropdown-item">French</option>
            <option className="footer__dropdown-item">Spanish</option>
            <option className="footer__dropdown-item">Arabic</option>
          </select>
        </div> */}
      </div>

      <div className="footer__row-2 u-margin-top-small">
        <p className="copyright">
          &copy; 2023 Auro Homes. All Rights Reserved.
        </p>

        {/* <div className="footer__social-icons-box">
          <a href="#" className="footer__social-link">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#facebook"></use>
            </svg>
          </a>
          <a href="#" className="footer__social-link">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#instagram"></use>
            </svg>
          </a>
          <a href="#" className="footer__social-link">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#twitter"></use>
            </svg>
          </a>
        </div> */}
      </div>

      <div className="footer__row-3 u-margin-top-small">
        <img className="logo" alt="logo" src="../img/auroHomes.png"></img>
        <p className="developer-text">Made with 🤍 && 🔥</p>
      </div>
    </footer>
  );
};
