function locIdToName (locId) {
	const locations = [
		"Library",
		"Campus Center",
		"Unity",
		"Science Center",
		"Innovation Studio",
		"Fuller Labs",
		"Atwater Kent",
		"Salisbury Labs",
		"Stratton Hall"
	]
	return locations[locId] || 'Unknown Location';
}
function main () {
	const locationDiv = document.getElementById('location');
	const urlParams = new URLSearchParams(window.location.search);
	const loc = urlParams.get('loc') || null;
	loc ? locationDiv.textContent =  `You scanned from: ${locIdToName(loc)}` : locationDiv.style.display = 'none';
}
main();
