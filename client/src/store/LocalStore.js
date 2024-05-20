import {makeAutoObservable} from "mobx";

export default class LocalStore{
    constructor() {
        this._name = 'Юрий';
        this._surname = 'Герыш';
        this._patronymic = 'Андреевич';
        this._birthday = '2014-01-06';
        this._employmentDate ='2020-05-15';
        this._country = 'Россия';
        this._city = 'Красноярск';
        this._salary = '100 000 ₽';
        this._weekSalary = '23 000 ₽';
        this._accountNumber = '12345678912345678912';
        makeAutoObservable(this);
    }

    setName(name) {
        this._name = name;
    }
    setSurname(surname) {
        this._surname = surname;
    }
    setPatronymic(patronymic) {
        this._patronymic = patronymic;
    }
    setBirthday(birthday) {
        this._birthday = birthday;
    }
    setEmploymentDate(employmentDate) {
        this._employmentDate = employmentDate;
    }
    setCountry(country) {
        this._country = country;
    }
    setCity(city) {
        this._city = city;
    }
    setSalary(salary) {
        this._salary = salary;
    }
    setWeekSalary(weekSalary) {
        this._weekSalary = weekSalary;
    }
    setAccountNumber(accountNumber) {
        this._accountNumber = accountNumber;
    }

    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get patronymic(){
        return this._patronymic;
    }
    get birthday(){
        return this._birthday;
    }
    get employmentDate(){
        return this._employmentDate;
    }
    get country(){
        return this._country;
    }
    get city(){
        return this._city;
    }
    get salary(){
        return this._salary;
    }
    get weekSalary(){
        return this._weekSalary;
    }
    get accountNumber(){
        return this._accountNumber;
    }
}