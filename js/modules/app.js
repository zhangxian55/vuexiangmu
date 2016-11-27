define(['modules/home/home', 'modules/list/list', 'modules/product/product','modules/login/login', 'tools/util',''], function (HomeComponent, ListComponent, ProductComponent,loginComponent, Util) {
	Vue.component('home', HomeComponent);
	Vue.component('list', ListComponent);
	Vue.component('product', ProductComponent);
	Vue.component('login', loginComponent);
	var app = new Vue({
		el: '#app',
		data: {
			msg: '爱创课堂',
			view: 'product',
			query: [],
			searchKey: '',
			myKey: ''
		},
		methods: {
			goSearch: function () {
				 location.hash = '#/list/search/' + this.searchKey
				 this.myKey = this.searchKey;
			},
			goBack: function () {
				history.go(-1)
				this.searchKey='';
			},
			gologin:function(){
			 	location.hash='#/login'
			 },
			scroll:function(){
				  console.log('111')
				      var gototop=document.getElementById('gototop')
				      var begin=document.getElementById('begin')
				         begin.style.display='none';  
                   window.onscroll = function() {
 	                   scrollTop = document.documentElement.scrollTop || document.body.scrollTop  
 	                       if(scrollTop>300){
				           return gototop.style.display='block';
				             begin.style.display='none';   
			               }else{
			               	return gototop.style.display='none'; 
			               	       begin.style.display='none';
			               }
 	                    }
 	                    console.log(1)
 	                
		},
			gototop : function(){
		        
　　              window.scrollTo(0,0)
			}
       }
	})

	return app;
})