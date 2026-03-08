export { formatCityName, getCondition };

function formatCityName(string) {
  // make first character uppercase and the rest lowercase
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function getCondition(conditions) {
  // get the first condition before a comma if it exists, and some special cases (because giphy api returns weird shit)

  if (conditions == "Partially cloudy") {
    return "cloudy";
  }

  if (conditions == "Clear") {
    return "sunshine";
  }

  if (conditions.includes(",")) {
    // this means that there are multiple conditions
    return conditions.split(",")[0];
  }

  return conditions; // base
}
