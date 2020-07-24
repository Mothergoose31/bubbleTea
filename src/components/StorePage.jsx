import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Container, Typography} from '@material-ui/core'


export default function StorePage ({match}){
    const {params:{storeId}} = match
    console.log(storeId)
    console.log('hitting the route')
    const [data,setData]=useState([])
    const api = 'http://localhost:3001/'
    useEffect(()=>{
        const fetchData = async() =>{
            axios.get(api+`stores/store/${storeId}`)
                .then(res=>{
                    console.log(res.data)
                    console.log(res.data.dishes)
                    setData(res.data)
                })
            }
            fetchData();
    },[])
    return(
        <Container>
            <Typography gutterBottom variant="h5" component="h2">Storeid :{storeId}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Hi</Typography>

        </Container>

    )
}