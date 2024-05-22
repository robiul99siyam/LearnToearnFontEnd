
import React, { useState } from 'react';
const ContactForm = () =>
{


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
		
<h1 className='text-center fw-bolder mt-5 mb-2'>CONTACT</h1>

			<div className='container mt-5'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58786.85268972038!2d91.119853!3d22.94366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a3cbef2d9475%3A0xe7d5c59a71611dc2!2sChowmuhani%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1716116920110!5m2!1sen!2sus'
					width='100%'
					height='450'
				></iframe>
			</div>

			<div className='contact-section  container shadow p-5 mb-5 rounded'>
				<div className='col-lg-5 col-sm-12 col-md-5 '>
					<img
						style={{ width: 'full' }}
						src='https://i.ibb.co/b5tb4xn/240-F-373536705-m3-X7-A1m-Wmus5fn-FIPl-LNMGGk7-Yqi0s8c-removebg-preview.png'
						alt=''
					/>
				</div>
				<div className='col-lg-5 col-sm-12 col-md-5 '>
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
		</>
	);
}

export default ContactForm;