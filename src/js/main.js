
console.log("/// Seja quem vc quer ser ✨");


document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("dashboard")

	console.log(window.location.href.endsWith("/admin/"))
	console.log(window.location.href)
	
	if (window.location.href.endsWith("/admin/")) {
		document.body.classList.add("page-inicial")
	}

	document.body.style.opacity = 1
	document.body.classList.add("DOMContentLoaded")

})