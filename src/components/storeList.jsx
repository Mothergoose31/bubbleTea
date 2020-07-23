import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, CardActions, CardContent,CssBaseline, Button, Typography, Container} from '@material-ui/core/'
import {Link} from 'react-router-dom'




export default function StoreList() {
    const [data,setData] = useState([])
    const api = 'http://localhost:3001/'
    useEffect(()=>{
        const fetchData = async() =>{
            axios.get(api+'stores/')
                .then(res=>{
                    console.log(res.data)
                    console.log(res.data[0].establishment)
                    setData(res.data)
                })
            }
            fetchData();
    },[])

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div>
                {data.map(store=>{
                    return( 
                    
                        <Card key={store._id}>
                                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{store.establishment}</Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">{store.adress}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{store.phoneNumber}</Typography>
                        
                        <Link to={`stores/store/${store._id}`} key={store._id} >Store Reviews</Link>
                                    </CardContent>
                        
                        </Card>
                    )
                })}
            </div>
        </Container>
    )
    // write a axios.get and then map that data into cards 
    //after that you need to push the data into graphs 
}