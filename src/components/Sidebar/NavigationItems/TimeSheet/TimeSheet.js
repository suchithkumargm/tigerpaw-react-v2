// import React, { useState } from 'react';
// import './TimeSheet.css';

// const TimeSheet = () => {

// 	const [data, setData] = useState([]);
// 	const [formData, setFormData] = useState({
// 		projectNo: '',
// 		startTime: '',
// 		endTime: '',
// 		activity: '',
// 		remarks: ''
// 	});

// 	const handleChange = (e) => {
// 		setFormData({ ...formData, [e.target.name]: e.target.value })
// 	}

// 	const handleAddRow = (e) => {
// 		e.preventDefault();
// 		// Clear the form fields after adding a row
// 		const { projectNo, startTime, endTime, activity, remarks } = formData;
// 		setData([...data, { projectNo, startTime, endTime, activity, remarks }])
// 		setFormData({
// 			projectNo: '',
// 			startTime: '',
// 			endTime: '',
// 			activity: '',
// 			remarks: ''
// 		});
// 		console.log(data);
// 	};

// 	return (
// 		<div className="timesheet bg-secondary">

// 			<div className="form__headings bg-black">
// 				<ul className="form__items text-primary">
// 					<li className="form__item">Project No</li>
// 					<li className="form__item time__heading">Start Time</li>
// 					<li className="form__item time__heading">End Time</li>
// 					<li className="form__item">Activity</li>
// 					<li className="form__item">Remarks</li>
// 				</ul>
// 			</div>
// 			<div className="form">
// 				<form onSubmit={handleAddRow}>
// 					<div className="form__inputs">
// 						<input
// 							type='text'
// 							id='projectNo'
// 							name='projectNo'
// 							value={formData.projectNo}
// 							onChange={handleChange}
// 							required
// 						/>
// 						<input
// 							type='text'
// 							id='startTime'
// 							name='startTime'
// 							value={formData.startTime}
// 							onChange={handleChange}
// 							className='time__input'
// 							required
// 						/>
// 						<input
// 							type='text'
// 							id='endTime'
// 							name='endTime'
// 							value={formData.endTime}
// 							onChange={handleChange}
// 							className='time__input'
// 							required
// 						/>
// 						<input
// 							type='text'
// 							id='activity'
// 							name='activity'
// 							value={formData.activity}
// 							onChange={handleChange}
// 							required
// 						/>
// 						<input
// 							type='text'
// 							id='remarks'
// 							name='remarks'
// 							value={formData.remarks}
// 							onChange={handleChange}
// 							required
// 						/>
// 					</div>
// 					<div className="buttons">
// 						<input className="btn" type="submit" value="Add Row" />
// 						<input className="btn" type="submit" value="Submit" />
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default TimeSheet;


import React, { useState } from 'react';
import './TimeSheet.css';

const TimeSheet = () => {
    const [data, setData] = useState([
        {
            projectNo: '',
            startTime: '',
            endTime: '',
            activity: '',
            remarks: ''
        }
    ]);

    const handleInputChange = (e, rowIndex) => {
        const { name, value } = e.target;
        const updatedData = [...data];
        updatedData[rowIndex][name] = value;
        setData(updatedData);
    };

    const handleAddRow = (e) => {
		e.preventDefault();
        setData([
            ...data,
            {
                projectNo: '',
                startTime: '',
                endTime: '',
                activity: '',
                remarks: ''
            }
        ]);
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
                <form onSubmit={handleAddRow}>
				<div className="form-container">
                    {data.map((row, rowIndex) => (
                        <div className="form__inputs" key={rowIndex}>
                            <input
                                type="text"
                                name="projectNo"
                                value={row.projectNo}
                                onChange={(e) => handleInputChange(e, rowIndex)}
                                required
                            />
                            <input
                                type="text"
                                name="startTime"
                                value={row.startTime}
                                onChange={(e) => handleInputChange(e, rowIndex)}
                                className='time__input'
                                required
                            />
                            <input
                                type="text"
                                name="endTime"
                                value={row.endTime}
                                onChange={(e) => handleInputChange(e, rowIndex)}
                                className='time__input'
                                required
                            />
                            <input
                                type="text"
                                name="activity"
                                value={row.activity}
                                onChange={(e) => handleInputChange(e, rowIndex)}
                                required
                            />
                            <input
                                type="text"
                                name="remarks"
                                value={row.remarks}
                                onChange={(e) => handleInputChange(e, rowIndex)}
                                required
                            />
                        </div>
                    ))}
                </div>
                    <div className="buttons">
                        <input type="submit" className="btn"  value='Add Row'/>
                        <input className="btn" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TimeSheet;
