import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="footer has-text-white">
                <div className="content has-text-white">
                    <div className="container has-text-white">
                        <div className="columns">
                            <div className="column is-8">
                                <section className="">
                                    <Link to="/" className="has-text-white">
                    Home
                                    </Link>
                                    <br />
                                    <Link className="has-text-white" to="/about">
                    About
                                    </Link>
                                    <br />
                                    <Link className="has-text-white" to="/events">
                    Events
                                    </Link>
                                    <br />
                                    <Link className="has-text-white" to="/blog">
                    Stories
                                    </Link>
                                    <br />
                                    <Link className="has-text-white" to="/contact">
                    Contact
                                    </Link>
                                </section>
                            </div>
                            <div className="column is-4">
                                <div className="content has-text-centered">
                                    <img src={logo} alt="Shohola" style={{ maxHeight: 150 }} />
                                </div>
                                <div className="social has-text-centered">
                                    <a title="facebook" href="https://facebook.com">
                                        <img src={facebook} alt="Facebook" />
                                    </a>
                                    <a title="twitter" href="https://twitter.com">
                                        <img className="fas fa-lg" src={twitter} alt="Twitter" />
                                    </a>
                                    <a title="instagram" href="https://instagram.com">
                                        <img src={instagram} alt="Instagram" />
                                    </a>
                                    <a title="vimeo" href="https://vimeo.com">
                                        <img src={vimeo} alt="Vimeo" />
                                    </a>
                                </div>
                            </div>
                        </div>
            © 2019 Shohola Scholarship // All Rights Reserved.
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
