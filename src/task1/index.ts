import readline from "readline";

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

console.log("type in any word or sentence to see the magic!");

lineReader.on("line", (line: string) => {
  const lineReversed = reverseLine(line);
  console.log(lineReversed);
});

const reverseLine = (line: string): string => {
  return line
    .split(" ")
    .map((word) => reverseWord(word))
    .reverse()
    .join(" ");
};

const reverseWord = (word: string): string => {
  return word.split("").reverse().join("");
};
