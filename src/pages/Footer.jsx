import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
	return (
		<footer className='bg-dark text-center text-lg-start'>
			{/* Grid container */}

			<section className='d-flex justify-content-center justify-content-lg-between p-2 border-bottom'>
				{/* Left */}
				<div className='me-5 d-none d-lg-block  mt-3'>
					<span className='text-light '>
						Get connected with us on social networks:
					</span>
				</div>
				{/* Left */}

				{/* Right */}
				<div>
					<Link to='/' className='me-4 text-reset'>
						<i className='bi fs-2 text-primary bi-facebook'></i>
					</Link>
					<a href='/' className='me-4 text-reset'>
						<i className='bi fs-2 text-success bi-whatsapp'></i>
					</a>
					<a href='/' className='me-4 text-reset'>
						<i className='bi fs-2 p-1 text-danger bi-instagram'></i>
					</a>
				</div>
				{/* Right */}
			</section>
			<div className='container p-4'>
				{/* Grid row */}
				<div className='row'>
					{/* Grid column */}
					<div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
						<div className='d-flex align-items-center justify-center'>
							<img
								style={{ maxWidth: '85px', marginTop: '-15px' }}
								src='https://i.ibb.co/LJtybVR/black-yellow-minimalist-Idea-Logo-1-qmqo8tli39t0tbnmf984bih5cwhq45k6sbjdrvv2bs.png'
								alt='Logo'
							/>
							<p className='fw-bolder text-light fs-3'>
								Learn To Earn
							</p>
						</div>
						<div>
						<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58786.85268972038!2d91.119853!3d22.94366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a3cbef2d9475%3A0xe7d5c59a71611dc2!2sChowmuhani%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1716116920110!5m2!1sen!2sus'
					width='250px'
					height='100px'
				></iframe>
						</div>
						
					</div>
					{/* Grid column */}

					{/* Grid column */}
					<div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
						<div>
							<div>
								<span>
									<i className='bi bi-geo-alt-fill text-light ms-3'></i>
									<p className='text-light d-inline ms-3'>
										মদন মোহন স্কুল মার্কেট, তৃতীয় তলা, রুম
										নং-12, <br />{' '}
										<span className='ms-5'>
											{' '}
											চৌমুহনী, নোয়াখালী।
										</span>
									</p>
								</span>
							</div>
							<br />
							<div>
								<span>
									<i className='bi bi-telephone text-light ms-3'></i>
									<p className='text-light d-inline ms-3'>
										01613-135513
									</p>
								</span>
							</div>
							<br />
							<div>
								<span>
									<i className='bi bi-envelope text-light ms-3'></i>
									<p className='text-light d-inline ms-3'>
										learntoearnorgbd@gmail.com
									</p>
								</span>
							</div>
						</div>
					</div>
					{/* Grid column */}
				</div>
				{/* Grid row */}
			</div>
			{/* Grid container */}

			{/* Copyright */}
			<div
				className='text-center p-3'
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
			>
				© 2020 Copyright:
				<Link to='/' className='text-light text-decoration-none'>
					copyright@2024 and all rights reserved by learn to earn bd.
				</Link>
			</div>
			{/* Copyright */}
		</footer>
	);
};

export default Footer;
