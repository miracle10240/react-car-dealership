import React, { useState, useEffect } from 'react';
import Car from './car';
import ReactPaginate from 'react-paginate';
import './jquery.multiselect.css'

const Listing = ({carlist}) => {

    const [isLocationClicked, setIsLocationClicked] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 12

    useEffect(() => {
        setTotalPages(Math.ceil(carlist.length / itemsPerPage))
    }, []);
    
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = carlist.slice(startIndex, endIndex);
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    
    return (
        <div className='columns listing-column'>
            <div className="remove-filter-pane">
                <div className="page-title-pane">
                    <input type="checkbox" id="cb-collapse-page-desc"/> 
                    <label htmlFor="cb-collapse-page-desc">
                        <span>
                            <ol id="breadcrumbs" className="breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                <span itemProp="position" className="hidden">1</span>
                                <a itemProp="item" href="/" className="back">
                                <span itemProp="name">Home</span>
                                </a>
                            </li>
                            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                <span itemProp="position" className="hidden">2</span>
                                <a itemProp="item" href="https://www.hgreg.com/used-car" className="back">
                                <span itemProp="name">Used Cars</span>
                                </a>
                            </li>
                            </ol>
                        </span>
                        <h1 className="page-title" role="heading" aria-level="2" data-uw-rm-heading="level">Used Cars for sale</h1>
                    </label>
                    <div className="page-description">
                        <span>
                            <p>HGreg is the trusted dealership to buy used cars. Browse through our collection of quality used automobiles in any of our dealerships. With over 25 years of experience and with a large selection of pre-owned vehicles to choose from, you can be confident to find the right car for you with peace of mind!</p>
                        </span>
                    </div>
                    <div className="col">
                        <div className="columns">
                        </div>
                        <div className="columns five"></div>
                    </div>
                </div>
                <div className="results-filter-pane">
                    <label className="lbl-result-found"><span>3018</span> Found                            </label>
                    <div className="found-container">
                        <div data-userip="188.43.253.75" className="zip" style={{visibility: `visible`}}>
                            <span id="user_location" data-internal-title="Your location" data-title="The nearest store"><i className="location-icon"></i>The nearest store</span> <span id="user_zip">Houston (6574 mi away)</span>
                            <div className="change">
                            <p>Do you want to use this location?</p>
                            <a href="#change_zip-modal" className="btn small no">No</a> <a href="#" className="btn small green yes">Yes</a>
                            </div>
                        </div>
                    </div>
                    <div className="results-filter-pane__right">
                        <div className="sort-by multiselect">
                            <select multiple="multiple" id="segmentation-filter" name="segmentation-filter" data-label-choose="All locations" data-label-selected="selected" className="jqmsLoaded" style={{display: `none`}} aria-label="Multiple select" data-uw-hidden-control="hidden-control-element">
                            <option value="select-all">All stores</option>
                            <option value="9090331">Houston</option>
                            <option value="9071100">Tampa</option>
                            <option value="9049786">Orlando</option>
                            <option value="9061365">West Palm Beach</option>
                            <option value="MP15652">LUX Pompano Beach</option>
                            <option value="MP4450">Doral</option>
                            <option value="9062502">Nissan Kendall</option>
                            <option value="9049800">Miami</option>
                            </select>
                            <div className= {!isLocationClicked? "ms-options-wrap" : "ms-options-wrap ms-active"}>
                            <button type="button" onClick={(e)=>setIsLocationClicked(!isLocationClicked)}><span>All locations</span></button>
                            <div className="ms-options" style={{minHeight: `200px`, maxHeight: `577.609px`}}>
                                <ul style={{columnCount: `1`, columnGap: `0px`}}>
                                    <li data-search-term="all stores"><label htmlFor="ms-opt-1"><input type="checkbox" title="All stores" id="ms-opt-1" value="select-all"/>All stores</label></li>
                                    <li data-search-term="houston"><label htmlFor="ms-opt-2"><input type="checkbox" title="Houston" id="ms-opt-2" value="9090331"/>Houston (6574 mi away)</label></li>
                                    <li data-search-term="tampa"><label htmlFor="ms-opt-3"><input type="checkbox" title="Tampa" id="ms-opt-3" value="9071100"/>Tampa (7068 mi away)</label></li>
                                    <li data-search-term="orlando"><label htmlFor="ms-opt-4"><input type="checkbox" title="Orlando" id="ms-opt-4" value="9049786"/>Orlando (7059 mi away)</label></li>
                                    <li data-search-term="west palm beach"><label htmlFor="ms-opt-5"><input type="checkbox" title="West Palm Beach" id="ms-opt-5" value="9061365"/>West Palm Beach (7202 mi away)</label></li>
                                    <li data-search-term="lux pompano beach"><label htmlFor="ms-opt-6"><input type="checkbox" title="LUX Pompano Beach" id="ms-opt-6" value="MP15652"/>LUX Pompano Beach (7226 mi away)</label></li>
                                    <li data-search-term="doral"><label htmlFor="ms-opt-7"><input type="checkbox" title="Doral" id="ms-opt-7" value="MP4450"/>Doral (7252 mi away)</label></li>
                                    <li data-search-term="nissan kendall"><label htmlFor="ms-opt-8"><input type="checkbox" title="Nissan Kendall" id="ms-opt-8" value="9062502"/>Nissan Kendall (7264 mi away)</label></li>
                                    <li data-search-term="miami"><label htmlFor="ms-opt-9"><input type="checkbox" title="Miami" id="ms-opt-9" value="9049800"/>Miami (7252 mi away)</label></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="stores-sortby-container  location-search-on visible">
                            <label htmlFor="carOrderBy" className="lbl-sort-by">Sort by</label> 
                            <select name="carOrderBy" id="carOrderBy" data-default-option="36" data-close="true" data-classname="order-by" data-register="true" data-role="select2" className="dropdown green icon-dropdown2 select2 select2-hidden-accessible" data-select2-id="carOrderBy" tabIndex="-1" aria-hidden="true">
                            <option value="" data-select2-id="2">Closest</option>
                            <option value="1" data-select2-id="3">Price asc.</option>
                            <option value="2" data-select2-id="4">Price desc.</option>
                            <option value="3" data-select2-id="5">New arrivals</option>
                            <option value="5" data-select2-id="6">Price drop</option>
                            <option value="4" data-select2-id="7">Outlet</option>
                            </select>
                            {/* <span className="select2 select2-container select2-container--default order-by" dir="ltr" data-select2-id="8" style={{width: `172px`}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-carOrderBy-container"><span className="select2-selection__rendered" id="select2-carOrderBy-container" role="textbox" aria-readonly="true" title="Closest">Closest</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div>
                <div className='listings-list'>
                    <div className='catalogue-display'>
                    {subset.map((car) => (
                        <Car 
                            key={car.id}
                            vin = {car.vin}
                            make={car.make}
                            model={car.model}
                            year={car.year}
                            asking_price={car.asking_price}
                            Miles={car.Miles}
                            body={car.body}
                        />
                    ))}
                    <div className="clearfix"></div>
                    <div className="container">
                        <ReactPaginate
                            onPageChange={handlePageChange}
                            pageCount={Math.ceil(carlist.length / itemsPerPage)}
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            containerClassName={'pagination'}
                            pageLinkClassName={'page-number'}
                            previousLinkClassName={'page-number'}
                            nextLinkClassName={'page-number'}
                            activeLinkClassName={'active'}
                        />
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Listing