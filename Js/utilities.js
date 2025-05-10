// console.log('donate')
// document.getElementById('dotate-for-noakhali').addEventListener('click', function (){
//     const amountElement = document.getElementById('amount-for-Noakhali');
//     const amount = parseFloat(amountElement.value);

//     if (isNaN(amount) || amount <= 0) {
//         alert("Please enter a valid donation amount.");
//         return;
//     }

//     const AvailableAmountElement = document.getElementById('available-amount');
//     const AvailableAmount = parseFloat(AvailableAmountElement.innerText)
//     const newAmount = amount + AvailableAmount;
//     AvailableAmountElement.innerText = newAmount;
//     amountElement.value= "";


// })

function handleDonation(inputId, displayId, displayAmount){
    const amountElement = document.getElementById(inputId);
    const amount = parseFloat(amountElement.value);
    // console.log(amount);


    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
     
    const history = document.getElementById("history");
    // console.log(history);

    const newElement = document.createElement('div');
   
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString()
    
    newElement.innerHTML = ` <img class="bg-white p-1 rounded-full" src="/assets/coin.png" alt=""> <p> ${inputId} is ${amount} BDT in ${date} at ${time} </p>`.toUpperCase();

    newElement.setAttribute('class', 'flex items-center space-x-2 mb-2 justify-center mt-10');
    
    history.appendChild(newElement);

    const AvailableAmountElement = document.getElementById(displayId);
    const AvailableAmount = parseFloat(AvailableAmountElement.innerText)

    const  avail= document.getElementById(displayAmount);
    const Availableamount = parseFloat(avail.innerText);
    // console.log(typeof(Availableamount))
    // console.log(Availableamount)
    const NewAmount = amount + Availableamount;
    avail.innerText = NewAmount;

    const newAmount = amount + AvailableAmount;
    AvailableAmountElement.innerText = newAmount;
    amountElement.value= "";
    
}


document.getElementById("History").addEventListener('click', function(event){
    // document.getElementById('cards-part')
    event.preventDefault()
    console.log('hi')
    // this.classList.remove('bg-lime-300');
    // document.getElementById('Donation').style.backgroundColor = "red";
    // this.classList.add('bg-lime-500');
    

    document.getElementById('history').classList.remove('hidden');

    document.getElementById('cards-part').classList.add('hidden');

})
document.getElementById("Donation").addEventListener('click', function(event){
    // document.getElementById('cards-part')
    event.preventDefault()
    console.log('hi')
    // this.classList.remove('bg-lime-300');
    // document.getElementById('History').style.backgroundColor = "red";
    // this.classList.add('bg-lime-500');

    document.getElementById('cards-part').classList.remove('hidden');
    
    
    document.getElementById('history').classList.add('hidden');

})