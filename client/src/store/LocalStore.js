import {makeAutoObservable} from "mobx";

export default class LocalStore{
    constructor() {
        this._personalData = {
            name: 'София',
            surname: 'Дмитриевна',
            patronymic: 'Рус',
            birthday: '2003-09-12',
            employmentDate: '2020-05-15',
            country: 'Россия',
            city: 'Красноярск',
            salary: '100 000 ₽',
            weekSalary: '23 000 ₽',
            accountNumber: '1234 5678 9123 4567 8912',
        };
        this._divisionData = {
            department: 'Дизайн',
            director: 'Анна Кузнецова',
            level: 'Junior',
            position: 'UI/UX designer',
        };
        this._contactsData = {
            phoneNumber: '+7 (999) 999-99-99',
            email: 'test@gmail.com',
            telegram: '@tgxpml',
            slack: '@slack'
        };
        this._vacationData = {
            available: 32,
            planned: 8,
            used: 4,
            vacations: [
                {
                    type: 'Отпуск',
                    start: '03 марта 2023',
                    end: '23 марта 2023',
                    daysCount: 20,
                },
                {
                    type: 'Отгул',
                    start: '01 марта 2023',
                    end: '03 марта 2023',
                    daysCount: 3,
                },
                {
                    type: 'Отгул',
                    start: '11 мая 2023',
                    end: '15 мая 2023',
                    daysCount: 4,
                },
                {
                    type: 'Отпуск',
                    start: '01 марта 2023',
                    end: '12 марта 2023',
                    daysCount: 12,
                },
                {
                    type: 'Отгул',
                    start: '17 февраля 2023',
                    end: '21 февраля 2023',
                    daysCount: 5,
                },
                {
                    type: 'Отгул',
                    start: '12 февраля 2023',
                    end: '12 февраля 2023',
                    daysCount: 1,
                },
                {
                    type: 'Отгул',
                    start: '7 января 2023',
                    end: '16 января 2023',
                    daysCount: 10,
                },
            ],
        };
        makeAutoObservable(this);
    }

    setPersonalData(personalData) {
        this._personalData = personalData;
    }
    setDivisionData(divisionData) {
        this._divisionData = divisionData;
    }
    setContactsData(contactsData) {
        this._contactsData = contactsData;
    }
    setVacationData(vacationData) {
        this._vacationData = vacationData;
    }

    get personalData(){
        return this._personalData;
    }
    get divisionData(){
        return this._divisionData;
    }
    get contactsData(){
        return this._contactsData;
    }
    get vacationData(){
        return this._vacationData;
    }
}