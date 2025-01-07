export const ContactUs = () => {
  return (
    <section className="contact-us" id="contact-us">
      <h3 className="heading-tertiary u-margin-bottom-small">Contact Us</h3>
      <div className="contact-us__container">
        <div className="contact-us__left">
          <h2 className="heading-secondary u-margin-bottom-small">
            Let's Talk
          </h2>
          <p className="paragraph u-margin-bottom-mid">
            We've found that we deliver the greatest value to our clients when
            we establish ongoing relationships that allow us to materially
            contribute to their long-term success.
          </p>

          <div className="contact-us__inner-content-box">
            <span className="contact-us__icon-box">
              <img
                src={`${process.env.PUBLIC_URL}/img/email.png`}
                alt="email"
              />
            </span>
            <h3 className="contact-us__title u-margin-bottom-small">
              Send us an email
            </h3>
            <p className="paragraph u-margin-bottom-small">
              auroonehomes@gmail.com
            </p>
          </div>
          <div className="contact-us__inner-content-box">
            <span className="contact-us__icon-box">
              <img
                src={`${process.env.PUBLIC_URL}/img/phone.png`}
                alt="location"
              />
            </span>
            <h3 className="contact-us__title u-margin-bottom-small">
              Talk to us
            </h3>
            <p className="paragraph u-margin-bottom-small">
              8885554485, 8885554585
            </p>
          </div>
        </div>

        {/* <div className="contact-us__right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setFormData({ ...initialFormData });
            }}
            className="contact-us__form form"
          >
            <div className="form__col form__col--1 u-margin-bottom-small">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Name
                </label>
                <input
                  className="form__input"
                  type="name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                  placeholder="Michael Mensah"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="contact-email" className="form__label">
                  Email
                </label>
                <input
                  className="form__input"
                  type="email"
                  name="contact-email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  placeholder="Micheal@example.com"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form__col form__col--2 u-margin-bottom-mid">
              <div className="form__group">
                <label htmlFor="message" className="form__label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form__textarea"
                  value={formData.message}
                  onChange={(e) => updateForm("message", e.target.value)}
                  required
                  placeholder="Say Something..."
                ></textarea>
              </div>
            </div>

            <button className="btn btn--green">Send us a message</button>
          </form>
        </div> */}
      </div>
    </section>
  );
};
