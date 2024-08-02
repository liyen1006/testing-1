document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const customerName = document.getElementById('customerName').value;
    const orderItem = document.getElementById('orderItem').value;
    const quantity = document.getElementById('quantity').value;

    const orderTable = document.getElementById('orderTable').getElementsByTagName('tbody')[0];
    const newRow = orderTable.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = customerName;
    cell2.textContent = orderItem;
    cell3.textContent = quantity;

    document.getElementById('orderForm').reset();
});
