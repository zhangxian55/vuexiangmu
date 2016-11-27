define([], function () {
	var Util = {
		ajax: function (url, fn) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						var data = JSON.parse(xhr.responseText)
						fn && fn(data)
					}
				}
			}
			xhr.open('GET', url, true);
			xhr.send(null);
		},

		tpl: function (id) {
			return document.getElementById(id).innerHTML;
		}
	}
	return Util
})