import React from 'react';
import {Container, Typography} from '@material-ui/core'


export default function StorePage ({match}){
    const {params:{storeId}} = match
    console.log('hitting the route')
    return(
        <Container>
            <Typography gutterBottom variant="h5" component="h2">Storeid :{storeId}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Hi</Typography>

        </Container>

    )
}