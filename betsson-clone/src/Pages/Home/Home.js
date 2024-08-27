import React, {useState, useEffect} from 'react';
import useFetch from '../../Components/Hooks/useFetch';

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
	//let's grab some photos from the original website, so we can combine it with the data we fetch
	const photoUrl = [
		'https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2024/06/4383e9bc8504483fa02dc64163612543.jpg',
		'https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2024/06/5004b414d4724d8c92ef3cb9abefae18.jpg',
		'https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2024/08/4e779d949e8941579f420bd753096d1c.jpg',
		'https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2024/06/3513ed0b409e4c7d8697d440df207e17.jpg',
		'https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2024/07/b3a757292dfc4d3dbd23e76d1612f4e4.png'
	]

	
	const {data, isLoading, error} = useFetch('https://66c613ac134eb8f43496ae94.mockapi.io/betsson/api/prosfores');
	
	const combinedData = data.map((item, index) => {
			return {...item, photo: photoUrl[index]};
		});

	console.log(combinedData);

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
						{!isLoading && combinedData.map((item) => (
								<CardWithInfo key={item.id} cardText={item.textDesc} cardPhoto={item.photo}/>
							))
						}
					</div>

					<Typography variant='body1' className='homepage__promo__terms__text'>*Ισχύουν όροι και προϋποθέσεις</Typography>
					
				</div>

				<div className='homepage__inter__sponsor__container'>
					<div className='homepage__inter__sponsor__image'>
						<div className='homepage__inter__sponsor__content__wrapper'>
							<Typography variant='h2' className='homepage__inter__sponsor__text homepage__inter__sponsor__title'>Επίσημος Μεγάλος Χορηγός της Ίντερ!</Typography>
							<Typography variant='h4' className='homepage__inter__sponsor__text homepage__inter__sponsor__subtitle'>Για 4 χρόνια!</Typography>
							<Button variant='contained' color='success' className='inter__sponsor__button' size='medium'>ΠΕΡΙΣΣΟΤΕΡΑ</Button>                
							
						</div>
					</div>
				</div>
			
			</div>
	
				
		</div>
	)
}

export default Home;