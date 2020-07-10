import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange })=>{


    const [ fetchedConutries , setfetchedConutries] = useState([]);

    useEffect(()=>{
        const fetchAPI =async ()=>{
            setfetchedConutries(await fetchCountries());

        }
        fetchAPI();
    },[setfetchedConutries]);

 


    return(
       <FormControl className={styles.fromControl}>
           <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
               <option value="">Global</option>
    {fetchedConutries.map((country,i)=> <option key ={i} value= {country}>{country}</option>)}

           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;