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
	const locationP = document.getElementById('location');
  const subtitleP = document.getElementById('subtitle');
	const urlParams = new URLSearchParams(window.location.search);
	const loc = urlParams.get('loc') || null;
	loc ? locationP.textContent =  `You scanned from: ${locIdToName(loc)}` : subtitleP.style.display = 'none';
}
function linkWithContext(originalLink) {
  const urlParams = new URLSearchParams(window.location.search);
  const loc = urlParams.get('loc') || null;
  return loc ? `${originalLink}?loc=${loc}` : originalLink;
}
main();
