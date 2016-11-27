define(['tools/util'], function (Util) {
	var loginComponent = Vue.extend({
		template: Util.tpl('tpl_login'),
		data: function () {
			return {
				type: [
					{id: 1, title: 'qq', url: '01.png'},
					{id: 2, title: 'weibo', url: '02.png'},
					{id: 3, title: 'zhifubao', url: '03.png'},
					{id: 4, title: 'qita', url: '04.png'},
				]
			}
		},
		methods: {
			goBack: function () {
				history.go(-1)
				this.searchKey='';
			}
		},
		created:function(){

		}
	})
	return loginComponent;
})