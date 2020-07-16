import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, CardActions, CardContent,CssBaseline, Button, Typography, Container } from '@material-ui/core/'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default function DishesList() {
    const [Bobbadata,setData] = useState([])
    const api = 'http://localhost:3001/'
    useEffect(()=>{
        const fetchData = async() =>{
            axios.get(api+'stores/dishes')
                .then(res=>{
                    console.log(res.data)
                    console.log(res.data[0].bobba)
                    setData(res.data)
                })
            }
            fetchData();
    },[])

    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div>
            {Bobbadata.map(bobba=>{
                const data = [
                    {
                    data:{
                        flavor:(bobba.taste/10),
                        texture:(bobba.texture/10),
                        looks:(bobba.looks/10),
                        originality:(bobba.originality/10),
                        freshness:(bobba.freshness/10),
                        quantity:(bobba.quantity/10),
                        aroma:(bobba.aroma/10),
                    },
                    meta:{color:'blue'}
                }
                ]
                const captions ={
                    flavor:'Falvor',
                    texture:'Texture',
                    looks: 'Appearance',
                    originality:'Originality',
                    freshness:'Freshness',
                    quantity:'Quantity',
                    aroma: 'Aroma',
                }
                return( 
                <Card key={bobba.id}>
                            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{textDecoration:'underline'}}>{bobba.dish}</Typography>
                <br/>
                <RadarChart captions={captions} data={data} size={250}/>
                <Typography variant="body2" color="textSecondary" component="p"> Reviewer:{bobba.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{bobba.review}</Typography>
                            </CardContent>
                </Card>)
            })}
        </div>
    </Container>
    )
}
