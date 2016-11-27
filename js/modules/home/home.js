// 创建home组件
define(['tools/util', 'filter/filter','swipe'], function (Util,filter,_) {
	// 定义组件
	var HomeComponent = Vue.extend({
		// template: '<h1>home{{demo}}</h1>',
		template: Util.tpl('tpl_home'),
		// 组件跟vue实例化对象很相似，
		// data: {
		// 	demo: 'hello'
		// }
		data: function () {
			// 返回值是输出的数据
			return  {
				type: [
					{id: 1, title: '手机', url: '10.jpg'},
					{id: 2, title: '家用电器', url: '11.jpg'},
					{id: 3, title: '零食', url: '12.jpg'},
					{id: 4, title: '家居', url: '13.jpg'},
					{id: 5, title: '生鲜食品', url: '14.jpg'},
					{id: 6, title: '箱包', url: '15.jpg'},
					{id: 7, title: '买就免', url: '16.jpg'},
					{id: 8, title: '全球游', url: '17.jpg'},
					{id: 9, title: '生活娱乐', url: '18.jpg'},
					{id: 10, title: '居家必备', url: '19.jpg'}
				],
				tuozhuaidata:[
                    {id: 1,  url: '01.jpg'},
					{id: 2,  url: '02.jpg'},
					{id: 3,  url: '03.jpg'},
					{id: 4,  url: '04.jpg'},
					{id: 5,  url: '05.jpg'},
					{id: 6,  url: '06.jpg'},
					{id: 7,  url: '07.jpg'},
					{id: 8,  url: '08.jpg'},
					{id: 9,  url: '09.jpg'}
				],
				arr:[],
				// 广告数据
				ad: [],
				// 列表数据
				list: [],
				time:[],
				licai:[],
				touzi:[],
				chaoshihui2:[],
				chaoshihui1:[]
			}
		},
		methods:{	
		lunbo: function(){		
		var circlelis = document.querySelectorAll(".circles li");
		var slider= document.getElementById('slider');
		window.mySwipe = Swipe(slider,{
		  startSlide: 0,
		  speed: 500,
		  auto: 1500,
		  continuous: true,
		  disableScroll: false,
		  stopPropagation: false,
		  callback: function(index, elem) {
		  		for(var i = 0 ; i < circlelis.length ; i++){
		  			circlelis[i].className = "";

		  		}
		  		circlelis[index].className = "cur";
		  }
		})
	},
	 tuozhuai: function(){		
		var slider2= document.getElementById('slider2');
		window.mySwipe = Swipe(slider2,{
		  startSlide: 0,
		  speed: 500,
		  auto: 0,
		  continuous: true,
		  disableScroll: false,
		  stopPropagation: false,
		    callback: function(index, elem) {
		  	
		   }
		})
	},
	huadong: function(){
		var box = document.getElementById("box");
		var unit = document.getElementById("unit");
		//最后一个点的位置
		var lastpoint = 0;
		//最后两个点的距离
		var d = 0;
		//开始触摸的坐标
		var startX;
		//信号量，当前的translateX的值
		var nowtranslateX = 0;
		//临时周边用的变量
		var temp;

		var w = document.documentElement.clientWidth;

		//开始触摸
		box.addEventListener("touchstart",function(event){
			event.preventDefault();
			var finger = event.touches[0];

			//记录开始坐标
			startX = finger.clientX;	
			// console.log(startX)
		},true);

		box.addEventListener("touchmove", function(event){
			var finger = event.touches[0];
			//去掉过渡
			unit.style.transition = "none";
			//记录最后两个点的距离
			dX = finger.clientX - lastpoint;
			lastpoint = finger.clientX;
			//变形
			var dX = finger.clientX - startX;
			console.log('dx',dX);
			//临时变量，此时是信号量加上dX：
			console.log('nx',nowtranslateX);
			temp = nowtranslateX + dX;
			console.log("te",temp);
			//设置火车的位置
			unit.style.transform = "translateX(" + temp + "px)";
		}, true);

		//结束触摸
		box.addEventListener("touchend",function(event){
			var finger = event.touches[0];
			//设置信号量
			nowtranslateX = temp;
			//设置一个目标值
			var target = nowtranslateX + 5 * d;

			console.log("我到了" + nowtranslateX + "但是我不满意，我还要运动到" + target);

			//根据情况设置transition，增加回弹效果
			if(target > 0){
				unit.style.transition = "all 0.6s cubic-bezier(.34,1.81,.51,1.68) 0s";
				target = 0;
			}else if(target < -107 * 10 + 10 + w){
				unit.style.transition = "all 0.6s cubic-bezier(.34,1.81,.51,1.68) 0s";
				target = -107 * 10 + 10 + w;
			}else{
				//设置过渡，然后让元素往目标冲锋即可
				unit.style.transition = "all 0.6s cubic-bezier(0.2, 1.05, 0.58, 1.01) 0s";
			}
			console.log('ta',target)
			//移动
			unit.style.transform = "translateX(" + target + "px)";
			nowtranslateX = target;
		},true);
	}
},
		created: function () {

			var me = this;
			Util.ajax('data/home/home.json', function (res) {
				if (res && res.errno === 0) {
					me.ad = res.data.ad;
					me.licai = res.data.licai;
					me.touzi = res.data.touzi;
					me.chaoshihui1 = res.data.chaoshihui1;
					me.chaoshihui2 = res.data.chaoshihui2;
					me.$set('list', res.data.list)
				}
			})
	  setInterval(function(){
			var t1 = new Date("2016-12-12 08:00:00");
			var t2 = new Date();
			//毫秒数
			var msdiff = t1 - t2;
			//方法2：
			var D = parseInt(msdiff / 1000 / 60 / 60 / 24);
			var H = parseInt(msdiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
			var M = parseInt(msdiff % (1000 * 60 * 60) / 1000 / 60);
			var S = parseInt(msdiff % (1000 * 60) / 1000);
             D=D<10?'0'+ D : D ;
             H=H<10?'0'+ H: H ;
             M=M<10?'0'+ M: M ;
             S=S<10?'0'+ S: S ;
			var timer = [D,H,M,S];
              me.time=timer;
		},1000);
	  } 
	})
	return HomeComponent;
})