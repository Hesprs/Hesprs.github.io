const MATRIX = [
    [ 0, 19, 15, 14,  1,  0],
    [ 8,  3,  7, 22, 24, 21],
    [11, 28, 17,  5, 23,  6],
    [ 9, 12, 20,  4, 27, 16],
    [25,  2, 10, 29, 26, 18]
];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('matrixContainer');
    const table = document.createElement('table');
    table.classList.add('shadow', 'background_color', 'border', 'container_transition');
    MATRIX.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(value => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = value;
            tr.appendChild(checkbox);
        });
        table.appendChild(tr);
    });
    container.appendChild(table);
});
function handleOK() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes, cb => parseInt(cb.value, 10));
    selectedValues.sort((a, b) => a - b);
    const outputDiv = document.getElementById('output');
    if (selectedValues.length === 0) {
        outputDiv.style.display = 'none';
    } else {
        outputDiv.style.display = 'block';
        outputDiv.textContent = selectedValues.join(', ');
    }
}