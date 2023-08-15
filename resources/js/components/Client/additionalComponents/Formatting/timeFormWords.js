export default function getRussianMinutesLabel(number) {
    const num = Math.abs(number);
    const remainder100 = num % 100;
    const remainder10 = num % 10;
    
    if (remainder100 >= 5 && remainder100 <= 20) {
        return 'минут';
    }
    
    if (remainder10 === 1) {
        return 'минута';
    }
    
    if (remainder10 >= 2 && remainder10 <= 4) {
        return 'минуты';
    }
    
    return 'минут';
}
