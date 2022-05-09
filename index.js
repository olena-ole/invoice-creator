'use strict';

const data = [
    {service: "Wash car", cost: 10, id: 0, ordered: false},
    {service: "Mow Lawn", cost: 20, id: 1, ordered: false},
    {service: "Pull Weeds", cost: 30, id: 2, ordered: false}
];

const wrapperBtns = document.getElementById('wrapper-btns');
const serviceList = document.getElementById('service-list');
serviceList.innerHTML = '';

const totalEl = document.getElementById('total');
let totalCost = 0;
totalEl.innerHTML = totalCost;

//<button class="service-btn">Wash Car: $10</button>

function renderButtons(arr) {
    let finalString = '';
    arr.forEach(element => {
        finalString += `<button class="service-btn" id="${element.id}">${element.service}: $${element.cost}</button>`
    });
    return finalString;
};

wrapperBtns.innerHTML = renderButtons(data);

wrapperBtns.addEventListener('click', function(e) {
    if (e.target && e.target.tagName === 'BUTTON') {
        addService(e.target.id);
    }
})

function addService(id) {
    data.forEach(el => {
        if (el.id == id && !el.ordered) {
            el.ordered = true;
            totalCost += el.cost;
            totalEl.innerHTML = totalCost;
            serviceList.innerHTML += `
                <li class="service-list-item">
                    <div class="service">
                        <span class="service-name">${el.service}</span>
                        <span class="service-remove" data-id="${id}">Remove</span>
                    </div>
                    <div class="cost">
                        <span class="cost-currency">$</span>
                        <span class="cost-sum">${el.cost}</span>
                    </div>
                </li>
            `;
        }
    })
}