let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате: ГГГГ-ММ-ДД", '');

    while(isNaN(money) || money == '' || money == null){
        money = prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    expenses: {},
    timeData: time,
    optionalExpenses: {},
    income: [],
    savings: true
    
}


appData.budget = money;
function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''), 
            b = prompt("Во сколько обойдется?",'');
        if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null 
        && a != '' && b!= '' && a.length < 50) {
            console.log('Done!');
            appData.expenses[a] = b;
        }
    }
}

chooseExpenses();

// let expenses = {
//     answer1: "",
//     answer2: ""
// }
// expenses.answer1 = prompt("Введите обязательную статью расходов в этом месяце") + " : " + prompt("Во сколько обойдется?");
// expenses.answer2 = prompt("Введите обязательную статью расходов в этом месяце") + " : " + prompt("Во сколько обойдется?");



appData.moneyPerDay = (appData.budget /30).toFixed();
alert ("Ежедневный бюджет: " + appData.moneyPerDay);

// alert( "1"[0] );
//alert( +"Infinity" );

function checkSavings(){
    if(appData.savings){
        let save = +prompt("Введите размер накоплений: "),
            percent = +prompt("Введите процент: ");
            appData.monthIncome = save/100/12*percent;
            alert("Ежемесячный доход: " + appData.monthIncome);
    }
}
checkSavings();