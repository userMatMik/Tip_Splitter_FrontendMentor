const billAmount = document.querySelector('#bill-amount');
const numOfPeople = document.querySelector('#num-of-prepeole');
const tipBtns = document.querySelectorAll('.tip-selector__btn');
const tipForPerson = document.querySelector('#tip-for-person');
const totalForPerson = document.querySelector('#total-for-person');

// console.log(billAmount);


let billValue = 0;
let tipPercent = 0;
let numOfPersons = 1;

// get bill value
console.log(billAmount.value);

const getBillValue = () => {
    billValue = billAmount.value;
    renderValues(billValue);
}

//get number of people
const getNumOfPerosns =() => {
    numOfPersons = numOfPeople.value;
    console.log(numOfPeople)
    console.log(numOfPeople.value)
    renderValues(numOfPersons)
}

//get tip
const getTip = (e) => {
    tipPercent = parseInt(e.target.innerText) / 100
    renderValues()
}

//add class to active button
const handleClick = (e) => {
    tipBtns.forEach(btn => {
        btn.classList.remove('tip-btn-active')
    })
    e.target.classList.add('tip-btn-active')
    console.log(e.target)
}

// render values
const renderValues = () => {
    const tipAmount = (billValue * tipPercent) / numOfPersons;
    const totalValueForPerson = (billValue / numOfPersons) + (billValue * tipPercent) / numOfPersons;
    tipForPerson.textContent = `$${Math.round(tipAmount * 100) / 100}`
    totalForPerson.textContent = `$${ Math.round(totalValueForPerson * 100) / 100}`
}

// listen to events and get data
billAmount.addEventListener('input', getBillValue);
numOfPeople.addEventListener('input', getNumOfPerosns); 
tipBtns.forEach(btn => {
    btn.addEventListener('click', getTip)
    btn.addEventListener('click', handleClick)
})


console.log(tipForPerson.textContent)


