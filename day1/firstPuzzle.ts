const input = await Deno.readTextFile("./firstInput.txt");

function isNumber(character: string): boolean {
	return !isNaN(Number(character));
}

let result = 0;

const lines = input.split("\r\n").map((line) => line.split(""));

lines.forEach((line) => {
	const numbers: string[] = [];
	line.forEach((char) => isNumber(char) && numbers.push(char));
	result += Number(numbers[0].concat(numbers[numbers.length - 1]));
});

console.log(result);
