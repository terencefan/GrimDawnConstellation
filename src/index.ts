import { parseInput, formatOutput } from './utils/helper';

const main = () => {
    const args = process.argv.slice(2);
    const input = parseInput(args.join(' '));
    
    // Main logic of the application
    const output = formatOutput(input);
    console.log(output);
};

main();