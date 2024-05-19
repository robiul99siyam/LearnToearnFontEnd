import Navbar from './Navbar';
import Footer from './Footer';
import React, { useState } from 'react';

const Contact = () => {
	// State variables for storing form data
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you can handle the form submission logic, such as sending data to a server
		console.log('Form submitted:', { name, email, message });
	};

	return (
		<>
			<Navbar />
			<div className='contact-section container shadow-sm'>
				<div className='col-lg-6 col-sm-12 col-md-6 col-6'>
					<img src='' alt='' />
					{/* Image goes here */}
				</div>
				<div className='col-lg-6 col-sm-12 col-md-6 col-6'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>
								Name
							</label>
							<input
								type='text'
								className='form-control'
								id='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email address
							</label>
							<input
								type='email'
								className='form-control'
								id='email'
								aria-describedby='emailHelp'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div id='emailHelp' className='form-text'>
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className='mb-3'>
							<label htmlFor='message' className='form-label'>
								Message
							</label>
							<textarea
								className='form-control'
								id='message'
								rows='5'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</div>
						<button
							type='submit'
							className='hvr-sweep-to-right hero-btn mb-5'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
