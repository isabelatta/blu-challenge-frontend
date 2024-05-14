import React, {useState} from 'react';
import {Stack, Button, Box, Paper, Tab, Tabs, Grid} from '@mui/material';
import Complaints from './Complaints';
import Diagnosis from './Diagnosi'
import Selection from './Selection';



const MedicalAnalysis = (  ) => {
  const [activeButton, setActiveButton] = useState('contained');
  const [isDiagnosisVisible, setIsDiagnosisVisible] = useState(false);
  const [isComplaintsVisible, setIsComplaintVisible] = useState(true)
  
  //manter tab selecionada
  const [value, setValue] = React.useState(0); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonComplaint= (variant) => {
    setIsComplaintVisible(true); 
    setIsDiagnosisVisible(false); 
    setActiveButton(variant)
  };

  const handleButtonDiagnosis= (variant) => {
    setIsDiagnosisVisible(true); 
    setIsComplaintVisible(false); 
    setActiveButton(variant)
  };
  

  return (
      <Grid >
      <Paper elevation={3} sx={{padding:"2%", marginTop: "2%"}}>
      <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="My tabs"
      >
        <Tab selected label="Análise Médica" sx={{textTransform:"none"}} />
      </Tabs>
        <Grid xs={12}>
           {/* <Selection  /> */} 
          <div className="Selection" style={{ backgroundColor: "#f9f9f9", marginTop: "2%"}} >
            <Stack spacing={2} direction="row">
              <Button sx={{textTransform: "none"}} 
                variant={activeButton === 'contained' ? 'contained' : 'text'}
                onClick={() => handleButtonComplaint('contained')}
              >
                Anamnese
             </Button>
            <Button sx={{textTransform: "none"}}
              variant={activeButton === 'text' ? 'contained' : 'text'}
              onClick={() => handleButtonDiagnosis('text')}
            > 
                Análise Clínica
            </Button>
          </Stack>
        </div>
          </Grid>
          <Grid xs={12}>
            {/* /complaints */}
            {isComplaintsVisible && <Complaints />}
            {isDiagnosisVisible && <Diagnosis />}
          </Grid>
      </Paper>
      </Grid>
      
  );
}

export default MedicalAnalysis