export function add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd);
        numbers = numbers.substring(delimiterEnd + 1);
    }

    const numArray = numbers.replace(/\n/g, delimiter).split(delimiter).map(Number);

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}