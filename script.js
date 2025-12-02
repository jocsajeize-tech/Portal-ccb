function gerarRodizio() {
    const mesAno = document.getElementById("mesAno").value;
    const listaIrmaos = document.getElementById("irmaos").value.split(",");
    const resultado = document.getElementById("resultado");

    if (!mesAno || listaIrmaos.length === 0) {
        alert("Preencha todos os campos!");
        return;
    }

    let html = `<h2>Rodízio — ${mesAno}</h2><table border="1" width="100%" cellpadding="8"><tr><th>Dia</th><th>Irmão</th></tr>`;

    let dia = 1;
    listaIrmaos.forEach(irm => {
        html += `<tr><td>${dia}</td><td>${irm.trim()}</td></tr>`;
        dia++;
    });

    html += "</table>";
    resultado.innerHTML = html;
}

function exportarPDF() {
    window.print();
}
