const geocoder = require("./geocoder");

const reverseGeocode = async (latitude, longitude) => {
  try {
    const result = await geocoder.reverse({ lat: latitude, lon: longitude });
    if (result && result[0]) {
      return result[0].formattedAddress; // Return the formatted address
    } else {
      return "Unknown location";
    }
  } catch (error) {
    console.error("Error in reverse geocoding:", error.message);
    return "Unknown location";
  }
};

module.exports = reverseGeocode;
