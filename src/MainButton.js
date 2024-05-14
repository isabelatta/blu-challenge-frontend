import Button from '@mui/material/Button';


const MainButton = (props) => {
    return (
        <div>
            <Button sx={{bgcolor: "#1272d2", textTransform: "none"}} variant="contained">{props.nameButton}</Button>
        </div>
        
    );
  }

export default MainButton;