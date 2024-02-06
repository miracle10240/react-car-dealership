import React, { useState, useEffect } from 'react'
import './filters.css'
import MultiRangeSlider from 'multi-range-slider-react';

const Filters = ({searchCar, filterData}) => {

const [checkedMake, setCheckedMake] = useState(false);
const [checkedModel, setCheckedModel] = useState(false);

const [make, setMake] = useState("");
const [model, setModel] = useState("");

const [prices, setPrices] = useState([0, 70000]);
const [miles, setMiles] = useState([0, 150000]);
const [years, setYears] = useState([2000, new Date().getFullYear()]);

const [options, setOptions] = useState({})

const onMakeClick = (e) => {
   const updatedMake = e.target.value;
   
   updatedMake !== make ?           // if press other make
      setOptions((prevOptions) => ({
         ...prevOptions,
         make: updatedMake
         })) 
   :
      !checkedMake ?
         setOptions((prevOptions) => ({
         ...prevOptions,
         make: updatedMake
         })) 
      :
         setOptions((prevOptions) => {
            const { make, model, ...updatedOptions } = prevOptions;
            return updatedOptions;
         });

   setMake(updatedMake)
}

const onModelClick = (e) => {
   const updatedModel = e.target.value;
   
   updatedModel !== model ?
      setOptions((prevOptions) => ({
         ...prevOptions,
         model: updatedModel
         }))
   :
      !checkedModel ?
         setOptions((prevOptions) => ({
         ...prevOptions,
         model: updatedModel
         }))
      :
         setOptions((prevOptions) => {
            const { model, ...updatedOptions } = prevOptions;
            return updatedOptions;
         });
      setModel(updatedModel)
}

useEffect(() => {
   searchCar(options)
}, [options]);

const yearChange = (e) => {
   const updatedYears = [e.minValue, e.maxValue];
   setYears(updatedYears);
   setOptions((prevOptions) => ({
     ...prevOptions,
     year: updatedYears
   }));
}

const mileChange = (e) => {
   const updated = [e.minValue, e.maxValue];
   setMiles(updated);
   setOptions((prevOptions) => ({
     ...prevOptions,
     mile: updated
   }));
}

const priceChange = (e) => {
   const updated = [e.minValue, e.maxValue];
   setPrices(updated);
   setOptions((prevOptions) => ({
     ...prevOptions,
     price: updated
   }));
}

return (
<div className="filters-column">
   <h4 data-uw-rm-heading="level" role="heading" aria-level="1"><span><span data-filter-count="0">Filters</span></span></h4>
   <div className="filter-fixed-container">
      <div className="filters-container">
         <div className="mobile-bg">
            <div className="search-by-container">
               <div id="search-pane-car" className="search-by-tabcontent active row">
                  <input
                     id="cb-collapse-make"
                     type="checkbox"
                  className="cb-collapse"
                  />
                  <div data-selected="0" className="filter-pane group make-col">
                     <div>
                        <label htmlFor="cb-collapse-make" className="filter-name">Make &amp; Model</label> 
                        <label htmlFor="cb-collapse-make" className="filter-name filter-name-arrow">
                           <div>
                              <img className="collapse-arrow"/>
                           </div>
                        </label>
                     </div>
                     <div className="filter-collapse">
                        <input id="toggle-all-makes" type="checkbox" className="cb-collapse"/>
                        <div className="make-model-col">
                           <ul>
                              {Object.keys(filterData).map((key, index) => (
                              <li key={index}>
                                    <div value={key}>
                                       <input 
                                          id = "greenButton"
                                          name="makeOpen[]" 
                                          value={key}
                                          type="checkbox" 
                                          className="tv-nested"
                                          checked={key===options['make']?checkedMake:false}
                                          onClick={onMakeClick}
                                          onChange={(e) => setCheckedMake(e.target.checked)}
                                       />
                                       <div>
                                       <label htmlFor={"make-"+key}>
                                          <span className={"img make-img make-"+"acura"} style={{backgroundImage: 'none,url(https://cfwww.hgreg.com/template/img/srp/' + key.toLowerCase() + '.png)'}}>
                                          </span>{key} <i>({filterData[key].count})</i>
                                          </label>
                                       </div>
                                    </div>
                                    <ul className={key === options['make']? "models" : "models display-none"}>
                                    {filterData[key].model.map((model, idx) => ( 
                                          <li key={idx}>
                                             <div value={model.name}>
                                                <a data-uw-rm-kbnav="anohref" tabIndex="0">
                                                <input 
                                                   id = "greenButton"
                                                   value={model.name} 
                                                   type="checkbox"
                                                   checked={key==options['make']&&model.name==options['model']?checkedModel:false}
                                                   onClick={onModelClick}
                                                   onChange={(e) => setCheckedModel(e.target.checked)}
                                                /> 
                                                <span>{model.name}
                                                   <i>({model.count})</i>
                                                </span>
                                                </a>
                                             </div>
                                          </li>
                                    ))}
                                    </ul>    
                                 </li>
                              ))}
                              
                           </ul>
                        </div>
                        <div>
                           <label htmlFor="toggle-all-makes" className="make-arrow-down">
                              Show all makes
                              <div>&nbsp;</div>
                           </label>
                           <label htmlFor="toggle-all-makes" className="make-arrow-up">
                              Show less makes
                              <div>&nbsp;</div>
                           </label>
                        </div>
                     </div>
                  </div>
                  <hr className="style" role="presentation" data-uw-rm-sr=""/>
               </div>
            </div>
            
            <input id="cb-collapse-bodytype" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-bodytype">
               <div>
                  <label htmlFor="cb-collapse-bodytype" className="filter-name">Body Type</label> 
                  <label htmlFor="cb-collapse-bodytype" className="filter-name filter-name-arrow">
                     <div>
                        <img className="collapse-arrow"/>
                     </div>
                  </label>
               </div>
               <div className="filter-collapse bodytype-filter-collapse">
                  <div className="car-types-row">
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_sedan" value="Sedan"/> 
                        <label htmlFor="slug_sedan" className="cartype-box">
                           <div className="type-name">Sedan</div>
                           <div className="count">896</div> 
                           <span className="car-img sedan"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_suv" value="SUV"/> 
                        <label htmlFor="slug_suv" className="cartype-box">
                           <div className="type-name">SUV</div>
                           <div className="count">1209</div> 
                           <span className="car-img suv"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_coupe" value="Coupe"/> 
                        <label htmlFor="slug_coupe" className="cartype-box">
                           <div className="type-name">Coupe</div>
                           <div className="count">192</div> 
                           <span className="car-img coupe"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_hatchback" value="Hatchback"/> 
                        <label htmlFor="slug_hatchback" className="cartype-box">
                           <div className="type-name">Hatchback</div>
                           <div className="count">157</div> 
                           <span className="car-img hatchback"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_truck" value="Truck"/>
                        <label htmlFor="slug_truck" className="cartype-box">
                           <div className="type-name">Truck</div>
                           <div className="count">316</div> 
                           <span className="car-img truck"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                     <input name="bodyTypes[]" type="checkbox" id="slug_convertible" value="Convertible top"/> 
                     <label htmlFor="slug_convertible" className="cartype-box">
                        <div className="type-name">Convertible</div>
                        <div className="count">144</div>
                        <span className="car-img convertible"></span>
                     </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_commercial" value="Commercial"/> 
                        <label htmlFor="slug_commercial" className="cartype-box">
                           <div className="type-name">Commercial</div>
                           <div className="count">15</div>
                           <span className="car-img commercial"></span>
                        </label>
                     </div>
                     <div className="cartype-col">
                        <input name="bodyTypes[]" type="checkbox" id="slug_van" value="Van"/> 
                        <label htmlFor="slug_van" className="cartype-box">
                           <div className="type-name">Van</div>
                           <div className="count">42</div>
                           <span className="car-img van"></span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>


            <input id="cb-collapse-price" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-price">
               <div>
                  <label htmlFor="cb-collapse-price" className="filter-name">Price</label> 
                  <label htmlFor="cb-collapse-price" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse">
               <div>
                  ${prices[0]} - ${prices[1]}
               </div>
               <MultiRangeSlider
                  id={"priceSlider"}
                  min={0}
                  max={70000}
                  minValue={prices[0]}
                  maxValue={prices[1]}
                  step={1000}
                  ruler={false}
                  style={{ border:'none', boxShadow:'none'}}
                  barLeftColor='#dff2eb'
                  barInnerColor='#46aa87'
                  thumbLeftColor='#ffffff'      
                  label={false}   
                  onChange={priceChange}
               />
               </div>
            </div>

            <input id="cb-collapse-km" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-km">
               <div>
                  <label htmlFor="cb-collapse-km" className="filter-name">Miles</label> 
                  <label htmlFor="cb-collapse-km" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse">
                  <div>
                     {miles[0]} miles - {miles[1]} miles+
                  </div>
                  <MultiRangeSlider
                     id={"mileSlider"}
                     min={0}
                     max={150000}
                     minValue={miles[0]}
                     maxValue={miles[1]}
                     step={10000}
                     ruler={false}
                     style={{ border:'none', boxShadow:'none'}}
                     barLeftColor='#dff2eb'
                     barInnerColor='#46aa87'
                     thumbLeftColor='#ffffff'      
                     label={false}   
                     onChange={mileChange}
                  />
               </div>
            </div>
                       
            <input id="cb-collapse-year" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-year">
               <div>
                  <label htmlFor="cb-collapse-year" className="filter-name">Year</label> 
                  <label htmlFor="cb-collapse-year" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse">
                  <div>
                     {years[0]} - {years[1]}
                  </div>
                  <MultiRangeSlider
                     id={"yearSlider"}
                     min={2000}
                     max={new Date().getFullYear()}
                     minValue={years[0]}
                     maxValue={years[1]}
                     step={1}
                     ruler={false}
                     style={{ border:'none', boxShadow:'none'}}
                     barLeftColor='#dff2eb'
                     barInnerColor='#46aa87'
                     thumbLeftColor='#ffffff'      
                     label={false}   
                     onChange={yearChange}
                  />
               </div>
            </div>
            
            <input id="cb-collapse-transmission" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-transmission">
               <div>
                  <label htmlFor="cb-collapse-transmission" className="filter-name">Transmission</label> 
                  <label htmlFor="cb-collapse-transmission" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse transmission-filter-collapse">
                  <div className="row">
                     <div className="option-col">
                        <input name="transmissions[]" type="checkbox" id="slug_automatic" value="Automatic"/> 
                        <label htmlFor="slug_automatic" className="option">
                           <span className="img automatic"></span>Automatic <span>(2872)<span></span></span>
                        </label>
                     </div>
                     <div className="option-col">
                        <input name="transmissions[]" type="checkbox" id="slug_manual" value="Manual"/> 
                        <label htmlFor="slug_manual" className="option">
                           <span className="img manual"></span>Manual <span>(99)<span></span></span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
            
            <input id="cb-collapse-traction" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-traction">
               <div>
                  <label htmlFor="cb-collapse-traction" className="filter-name">Traction                        </label> 
                  <label htmlFor="cb-collapse-traction" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse traction-filter-collapse">
                  <div className="row">
                     <div className="option-col"><input name="tractions[]" type="checkbox" id="slug_rear-wheel-drive" value="Rear wheel drive"/> <label htmlFor="slug_rear-wheel-drive" className="option"><span className="img rear-wheel-drive"></span>Rear wheel drive <span>(583)</span></label></div>
                     <div className="option-col"><input name="tractions[]" type="checkbox" id="slug_front-wheel-drive" value="Front wheel drive"/> <label htmlFor="slug_front-wheel-drive" className="option"><span className="img front-wheel-drive"></span>Front wheel drive <span>(1484)</span></label></div>
                     <div className="option-col"><input name="tractions[]" type="checkbox" id="slug_all-wheel-drive" value="All wheel drive"/> <label htmlFor="slug_all-wheel-drive" className="option"><span className="img all-wheel-drive"></span>All wheel drive <span>(900)</span></label></div>
                  </div>
               </div>
            </div> 
            
            <input id="cb-collapse-type" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-type">
               <div>
                  <label htmlFor="cb-collapse-type" className="filter-name">Fuel</label> 
                  <label htmlFor="cb-collapse-type" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse type-filter-collapse">
                  <div className="row">
                     <div className="option-col"><input name="fuels[]" type="checkbox" id="slug_gas" value="Gas"/> <label htmlFor="slug_gas" className="option"><span className="img gas"></span>Gas <span>(2749)</span></label></div>
                     <div className="option-col"><input name="fuels[]" type="checkbox" id="slug_diesel" value="Diesel"/> <label htmlFor="slug_diesel" className="option"><span className="img diesel"></span>Diesel <span>(21)</span></label></div>
                     <div className="option-col"><input name="fuels[]" type="checkbox" id="slug_electric" value="Electric"/> <label htmlFor="slug_electric" className="option"><span className="img electric"></span>Electric <span>(43)</span></label></div>
                     <div className="option-col"><input name="fuels[]" type="checkbox" id="slug_hybrid" value="Hybrid"/> <label htmlFor="slug_hybrid" className="option"><span className="img hybrid"></span>Hybrid <span>(153)</span></label></div>
                  </div>
               </div>
            </div>

            <input id="cb-collapse-color" type="checkbox" className="cb-collapse"></input>
            <div data-selected="0" className="filter-pane filter-color">
               <div>
                  <label htmlFor="cb-collapse-color" className="filter-name">Color</label> 
                  <label htmlFor="cb-collapse-color" className="filter-name filter-name-arrow">
                     <div><img className="collapse-arrow"/></div>
                  </label>
               </div>
               <div className="filter-collapse color-filter-collapse">
                  <div className="color-picker">
                     <div className="colors-row">
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_black" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="Black"/> 
                           <label htmlFor="slug_black">
                              <div tooltip="Black (779)" className="color black"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input disabled="disabled" name="colors[]" type="checkbox" id="slug_charcoal" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="Charcoal"/> 
                           <label htmlFor="slug_charcoal">
                              <div tooltip="Charcoal (0)" className="color charcoal"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_silver" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="Silver"/> 
                           <label htmlFor="slug_silver">
                              <div tooltip="Silver (369)" className="color silver"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_white" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="White"/> 
                           <label htmlFor="slug_white">
                              <div tooltip="White (567)" className="color white"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_beige" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="Beige"/> 
                           <label htmlFor="slug_beige">
                              <div tooltip="Beige (1)" className="color beige"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_yellow" aria-label="hidden-control-element" data-uw-hidden-control="hidden-control-element" value="Yellow"/> 
                           <label htmlFor="slug_yellow">
                              <div tooltip="Yellow (17)" className="color yellow"></div>
                           </label>
                        </div>
                        <div className="color-box">
                           <input disabled="disabled" name="colors[]" type="checkbox" id="slug_bronze" value="Bronze" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_bronze">
                              <div tooltip="Bronze (0)" className="color bronze"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_orange" value="Orange" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_orange">
                              <div tooltip="Orange (19)" className="color orange"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_chocolate" value="Brown" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_chocolate">
                              <div tooltip="Brown (24)" className="color chocolate"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_red" value="Red" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_red">
                              <div tooltip="Red (282)" className="color red"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_blue" value="Blue" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_blue">
                              <div tooltip="Blue (295)" className="color blue"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_plum" value="Purple" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_plum">
                              <div tooltip="Purple (7)" className="color plum"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                        <div className="color-box">
                           <input name="colors[]" type="checkbox" id="slug_green" value="Green" data-uw-rm-form="fx"/> 
                           <label htmlFor="slug_green">
                              <div tooltip="Green (24)" className="color green"></div>
                              <span style={{color: `#ffffff`,background: `#000000`, clip: `rect(1px, 1px, 1px, 1px)`,clipPath: `inset(50%)`,height: `1px`, width: `1px`, margin: `-1px`, overflow: `hidden`, padding: `0`, position: `absolute`}} className="" data-uw-reader-element="" data-uw-rm-ignore="">Checkbox field</span>
                           </label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
);
};
export default Filters