function linkWithContext(originalLink) {
  const urlParams = new URLSearchParams(window.location.search);
  const loc = urlParams.get('loc') || null;
  return loc ? `${originalLink}?loc=${loc}` : originalLink;
}

