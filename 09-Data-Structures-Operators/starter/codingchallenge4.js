// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/**
 * Receives a list of variable names written in underscore_case and convert them to camelCase.
 *
 * @param {string} input A string contains list of variable names written in underscore_case seperated by space.
 * @throws {TypeError} In case variables does not have the expected type
 * @throws {Error}
 * @returns {string} A list of variable names written in underscore_case.
 */
const toCamelCase = function (input) {
  if (typeof input !== "string" && !(input instanceof String))
    throw new TypeError();

  const variables = input
    .split("\n")
    .flatMap((variable) => {
      if (variable === "") return [];
      return variable.trim().split(" ");
    })
    .map((variable) => {
      const firstUnderscores = variable.match(/(^_+)/gm) ?? "";
      const lastUnderscores = variable.match(/(_+$)/gm) ?? "";
      const words = variable
        .match(/([a-zA-Z]+)/gm)
        .map((word, idx) => {
          if (idx === 0) return word.toLowerCase();
          return word
            .toLowerCase()
            .replace(word[0].toLowerCase(), word[0].toUpperCase());
        })
        .join("");
      return firstUnderscores + words + lastUnderscores;
    });

  return variables;
};

const printCamelCase = function (variables) {
  const lengthOfPaddingString =
    variables.reduce((prev, cur) =>
      prev.length > cur.length ? prev.length : cur.length
    ) + 5;

  const variablesStr = variables
    .map((variable, idx) => {
      return (
        variable.padEnd(lengthOfPaddingString, " ") +
        "✅".repeat(1 + idx) +
        "\n"
      );
    })
    .join("");

  console.log(variablesStr);
};

printCamelCase(
  toCamelCase(`
__underscore _case case_

__underscore_case
underscore_case

first_name
Some_Variable
calculate_AGE
delayed_departure
__calculate_AGE_ooo_LLL__ppp__hello__`)
);
