define(['tools/util'], function (Util) {
	var ListComponent = Vue.extend({
		props: ['key'],
		template: Util.tpl('tpl_list'),
		data: function () {
			return {
				type: [
					{value: '价格排序', key: 'price'},
					{value: '销量排序', key: 'comment'},
					{value: '好评排序', key: 'like'},
					{value: '信誉排序', key: 'id'}
				],
				list: [],
				other: [],
				num:[]
			}
		},
		methods: {
			loadMore: function () {
				this.list = [].concat(this.list, this.other);
				this.other = [];
			},
			addcar: function () {
				console.log(this)
			},
			changeType: function (key) {
				if (key === 'discount') {
					this.list = this.list.sort(function (a, b) {
						var aDiscount = a.orignPrice - a.price;
						var bDiscount = b.orignPrice - b.price;
						return aDiscount - bDiscount;
					})
				} else {
					this.list = this.list.sort(function (a, b) {
						return b[key] - a[key]
					})
				}
			}
		},
		created: function () {
			var me = this;
			var hash = location.hash;
		     hash = hash.slice(1);
		     hash = hash.replace(/^\//, '');
		     hash = hash.split('/');
		     var num=parseInt(hash[2]);
		     console.log(num);
			Util.ajax('data/list/'+num+'.json', function (res) {
				if (res && res.errno === 0) {
						me.list = res.data.data.slice(0, 8);
					    me.other = res.data.data.slice(8);
				}
			})
		}

	})
	return ListComponent;
})