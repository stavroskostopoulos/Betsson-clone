import React, {useState, useEffect} from 'react';

//custom Hooks
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

// 2) Payment Options Media
import { ReactComponent as PayOpt1 } from '../../Assets/Images/PaymentOptionIcons/1.svg'
import { ReactComponent as PayOpt2 } from '../../Assets/Images/PaymentOptionIcons/2.svg'
import { ReactComponent as PayOpt3 } from '../../Assets/Images/PaymentOptionIcons/3.svg'
import { ReactComponent as PayOpt4 } from '../../Assets/Images/PaymentOptionIcons/4.svg'
import { ReactComponent as PayOpt5 } from '../../Assets/Images/PaymentOptionIcons/5.svg'
import { ReactComponent as PayOpt6 } from '../../Assets/Images/PaymentOptionIcons/6.svg'
import { ReactComponent as PayOpt7 } from '../../Assets/Images/PaymentOptionIcons/7.svg'
import { ReactComponent as PayOpt8 } from '../../Assets/Images/PaymentOptionIcons/8.svg'

// Material UI components
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip from '@mui/material/Tooltip';

// Import custom Components
import CardWithInfo from '../../Components/Common/CardWithInfo/CardWithInfo';
import CardWithTitleProvider from '../../Components/Common/CardWithTitleProvider/CardWithTitleProvider';

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

	//Fetch some random town names to use in prosfores cards 
	const {data, isLoading, error} = useFetch('https://66c613ac134eb8f43496ae94.mockapi.io/betsson/api/prosfores');
	
	const combinedData = data.map((item, index) => {
			return {...item, photo: photoUrl[index]};
		});


	//Fetch the promoted casino data
	const {data: casinoData, isLoading: isLoadingCasino, error: errorCasino} = useFetch('https://66c613ac134eb8f43496ae94.mockapi.io/betsson/api/casino');
	
	//Fetch the promoted live casino data
	const {data: liveCasinoData, isLoading: isLoadingLiveCasino, error: errorLiveCasino} = useFetch('https://66d07416181d059277dea91c.mockapi.io/livecasino');
	
	//Fetch the promoted betting data
	const {data: bettingData, isLoading: isLoadingBetting, error: errorBetting} = useFetch('https://66d07416181d059277dea91c.mockapi.io/betting');
	

	// console.log(combinedData);
	// console.log(casinoData);

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
						<img src={Bank2img} alt='visa' className='homepage__banner__bank__icons'/>
						<Bank3 className='homepage__banner__bank__icons'/>
						<Bank4 className='homepage__banner__bank__icons'/>
						<Bank5 className='homepage__banner__bank__icons'/>
						<Bank6 className='homepage__banner__bank__icons' />
						<Bank7 className='homepage__banner__bank__icons'/>
						<img src={Bank8img} alt='apple pay' className='homepage__banner__bank__icons'/>
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
				 
				<div className='homepage__casino__cards__container'>
					<div className='homepage__promo__title__wrapper'>
						<Typography variant='h2' className='homepage__promo__title'>Casino</Typography>
						<Button variant='outlined' className='homepage__promo__button' size='medium'>ΕΜΦΑΝΙΣΗ ΟΛΩΝ</Button>
 					</div>

					<div className='homepage__casino__slider__container'>
						<div className='homepage__casino__cards__wrapper'>
							{!isLoadingCasino && casinoData.map((item, index) => (
								<CardWithTitleProvider key={index} title={item.title} provider={item.provider} photo={item.image}/>
							))}
						</div>
					</div>

				</div>
			
				<div className='homepage__live__casino__cards__container'>
					<div className='homepage__promo__title__wrapper'>
						<Typography variant='h2' className='homepage__promo__title'>Live Casino</Typography>
						<Button variant='outlined' className='homepage__promo__button' size='medium'>ΕΜΦΑΝΙΣΗ ΟΛΩΝ</Button>
 					</div>

					<div className='homepage__casino__slider__container'>
						<div className='homepage__live__casino__card__carousel'>
							{!isLoadingLiveCasino && liveCasinoData.map((item, index) => (
									<CardWithTitleProvider key={index} title={item.title} provider={item.provider} photo={item.image} size='wide'/>
							))}
						</div>
					</div>	

				</div>

				<div className='homepage__betting__cards__container'>
					<div className='homepage__promo__title__wrapper'>
						<Typography variant='h2' className='homepage__promo__title'>Στοίχημα</Typography>
						<Button variant='outlined' className='homepage__promo__button' size='medium'>ΕΜΦΑΝΙΣΗ ΟΛΩΝ</Button>
 					</div>

					<div className='homepage__casino__slider__container'>
						<div className='homepage__casino__cards__wrapper'>
							{!isLoadingBetting && bettingData.map((item, index) => (
								<CardWithTitleProvider key={index} title={item.title} provider={item.provider} photo={item.image}/>
							))}
						</div>
					</div>

				</div>

				<div className='homepage__pros__cards__container'>

					<Typography variant='h2' className='homepage__promo__title'>Γιατί να παίξετε με έμας;</Typography>
					
					
					<div className='homepage__pros__cards__wrapper'>
					
						<div className='homepage__pros__card__one'>
							<div className='homepage__pros__card__description__wrapper'>
								<Typography variant='h5' className='homepage__pros__card__title'>Άμεσες καταθέσεις και αναλήψεις</Typography>
								<Typography variant='body1' className='homepage__pros__card__text'>Παίζεις με ασφάλεια και αξιοπιστία και παίρνεις τα κέρδη σου σε χρόνο ρεκόρ.</Typography>
							</div>
							<div className='homepage__pros__tooltip__container'>
								<div className='homepage__pros__tooltip__wrapper'>
									<Typography variant='body1' className='homepage__pros__tooltip__title'>Μέσος χρόνος κατάθεσης:</Typography>
									<div className='homepage__pros__tooltip__text__wrapper'>
									
										<Typography variant='body1' className='homepage__pros__tooltip__text'>1 λεπτό</Typography>
										<Tooltip title="Η τιμή αυτή υπολογίζεται ως μέσος όρος για 12 μήνες δραστηριότητας πελάτη και αποτελεί μέτρο του χρόνου που μεσολαβεί από τη στιγμή υποβολής μιας κατάθεσης έως ότου το υπόλοιπο να γίνει διαθέσιμο στον ιστότοπο." placement="bottom-end">
											<ErrorIcon className='homepage__pros__tooltip__icon'/>
										</Tooltip>
									</div>
								</div>

								<div className='homepage__pros__tooltip__wrapper'>
									<Typography variant='body1' className='homepage__pros__tooltip__title'>Μέσος χρόνος πραγματοποίησης ανάληψης:</Typography>
									<div className='homepage__pros__tooltip__text__wrapper'>
										<Typography variant='body1' className='homepage__pros__tooltip__text'>2 ώρες</Typography>
										<Tooltip title="Η τιμή αυτή υπολογίζεται ως μέσος όρος για 12 μήνες δραστηριότητας πελάτη και αποτελεί μέτρο του χρόνου που μεσολαβεί από τη στιγμή υποβολής μιας κατάθεσης έως ότου το υπόλοιπο να γίνει διαθέσιμο στον ιστότοπο." placement="bottom-end">
											<ErrorIcon className='homepage__pros__tooltip__icon'/>
										</Tooltip>
									</div>
								</div>
							</div>
						
						</div>

						<div className='homepage__pros__card__two'>
							<div className='homepage__pros__card__description__wrapper'>
								<Typography variant='h5' className='homepage__pros__card__title'>Πολλαπλές μέθοδοι πληρωμής</Typography>
								<Typography variant='body1' className='homepage__pros__card__text'>Μεγάλη ποικιλία από μεθόδους κατάθεσης και ανάληψης, για άμεσες και ασφαλείς συναλλαγές.</Typography>
							</div>

							<div className='homepage__pros__payment__options__container'>
								<PayOpt1 className='homepage__pro__payment__options__icon'/>
								<PayOpt2 className='homepage__pro__payment__options__icon'/>
								<PayOpt3 className='homepage__pro__payment__options__icon'/>
								<PayOpt4 className='homepage__pro__payment__options__icon'/>
								<PayOpt5 className='homepage__pro__payment__options__icon'/>
								<PayOpt6 className='homepage__pro__payment__options__icon'/>
								<PayOpt7 className='homepage__pro__payment__options__icon'/>
								<PayOpt8 className='homepage__pro__payment__options__icon'/>
							</div>
						</div>

						<div className='homepage__pros__card__three'>
							<div className='homepage__pros__card__description__wrapper'>
								<Typography variant='h5' className='homepage__pros__card__title'>Εξυπηρέτηση Πελατών</Typography>
								<Typography variant='body1' className='homepage__pros__card__text'>Είμαστε πάντα δίπλα σου για να σε βοηθήσουμε σε o,τι χρειαστείς. Μπορείς να επικοινωνήσεις με την εξυπηρέτηση πελατών μέσω Live Chat, e-mail ή ζητώντας να σε καλέσουμε πίσω. <a className='homepage__link'>Εξυπηρέτηση Πελατών</a></Typography>
							</div>

							<div className='homepage__pros__card__details__wrapper'>
								<Typography variant='body1' className='homepage__pros__tooltip__title'>Μέσος χρόνος πραγματοποίησης ανάληψης:</Typography>
								<Typography variant='body1' className='homepage__pros__tooltip__text'>2 ώρες</Typography>
							</div>
						</div>

					</div>
				</div>

				<div className='homepage__reassurance__container'>
					<div className='homepage__reassurance__icons__container'>
						<img src="https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2023/07/268fd2d23a9f40f59972686d3f6c9d1c.jpg" alt="HGC"/>
						<img src="https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2023/02/93b547ca617442f28e9b62f7c38a03f8.svg" alt="21+"/>
						<img src="https://cdnroute.bpsgameserver.com/v3/bgr/Betsson.GR/Common/el/image/2023/02/7b74f7dc191f4fa7b6eb48aca437493f.svg" alt="Kethea"/>
					</div>
					<div className='homepage__reassurance__text__container'>
						<Typography variant='h2' className='homepage__promo__title'>Ασφαλές και υπεύθυνο παιχνίδι</Typography>
						<Typography variant='body1' className='homepage__reassurance__text'>Μας εμπιστεύονται οι πελάτες μας και οι βασικές ρυθμιστικές αρχές. Θέλουμε οι παίκτες να απολαμβάνουν τις υπηρεσίες μας. Αυτός είναι ο λόγος για τον οποίο προωθούμε το υπεύθυνο παιχνίδι, διαθέτουμε μια σειρά εργαλείων για αυτόν τον σκοπό και είμαστε πάντοτε έτοιμοι να υποστηρίξουμε τους παίκτες μας.</Typography>
						<Typography variant='body1' className='homepage__reassurance__link'>Ανακαλύψτε περισσότερα σχετικά με το Υπεύθυνο Παιχνίδι</Typography>
						
					</div>

				</div>
				

			</div>
	
				
		</div>
	)
}

export default Home;