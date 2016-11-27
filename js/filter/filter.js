// 定义过滤器模块
define([], function () {
	// 定义price过滤器
	Vue.filter('price', function (num) {
		return num + '元';
	})
	// 定义原价过滤器
	Vue.filter('originPrice', function (num) {
		return '门市价:' + num + '元';
	})
	// 定义sales过滤器
	Vue.filter('sales', function (num) {
		return '已售' + num;
	})
})