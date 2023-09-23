import React from 'react';

import './TimeSheet.css';

const TimeSheet = () => {
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
							<input for='projectNo' id='projectNo'></input>
							<input for='startTime' id='startTime'></input>
							<input for='endTime' id='startTime'></input>
							<input for='activity' id='activity'></input>
							<input for='remarks' id='remarks'></input>
						</form>

						<div className='buttons'>
							<button type='submit'>Add Row</button>
							<button type='submit'>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TimeSheet
