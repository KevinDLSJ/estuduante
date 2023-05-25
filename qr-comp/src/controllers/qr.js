const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR = new QRCode(contenedorQR);
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    QR.makeCode(localhost:3000/pedidos/{{ped.[0].folio}});
});