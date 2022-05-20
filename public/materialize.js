document.addEventListener("DOMContentLoaded", () => {
	const elems = document.querySelectorAll(".collapsible");
	const instances = M.Collapsible.init(elems);
});

document.addEventListener("DOMContentLoaded", () => {
	const elems = document.querySelectorAll(".modal");
	const instances = M.Modal.init(elems);
});