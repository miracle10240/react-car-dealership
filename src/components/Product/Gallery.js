import React, { useState, useEffect } from "react";
import '../page-car-detail.css'
import '../General.css'
import './Gallery.css'

const Gallery  = ({gallery}) => {

    return (
        <div className="vdp-layout-holder" id="car-header">
            <div className="vdp-layout-main">
                <div className="vdp-row gallery-section">
                    <div className="gallery">
                        <div className="vdp-gallery owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <div className="owl-item active" >
                                        <div className="slide" data-index="0">
                                            <a href="https://cfwww.hgreg.com/photos/by-size/1130645/3648x2048/content.homenetiol.com_2001243_2195785_0x0_7c4670dab2b0442abf7d41d1579b1b66.jpg" data-fancybox="gallery">
                                            <img alt="2015 Chevrolet Impala Limited LS #0" data-no-retina="" src="https://cfwww.hgreg.com/photos/by-size/1130645/3648x2048/content.homenetiol.com_2001243_2195785_0x0_7c4670dab2b0442abf7d41d1579b1b66.jpg" width="1010" height="568" data-uw-rm-alt-original="2015 Chevrolet Impala Limited LS #0" data-uw-rm-alt="ALT" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="previews">
                        <a href="#" id="slide1" data-id="1" aria-label="home" data-uw-rm-empty-ctrl="">
                            <img src='https://cfwww.hgreg.com/photos/by-size/1130645/1010x568/content.homenetiol.com_2001243_2195785_0x0_79f34398c9094574aa71c48d92babc90.jpg' />
                        </a>
                        <a href="#" id="slide2" data-id="2" aria-label="home" data-uw-rm-empty-ctrl="">
                            <img src='https://cfwww.hgreg.com/photos/by-size/1130645/1010x568/content.homenetiol.com_2001243_2195785_0x0_86ad17f25d2b43229db63b6b60e47b10.jpg' />
                        </a>
                        <a href="#" id="slide3" data-id="3" aria-label="home" data-uw-rm-empty-ctrl="">
                            <img src='https://cfwww.hgreg.com/photos/by-size/1130645/1010x568/content.homenetiol.com_2001243_2195785_0x0_e1ced4521a7643098533088938ab8b7f.jpg' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="vdp-vehicle-info-section vdp-row">
                <div className="vdp-sidebar-element ">
                    <div className="trending">
                    <i className="vdp-icon vdp-icon-flame hide">Trending</i>
                    <span className="stock"> STOCK# 1130645 </span>
                    </div>
                    <h1 role="heading" aria-level="2" data-uw-rm-heading="level"> {gallery.year + " "+ gallery.make + " " + gallery.model}</h1>
                    <div className="views">
                    <span>
                        <i className="vdp-icon vdp-icon-eye-2"></i> 3 </span>
                    <span className="bookmark" data-vehid="421770109">
                        <i className="vdp-icon vdp-heart"></i> 0 </span>
                    </div>
                    <div className="priceSection">
                    <span className="price" data-uw-rm-sr="">${gallery.asking_price}</span>
                    <a href="#" className="btn price_history_btn">Price change tracker</a>
                    </div>
                    <div className="vdp-price-analysis">
                    <h2 className="vdp-title"> Price analysis</h2>
                    <div className="vdp-price-analysis-bar"></div>
                    <div className="vdp-price-analysis-wrapper">
                        <div className="vdp-price-analysis-savings">
                        <span className="vdp-price-analysis-savings-text" data-uw-rm-sr=""> Average Market Price <span className="vdp-price-analysis-savings-value" data-uw-rm-sr=""> ${gallery.avg_market_price} </span>
                        </span>
                        <span style={{textAlign: 'right'}}>
                            <span className="vdp-price-analysis-savings-text" data-uw-rm-sr=""> Our Price <span className="vdp-price-analysis-savings-value" data-uw-rm-sr=""> ${gallery.asking_price} </span>
                            </span>
                        </span>
                        </div>
                        <div className="vdp-price-analysis-kelley">
                        <div className="vdp-price-analysis-kelley-value">
                            <p className="vdp-price-analysis-kelley-price"> Potential Savings</p>
                        </div>
                            {gallery.avg_market_price-gallery.asking_price > 0 ?
                            <div className="vdp-price-analysis-hgreg-value">
                                <div className="vdp-price-analysis-kelley-price" data-uw-rm-sr="">
                                <i> {-((gallery.avg_market_price-gallery.asking_price)/gallery.avg_market_price * 100).toFixed(3)}%</i>${gallery.avg_market_price-gallery.asking_price}
                                </div>
                            </div>
                            : 
                            <div></div>
                            }
                        </div>
                    </div>
                    </div>
                    <div className="vdp-econo-banner">
                    <a data-link-name="EconoBanner" className="econo-car" href="https://www.hgreg.com/outlet">
                        <img data-no-retina="" alt="HGREG.COM ECONO" src="https://cfwww.hgreg.com/template/img/updates/vdp/outlet.png" className="visible" data-uw-rm-alt-original="HGREG.COM ECONO" data-uw-rm-alt="ALT" />
                    </a>
                    </div>
                    <a href="#vdpavailability-modal" className="btn-vdp white open-modal square">Check availability</a>
                    <div className="matador-widget" data-id="595f5f11d0be17319947d7d7" color="#10ae43" displayon="desktop,mobile">
                    <div height="55" width="300" id="cta-view-content" className="sc-jEACwC eQKFbg"><div className="sc-cPiKLX bHnkrU"><div id="initial-message-cta-matador" className="sc-jXbUNg gzlmDn"><img src="https://chat.matador.ai/widget/messageIcon.6ce1ce7f.png" alt="" className="sc-kpDqfm jlvRFp" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SM" /><p style={{fontSize:'12'}} className="sc-dhKdcB fBczDC">Send me a text message</p></div></div></div>
                    </div>
                    <div className="vdp-sidebar-buttons">
                    <a href="#vdpfinancevehicle-modal" className="btn-vdp btn-vdp-financevehicle btn-vdp-financevehicle--embedded btn-vdp-secondary open-modal square">Get pre-approved</a>
                    <div className="vdp-panel-alert-info">
                        <i className="vdp-icon vdp-icon-exchange"></i>
                        <p> Do you already own a car? <span>Trade in your vehicle and get a credit now!</span>
                        </p>
                    </div>
                    <a href="#vdpfinancevehicle-modal" className="btn-vdp btn-vdp-block btn-vdp-financevehicle btn-vdp-financevehicle--floating btn-vdp-secondary open-modal square"> Get pre-approved </a>
                    <a href="#vdpbuyvehicle-modal" className="btn-vdp btn-vdp-block btn-vdp-value-my-trade open-modal square"> Value my trade </a>
                    <button className="capital-one-prequalification-button capital-one-prequalification-button--waiting" data-body-style="Sedan" data-client-token="691c1f49-7041-466e-9a6c-2540cf8547ae" data-condition="used" data-mileage="42104" data-sales-price="11898" data-vehicle-image-url="https:https://cfwww.hgreg.com/photos/by-size/1130645/800x600/content.homenetiol.com_2001243_2195785_0x0_7c4670dab2b0442abf7d41d1579b1b66.jpg" data-make="Chevrolet" data-model="Impala Limited" data-state-code="FL" data-trim="LS" data-year="2015" data-vin="2G1WA5E37F1130645" data-pq-only="" buttonid="15b92840-9930-11ee-b817-2bd35a44d46e" style={{display: 'none'}}>Explore Financing </button>
                    </div>
                </div>
            
               <div className="vdp-vehicle-info vdp-main-column-element">
               <section className="vdp-vehicle-information">
                    <h2 className="vdp-title">Vehicle information</h2>
                    <div className="vdp-vehicle-information-item-container">
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8125 15H13.5C15.1569 15 16.5 13.6569 16.5 12V10.5C16.5 6.35786 13.1421 3 9 3C4.85786 3 1.5 6.35786 1.5 10.5V12C1.5 13.6569 2.84315 15 4.5 15H6.1875C6.1875 13.5583 7.27224 12.37 8.67007 12.2066L10.7677 8.71068C10.9275 8.44429 11.273 8.35791 11.5394 8.51775C11.8058 8.67758 11.8922 9.0231 11.7323 9.28949L9.90439 12.3361C11.014 12.7127 11.8125 13.7631 11.8125 15ZM7.3125 15C7.3125 14.0722 8.06132 13.3192 8.98758 13.3125C8.9956 13.3127 9.00361 13.3127 9.01161 13.3125C9.93824 13.3188 10.6875 14.0719 10.6875 15H7.3125ZM5.3979 7.8056C6.10667 6.71031 7.16996 5.8125 9 5.8125C10.83 5.8125 11.8933 6.71031 12.6021 7.8056C12.7709 8.06641 13.1191 8.14102 13.3799 7.97225C13.6408 7.80347 13.7154 7.45522 13.5466 7.1944C12.6864 5.86509 11.3042 4.6875 9 4.6875C6.6958 4.6875 5.31362 5.86509 4.4534 7.1944C4.28463 7.45522 4.35924 7.80347 4.62005 7.97225C4.88087 8.14102 5.22912 8.06641 5.3979 7.8056Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div> Miles</div>
                            <span itemProp="mileageFromOdometer" itemScope="" itemType="http://schema.org/QuantitativeValue">
                            <span className="hidden" itemProp="unitCode">SMI</span>
                            <span className="hidden" itemProp="unitText">MI</span>
                            <span itemProp="value">{gallery.Miles}mi</span>
                            </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3442_2775)">
                                <path d="M6.49208 4.94383C6.64008 4.73301 6.78855 4.52244 6.93583 4.31086C7.14949 4.00403 7.35856 3.69394 7.57633 3.39036C7.86483 2.98927 8.40853 2.87872 8.81316 3.1457C10.205 4.06419 11.593 4.9887 12.985 5.90669C13.4887 6.23884 13.7438 6.72716 13.8228 7.32253C13.8569 7.59515 13.8735 7.86984 13.8723 8.14476C13.8766 9.86994 13.8745 11.5949 13.8745 13.32C13.8745 14.1014 13.3617 14.7675 12.6142 14.947C12.4779 14.9797 12.3384 14.9966 12.1985 14.9971C10.0256 15.0001 7.85333 15.0008 5.6816 14.9991C5.30534 14.9995 4.94187 14.8573 4.65939 14.5992C4.37691 14.3411 4.19484 13.9849 4.14734 13.5973C4.13379 13.49 4.12661 13.3819 4.12584 13.2737C4.12472 10.9096 4.12472 8.54543 4.12584 6.18119C4.12584 5.69654 4.12584 5.21189 4.12584 4.72724C4.12584 4.42342 4.30305 4.23566 4.59808 4.23365C5.05679 4.23064 5.51333 4.2319 5.97108 4.23365C6.27673 4.23365 6.45393 4.41715 6.46262 4.73501C6.46431 4.80069 6.46262 4.86637 6.46262 4.93179L6.49208 4.94383ZM12.3532 8.81333C12.3575 8.79399 12.3607 8.7744 12.3626 8.75466C12.3692 8.3631 12.3916 7.97079 12.3759 7.58023C12.3645 7.27862 12.2633 6.98811 12.0862 6.74873C11.951 6.56322 11.7627 6.45493 11.5792 6.33585C10.7897 5.82096 10.0022 5.30305 9.21105 4.79091C8.98483 4.64451 8.74846 4.66031 8.51476 4.78289C8.32717 4.88141 8.21998 5.05864 8.10433 5.22885C7.97686 5.41812 7.84263 5.60287 7.70574 5.79789L12.3532 8.81333ZM8.83103 8.36009C8.71032 8.5085 8.60578 8.63008 8.50727 8.75592C8.03625 9.35755 7.60506 9.98575 7.34287 10.7207C7.21612 11.0762 7.15166 11.4427 7.21588 11.8217C7.35784 12.6578 8.02636 13.129 8.70211 13.1882C9.34842 13.2448 9.87593 12.9435 10.2289 12.3782C10.5145 11.9208 10.5109 11.4114 10.3634 10.9007C10.178 10.2587 9.8373 9.70224 9.45681 9.17105C9.26101 8.89806 9.04832 8.63935 8.83103 8.36009Z" fill="#387D65"></path>
                                <path d="M6.41471 4.2H4.12912C4.12912 3.94774 4.11804 3.70369 4.13221 3.4614C4.14793 3.1933 4.3458 3.00147 4.58258 3.00088C5.03295 2.99971 5.48332 2.99971 5.93368 3.00088C6.20421 3.00088 6.3923 3.18333 6.41188 3.49162C6.42631 3.72305 6.41471 3.95742 6.41471 4.2Z" fill="#387D65"></path>
                                <ellipse cx="8.71321" cy="11.1" rx="2.58088" ry="2.7" fill="#387D65"></ellipse>
                                </g>
                                <defs>
                                <clipPath id="clip0_3442_2775">
                                    <rect width="9.75" height="12" fill="white" transform="translate(4.125 3)"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                            <div>Fuel economy</div>
                            <span> 18 City / 30 Highway </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8162 6.95593C15.5843 6.95593 15.4221 7.1414 15.4221 7.35V9.92319H14.4485V8.78723C14.4485 7.86004 13.7066 7.095 12.7562 7.095H11.8753C11.4348 7.095 11.0638 6.74734 11.0871 6.30686C11.0871 5.86636 10.7395 5.49541 10.299 5.49541H9.18631V4.56822H10.6929C10.9248 4.56822 11.087 4.38274 11.087 4.17415V3.40915C11.087 3.17726 10.9015 3.01508 10.6929 3.01508H4.75837C4.52649 3.01508 4.3643 3.20055 4.3643 3.40915V4.17415C4.3643 4.40603 4.54978 4.56822 4.75837 4.56822H6.12606V5.49541L4.89742 5.49557C3.97023 5.49557 3.20519 6.23747 3.20519 7.18781V8.23095H2.278V6.65466C2.278 6.42278 2.09252 6.26059 1.88393 6.26059H1.11892C0.88704 6.26059 0.724854 6.44607 0.724854 6.65466V12.2415C0.724854 12.4734 0.910329 12.6356 1.11892 12.6356L1.8838 12.6354C2.11569 12.6354 2.27787 12.4499 2.27787 12.2413V10.1781H3.20506V11.7082C3.20506 12.6354 3.94697 13.4004 4.8973 13.4004H6.91408C7.35458 13.4004 7.72553 13.7481 7.70222 14.1886C7.70222 14.6291 8.04988 15 8.49036 15H12.7326C13.6598 15 14.4249 14.2581 14.4249 13.3078V11.8937H15.3985V14.4669C15.3985 14.6988 15.584 14.8609 15.7926 14.8609C16.604 14.8609 17.2531 14.2119 17.2531 13.4004L17.2534 8.39316C17.2534 7.60486 16.6043 6.95576 15.8162 6.95576L15.8162 6.95593Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div>Engine</div>
                            <span> Gas/Ethanol V6 3.6L/217 </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3.00002C2.00013 2.72789 2.07429 2.46092 2.21453 2.22771C2.35477 1.9945 2.55582 1.80383 2.79613 1.67614C3.03644 1.54844 3.30696 1.48852 3.57871 1.5028C3.85047 1.51708 4.11322 1.60502 4.33882 1.7572C4.56443 1.90938 4.74438 2.12006 4.85941 2.36669C4.97444 2.61331 5.02021 2.88658 4.99182 3.15723C4.96342 3.42787 4.86194 3.6857 4.69824 3.90308C4.53453 4.12047 4.31477 4.28922 4.0625 4.39127V8.43752H8.9375V4.39127C8.6148 4.26073 8.34755 4.02202 8.18155 3.71605C8.01555 3.41008 7.96113 3.0559 8.02762 2.71421C8.09412 2.37251 8.27738 2.06459 8.54601 1.84319C8.81464 1.6218 9.1519 1.50073 9.5 1.50073C9.8481 1.50073 10.1854 1.6218 10.454 1.84319C10.7226 2.06459 10.9059 2.37251 10.9724 2.71421C11.0389 3.0559 10.9845 3.41008 10.8185 3.71605C10.6525 4.02202 10.3852 4.26073 10.0625 4.39127V8.43752H12.5C13.223 8.43752 13.709 8.43602 14.0713 8.38802C14.417 8.34077 14.5655 8.26052 14.663 8.16302C14.7605 8.06552 14.8408 7.91702 14.888 7.57052C14.936 7.20902 14.9375 6.72302 14.9375 6.00002V4.39127C14.6148 4.26073 14.3476 4.02202 14.1815 3.71605C14.0155 3.41008 13.9611 3.0559 14.0276 2.71421C14.0941 2.37251 14.2774 2.06459 14.546 1.84319C14.8146 1.6218 15.1519 1.50073 15.5 1.50073C15.8481 1.50073 16.1854 1.6218 16.454 1.84319C16.7226 2.06459 16.9059 2.37251 16.9724 2.71421C17.0389 3.0559 16.9845 3.41008 16.8185 3.71605C16.6525 4.02202 16.3852 4.26073 16.0625 4.39127V6.03902C16.0625 6.71252 16.0625 7.27502 16.0025 7.72052C15.9395 8.19152 15.8 8.61677 15.458 8.95802C15.1168 9.30002 14.6915 9.43952 14.2205 9.50252C13.775 9.56252 13.2133 9.56252 12.539 9.56252H10.0625V13.6088C10.3852 13.7393 10.6525 13.978 10.8185 14.284C10.9845 14.59 11.0389 14.9441 10.9724 15.2858C10.9059 15.6275 10.7226 15.9355 10.454 16.1568C10.1854 16.3782 9.8481 16.4993 9.5 16.4993C9.1519 16.4993 8.81464 16.3782 8.54601 16.1568C8.27738 15.9355 8.09412 15.6275 8.02762 15.2858C7.96113 14.9441 8.01555 14.59 8.18155 14.284C8.34755 13.978 8.6148 13.7393 8.9375 13.6088V9.56252H4.0625V13.6088C4.3852 13.7393 4.65245 13.978 4.81846 14.284C4.98446 14.59 5.03888 14.9441 4.97238 15.2858C4.90589 15.6275 4.72262 15.9355 4.454 16.1568C4.18537 16.3782 3.8481 16.4993 3.5 16.4993C3.1519 16.4993 2.81464 16.3782 2.54601 16.1568C2.27738 15.9355 2.09412 15.6275 2.02762 15.2858C1.96113 14.9441 2.01555 14.59 2.18155 14.284C2.34755 13.978 2.6148 13.7393 2.9375 13.6088V4.39127C2.6604 4.27918 2.42311 4.08685 2.25607 3.83896C2.08903 3.59108 1.99986 3.29893 2 3.00002Z" fill="#387D65"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.4375 11.25C13.4375 11.1008 13.4968 10.9577 13.6023 10.8523C13.7077 10.7468 13.8508 10.6875 14 10.6875H15.7145C16.7457 10.6875 17.5625 11.538 17.5625 12.5625C17.5639 12.948 17.4464 13.3246 17.2262 13.641C17.006 13.9574 16.6937 14.1983 16.3317 14.331L17.4792 16.206C17.5179 16.269 17.5437 16.339 17.5552 16.4119C17.5668 16.4849 17.5639 16.5594 17.5467 16.6313C17.5294 16.7031 17.4982 16.7708 17.4548 16.8306C17.4114 16.8904 17.3566 16.941 17.2936 16.9796C17.2306 17.0182 17.1607 17.0441 17.0877 17.0556C17.0147 17.0672 16.9402 17.0643 16.8684 17.047C16.7965 17.0298 16.7288 16.9986 16.669 16.9552C16.6092 16.9117 16.5586 16.857 16.52 16.794L15.0778 14.4375H14.5625V16.5C14.5625 16.6492 14.5032 16.7923 14.3977 16.8977C14.2923 17.0032 14.1492 17.0625 14 17.0625C13.8508 17.0625 13.7077 17.0032 13.6023 16.8977C13.4968 16.7923 13.4375 16.6492 13.4375 16.5V11.25ZM14.5625 13.3125H15.7145C16.103 13.3125 16.4375 12.9878 16.4375 12.5625C16.4375 12.1373 16.103 11.8125 15.7145 11.8125H14.5625V13.3125Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div>Transmission</div>
                            <span> {gallery.transmission} </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3442_8895)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.16475 4.2435C4.35164 3.86984 4.63887 3.5556 4.99428 3.33598C5.34968 3.11635 5.75921 3.00001 6.177 3H11.823C12.2408 3.00001 12.6503 3.11635 13.0057 3.33598C13.3611 3.5556 13.6484 3.86984 13.8353 4.2435L14.8748 6.32175C15.0578 6.24675 15.2377 6.16575 15.4147 6.07875C15.5928 5.98984 15.7988 5.97528 15.9876 6.0383C16.1763 6.10131 16.3323 6.23672 16.4213 6.41475C16.5102 6.59278 16.5247 6.79883 16.4617 6.98759C16.3987 7.17634 16.2633 7.33234 16.0853 7.42125C15.905 7.5015 15.7237 7.5795 15.5415 7.65525L16.2623 9.0975C16.4187 9.41022 16.5001 9.75509 16.5 10.1047V12C16.5005 12.3166 16.4339 12.6298 16.3046 12.9188C16.1753 13.2079 15.9863 13.4663 15.75 13.677V14.625C15.75 14.9234 15.6315 15.2095 15.4205 15.4205C15.2095 15.6315 14.9234 15.75 14.625 15.75C14.3266 15.75 14.0405 15.6315 13.8295 15.4205C13.6185 15.2095 13.5 14.9234 13.5 14.625V14.25H4.5V14.625C4.5 14.9234 4.38147 15.2095 4.1705 15.4205C3.95952 15.6315 3.67337 15.75 3.375 15.75C3.07663 15.75 2.79048 15.6315 2.5795 15.4205C2.36853 15.2095 2.25 14.9234 2.25 14.625V13.677C1.7895 13.2645 1.5 12.666 1.5 12V10.104C1.50014 9.75484 1.58154 9.41051 1.73775 9.09825L2.4525 7.66725C2.27175 7.59075 2.0925 7.50975 1.91625 7.422C1.73912 7.33193 1.60448 7.17587 1.54135 6.98745C1.47822 6.79903 1.49165 6.59336 1.57875 6.41475C1.62274 6.32657 1.68368 6.24793 1.75809 6.18331C1.83249 6.1187 1.9189 6.06938 2.01237 6.03817C2.10584 6.00697 2.20455 5.99449 2.30285 6.00145C2.40115 6.00842 2.49711 6.03468 2.58525 6.07875C2.76225 6.1665 2.943 6.24675 3.12525 6.32175L4.16475 4.2435ZM6.75 10.875C6.75 11.1734 6.63147 11.4595 6.4205 11.6705C6.20952 11.8815 5.92337 12 5.625 12C5.32663 12 5.04048 11.8815 4.8295 11.6705C4.61853 11.4595 4.5 11.1734 4.5 10.875C4.5 10.5766 4.61853 10.2905 4.8295 10.0795C5.04048 9.86853 5.32663 9.75 5.625 9.75C5.92337 9.75 6.20952 9.86853 6.4205 10.0795C6.63147 10.2905 6.75 10.5766 6.75 10.875ZM12.375 12C12.6734 12 12.9595 11.8815 13.1705 11.6705C13.3815 11.4595 13.5 11.1734 13.5 10.875C13.5 10.5766 13.3815 10.2905 13.1705 10.0795C12.9595 9.86853 12.6734 9.75 12.375 9.75C12.0766 9.75 11.7905 9.86853 11.5795 10.0795C11.3685 10.2905 11.25 10.5766 11.25 10.875C11.25 11.1734 11.3685 11.4595 11.5795 11.6705C11.7905 11.8815 12.0766 12 12.375 12ZM5.5065 4.91475C5.56874 4.79019 5.66443 4.68542 5.78286 4.61216C5.90128 4.53891 6.03775 4.50007 6.177 4.5H11.823C11.9622 4.50007 12.0987 4.53891 12.2171 4.61216C12.3356 4.68542 12.4313 4.79019 12.4935 4.91475L13.446 6.81825C12.285 7.16625 10.7205 7.5 9 7.5C7.2795 7.5 5.715 7.16625 4.55475 6.8175L5.5065 4.91475Z" fill="#387D65"></path>
                                </g>
                                <defs>
                                <clipPath id="clip0_3442_8895">
                                    <rect width="18" height="18" fill="white"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                            <div>Category</div>
                            <span> {gallery.category} </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3442_2775)">
                                <path d="M6.49208 4.94383C6.64008 4.73301 6.78855 4.52244 6.93583 4.31086C7.14949 4.00403 7.35856 3.69394 7.57633 3.39036C7.86483 2.98927 8.40853 2.87872 8.81316 3.1457C10.205 4.06419 11.593 4.9887 12.985 5.90669C13.4887 6.23884 13.7438 6.72716 13.8228 7.32253C13.8569 7.59515 13.8735 7.86984 13.8723 8.14476C13.8766 9.86994 13.8745 11.5949 13.8745 13.32C13.8745 14.1014 13.3617 14.7675 12.6142 14.947C12.4779 14.9797 12.3384 14.9966 12.1985 14.9971C10.0256 15.0001 7.85333 15.0008 5.6816 14.9991C5.30534 14.9995 4.94187 14.8573 4.65939 14.5992C4.37691 14.3411 4.19484 13.9849 4.14734 13.5973C4.13379 13.49 4.12661 13.3819 4.12584 13.2737C4.12472 10.9096 4.12472 8.54543 4.12584 6.18119C4.12584 5.69654 4.12584 5.21189 4.12584 4.72724C4.12584 4.42342 4.30305 4.23566 4.59808 4.23365C5.05679 4.23064 5.51333 4.2319 5.97108 4.23365C6.27673 4.23365 6.45393 4.41715 6.46262 4.73501C6.46431 4.80069 6.46262 4.86637 6.46262 4.93179L6.49208 4.94383ZM12.3532 8.81333C12.3575 8.79399 12.3607 8.7744 12.3626 8.75466C12.3692 8.3631 12.3916 7.97079 12.3759 7.58023C12.3645 7.27862 12.2633 6.98811 12.0862 6.74873C11.951 6.56322 11.7627 6.45493 11.5792 6.33585C10.7897 5.82096 10.0022 5.30305 9.21105 4.79091C8.98483 4.64451 8.74846 4.66031 8.51476 4.78289C8.32717 4.88141 8.21998 5.05864 8.10433 5.22885C7.97686 5.41812 7.84263 5.60287 7.70574 5.79789L12.3532 8.81333ZM8.83103 8.36009C8.71032 8.5085 8.60578 8.63008 8.50727 8.75592C8.03625 9.35755 7.60506 9.98575 7.34287 10.7207C7.21612 11.0762 7.15166 11.4427 7.21588 11.8217C7.35784 12.6578 8.02636 13.129 8.70211 13.1882C9.34842 13.2448 9.87593 12.9435 10.2289 12.3782C10.5145 11.9208 10.5109 11.4114 10.3634 10.9007C10.178 10.2587 9.8373 9.70224 9.45681 9.17105C9.26101 8.89806 9.04832 8.63935 8.83103 8.36009Z" fill="#387D65"></path>
                                <path d="M6.41471 4.2H4.12912C4.12912 3.94774 4.11804 3.70369 4.13221 3.4614C4.14793 3.1933 4.3458 3.00147 4.58258 3.00088C5.03295 2.99971 5.48332 2.99971 5.93368 3.00088C6.20421 3.00088 6.3923 3.18333 6.41188 3.49162C6.42631 3.72305 6.41471 3.95742 6.41471 4.2Z" fill="#387D65"></path>
                                <ellipse cx="8.71321" cy="11.1" rx="2.58088" ry="2.7" fill="#387D65"></ellipse>
                                </g>
                                <defs>
                                <clipPath id="clip0_3442_2775">
                                    <rect width="9.75" height="12" fill="white" transform="translate(4.125 3)"></rect>
                                </clipPath>
                                </defs>
                            </svg>
                            </div>
                            <div>Fuel</div>
                            <span> {gallery.Fuel} </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.48995 9.95998H9.80745V15.36C9.80745 16.155 10.7975 16.53 11.3225 15.93L17 9.47998C17.495 8.91748 17.0975 8.03998 16.3475 8.03998H14.03V2.63998C14.03 1.84498 13.04 1.46998 12.515 2.06998L6.83745 8.51998C6.34995 9.08248 6.74745 9.95998 7.48995 9.95998Z" fill="#387D65"></path>
                                <path d="M6.875 3.5625H1.625C1.3175 3.5625 1.0625 3.3075 1.0625 3C1.0625 2.6925 1.3175 2.4375 1.625 2.4375H6.875C7.1825 2.4375 7.4375 2.6925 7.4375 3C7.4375 3.3075 7.1825 3.5625 6.875 3.5625Z" fill="#387D65"></path>
                                <path d="M6.125 15.5625H1.625C1.3175 15.5625 1.0625 15.3075 1.0625 15C1.0625 14.6925 1.3175 14.4375 1.625 14.4375H6.125C6.4325 14.4375 6.6875 14.6925 6.6875 15C6.6875 15.3075 6.4325 15.5625 6.125 15.5625Z" fill="#387D65"></path>
                                <path d="M3.875 9.5625H1.625C1.3175 9.5625 1.0625 9.3075 1.0625 9C1.0625 8.6925 1.3175 8.4375 1.625 8.4375H3.875C4.1825 8.4375 4.4375 8.6925 4.4375 9C4.4375 9.3075 4.1825 9.5625 3.875 9.5625Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div>Horsepower</div>
                            <span> N/A </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2799 7.97998L7.76739 2.46748L7.11489 1.81498C6.89739 1.59748 6.53739 1.59748 6.31989 1.81498C6.10239 2.03248 6.10239 2.39248 6.31989 2.60998L6.97239 3.26248L2.74989 7.48498C2.26989 7.96498 2.01489 8.45248 1.99989 8.93998C1.98489 9.45748 2.23989 9.97498 2.74989 10.4925L5.75739 13.5C6.76239 14.4975 7.76739 14.4975 8.76489 13.5L13.2799 8.98498C13.4299 8.83498 13.4974 8.63248 13.4824 8.43748C13.4749 8.27248 13.3999 8.09998 13.2799 7.97998Z" fill="#387D65"></path>
                                <path d="M12.5 17.0625H2.75C2.4425 17.0625 2.1875 16.8075 2.1875 16.5C2.1875 16.1925 2.4425 15.9375 2.75 15.9375H12.5C12.8075 15.9375 13.0625 16.1925 13.0625 16.5C13.0625 16.8075 12.8075 17.0625 12.5 17.0625Z" fill="#387D65"></path>
                                <path d="M15.0125 11.085C14.8175 10.875 14.4575 10.875 14.2625 11.085C14.03 11.34 12.875 12.6375 12.875 13.6275C12.875 14.6025 13.6625 15.39 14.6375 15.39C15.6125 15.39 16.4 14.6025 16.4 13.6275C16.4 12.645 15.245 11.34 15.0125 11.085Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div>Color</div>
                            <span> White (Exterior) / Ebony (Interior) </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item">
                        <div className="vdp-vehicle-information-info">
                            <div className="vdp-vehicle-information-icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.171 12.92C16.261 13.7917 15.4283 14.3741 14.6937 14.8881C14.5391 14.9962 14.33 15.1424 14.155 15.2807C14.0148 15.3916 14.038 15.6101 14.1981 15.6898C14.307 15.7441 14.4456 15.8056 14.6212 15.8728C14.9845 16.0121 15.1829 16.4167 15.0501 16.7823C14.9453 17.0715 14.6728 17.2499 14.3836 17.25C14.2997 17.25 14.2146 17.2349 14.1315 17.2033C13.3919 16.9219 12.5299 16.4945 12.4293 15.6825C12.322 14.8169 13.1503 14.2375 13.8812 13.7263C14.0433 13.6129 14.2848 13.4439 14.4761 13.288C14.6097 13.179 14.59 12.9689 14.4386 12.8865C14.353 12.84 14.2468 12.7881 14.1157 12.7314C13.7937 12.5927 13.6084 12.243 13.6957 11.9034C13.8068 11.4707 14.2688 11.2549 14.6627 11.4235C15.2708 11.6839 16.0886 12.1224 16.171 12.92ZM5.57367 12.92C5.66366 13.7917 4.83103 14.3741 4.09642 14.8881C3.94177 14.9962 3.73271 15.1424 3.55771 15.2807C3.41746 15.3916 3.44072 15.6101 3.60077 15.6898C3.70973 15.7441 3.84818 15.8056 4.02387 15.8728C4.38716 16.0121 4.58542 16.4167 4.45279 16.7823C4.34798 17.0715 4.07551 17.2499 3.78615 17.25C3.70239 17.25 3.61725 17.2349 3.53418 17.2033C2.79458 16.9219 1.9326 16.4945 1.83194 15.6825C1.72464 14.8169 2.55299 14.2375 3.28372 13.7263C3.44598 13.6129 3.68744 13.4439 3.87878 13.288C4.01293 13.1786 3.99189 12.9683 3.83987 12.8858C3.7521 12.8382 3.64286 12.7849 3.50732 12.7269C3.14749 12.5728 2.98066 12.156 3.13475 11.7962C3.28884 11.4364 3.70544 11.2695 4.06541 11.4236C4.67347 11.6839 5.49129 12.1224 5.57367 12.92Z" fill="#387D65"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.51212 1.82425C6.40693 1.82415 6.30403 1.85495 6.21618 1.91281C6.12836 1.97066 6.05945 2.05301 6.018 2.14966L5.00672 4.50986H13.046L12.0347 2.14974C11.9933 2.05318 11.9244 1.9708 11.8367 1.91296C11.749 1.85511 11.6462 1.82427 11.5411 1.82425L6.51212 1.82425ZM13.3233 5.58411H4.72935V8.26973H13.3233V5.58411ZM11.7391 9.34397H6.31359C6.26132 9.60003 6.13498 9.83736 5.94742 10.0249C5.69559 10.2767 5.35404 10.4182 4.99791 10.4182C4.64177 10.4182 4.30023 10.2767 4.0484 10.0249C3.79658 9.77309 3.6551 9.43155 3.6551 9.07541V5.04699C3.6551 4.97426 3.66987 4.90229 3.69851 4.83544L5.03058 1.72658C5.15491 1.43653 5.36172 1.18929 5.62525 1.0157C5.88872 0.842159 6.19732 0.749774 6.5128 0.75C6.5127 0.75 6.51289 0.75 6.5128 0.75H11.5411C11.8564 0.750035 12.1649 0.842571 12.4281 1.01614C12.6913 1.18971 12.8978 1.4367 13.0221 1.72649L14.3542 4.83544C14.3828 4.90229 14.3976 4.97426 14.3976 5.04699V9.07541C14.3976 9.43155 14.2561 9.77309 14.0043 10.0249C13.7524 10.2767 13.4109 10.4182 13.0548 10.4182C12.6986 10.4182 12.3571 10.2767 12.1053 10.0249C11.9177 9.83736 11.7913 9.60003 11.7391 9.34397Z" fill="#387D65"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.19222 5.04699H13.8604V8.80685H4.19222V5.04699ZM5.80359 6.65836C5.80359 6.5159 5.86018 6.37928 5.96091 6.27855C6.06164 6.17782 6.19826 6.12123 6.34072 6.12123C6.48317 6.12123 6.62033 6.17782 6.72106 6.27855C6.82179 6.37928 6.87838 6.5159 6.87838 6.65836C6.87838 6.80081 6.82179 6.93743 6.72106 7.03816C6.62033 7.13889 6.48371 7.19548 6.34125 7.19548C6.1988 7.19548 6.06164 7.13889 5.96091 7.03816C5.86018 6.93743 5.80359 6.80081 5.80359 6.65836ZM11.712 6.12123C11.5695 6.12123 11.4329 6.17782 11.3321 6.27855C11.2314 6.37928 11.1748 6.5159 11.1748 6.65836C11.1748 6.80081 11.2314 6.93743 11.3321 7.03816C11.4329 7.13889 11.5695 7.19548 11.712 7.19548C11.8544 7.19548 11.9916 7.13889 12.0923 7.03816C12.193 6.93743 12.2496 6.80081 12.2496 6.65836C12.2496 6.5159 12.193 6.37928 12.0923 6.27855C11.9916 6.17782 11.8544 6.12123 11.712 6.12123Z" fill="#387D65"></path>
                            </svg>
                            </div>
                            <div>Traction</div>
                            <span> FWD </span>
                        </div>
                        </div>
                        <div className="vdp-vehicle-information-item green">
                        <a href="/used-car/chevrolet-impala-limited-2015-for-sale-421770109?report=WindowStickerReport" target="_blank" aria-label="Open this option - opens in new tab" data-uw-rm-empty-ctrl="" data-uw-rm-ext-link="" uw-rm-external-link-id="https://www.hgreg.com/used-car/chevrolet-impala-limited-2015-for-sale-421770109?report=windowstickerreport$openthisoption">
                            <img src="https://cfwww.hgreg.com/template/img/updates/vdp/windowscticker_btn.png" alt="" style={{marginTop: '7px'}} data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="HD" />
                        </a>
                        </div>
                        <div className="vdp-vehicle-information-item green">
                        <a target="_blank" href="http://www.carfax.com/VehicleHistory/p/Report.cfx?partner=DVW_1&amp;vin=2G1WA5E37F1130645" style={{display: 'block'}} aria-label="carfax.com - opens in new tab" data-uw-rm-empty-ctrl="" data-uw-rm-ext-link="" uw-rm-external-link-id="http://www.carfax.com/vehiclehistory/p/report.cfx?partner=dvw_1&amp;vin=2g1wa5e37f1130645$carfax.com">
                            <img src="https://cfwww.hgreg.com/template/img/updates/vdp/carfax_btn.png" alt="" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="HD" />
                        </a>
                        </div>
                    </div>
                    </section>

                    <div className="vdp-vehicle-tabs full-width-background full-width-background--grey">
                        <div className="vdp-tab-container">
                            <ul data-tabs="" role="tablist">
                            <li role="presentation">
                                <a href="#vdptab-equipment" data-tabby-default="" id="tabby-toggle_vdptab-equipment" role="tab" aria-controls="vdptab-equipment" aria-selected="true">Equipment</a>
                            </li>
                            <li role="presentation">
                                <a href="#vdptab-inspection" id="tabby-toggle_vdptab-inspection" role="tab" aria-controls="vdptab-inspection" aria-selected="false">Multi-point inspection</a>
                            </li>
                            <li id="price_history_tab_title" role="presentation">
                                <a href="#vdptab-price" id="tabby-toggle_vdptab-price" role="tab" aria-controls="vdptab-price" aria-selected="false">Price change tracker</a>
                            </li>
                            </ul>
                        </div>
                        <div id="vdptab-inspection" className="vdptab-inspection" role="tabpanel" aria-labelledby="tabby-toggle_vdptab-inspection" hidden="hidden">
                            <div className="vdp-banner">
                            <i className="vdp-icon vdp-icon-shield-2"></i>
                            <p> Feel 100% confidence in your purchase.</p>
                            </div>
                            <ul className="vdp-inspection-list">
                            <li>
                                <span className="category"> Engine </span>
                                <span className="status">
                                <span>
                                    <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                                </span>
                            </li>
                            <li>
                                <span className="category"> Transmission </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Electrical System </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Accessories </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Lighting </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Wheels </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Brakes </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <span className="category"> Suspension System </span>
                                <span className="status">
                                <i className="vdp-icon vdp-icon-check"></i> Passed </span>
                            </li>
                            <li>
                                <a href="https://cfwww.hgreg.com/template/pdf/HGREG-Inspection-Report-en.pdf" target="_blank" aria-label="See full list (PDF) - opens in new tab" data-uw-rm-ext-link="" uw-rm-external-link-id="https://cfwww.hgreg.com/template/pdf/hgreg-inspection-report-en.pdf$seefulllist(pdf)" data-uw-pdf-br="1" data-uw-pdf-doc=""> See full list (PDF) <i className="vdp-icon vdp-icon-arrow-right"></i>
                                </a>
                            </li>
                            <li>
                                <span className="legal-text"> *Example of an inspection report. </span>
                            </li>
                            </ul>
                        </div>
                        <div id="vdptab-equipment" className="vdptab-equipment" role="tabpanel" aria-labelledby="tabby-toggle_vdptab-equipment">
                            <div className="vdp-vehicle-info ">
                            <div className="not-showing-all  no-guide-auto">
                                <div className="vdp-info-inline">
                                <h4 role="presentation" aria-hidden="true" data-uw-rm-heading="hide">
                                    <span style={{color: '#ffffff !important', background: '#000000!important', clip: 'rect(1px, 1px, 1px, 1px)!important', clipPath: 'inset(50%)!important', height: '1px!important', width: '1px!important', margin: '-1px!important', overflow: 'hidden!important', padding: '0!important', position: 'absolute!important'}} className="data-uw-rm-autofix-hide" data-uw-rm-ignore="">Empty heading</span>
                                </h4>
                                <ul className="vdp-list vdp-list-col-3">
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> ENGINE 3.6L SIDI DOHC V6 VVT (300 hp [223.7 kW] @ 6500 rpm 262 lb-ft of torque [353.7 N-m] @ 5300 rpm) (STD) </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> LS PREFERRED EQUIPMENT GROUP includes Standard Equipment </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> AUDIO SYSTEM AM/FM STEREO WITH CD AND MP3 PLAYBACK seek-and-scan digital clock auto-tone control Radio Data System (RDS) automatic volume TheftLock and auxiliary input jack (STD) </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> LICENSE PLATE BRACKET FRONT </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> SEATS FRONT BUCKET (STD) </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> SUMMIT WHITE </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> EBONY CLOTH SEAT TRIM </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> TRANSMISSION 6-SPEED AUTOMATIC ELECTRONICALLY CONTROLLED WITH OVERDRIVE (STD) </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Front Wheel Drive </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Steering </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> ABS </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> 4-Wheel Disc Brakes </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Aluminum Wheels </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Tires - Front All-Season </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Tires - Rear All-Season </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Temporary Spare Tire </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Automatic Headlights </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Mirror(s) </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Intermittent Wipers </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> AM/FM Stereo </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> CD Player </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> MP3 Player </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Auxiliary Audio Input </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Bluetooth Connection </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Steering Wheel Audio Controls </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Bucket Seats </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Cloth Seats </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Driver Seat </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Driver Adjustable Lumbar </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Rear Bench Seat </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Floor Mats </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Adjustable Steering Wheel </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Windows </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Door Locks </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Keyless Entry </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Power Door Locks </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Cruise Control </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Remote Trunk Release </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Immobilizer </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> A/C </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Rear Defrost </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Woodgrain Interior Trim </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Front Reading Lamps </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Driver Vanity Mirror </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Passenger Vanity Mirror </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Rear Reading Lamps </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Traction Control </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Stability Control </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Daytime Running Lights </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Driver Air Bag </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Passenger Air Bag </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Front Side Air Bag </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Front Head Air Bag </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Rear Head Air Bag </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Passenger Air Bag Sensor </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Telematics </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Navigation from Telematics </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Requires Subscription </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Child Safety Locks </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Emergency Trunk Release </span>
                                    </li>
                                    <li>
                                    <i className="vdp-icon vdp-icon-check"></i>
                                    <span> Tire Pressure Monitor </span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <a className="view-more show-all-equipment" href="#">View all equipment <i className="make-arrow-down"></i>
                            </a>
                            <a className="view-more show-less-equipment" href="#">View less <i className="make-arrow-up"></i>
                            </a>
                            </div>
                        </div>
                        <div id="vdptab-price" className="vdptab-price" role="tabpanel" aria-labelledby="tabby-toggle_vdptab-price" hidden="hidden">
                            <div className="vdp-price-history">
                            <p>
                                <strong>Price change tracker</strong>
                            </p>
                            <svg className="priceHistory_defs" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                <linearGradient id="lineGradient">
                                </linearGradient>
                                </defs>
                            </svg>
                            
                        </div>
                    </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Gallery