import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, CssBaseline, Button, Typography, Container } from '@material-ui/core/'




const DishList = () => {
    const [data, setData] = useState([])
    const api = 'http://localhost:3001/'
    useEffect(() => {
        const fetchData = async () => {
            axios.get(api + 'stores/dishes')
                .then(res => {
                    console.log(res.data)
                    console.log(res.data[0].dish)
                    setData(res.data)
                })
        }
        fetchData();
    }, [])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                {data.map(dish => {
                    return (<Card key={dish._id}>
                        <CardContent>
                            <hr />
                            <Typography gutterBottom variant="h5" component="h2">{dish.dish}</Typography>

                            <Typography variant="body2" color="textSecondary" component="p">{dish.price}</Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">{dish.review}</Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">{dish.name}</Typography>
                        </CardContent>
                    </Card>)
                })}
            </div>
        </Container>
    )
    // write a axios.get and then map that data into cards 
    //after that you need to push the data into graphs 
}

export default DishList