import '../../styles/footer.scss';
import envelope from '../../assets/icons/envelope-regular.svg';
import instagram from '../../assets/icons/instagram.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';
/**
 * @class Footer
 * The Footer class has a render method that returns a string of HTML with footer view
 */
class Footer {
  /**
   * The render function is an asynchronous function that returns a string of HTML
   * @access public
   * @async
   * @returns {String} A string with HTML tags
   */
  async render() {
    const view = `
    <section class="footer" id="contact">
        <a class="contact-container" target="_blank" href="mailto:infoghclima@gmail.com">
            <img class="contact-container__image" src="${envelope}" alt="envelope">
            <p class="contact-container__text">${__('footer-mail')}</p>
        </a>
        <a class="contact-container" target="_blank" href="https://instagram.com/greenheatclima?igshid=YmMyMTA2M2Y=">
            <img class="contact-container__image" src="${instagram}" alt="instagram">
            <p class="contact-container__text">${__('footer-instagram')}</p>
        </a>
        <a class="contact-container" target="_blank" href="https://wa.me/+5491162188835">
            <img class="contact-container__image" src="${whatsapp}" alt="whatsapp">
            <p class="contact-container__text">${__('footer-whatsapp')}</p>
        </a>
    </section>
    `;
    return view;
  }
}

export default Footer;