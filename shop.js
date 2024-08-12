Vue.component('div-box', {
	template:`
		<div class="infdress">
			<strong>size:</strong>
			<slot></slot>
			<strong>height:</strong>
			<slot></slot>
		</div>
	`
})
var shop = new Vue({
	el:'#shopclothe',
	data: {
		pics: [
			{id: 0, source: './picshop/exam0.jpg', size: 'm', height: '120', price: '80'},
			{id: 1, source: './picshop/exam1.jpg', size: 'xl', height: '100', price: '170'},
			{id: 2, source: './picshop/exam2.jpg', size: 'm', height: '120', price: '70'},
			{id: 3, source: './picshop/exam3.jpg', size: 'l', height: '100', price: '120'},
			{id: 4, source: './picshop/exam4.jpg', size: 'xl', height: '140', price: '130'},
			{id: 5, source: './picshop/exam5.jpg', size: 's', height: '90', price: '200'},
		],
		currectimage: null,
	},
	methods: {
		showpic: function(env) {
			this.currectimage = `./picshop/exam${env}.jpg`;
		}
	}


})