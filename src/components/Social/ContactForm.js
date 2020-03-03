import React from 'react'

const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="contact">
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__title">Tilmeld nyhedsbrev</div>
        <label htmlFor="inputEmail" className="contact__label">
          Email Address<span className="red">*</span>
        </label>
        <input
          type="email"
          id="inputEmail"
          className="contact__input"
          required
        />
        <label htmlFor="inputFirstName" className="contact__label">
          First Name
        </label>
        <input type="text" id="inputFirstName" className="contact__input" />
        <label htmlFor="inputLastName" className="contact__label">
          Last Name
        </label>
        <input type="text" id="inputLastName" className="contact__input" />
        <div className="contact__undertitle">Vælg Nyhedsbrev</div>
        <div className="contact__checkbox-container">
          <input
            type="checkbox"
            id="inputCheckAll"
            className="contact__checkbox"
          />
          <label htmlFor="inputCheckAll" className="contact__label">
            Møllerup - alle
          </label>
        </div>
        <div className="contact__checkbox-container">
          <input
            type="checkbox"
            id="inputCheckFirst"
            className="contact__checkbox"
          />
          <label htmlFor="inputCheckFirst" className="contact__label">
            Verdensballetten
          </label>
        </div>
        <div className="contact__checkbox-container">
          <input
            type="checkbox"
            id="inputCheckSecond"
            className="contact__checkbox"
          />
          <label htmlFor="inputCheckSecond" className="contact__label">
            Møllerup Hamp
          </label>
        </div>
        <button className="contact__btn">Tilmeld</button>
      </form>
    </div>
  )
}

export default ContactForm
