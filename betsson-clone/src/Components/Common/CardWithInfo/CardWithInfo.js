import React from 'react';

import './CardWithInfo.css'

// Material UI components
import { Typography } from '@mui/material';


function CardWithInfo({cardText, cardPhoto}) {

    return (
        <div className='card__with__info' style={{backgroundImage: `url(${cardPhoto})`}}>
            <div className='card__info__container'>
                <Typography variant='body1' className='card__info__text'>{cardText}</Typography>
                <Typography variant='body1' className='card__info__title'>1.000€ Bonus & 150 FS & 5€ Free Bet!</Typography>

            </div>
        </div>
    )
}

export default CardWithInfo;