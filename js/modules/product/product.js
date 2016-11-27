define(['tools/util'], function (Util) {
	var ProductComponent = Vue.extend({
		template: Util.tpl('tpl_product'),
		data: function () {
			return {
			  list:{src:'1.jpg'},
			  product:[
                    {id: 1,  url:parseInt(Math.random()*18+1)+'.jpg'},
					{id: 2,  url:parseInt(Math.random()*18+1)+'.jpg'},
					{id: 3,  url:parseInt(Math.random()*18+1)+'.jpg'},
					{id: 4,  url:parseInt(Math.random()*18+1)+'.jpg'}
			  ] 
			}
		},
		methods:{
            tuozhuai:function(){		
		var circlelis = document.querySelectorAll(".circles li");
		var slider3= document.getElementById('slider3');
		window.mySwipe = Swipe(slider3,{
		  startSlide: 0,
		  speed: 500,
		  auto: 0,
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
		},
		created: function () {
		      var me = this;
			   var hash = location.hash;
		        hash = hash.slice(1);
		        hash = hash.replace(/^\//, '');
		        hash = hash.split('/');
		        if(hash.length==2){
		     	  var num=parseInt(hash[1]);
		     	   num = num > 10 ? num%10 : num;
		        }else{
                   	var num=1;
		        }
			Util.ajax('data/product/'+ num +'.json', function (res) {
				if (res && res.errno === 0) {
					me.list = res.data;
				}
			})
		}
	})
	return ProductComponent;
})