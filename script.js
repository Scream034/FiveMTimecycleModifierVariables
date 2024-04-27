const table = document.getElementById('variables-and-effects-table');

function updateEffectRow(i) {
    const rows = table.getElementsByTagName('tr');
    const headers = table.getElementsByTagName('th');

    const cells = rows[i].getElementsByTagName('td');
    for (let j = 1; j < cells.length; j++) {
        const value = cells[j].textContent;
        if (value === 'Да') {
            console.log(j, headers[j]);
            headers[j].classList.remove('hidden');
            cells[j].classList.remove('hidden');
        } else {
            headers[j].classList.add('hidden');
            cells[j].classList.add('hidden');
        }
    }
}

function showEffectRow() {
    const effectInput = document.getElementById('effect-input');
    const effectName = effectInput.value.trim();
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].children[0].textContent === effectName) {
            // Показываем строку с нужным эффектом
            rows[i].classList.remove('hidden');
            updateEffectRow(i);
        } else {
            // Скрываем остальные строки
            rows[i].classList.add('hidden');
        }
    }
}

showEffectRow();