import { TextField, Box} from '@mui/material';
import React, { useState } from 'react';



const Diagnosis = () => {
    const [diagnosis, setDiagnosis] = useState();
    const [jsonData, setJsonData] = useState({});

    let placeholder = "Escreva o diagnóstico do paciente"

    const handleInputChange = (event) => {
        setDiagnosis(event.target.value);
        setJsonData({ diagnosis: diagnosis });
      };
    
      console.log(diagnosis)
     

    return(
        <Box
        className='complaint'
        component="form"
        sx={{
            '& .MuiTextField-root': {marginTop: "2%", width: '100%' },
        }}
        noValidate
        autoComplete="off"
        color="blue"
       >
        <TextField
          id="outlined-multiline-static"
          label="Diagnóstico"
          multiline
          rows={10}
          placeholder={placeholder}
          autoFocus
          variant="outlined"
          onChange={handleInputChange}
        />    
      </Box>
    
    )
  }

  export default Diagnosis