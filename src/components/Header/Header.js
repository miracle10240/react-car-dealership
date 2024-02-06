import React from "react";
import { useState } from "react";
import './Header.css'
import './General.css'

function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    function openMobileMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header id="header">
        <button className="btn circle mobileMenu" id="mobileMenu" onClick={openMobileMenu} data-uw-rm-kbnav="click" aria-label="Open this option" data-uw-rm-empty-ctrl="">
            <span></span>
            <span></span>
            <span></span>
        </button>
        {isMenuOpen && (
            <div className="row">
            <a href="https://www.hgreg.com/" aria-label="Open this option" data-uw-rm-empty-ctrl="">
            <img src="https://cfwww.hgreg.com/template/img/updates/hgreg-logo.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
            </a>
            <form className="searchBox" method="GET" action="https://www.hgreg.com/used-car">
               <input type="text" name="q" placeholder="Search" aria-label="Search" data-uw-rm-form="fx" />
            </form>
            <nav>
               <ul>
                  <li>
                     <a href="https://www.hgreg.com/used-car">
                     <span>Find</span> a car						</a>
                  </li>
                  <li>
                     <a href="https://www.hgreg.com/sell">
                     <span>Sell</span> your vehicle						</a>
                  </li>
                  <li>
                     <a href="https://www.hgreg.com/finance/approved-credit">
                     Get approved						</a>
                  </li>
                  <li>
                     More <img src="https://cfwww.hgreg.com/template/img/updates/icons/arrow-down.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                     <div className="subMenu">
                        <ul>
                           <div className="col">
                              <li>
                                 <a href="https://www.hgreg.com/choose/our-story">
                                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/story.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                                    <p>
                                       Our story												<span>Learn more about us</span>
                                    </p>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.hgreg.com/choose/compare">
                                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/compare.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                                    <p>
                                       Compare												<span>Compare the vehicles</span>
                                    </p>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.hgreg.com/choose/certified-quality">
                                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/quality.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                                    <p>
                                       Certified quality												<span>More about our quality</span>
                                    </p>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://www.hgreg.com/choose/our-testimonials">
                                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/testimonials.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                                    <p>
                                       Our testimonials												<span>See what others say</span>
                                    </p>
                                 </a>
                              </li>
                           </div>
                           <div className="col">
                              <li>
                                 <a href="https://www.hgreg.com/choose">
                                 <img src="https://cfwww.hgreg.com/template/img/updates/icons/choose.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Choose HGreg.com										</a>
                              </li>
                           </div>
                        </ul>
                     </div>
                  </li>
               </ul>
            </nav>
            <div className="btns">
               <span className="lang-switch">
               <a href="https://www.hgreg.com/used-car/chevrolet-impala-limited-2015-for-sale-421770109" className="btn circle hidden">
               EN    </a>
               <a href="https://www.hgreg.com/coche-usado/chevrolet-impala-limited-2015-para-la-venta-421770109" className="btn circle ">
               ES    </a>
               </span>
               <a href="https://www.hgreg.com/locations" className="btn circle" aria-label="hgreg.com" data-uw-rm-empty-ctrl="">
               <img src="https://cfwww.hgreg.com/template/img/updates/icons/icon-map.svg" alt="" a="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
               </a><a href="https://www.hgreg.com/favorites" className="btn circle heart" aria-label="hgreg.com" data-uw-rm-empty-ctrl="">
               <img src="https://cfwww.hgreg.com/template/img/updates/icons/heart.svg" alt="" />
               </a>
               <a href="tel:844-535-4914" className="btn green" aria-label="call 844-536-5900" uw-rm-vague-link-id="tel:844-536-5900$call 844-536-5900" data-uw-rm-vglnk="">
               <img src="https://cfwww.hgreg.com/template/img/updates/icons/phone.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> 844-535-4914				</a>
            </div>
         </div>
        )}
        
            
         {!isMenuOpen && (
            <div id="mobileMenuNav">
                <a href="https://www.hgreg.com/" className="logo" aria-label="Open this option" data-uw-rm-empty-ctrl="">
                <img src="https://cfwww.hgreg.com/template/img/updates/hgreg-logo.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" />
                </a>
                
                <ul>
                <li className="active">
                    <a href="https://www.hgreg.com/used-car">
                    <span>Find</span> a car					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/sell">
                    <span>Sell</span> your vehicle					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/finance/approved-credit">
                    Get approved					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/locations">
                    Locations					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/favorites">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/heart.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Favorites					</a>
                </li>
                <li>
                    <a href="tel:844-535-4914" className="btn green" aria-label="call 844-536-5900" uw-rm-vague-link-id="tel:844-536-5900$call 844-536-5900" data-uw-rm-vglnk="">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/phone.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> 844-535-4914					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/choose">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/hgreg.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Choose HGreg.com					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/choose/our-story">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/story.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Our story					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/choose/certified-quality">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/quality.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Certified quality					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/choose/compare">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/compare.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Compare					</a>
                </li>
                <li>
                    <a href="https://www.hgreg.com/choose/our-testimonials">
                    <img src="https://cfwww.hgreg.com/template/img/updates/icons/testimonials.svg" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG" /> Our testimonials					</a>
                </li>
                </ul>
            </div>
            )}
        </header>
    )
}

export default Header