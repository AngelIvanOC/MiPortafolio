const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo_product'));
			evento.target.classList.add('activo_product');

			const categorias = evento.target.innerHTML.toLowerCase();
			categorias === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categorias}"]`);
		});
    });
});