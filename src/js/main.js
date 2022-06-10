console.log("oi");

document.addEventListener("DOMContentLoaded", () => {
	if (window.location.href.endsWith("/admin/")) {
		document.body.classList.add("page-inicial")
	}
	console.log(window.location.href.endsWith("/admin/"))
	console.log(window.location.href)
})