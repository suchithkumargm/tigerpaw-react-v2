import React, { useState } from 'react';
import './TimeSheet.css';

const TimeSheet = () => {

	const [data, setData] = useState([]);
	const [formData, setFormData] = useState({
		projectNo: '',
		startTime: '',
		endTime: '',
		activity: '',
		remarks: ''
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleAddRow = () => {
		// Clear the form fields after adding a row
		const { projectNo, startTime, endTime, activity, remarks } = formData;
		setData([...data, { projectNo, startTime, endTime, activity, remarks }])
		console.log(formData);
		console.log(data);
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
								onChange={handleChange}
							/>
							<input
								type='text'
								id='startTime'
								name='startTime'
								value={formData.startTime}
								onChange={handleChange}
							/>
							<input
								type='text'
								id='endTime'
								name='endTime'
								value={formData.endTime}
								onChange={handleChange}
							/>
							<input
								type='text'
								id='activity'
								name='activity'
								value={formData.activity}
								onChange={handleChange}
							/>
							<input
								type='text'
								id='remarks'
								name='remarks'
								value={formData.remarks}
								onChange={handleChange}
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

					{data.length === 0 ? '' :
						<div class="outer-wrapper">
							<div class="table-wrapper">
								<table border={5} cellPadding={10} width="50%">
									<thead className='text-yellow'>
										<th>Project No</th>
										<th>Start Time</th>
										<th>End Time</th>
										<th>Activity</th>
										<th>Remarks</th>
									</thead>
									<tbody>
										{
											data.map((item, index) => {
												return (
													<tr className='text-white'>
														<td>{item.projectNo}</td>
														<td>{item.startTime}</td>
														<td>{item.endTime}</td>
														<td>{item.activity}</td>
														<td>{item.remarks}</td>
													</tr>
												)
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					}
				</div>
			</div>
		</section>
	);
};

export default TimeSheet;