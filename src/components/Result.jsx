function Result({ bill, tip1, tip2 }) {
    // Ensure bill is treated as a number
    const billAmount = parseFloat(bill);

    // Calculate each tip as a percentage of the bill amount
    const tipAmount1 = (parseFloat(tip1) / 100) * billAmount;
    const tipAmount2 = (parseFloat(tip2) / 100) * billAmount;

    // Calculate the average tip amount
    const totalTip = (tipAmount1 + tipAmount2) / 2;

    // Calculate the total bill including the tip
    const totalBill = billAmount + totalTip;

    return (
        <div>
            <p>You pay ${totalBill.toFixed(2)} (${billAmount.toFixed(2)} + ${totalTip.toFixed(2)})</p>
        </div>
    );
}

export default Result;
