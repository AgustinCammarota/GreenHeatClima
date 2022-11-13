import Header from '../templates/header/Header';
import Home from '../pages/home/Home';
import Footer from '../templates/footer/Footer';
import Utils from '../utils/utils';

/**
 * @class Router
 * A class that is used to render the header, footer, home page, error page, and routes
 */
class Router {
  /**
   * Header component
   * @type {Function}
   */
  headerComponent;

  /**
   * Footer component
   * @type {Function}
   */
  footerComponent;

  /**
   * Home page
   * @type {Function}
   */
  homePage;

  /**
   * Routes
   * @type {Object}
   */
  routes;

  /**
   * hash route
   * @type {String}
   */
  hashRoute;

  /**
   * The constructor function is called when the class is instantiated.
   * It sets the header, footer, home page, error page, routes, and hash route
   */
  constructor() {
    this.headerComponent = new Header();
    this.footerComponent = new Footer();
    this.homePage = new Home();
    this.hashRoute = Utils.getHash();
    this.routes = {};
  }

  /**
   * It takes the current hash route, and if it exists in the routes object.
   * It renders the component associated with that route.
   * If it doesn't exist, it renders the error page
   * @access public
   * @async
   */
  async handlerViews() {
    const header = document.querySelector('header') || null;
    const footer = document.querySelector('footer') || null;
    const content = document.querySelector('main') || null;

    this.routes = await this._getRoutes();
    const page = this.routes[this.hashRoute] ? this.routes[this.hashRoute] : this.homePage;
    header.innerHTML = await this.headerComponent.render();
    footer.innerHTML = await this.footerComponent.render();
    content.innerHTML = await page.render();
  }

  /**
   * It returns an object with the keys being the routes and the values being the components
   * @access private
   * @returns {Object} A map of routes.
   */
  _getRoutes() {
    /* eslint quote-props: ["error", "always"] */
    return {
      '/': this.homePage,
      'home': this.homePage,
    };
  }
}

export default Router;