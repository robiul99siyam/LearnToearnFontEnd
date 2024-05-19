import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
	return (
		<>
			<Navbar />

			<div className='container mx-auto shadow-sm p-5 mb-5 rounded'>
				<div className='ps-5 pe-5 d-flex gap-5 align-items-center justify-content-around'>
					<div>
						<img
							style={{ maxWidth: '250px' }}
							src='https://learntoearnbd.com/wp-content/uploads/2024/04/12-1536x1536.png'
							alt=''
						/>
					</div>
					<div>
						<p className='w-75 fs-5 about-p text-success'>
							আপনার অনলাইন বিজনেস এবং ফ্রিল্যান্সিং ক্যারিয়ার শুরু
							করুন আমাদের সাথে একটি সঠিক গাইডলাইন যা আপনি পেয়ে
							যাবেন Learn To Earn এর কাছ থেকে
						</p>
					</div>
				</div>
				<br />
				<div>
					<p>
						Learn To Earn প্রথম এমন একটি প্রতিষ্ঠান যারা আপনার
						ফ্রিল্যান্সিং স্কিল ডেভেলপমেন্টে এর পাশাপাশি নিজস্ব
						অনলাইন বিজনেস শুরু করতে একদম বেসিক লেভেল থেকে এডভান্স
						লেভেল পর্যন্ত গাইডলাইন দেয়। আমাদের রয়েছে স্মার্ট
						লার্নিং এনভায়রনমেন্ট এবং দক্ষ ইন্সট্রাক্টর। AI
						(আর্টিফিশিয়াল ইন্টেলিজেন্স) এর সর্বোচ্চ ব্যবহার,আপনার
						কাজকে দ্বিগুণ গতিতে করতে সাহায্য করবে।
					</p>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default About;
