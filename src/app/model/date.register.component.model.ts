export class DateOutput
{
    days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    months: any[] = [{ id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' }
    ];
    years: number[] = [];

    day: number;
    month: string;
    year: number;

    d: Date = new Date();

    constructor()
    {
        for (let i = (this.d.getFullYear() - 18); i > (this.d.getFullYear() - 100); i--) {
            this.years.push(i);
        }
    }
}