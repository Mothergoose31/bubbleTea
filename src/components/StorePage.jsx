import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Container, Typography, Card, CardContent} from '@material-ui/core'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

// why is it that for this component,  when i fetch data, and console.log it then it
// then  i first  i get two responces  the first responce comes back black with [], then the second one one comes back with
//data

export default function StorePage ({match}){
    // const [data,setData]=useState([])
    
    
    const api = 'http://localhost:3001/'
    useEffect(()=>{
        const fetchData = async() =>{
            await axios.get(api+`stores/store/${storeId}`)
            .then(res=>{
                setData(res.data)
                console.log(res.data)
            })
        }
        
        fetchData();
        
    },[])
    
    const {params:{storeId}} = match
    Promise(data=>{

    })
    
    
    return(
        <Container>
            <Typography gutterBottom variant="h5" component="h2">{data.establishment}</Typography>
            {/* {bobbadishes.map((bobba=>{
                return(
                <Typography>{bobba.dish}</Typography>
                )
            }))} */}
                
        
        
        </Container>

    )
}