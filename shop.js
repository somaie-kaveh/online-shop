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
		currectimage: null,
	},
	methods: {
		showpic: function(pic) {
			const pics = {
				pic1 : './picshop/exam1.jpg',
				pic2 : './picshop/exam2.jpg',
				pic3 : './picshop/exam3.jpg',
				pic4 : './picshop/exam4.jpg',
				pic5 : './picshop/exam5.jpg',
				pic6 : './picshop/exam6.jpg',
			};
			this.currectimage = pics[pic];
		}
	}


})