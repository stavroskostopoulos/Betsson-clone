import React from 'react';
import './Home.css';

// Import media

// 1) bank media
import { ReactComponent as Bank1 } from '../../Assets/Images/BankIcons/1.svg';
import { ReactComponent as Bank3 } from '../../Assets/Images/BankIcons/3.svg';
import { ReactComponent as Bank4 } from '../../Assets/Images/BankIcons/4.svg';
import { ReactComponent as Bank5 } from '../../Assets/Images/BankIcons/5.svg';
import { ReactComponent as Bank6 } from '../../Assets/Images/BankIcons/6.svg';
import { ReactComponent as Bank7 } from '../../Assets/Images/BankIcons/7.svg';
import Bank2img from '../../Assets/Images/BankIcons/2.png';
import Bank8img from '../../Assets/Images/BankIcons/8.png';

// 2) cards media



// Material UI components
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Import custom Components
import CardWithInfo from '../../Components/Common/CardWithInfo/CardWithInfo';


const textfieldStyling = {
	'& label.Mui-focused': {
		color: '#ff6600',
		fontSize: '16px !important',
	},
	'& .MuiOutlinedInput-root': {
		height: '50px', 
		'& input': {
			paddingLeft: '10px !important', 
		},
		'&.Mui-focused fieldset': {
			borderColor: '#ff6600', 
		},
		'&:hover fieldset': {
			borderWidth: '2px !important',
			borderColor: '#9e9e9e',
		},
	},
	'& .MuiInputLabel-shrink': {
		margin: '0 auto',
		position: 'absolute',
		right: '0',
		left: '-4px',
		top: '0px',
		width: '50px', 
		background: 'white' 
	},
	'& .MuiFormLabel-root': {
		fontSize: '14px !important',
	},
};

function Home() {



	return (
		<div className='homepage__container'>

			<div className='homepage__banner__container'>

				<div className='homepage__banner__content_wrapper'>
					
					<Typography variant='body1' className='homepage__banner__text'>
						Καζίνο, Στοίχημα και Πόκερ
					</Typography>

					<Typography variant='h1' className='homepage__banner__title'>
						MEGA DEAL Προσφορά χωρίς κατάθεση για νέα μέλη!
					</Typography>

					<Typography variant='body1' className='homepage__banner__text'>
						5€ Free Bet και 50 Free Spins με την εγγραφή! 
					</Typography>

					<div className='homepage__banner__signup__form__container'>

						<TextField
							label='Email'
							variant='outlined'
							sx={textfieldStyling}
							className='homepage__textfield homepage__textfield__big'
						/>
						<TextField
							label='Όνομα'
							variant='outlined'
							sx={textfieldStyling}
							className='homepage__textfield homepage__textfield__small'
						/>
						<TextField
							label='Επώνυμο'
							variant='outlined'
							sx={textfieldStyling}
							className='homepage__textfield homepage__textfield__small'
						/>
                    	<Button variant='contained' color='success' className='homepage_banner__signup_button' size='medium'>ΕΓΓΡΑΦΗ</Button>                


					</div>
					
					<div className='homepage__banner__bank__icons__container'>
						<Bank1 className='homepage__banner__bank__icons'/>
						<img src={Bank2img} className='homepage__banner__bank__icons'/>
						<Bank3 className='homepage__banner__bank__icons'/>
						<Bank4 className='homepage__banner__bank__icons'/>
						<Bank5 className='homepage__banner__bank__icons'/>
						<Bank6 className='homepage__banner__bank__icons' />
						<Bank7 className='homepage__banner__bank__icons'/>
						<img src={Bank8img} className='homepage__banner__bank__icons'/>
					</div>

				</div>

			</div>


			<div className='homepage__main__content__container'>
				
				<div className='homepage__promo__cards__container'>
					
					<div className='homepage__promo__title__wrapper'>
						<Typography variant='h2' className='homepage__promo__title'>Προσφορές</Typography>
						<Button variant='outlined' className='homepage__promo__button' size='medium'>ΜΕΤΑΒΑΣΗ ΣΤΙΣ ΠΡΟΣΦΟΡΕΣ</Button>
					</div>


					<div className='homepage__promo__card__carousel'>
						<CardWithInfo />
						<CardWithInfo />
						<CardWithInfo />
						<CardWithInfo />
						<CardWithInfo />
					</div>
					
				</div>


			</div>
	
				
		</div>
	)
}

export default Home;