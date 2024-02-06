import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Filters from './filters'
import Listing from './listing'
import Footer from '../Footer/footer'
import './filters.css'
import { useNavigate } from 'react-router-dom';



const UsedCar = () => {

    const navigate = useNavigate();
    const [cars, setCars] = useState([])
    const [searchList, setSearchList] = useState([])
    const [filterData, setFilterData] = useState({})

    const searchCar = (options) => {
        let tempCar = [...cars]
        if(Object.keys(options).length>0)
        {
            for (const option in options) {
                if(option === 'year')
                {
                    let tmp;
                    tmp = tempCar.filter(obj => Number(obj.year) >= options['year'][0] && Number(obj.year) <= options['year'][1]);
                    tempCar = tempCar.filter(obj1 => tmp.some(obj2 => obj2.vin === obj1.vin));
                }
                else if(option === 'price')
                {
                    let tmp;
                    tmp = tempCar.filter(obj => Number(obj.asking_price) >= options['price'][0] && Number(obj.asking_price) <= options['price'][1]);
                    tempCar = tempCar.filter(obj1 => tmp.some(obj2 => obj2.vin === obj1.vin));
                }
                else if(option === 'mile')
                {
                    let tmp;
                    tmp = tempCar.filter(obj => Number(obj.Miles) >= options['mile'][0] && Number(obj.Miles) <= options['mile'][1]);
                    tempCar = tempCar.filter(obj1 => tmp.some(obj2 => obj2.vin === obj1.vin));                    
                }
                else if(option === 'make')
                {
                    let tmp;
                    tmp = tempCar.filter(obj => obj.make === options['make']);
                    tempCar = tempCar.filter(obj1 => tmp.some(obj2 => obj2.vin === obj1.vin));
                }
                else if (option === 'model')
                {
                    let tmp;
                    tmp = tempCar.filter(obj => obj.make === options['make'] && obj.model === options['model']);
                    tempCar = tempCar.filter(obj1 => tmp.some(obj2 => obj2.vin === obj1.vin));
                }
                else
                {

                }                
            }
        }
        setSearchList(tempCar)
    }


    useEffect(() => {
        navigate("/used-car")
        fetch('http://jsonholder.com/filter_make_model')
        .then((res) => res.json())
        .then((data) => {
            setCars(data[0]['carsdata']);
            setSearchList(data[0]['carsdata'])
            setFilterData(data[1]['filterdata'])
        })
        .catch((err) => {
           console.log(err.message);
        });
    }, []);




    return (
        <div className='container-fluid'>
            <Header/>
            <div className="row">
                <Filters
                  searchCar={searchCar}
                  filterData={filterData}
                />
                <Listing
                  carlist={searchList}
                />
            </div>
            <Footer/>
        </div>
    );
};

export default UsedCar
