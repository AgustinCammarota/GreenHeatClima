import '../../styles/home.scss';
import tecnology from '../../assets/icons/atom-svgrepo-com.svg';
import comment from '../../assets/icons/comment-svgrepo-com.svg';
import planning from '../../assets/icons/planning.svg';
import service from '../../assets/icons/service.svg';
import support from '../../assets/icons/support.svg';
import finance from '../../assets/icons/finance.svg';
import education from '../../assets/icons/mortarboard-education-svgrepo-com.svg';
import tools from '../../assets/icons/tools-svgrepo-com.svg';
import home from '../../assets/images/presentation-image.webp';
import map from '../../assets/images/map.webp';
import peisa from '../../assets/images/peisa.webp';
import ariston from '../../assets/icons/ariston.svg';
import baxi from '../../assets/images/baxi.webp';
import giacomini from '../../assets/images/giacomini.webp';
import wilo from '../../assets/images/wilo.webp';
import triangular from '../../assets/icons/triangular.svg';
import galleryImageOne from '../../assets/images/galeria-image-1.webp';
import galleryImageTwo from '../../assets/images/galeria-image-2.webp';
import galleryImageThree from '../../assets/images/galeria-image-3.webp';
import galleryImageFour from '../../assets/images/galeria-image-4.webp';
import galleryImageFive from '../../assets/images/galeria-image-5.webp';
import galleryImageSix from '../../assets/images/galeria-image-6.webp';
import galleryImageSeven from '../../assets/images/galeria-image-7.webp';
import galleryImageEight from '../../assets/images/galeria-image-8.webp';

/**
 * @class Home
 * The Home class has a render method that returns a string of HTML with home page
 */
