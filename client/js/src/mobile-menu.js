var m = require('mithril');

var mobileMenu = function () {
	return m("header", {class: "mobile-menu"}, [
		m("div", {class: "mobile-header"}, [
			m("a[href='/']", {config: m.route}, [
				m("div", {class: "mobile-header-item"}, "Flower Wedding")
			]),
			m("a[href='#", [
				m("div", {class: "mobile-header-item"}, "X")
			])
		]),
		m("div", {class: "slide-out"}, [
			m("a[href='/wedding-details']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Wedding")
			]),
			m("a[href='/boulder-info']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Boulder")
			]),
			m("a[href='/registry']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "Registry")
			]),
			m("a[href='/rsvp']", {config: m.route}, [
				m("div", {class: "slide-out-item"}, "RSVP")
			])
		])
	]);
}

function persistent(context) {
    context.retain = true
}

module.exports = mobileMenu;