import { onShowDate, onHideDate } from "../lib/dates";

export function onAppLaunch() {
	console.info('App successfully launched.');


	document.getElementById('demo-date').innerHTML = 'Waiting for you to click a button!';

	// Assign functions to the buttons by the button ID

	document.getElementById('btnShowDate').onclick = onShowDate;
	document.getElementById('btnHideDate').onclick = onHideDate;

	console.info('App launch handler completed.');
}