class Home {
  /**
   * The render function is an asynchronous function that returns a string of HTML
   * @access public
   * @async
   * @returns {String} A string with HTML tags
   */
  async render() {
    const view = `
    <!-- SECTION PRESENTATION   -->
    <section class="presentation" id="presentation">
        <div class="presentation__background"></div>
        <div class="presentation__image">
            <img loading="lazy" src="${home}" alt="heating">
        </div>
        <div class="information-company">
            <h2 class="information-company__title">${__('card-information-company-subtitle')}</h2>
            <h3 class="information-company__subtitle">${__('card-information-company-title')}</h3>
        </div>
        <div class="cards">
            <div class="card-container" id="cardOne">
                <figure class="card-container__icon"><img loading="lazy" src="${tecnology}" alt="tecnology"></figure>
                <h2 class="card-container__title">${__('card-one-title')}</h2>
                <p class="card-container__text">${__('card-one-text')}</p>
            </div>
            <div class="card-container" id="cardTwo">
                <figure class="card-container__icon"><img loading="lazy" src="${tools}" alt="tools"></figure>
                <h2 class="card-container__title">${__('card-two-title')}</h2>
                <p class="card-container__text">${__('card-two-text')}</p>
            </div>
            <div class="card-container" id="cardThree">
                <figure class="card-container__icon"><img loading="lazy" src="${education}" alt="education"></figure>
                <h2 class="card-container__title">${__('card-three-title')}</h2>
                <p class="card-container__text">${__('card-three-text')}</p>
            </div>
            <div class="card-container" id="cardFour">
                <figure class="card-container__icon"><img loading="lazy" src="${comment}" alt="comment"></figure>
                <h2 class="card-container__title">${__('card-four-title')}</h2>
                <p class="card-container__text">${__('card-four-text')}</p>
            </div>
        </div>
    </section>
    <!-- SECTION ABOUT   -->
    <section class="about" id="about">
        <figure class="about-figure">
            <img class="about-figure__image" loading="lazy" src="${map}" alt="map">
        </figure>
        <div class="about-info">
            <h3 class="about-info__subtitle">${__('about-info-subtitle')}</h3>
            <h4 class="about-info__title">${__('about-info-title').toUpperCase()}</h4>
            <hr class="about-info__divider">
            <p class="about-info__text">${__('about-info-text')}</p>
        </div>
    </section>
    <!-- SECTION CUSTOMERS   -->
    <section class="customers" id="customers">
        <div class="brands-container">
            <figure class="brands-container__figure">
                <img class="brands-container__image" size="250px" loading="lazy" src="${ariston}" alt="ariston">
            </figure>
            <figure class="brands-container__figure">
                <img class="brands-container__image" loading="lazy" src="${peisa}" alt="peisa">
            </figure>
            <figure class="brands-container__figure">
                <img class="brands-container__image" loading="lazy" src="${baxi}" alt="baxi">
            </figure>
            <figure class="brands-container__figure">
                <img class="brands-container__image" loading="lazy" src="${giacomini}" alt="giacomini">
            </figure>
            <figure class="brands-container__figure">
                <img class="brands-container__image" loading="lazy" src="${wilo}" alt="wilo">
            </figure>
            <figure class="brands-container__figure">
                <img class="brands-container__image" loading="lazy" src="${triangular}" alt="triangular">
            </figure>
        </div>
    </section>
    <!-- SECTION GALLERY   -->
    <section class="gallery" id="gallery">
        <div class="header-gallery">
            <h3 class="header-gallery__subtitle">${__('header-gallery-subtitle')}</h3>
            <h4 class="header-gallery__title">${__('header-gallery-title').toUpperCase()}</h4>
            <hr class="header-gallery__divider">
        </div>
        <div class="gallery-container">
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageOne}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageSeven}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageThree}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageFour}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageSix}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageFive}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageTwo}" alt="ariston">
            </figure>
            <figure class="gallery-container__figure">
                <img class="gallery-container__image" loading="lazy" src="${galleryImageEight}" alt="ariston">
            </figure>
        </div>
    </section>
    <!-- SECTION SERVICES   -->
    <section class="services" id="services">
        <div class="header-services">
            <h3 class="header-services__subtitle">${__('header-services-subtitle')}</h3>
            <h4 class="header-services__title">${__('header-services-title').toUpperCase()}</h4>
            <hr class="header-services__divider">
        </div>
        <div class="card-services-container">
            <div class="card-services card-services-one">
                <figure class="card-services__figure">
                    <img class="card-services__image" src="${planning}" alt="planning">
                </figure>
                <div class="card-services-info">
                    <h4 class="card-services-info__title">${__('card-services-info-title-one').toUpperCase()}</h4>
                    <p class="card-services-info__text">${__('card-services-info-text-one')}</p>
                </div>
            </div>
            
            <div class="card-services card-services-two">
                <figure class="card-services__figure">
                    <img class="card-services__image" src="${support}" alt="support">
                </figure>
                <div class="card-services-info">
                    <h4 class="card-services-info__title">${__('card-services-info-title-two').toUpperCase()}</h4>
                    <p class="card-services-info__text">${__('card-services-info-text-two')}</p>
                </div>
            </div>
            
            <div class="card-services card-services-three">
                <figure class="card-services__figure">
                    <img class="card-services__image" src="${finance}" alt="finance">
                </figure>
                <div class="card-services-info">
                    <h4 class="card-services-info__title">${__('card-services-info-title-three').toUpperCase()}</h4>
                    <p class="card-services-info__text">${__('card-services-info-text-three')}</p>
                </div>
            </div>
           
           <div class="card-services card-services-four">
                <figure class="card-services__figure">
                    <img class="card-services__image" src="${service}" alt="service">
                </figure>
                <div class="card-services-info">
                    <h4 class="card-services-info__title">${__('card-services-info-title-four').toUpperCase()}</h4>
                    <p class="card-services-info__text">${__('card-services-info-text-four')}</p>
                </div>
            </div>
        </div>
    </section>
  `;
    return view;
  }
}

export default Home;