let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате:", "ГГГГ-ММ-ДД");
let expenses = {
    answer1: "",
    answer2: ""
}
expenses.answer1 = prompt("Введите обязательную статью расходов в этом месяце") + " : " + prompt("Во сколько обойдется?");
expenses.answer2 = prompt("Введите обязательную статью расходов в этом месяце") + " : " + prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expensesFromObj: expenses,
    optionalExpenses: "",
    income: {},
    savings: false

}
alert (money/30);