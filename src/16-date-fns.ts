import { format, subDays } from 'date-fns';

const date = new Date('1998, 1, 28');
const newDate = subDays(date, 30);
console.log(format(newDate, 'yyyy-MM-dd'));
