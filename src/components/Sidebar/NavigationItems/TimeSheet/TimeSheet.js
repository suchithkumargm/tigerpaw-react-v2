import React, { useState } from 'react';
import './TimeSheet.css';

const TimeSheet = () => {
	// Step 1: Initialize state variables
	const [formData, setFormData] = useState({
		projectNo: '',
		startTime: '',
		endTime: '',
		activity: '',
		remarks: ''
	});
	const [data, setData] = useState([]);
	// Step 2: Create a function to handle form submission
	const handleAddRow = () => {
		setData(...data, formData);
		// Clear the form fields after adding a row
		setFormData({
			projectNo: '',
			startTime: '',
			endTime: '',
			activity: '',
			remarks: ''
		});
	};

	return (
		<section>
			<div className='container'>
				<div className='inner-container'>
					<div className='form'>
						<div className='form-headings'>
							<span>Project No</span>
							<span>Start Time</span>
							<span>End Time</span>
							<span>Activity</span>
							<span>Remarks</span>
						</div>
						<form>
							{/* Step 1: Bind form inputs to state variables */}
							<input
								type='text'
								id='projectNo'
								name='projectNo'
								value={formData.projectNo}
								onChange={(e) => setFormData({ ...formData, projectNo: e.target.value })}
							/>
							<input
								type='text'
								id='startTime'
								name='startTime'
								value={formData.startTime}
								onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
							/>
							<input
								type='text'
								id='endTime'
								name='endTime'
								value={formData.endTime}
								onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
							/>
							<input
								type='text'
								id='activity'
								name='activity'
								value={formData.activity}
								onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
							/>
							<input
								type='text'
								id='remarks'
								name='remarks'
								value={formData.remarks}
								onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
							/>
						</form>

						<div className='buttons'>
							{/* Step 2: Trigger the handleAddRow function on button click */}
							<button type='button' onClick={handleAddRow}>
								Add Row
							</button>
							<button type='submit'>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TimeSheet;
