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
						<p className='text-light ms-3'>
							Freelancing And Business Guidelines
							<br />
							শুরু করুন শুরু থেকে, ফ্রিল্যান্সিং জার্নি আমাদের
							সাথে
						</p>
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
