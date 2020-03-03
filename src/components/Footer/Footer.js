import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__location">
          <p className="footer__paragraph">Møllerup Gods</p>
          <p className="footer__paragraph">Møllerupvej 26</p>
          <p className="footer__paragraph">8410 Rønde</p>
        </div>
        <div className="footer__contact">
          <a
            href="tel:+4587586900"
            className="footer__link"
            title="Ring til Os"
          >
            Telefon 87 58 69 00
          </a>
          <a
            href="mailto:info@moellerup.dk"
            className="footer__link footer__link--red"
            title="Skriv til os"
          >
            info@moellerup.dk
          </a>
        </div>
        <div className="footer__copyright">
          <p className="footer__paragraph">&#9679; Tekst Lone Rubin</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
