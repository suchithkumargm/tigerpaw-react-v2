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
		setFormData({
			projectNo: '',
			startTime: '',
			endTime: '',
			activity: '',
			remarks: ''
		});
	};

	return (
		<div className="timesheet bg-secondary">

			<div className="form__headings bg-black">
				<ul className="form__items text-primary">
					<li className="form__item">Project No</li>
					<li className="form__item time__heading">Start Time</li>
					<li className="form__item time__heading">End Time</li>
					<li className="form__item">Activity</li>
					<li className="form__item">Remarks</li>
				</ul>
			</div>
			<div className="form">
				<form>
					<div className="form__inputs">
						<input type="text" required />
						<input className="time__input" type="text" required />
						<input className="time__input" type="text" required />
						<input type="text" required />
						<input type="text" required />
					</div>
					<div className="buttons">
						<input className="btn" type="submit" value="Add Row" />
						<input className="btn" type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default TimeSheet;