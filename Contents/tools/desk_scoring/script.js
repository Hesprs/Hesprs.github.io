const MATRIX = [
    [ 0, 19, 15, 14,  1,  0],
    [ 8,  3,  7, 22, 24, 21],
    [11, 28, 17,  5, 23,  6],
    [ 9, 12, 20,  4, 27, 16],
    [25,  2, 10, 29, 26, 18]
];
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('matrixContainer');
    const table = document.createElement('div');
    table.classList.add('shadow', 'background_color', 'border', 'container_transition', 'martix');
    MATRIX.forEach(row => {
        const line = document.createElement('div');
        line.classList.add('line');
        row.forEach(value => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            line.appendChild(checkbox);
            checkbox.value = value;
            checkbox.id = value === 0 ? '' : value;
            const indicator = document.createElement('label');
            indicator.classList = value !== 0 ? 'indicator border shadow container_transition' : 'indicator unclickable';
            indicator.htmlFor = value;
            line.appendChild(indicator);
        });
        table.appendChild(line);
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