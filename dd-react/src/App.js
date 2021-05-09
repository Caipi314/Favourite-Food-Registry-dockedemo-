import './index.css';
import Form from './Form.jsx';
import Leaderboard from './Leaderboard.jsx';
import React, { useState } from 'react';

function App() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="app is-full">
			<span className='title is-two-thirds'>
				Welcome to the "Best Foods" registry
			</span>
			<span className='subtitle is-two-thirds'>
				Enter your favourite food, and see other peoples' as well
			</span>
			< span className='subtitle is-8 underline is-two-thirds'>
				<button
					className="button is-link is-outlined"
					onClick={() => {
						setSubmitted(!submitted);
					}}
				>
					<strong>
						{submitted
							? 'Have another favourite food?'
							: 'See everyone elses\''
						}

					</strong>
				</button>

			</span>
			{
				submitted
					? <Leaderboard />
					: <Form set={setSubmitted} />
			}

		</div >
	);
}

export default App;
