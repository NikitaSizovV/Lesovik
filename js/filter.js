window.onload = function renderFilters(){
	var filterBtns = document.getElementById('filters').querySelectorAll('.btn');

	filterBtns.forEach(function (item, index){
		item.addEventListener("click", (event) =>{
			filterBtns.forEach(function (item, index){
				item.classList.toggle('active', false);
			})
			event.currentTarget.classList.toggle('active', true);
		}, false);
	});
}
