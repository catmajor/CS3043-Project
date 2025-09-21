function locIdToName (locId) {
	const locations = [
		"Campus Center",
		"Library",
		"Unity",
		"Athletic Center"
	]
	return locations[locId] || 'Unknown Location';
}
function main () {
	const locationDiv = document.getElementById('location');
	const urlParams = new URLSearchParams(window.location.search);
	const loc = urlParams.get('loc') || null;
	locationDiv.textContent = loc ? `You scanned from: ${locIdToName(loc)}` : 'Location not specified';
}
main();
