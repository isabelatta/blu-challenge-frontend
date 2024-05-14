import { Paper, Grid, Box, Typography, Avatar, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';





const UserCard = () => {
    const patientName = "Phillipe Quadros Santos"
    const age = "26 anos de idade"
    const avatar = "https://blu-s3-staging.s3.us-east-1.amazonaws.com/profile-images/57d4a2754b2f3eefedb99656131091b6-roberto.jpeg"
    //sx={{ display: 'flex'}}
    return(
        <div>
            <Paper elevation={3} square={false} sx={{padding:"2%"}}>
                <Grid container spacing={2}>
                    <Grid xs={10}  display="flex" alignItems="center">
                    <Stack direction="row" spacing={1} sx={{padding:"2%"}}>
                        <Avatar src={avatar} sx={{ margin: '1%'}} />
                        <div>
                            <Typography gutterBottom variant="h9" component="div">
                            {patientName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {age}
                            </Typography>
                        </div>
                    </Stack>
                    </Grid>
                        <Grid xs={2}  display="flex" justifyContent="flex-end" alignItems="center" >
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: "#1272d2" }}>
                                    <AccountCircleIcon  />
                                </Avatar>
                                <Avatar sx={{ bgcolor: "#1272d2" }}>
                                    <ContactPageIcon  />
                                </Avatar>
                            </Stack>

                            
                        </Grid>
                    
                </Grid>
            </Paper>
        </div>
        
    );
}

export default UserCard