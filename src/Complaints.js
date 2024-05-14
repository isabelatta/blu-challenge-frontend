import { TextField, Box, Chip} from '@mui/material';
import React, { useState } from 'react';



const Complaints = () => {
    const [inputValue, setInputValue] = useState('');
    const [complaint, setComplaint] = useState([]);
    const [jsonObject, setJsonObject] = useState({ complaint: [] });

    let placeholder = "Escreva uma queixa e aperte tab. Depois disso pressione enter"

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };


      const handleKeyDown = (event) => {
        if (event.key === 'Tab' && inputValue.trim() !== '') {
          event.preventDefault();
          const newComplaint = [...complaint, inputValue];
          setComplaint(newComplaint);
          setJsonObject({ complaint: newComplaint });
          setInputValue('');
        }
      };

      const handleDeleteComplaint = (complaintToDelete) => () => {
        const updatedComplaint = complaint.filter((complaint) => complaint !== complaintToDelete);
        setComplaint(updatedComplaint);
        setJsonObject({ complaint: updatedComplaint });
      };

      console.log(jsonObject)
      
    
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
        {complaint.map((complaint, index) => (
              <Chip
                key={index}
                label={complaint}
                onDelete={handleDeleteComplaint(complaint)}
                style={{backgroundColor: '#edf6fd', color:"#1373eb", margin:"1%"}}
            />
        ))}
        <TextField
          id="outlined-multiline-static"
          label="Queixas Principais"
          multiline
          rows={10}
          placeholder={placeholder}
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          variant="outlined"
        />    
      </Box>
    
    )
  }

  export default Complaints