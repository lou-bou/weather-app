export { formatCityName };

function formatCityName(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
