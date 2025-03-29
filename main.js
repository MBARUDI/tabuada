function mostrarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Clear previous results

    if (numero < 1 || numero > 10) {
        resultadoDiv.innerHTML = '<div class="alert alert-danger">Por favor, escolha um número entre 1 e 10.</div>';
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const card = document.createElement('div');
        card.className = 'card mb-2';
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        cardBody.textContent = `${numero} x ${i} = ${resultado}`;
        card.appendChild(cardBody);
        resultadoDiv.appendChild(card);
    }
}

function limparResultados() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Clear results
}