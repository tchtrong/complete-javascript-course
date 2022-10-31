// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+" +
  "_Arrival;bru0943384722;fao93766109;11:45+" +
  "_Delayed_Arrival;hel7439299980;fao93766109;12:05+" +
  "_Departure;fao93766109;lis2323639855;12:30";

const flightsStr = flights.split("+").map((flight, flightIndex) => {
  return flight
    .split(";")
    .map((value, idx) => {
      switch (idx) {
        case 0: {
          return `${value.startsWith("_Delayed") ? "🔴" : ""}${value.replaceAll(
            "_",
            " "
          )}`.padStart(20, " ");
        }

        case 1:
          return `from ${value.slice(0, 3).toUpperCase()}`;

        case 2:
          return `to ${value.slice(0, 3).toUpperCase()}`;

        case 3:
          return `(${value.replace(":", "h")})`;

        default:
          throw new Error(
            `Wrong format: More ";" than expected at flight ${flightIndex + 1}`
          );
      }
    })
    .join(" ");
});

flightsStr.forEach((flightStr) => console.log(flightStr));
