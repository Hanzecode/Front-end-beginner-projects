const visa = document.getElementById('visa')
const paypal = document.getElementById('paypal')
const mastercard = document.getElementById('mastercard')
const output = document.getElementById('output')
const subout = document.getElementById('subout')
const subscribe = document.getElementById('subscribe')

document.getElementById('button').onclick = function () {
    if (subscribe.checked){
        subout.textContent = `You subscribed`
    }

    else if (!subscribe.checked){
        subout.textContent = `You haven't subscribed`
    }

    if (visa.checked) {
        output.textContent = `This is the Visa card`;
    }
    else if (paypal.checked) {
        output.textContent = `This is the PayPal card`;
    }
    else if (mastercard.checked) {
        output.textContent = `This is the Mastercard`;
    }
    else {
        output.textContent = `Please select a payment option.`;
    }
}
