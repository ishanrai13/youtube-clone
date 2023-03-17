export function updateLoggedInToken() {
	const fragmentString = window.location.hash.substring(1);

	// Parse query string to see if page request is coming from OAuth 2.0 server.
	const params = {};
	const regex = /([^&=]+)=([^&]*)/g;
	let m;
	while ((m = regex.exec(fragmentString))) {
		params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	}
	if (Object.keys(params).length > 0) {
		setCookie('auth', params.access_token, 7);
		window.location.href = '/';
	}
}
export function getCookie(keyName) {
	const name = keyName + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieValue = decodedCookie
		.split(';')
		.find((row) => {
			const newRow = row.trim();
			return newRow.startsWith(name);
		})
		?.split('=')[1];
	return cookieValue;
}

export function setCookie(keyName, value, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	const expires = `expires=${d.toUTCString()};`;
	document.cookie =
		keyName +
		'=' +
		value +
		';path=/;SameSite=Strict;' +
		expires +
		'Max-Age=' +
		exdays * 24 * 60 * 60;
}

export function deleteCookie(name) {
	document.cookie = name + '=;Max-Age=0';
}

export async function isValidAuthCookie() {
	try {
		const res = await fetch(
			'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' +
				getCookie('auth')
		);
		const respJson = await res.json();
		return respJson && respJson.error ? false : true;
	} catch (err) {
		return false;
	}
}
