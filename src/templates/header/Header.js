import '../../styles/header.scss';
import logo from '../../assets/images/logo.webp';
import logoMobile from '../../assets/images/logo-mobile.webp';
/**
 * @class Header
 * The Header class has a render method that returns a string of HTML with header view
 */
class Header {
  /**
   * The render function is an asynchronous function that returns a string of HTML
   * @access public
   * @async
   * @returns {String} A string with HTML tags
   */
  async render() {
    const view = `
    <nav class="nav" id="navigation">
        <figure class="figure-container">
            <img loading="eager" class="figure-container__image" src="${logo}" alt="Green heat clima">
            <img loading="eager" class="figure-container__image" src="${logoMobile}" alt="Green heat clima">
        </figure>
        <ul class="list-container">
            <li class="list-container__item"><a href="#presentation">${__('header-presentation')}</a></li>
            <li class="list-container__item"><a href="#about">${__('header-about')}</a></li>
            <li class="list-container__item"><a href="#services">${__('header-services')}</a></li>
            <li class="list-container__item"><a href="#customers">${__('header-customers')}</a></li>
            <li class="list-container__item"><a href="#gallery">${__('header-gallery')}</a></li>
            <li class="list-container__item"><a href="#contact">${__('header-contact')}</a></li>
        </ul>
    </nav>
  `;
    return view;
  }
}

export default Header;