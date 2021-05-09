export default function Form({ set }) {
	// eslint-disable-next-line no-extend-native
	String.prototype.capitalize = function () {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	function formSubmit(event) {
		event.preventDefault();
		event.target.querySelector('button').classList.add('is-loading')

		fetch('http://localhost:5000/favfood', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: event.target['0'].value.trim().toLowerCase().capitalize(),
				food: event.target['1'].value.trim().toLowerCase(),
			}),
		})
			.then(res => set(true))

		// set(true);
	}

	return (
		<form onSubmit={formSubmit} className='card is-two-thirds'>
			<input className="input is-medium is-primary" type="text" name='name' id='name' placeholder="Name" />
			<label className="label is-medium">'s &#8195; favourite food is</label>

			<input className="input is-medium is-primary" type="text" name='food' id='food' placeholder="Food" />

			<button className="button is-success is-medium">Enter</button>
		</form>
	)
}