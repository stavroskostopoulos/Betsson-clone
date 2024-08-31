import React, {useState} from 'react';
import './Accordion.css';
import { Typography } from '@mui/material';

//Import Material UI components
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accordion({title, content}) {

    const [clickOpen, setClickOpen] = useState(false);

    const handleExpandClick = () => {
        setClickOpen(!clickOpen);
    }

    return (
        <div className='accordion__container'>
            <div className='accordion__title__container' onClick={handleExpandClick}>
                <Typography variant='h5' className='accordion__title'>{title}</Typography>
                <ExpandMoreIcon className='accordion__expand__icon' />
            </div>
            {clickOpen && <Typography variant='body1' className='accordion__text'>
                {content}
            </Typography>}
        </div>
    );
}

export default Accordion;