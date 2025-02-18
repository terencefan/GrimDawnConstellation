export function formatOutput(data: any): string {
    return JSON.stringify(data, null, 2);
}

export function parseInput(input: string): any {
    try {
        return JSON.parse(input);
    } catch (error) {
        throw new Error("Invalid input format");
    }
}