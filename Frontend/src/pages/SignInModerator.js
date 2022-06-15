import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { isAuthenticated } from '../handlers/authHandler'
// import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/img/profile-cover.jpg'
import { Box, Card, FormControl, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux';
import { loginModerator } from '../Redux/Actions/ModeratorActions';
// import authApi from '../api/authApi'

const LoginModerator = ({history}) => {
   

    const [moderator, setModerator] = useState({})
    

    const handleChange = (e) => {
        setModerator({...moderator, [e.target.name] : e.target.value })
    }

    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'flex-start',
                // backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right'
            }}
        >
            <Card sx={{
                width: '100%',
                maxWidth: '600px'
            }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '400px',
                        '& .MuiTextField-root': { mb: 5 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        margin: 'auto',
                        padding: '5rem 1rem'
                    }}
                >
                    <Typography
                        variant='h5'
                        textAlign='center'
                        mb='1rem'
                        fontWeight='700'
                    >
                        Ieasaw Dashboard
                    </Typography>
                    <Typography
                        variant='h6'
                        textAlign='center'
                        mb='4rem'
                        fontWeight='400'
                    >
                        Moderator Panel
                    </Typography>
                    <FormControl fullWidth>
                        <TextField
                            label='Email'
                            variant='outlined'
                            name="email"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            label='Password'
                            type='password'
                            variant='outlined'
                            name="password"
                            onChange={handleChange}
                        />
                    </FormControl>
                    <LoadingButton
                        variant='contained'
                        fullWidth
                        size='large'
                        sx={{ marginTop: '1rem' }}
                        onClick={() => dispatch(loginModerator(moderator, history))}
                    >
                    <Link to="/admin/profile" >Sign In</Link>
                    </LoadingButton>
                    <div className="mb-3" style={{marginTop: '2rem'}} >
          As you an Administrator?{' '}
          <Link to="/" style={{color: 'blue'}} >Signin from here</Link>
        </div>
                </Box>
 
            </Card>

        </Box>
    )
}

export default LoginModerator