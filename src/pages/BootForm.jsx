import React, { useState } from 'react';
const BootForm = () => {
	const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
	const [gender, setGender] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [laptobStatus, setLaptobStatus] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission
	};
	return (
		<>
			<div className='container shadow mt-5 mb-5'>
				<form onSubmit={handleSubmit} className='row p-5'>
					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label htmlFor='fullName' className='form-label'>
							Full Name
						</label>
						<input
							type='text'
							className='form-control'
							id='fullName'
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
					</div>

					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label htmlFor='address' className='form-label'>
							Address
						</label>
						<input
							type='text'
							className='form-control'
							id='address'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>

					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
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
					</div>

					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label htmlFor='phone' className='form-label'>
							Phone Number
						</label>
						<input
							type='number'
							className='form-control'
							id='phone'
							aria-describedby='phoneHelp'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>

					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label htmlFor='age' className='form-label'>
							Age
						</label>
						<input
							type='number'
							className='form-control'
							id='age'
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>
					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label htmlFor='gender' className='form-label'>
							Gender
						</label>
						<select
							className='form-select'
							id='gender'
							value={gender}
							onChange={(e) => setGender(e.target.value)}
						>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
							<option value='other'>Other</option>
						</select>
					</div>
					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label
							htmlFor='employmentStatus'
							className='form-label'
						>
							Employment Status
						</label>
						<div className='form-check col-lg-6 col-sm-12 col-md-6 col-6'>
							<input
								className='form-check-input'
								type='radio'
								name='employmentStatus'
								id='student'
								value='Student'
								checked={employmentStatus === 'Student'}
								onChange={(e) =>
									setEmploymentStatus(e.target.value)
								}
							/>
							<label
								className='form-check-label'
								htmlFor='student'
							>
								Student
							</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='employmentStatus'
								id='job'
								value='Job'
								checked={employmentStatus === 'Job'}
								onChange={(e) =>
									setEmploymentStatus(e.target.value)
								}
							/>
							<label className='form-check-label' htmlFor='job'>
								Job
							</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='employmentStatus'
								id='unemployed'
								value='Unemployed'
								checked={employmentStatus === 'Unemployed'}
								onChange={(e) =>
									setEmploymentStatus(e.target.value)
								}
							/>
							<label
								className='form-check-label'
								htmlFor='unemployed'
							>
								Unemployed
							</label>
						</div>

						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='employmentStatus'
								id='others'
								value='others'
								checked={employmentStatus === 'others'}
								onChange={(e) =>
									setEmploymentStatus(e.target.value)
								}
							/>
							<label
								className='form-check-label'
								htmlFor='others'
							>
								Others
							</label>
						</div>
					</div>

					<div className='mb-3 col-lg-6 col-sm-12 col-md-6 col-6'>
						<label
							htmlFor='employmentStatus'
							className='form-label'
						>
							Employment Status
						</label>
						<div className='form-check col-lg-6 col-sm-12 col-md-6 col-6'>
							<input
								className='form-check-input'
								type='radio'
								name='employmentStatus'
								id='student'
								value='Student'
								checked={employmentStatus === 'Student'}
								onChange={(e) =>
									setEmploymentStatus(e.target.value)
								}
							/>
							<label
								className='form-check-label'
								htmlFor='student'
							>
								Student
							</label>
						</div>
					</div>

					<button
						type='submit'
						className='hvr-sweep-to-right hero-btn mb-5'
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default BootForm;
