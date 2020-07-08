import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddStoreForm() {
    const classes = useStyles();
    const {register, handleSubmit, control} = useForm()
    const api = 'http://localhost:3001/'
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">                
                    Bobba Store             
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit((data)=>  
                axios.post(api+'stores/addstore',{
                    establishment:data.establishment,
                    adress:data.adress,
                    phoneNumber:data.phoneNumber
                }).then((res)=>{
                    console.log(res);
                    console.log('responce')
                }).catch((err)=>{
                    console.log(err)
                }))}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        id="establishment"
                        label="establishment "
                        name="establishment"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        id="adress"
                        label="adress"
                        name="adress"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        inputRef={register}
                        required
                        fullWidth
                        name="phoneNumber"
                        label="phoneNumber"
                        type="phoneNumber"
                        id="phoneNumber"

                    />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit Bobba Store
                </Button>

                </form>
            </div>
        </Container>
    );
}


