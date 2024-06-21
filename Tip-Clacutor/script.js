function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage / 100).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById('tipAmount').textContent = `Tip Amount: $${tipAmount}`;
    document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount}`;
}
