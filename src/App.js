import './App.css';
import MainButton from './MainButton';
import UserCard from './UserCard';
import PageTop from './PageTop';
import MedicalAnalysis from './MedicalAnalysis';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const App = () => {
   
  const nameButton = "Encerrar Consulta"
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid >
          <Grid xs={12}>
            <PageTop />
          </Grid>
         <div className="user-section">
          <Grid container spacing={2}>
          <Grid xs={10}> 
             <UserCard />
            </Grid>
            <Grid xs={2} display="flex" justifyContent="center" alignItems="center" >
              <MainButton className="main-button" nameButton={nameButton} />
            </Grid>
          </Grid>
         </div>
          <MedicalAnalysis />
        </Grid>

        </Box>
      </div>
    
  );
}

export default App;
