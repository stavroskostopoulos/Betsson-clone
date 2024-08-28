import React from 'react';

import './CardWithTitleProvider.css';

// Material UI components
import { Typography } from '@mui/material';

function CardWithTitleProvider({title, provider, photo}) {
    return(
        <div className='card__with__titleprovider__container'>
            <div className='card__with__titleprovider' style={{backgroundImage: `url(${photo})`}}/>
            <div className='card__with__titleprovider__info__container'>
                <Typography variant='body1' className='card__with__titleprovider__title'>{title}</Typography>
                <Typography variant='body1' className='card__with__titleprovider__provider'>{provider}</Typography>
            </div>
            
        </div>
    )
}

export default CardWithTitleProvider;