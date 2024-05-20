const AboutCard = () => {
	return (
		<>
			<h4 className='text-center fw-bold mb-5'>
				নোয়াখালীতে আমরাই প্রথম প্রিন্ট-অন-ডিমান্ড,ড্রপশিপিং এর মত
				এক্সাইটিং বিজনেস মডেল <br /> ও  <br />একাধিক ফ্রিল্যান্সিং স্কিল নিয়ে তৈরি
				করেছি
			</h4>
			<div className='d-flex justify-content-center align-items-center gap-3 flex-wrap container mb-5'>
				<div className='card p-2' style={{ width: '15rem' }}>
					<img
						src='https://learntoearnbd.com/wp-content/uploads/2024/04/14-1536x1536.png'
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title fw-bold text-center'>
							Print On Demand
						</h5>
					</div>
				</div>
				<div className='card p-2' style={{ width: '15rem' }}>
					<img
						src='https://learntoearnbd.com/wp-content/uploads/2024/04/11-1000x1000.png'
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title fw-bold text-center'>
							Dropshipping
						</h5>
					</div>
				</div>
				<div className='card p-2' style={{ width: '15rem' }}>
					<img
						src='https://learntoearnbd.com/wp-content/uploads/2024/04/12-1536x1536.png'
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title fw-bold text-center'>
							Business Model
						</h5>
					</div>
				</div>
				<div className='card p-2' style={{ width: '15rem' }}>
					<img
						src='https://learntoearnbd.com/wp-content/uploads/2024/04/13-1536x1536.png'
						className='card-img-top'
						alt='...'
					/>
					<div className='card-body'>
						<h5 className='card-title fw-bold text-center'>
							Freelance Skills
						</h5>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutCard;
