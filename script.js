const form = document.getElementById('add-contact-form');
const imgWpp = '<img src="./media/wppLogo.png" alt="png wpp" />';
var linhas = '';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-telefone');

    var linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += `<td>${imgWpp}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    nomeContato.value = '';
    numeroContato.value = '';
});
