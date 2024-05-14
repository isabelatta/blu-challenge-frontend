
import React, { useState} from 'react';
import {Button, Stack} from '@mui/material';
import TextSelection from './TextSelection';
import { Troubleshoot } from '@mui/icons-material';


const Selection = (complaintShow) => {
  const [activeButton, setActiveButton] = useState('contained');
  //const [isDiagnosisVisible, setIsDiagnosisVisible] = useState(false);
  const [isComplaintsVisible, setIsComplaintVisible] = useState(true)

 

  const handleButtonComplaint= (variant) => {
    setActiveButton(variant)
  };

/*   const handleButtonDiagnosis = (variant) => {
    setIsDiagnosisVisible(true);
    setIsComplaintVisible(false); 
    setActiveButton(variant);
  }; */

  const handleClick = (variant) => {
    setActiveButton(variant);

  };
  
  return (
    <div className="Selection" style={{ backgroundColor: "#f9f9f9", marginTop: "2%"}} >
      <Stack spacing={2} direction="row">
        <Button sx={{textTransform: "none"}} 
          variant={activeButton === 'contained' ? 'contained' : 'text'}
          onClick={() => handleButtonComplaint('contained')}
        >
          {complaintShow = isComplaintsVisible}
          Anamnese
        </Button>
        <Button sx={{textTransform: "none"}}
          variant={activeButton === 'text' ? 'contained' : 'text'}
          onClick={() => handleClick('text')}
        > 
            Análise Clínica
        </Button>
      </Stack>
      
    </div>
    
  );
}

export default Selection;