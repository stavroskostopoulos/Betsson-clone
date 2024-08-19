import React from 'react';
import './Home.css';

// Material UI components
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';



function Home() {

	return (
		<div className='homepage__container'>

			<div className='homepage__banner__container'>

				<div className='homepage__banner__content_wrapper'>
					
					<Typography variant="body1" className='homepage__banner__text'>
						Καζίνο, Στοίχημα και Πόκερ
					</Typography>

					<Typography variant="h1" className='homepage__banner__title'>
						MEGA DEAL Προσφορά χωρίς κατάθεση για νέα μέλη!
					</Typography>

					<Typography variant="body1" className='homepage__banner__text'>
						5€ Free Bet και 50 Free Spins με την εγγραφή! 
					</Typography>

					<div className='homepage__banner__signup__form__container'>

						<TextField
							label="Email"
							variant="outlined"
							sx={{
								'& label.Mui-focused': {
									color: '#ff6600',
									fontSize: '16px !important',
								},
								'& .MuiOutlinedInput-root': {
									height: '50px',  // Custom height
									'& input': {
										padding: '14px',  // Adjust the padding inside the input
									},
									'&.Mui-focused fieldset': {
										borderColor: '#ff6600', // Border color when focused
									},
									'&:hover fieldset': {
										borderWidth: '2px !important',
										borderColor: '#9e9e9e',
									},
								},
							}}
							className='homepage__textfield'
						/>
					</div>

				</div>

			</div>
	
				
		</div>
	)
}

export default Home;