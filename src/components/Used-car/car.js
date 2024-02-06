import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Car = (props) => {

    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(0)
    
    const onCarClick = () => {
        navigate(`/car/${props.vin}`)
    }
    
    return (
        <div data-index="1" className="car-box" itemScope="" itemType="http://schema.org/Vehicle"  onMouseLeave={() => setIsHover(false)} onClick={onCarClick}>
            <div className="hidden" itemProp="brand" itemScope="" itemType="http://schema.org/Brand">
                <span itemProp="name">Hyundai</span>
            </div>
            <div className="top-ribbons">
                <div className="ribbon">
                    <i className="icon new"></i>
                </div>

            </div>
            <div className="truck-bg picture-container  " data-stock="H522317" data-vehid="552277217" data-module="SRP" data-role="hg-event-tracking" data-event-selector="visible" data-tracking-label="vehicle.id" data-tracking-value="552277217" data-tracking-viewport="1">
                <a data-link-name="Vehicle.Picture" data-link-page-index="1" data-link-result-index="1" data-ggtag-entity-id="Vehicle-552277217" data-link-col="1" data-link-row="1">
                    <div className="photos-overlay">
                        <div className="boxes column-1">
                        <div className="box">
                            <div className="content">
                                <i className="icon"></i>
                                <h4>
                                    View 31 more images                          
                                </h4>
                                <div className="button">
                                    <button className="hero transparent-button white-button">Click here</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <img src="https://cfwww.hgreg.com/photos/by-size/H522317/448x252/content.homenetiol.com_2001243_2195785_0x0_a0c834905fa7432882bd385aa0679fd6.jpg" alt="2020 Hyundai Elantra SE                " width="448" height="252" data-xblocker="passed" style={{visibility: `visible`}} data-uw-rm-alt-original="2020 Hyundai Elantra SE" data-uw-rm-alt="ALT"/>
                    <div className="hidden" itemProp="image">https://content.homenetiol.com/2001243/2195785/0x0/a0c834905fa7432882bd385aa0679fd6.jpg</div>
                </a>
                <input data-stock="H522317" data-vehid="552277217" data-page="srp" type="hidden" title="Me garder informé des baisses de prix" className="pricedrop-checkbox" name="priceDrop" value="0"/>
                <span data-price="14998" data-stock="H522317" data-vehid="552277217" data-role="hg-event-tracking" data-event-selector="click" data-tracking-label="vehicle.id" data-tracking-value="552277217" data-tracking-count="1" className="bookmark-icon icon-favoris_blanc kogneta" data-count="0">
                <i className="vdp-icon vdp-icon-heart"></i>
                </span>
            </div>
            <a href="https://www.hgreg.com/used-car/hyundai-elantra-2020-for-sale-552277217" className="car-details" itemProp="offers" itemScope="itemScope" itemType="http://schema.org/Offer" data-link-col="1" data-link-row="1">
                <p className="car-stock">
                    H522317        
                </p>
                <p className="car-title">
                    {props.year} {props.make} {props.model}            
                    <span className="car-price">${props.asking_price}</span>
                </p>
                <p className="car-trim">
                    SE        
                </p>
                <div className="car-miles">
                    {props.Miles} mi        
                </div>
                <div className="car-location">
                    Tampa                , FL                    
                </div>
                <div className="car-info-list"  onMouseEnter={() => setIsHover(true)}>
                    <img src="https://cfwww.hgreg.com/template/img/updates/srp/info.svg" alt="" className="car-details-icon" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG"/>
                </div>
            </a>
            <div className={isHover ? "details-content active" : "details-content"}>
                <ul>
                    <li>
                        <strong>Engine:</strong>
                        <span>Regular Unleaded I-4 2.0 L/122</span>
                    </li>
                    <li>
                        <strong>Transmission:</strong>
                        <span>Automatic</span>
                    </li>
                    <li>
                        <strong>Traction:</strong>
                        <span>FWD</span>
                    </li>
                    <li>
                        <strong>Fuel:</strong>
                        <span>Gas</span>
                    </li>
                    <li>
                        <strong>Category:</strong>
                        <span>Sedan</span>
                    </li>
                    <li>
                        <strong>Color (interior):</strong>
                        <span>Gray </span>
                    </li>
                    <li>
                        <strong>Color (exterior):</strong>
                        <span>Black</span>
                    </li>
                    <li>
                        <strong>Consumption:</strong>
                        <span>40</span>
                    </li>
                    <li>
                        <strong>Stock # : </strong>
                        <span>H522317</span>
                    </li>
                    <li className="car-distance" data-megacenter="Tampa"><strong>Distance: </strong><span>7068 mi</span></li>
                </ul>
                <img src="https://cfwww.hgreg.com/template/img/updates/icons/close.svg" alt="" className="close-car-details" data-uw-rm-alt-original="" role="presentation" data-uw-rm-alt="SVG"/>
            </div>
        </div>
    )
}

export default Car