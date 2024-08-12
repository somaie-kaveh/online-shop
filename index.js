// var srd = new Vue({
// 	el: '#elem',
// 	data : { seen: true }
// })
// srd.seen = false;

var click = new Vue({
	el: '#dif',
	data: {
		massage : 'hi peaple'
	},
		methods: {
			change: function() {
				const bol = 'hi guys';
				this.massage = bol;
				document.getElementById('msg').style.fontWeight = 'bold';
			}
		}
	})
	var mod = new Vue({
		el: '#mood',
		data: {
			name: 'please inter your name'
		}
	})
	var lis = new Vue({
		el: '#list',
		data: {
			listy: [
				{ text: 'tomato' },
				{ text: 'apricot' },
				{ text: 'felafel' }
			]
		}
	})
	lis.listy.push({ text: 'oreng' })
	lis.listy.push({ text: 'bery' })



	Vue.component( 'todo-list', {
		props: ['todo'],
		template: '<li> {{ todo.text }} </li>'
	})
	var app = new Vue({
		el:'#tod',
		data: {
			shoplist: [
				{id: 0, text: 'potato' },
				{id: 1, text: 'chees' },
				{id: 2, text: 'milk' }
			],
			rawHtml: '<span style="color: red">This should be red.</span>',
		}
	})
	
	var comple = new Vue({
		el:'#compl',
		data: {
			file: 'hi every body'
		},
		computed: {
			reversfile: function() {
				return this.file.split('').reverse().join('')
			}
		}
	})
	 
	var fl = new Vue({
		el:'#fname',
		data: {
			firstname: 'some',
			lastname: 'kam',
		},
		computed: {
			// fullname: function() {
			
			// 	const lft = this.firstname+' '+ this.lastname ;
			// 	return  'your name is:  ' + lft
			// }
			
		
		fullname: {
		get: function() {
			return  'your name is:  ' + this.firstname+' '+ this.lastname 
		},
		set: function (newval) {
			var nams = newval.split(' ')
			this.firstname = 'your firstname is:  ' + nams[0],
			this.lastname = nams[nams.length-1]
		}
	}
	}
	})
	//  var fl = new Vue({
	// 	el: '#fname',
	// 	data: {
	// 		firstname: 'somi',
	// 		lastname: 'kami',
	// 		fullname: 'somi kami'
	// 	},
	// 	watch: {
	// 		firstname: function(vfl) {
	// 			this.fullname = vfl +' '+ this.lastname
	// 		},
	// 		lastname: function(vfl) {
	// 			this.fullname = this.firstname+ ' '+ vfl
	// 		}

	// 	}
	//  })

	var tesy = new Vue({
		el: '#test',
		data: {
			question: true,

		}
	})
	var random = new Vue({
		el:'#math',
		// data: {
		// 	Math.random(): true
		// },
	
	})
	var log = new Vue({
		el:'#lagin',
		data: {
			loginType: 'username'
		}
	})
	var listSchool = new Vue({
		el:'#mylist',
		data: {
			items: [
				{schoollist: 'pen'},
				{schoollist: 'notebook'},
				{schoollist: 'pencil'},
				{schoollist: 'rubber'},
				{schoollist: 'sharper'}
			],
			number:[1, 3, 7, 6, 18, 13, 12, 19, 21]
		},
		computed: {
			evenNumber: function() {
				return this.number.filter( function(number) {
					return number % 2 === 0
				})
			}
		}

		// data: {
		// 	items: {
		// 		first: 'pen',
		// 		scond: 'pencil',
		// 		third: 'notebook',
		// 		forth: 'rubber'
		// 	}
		// }

	})
	listSchool.items.push({ schoollist: 'backpack'});
	listSchool.items.pop();
	listSchool.items.unshift({ schoollist: 'crayon'});
	listSchool.items.shift();
	listSchool.items.splice( 2,0, {schoollist: 'kjhg'}, {schoollist: 'jkjfh'});
	listSchool.items.sort();


	var number2 = new Vue({
		el:'#num2',
		data: {
			sets:[[1, 3, 7, 5, 12],[4,3,8,9,1,32]]
		},
		methods: {
			even: function(numbers) {
				console.log(numbers);
				 return numbers.filter(function(number){
					return number % 2 ===0
				 });
			}
		}
	})

	var to = new Vue({
		el:'#tod2',
		data: {
			todos: [1, 3, 4, 5, 6, 7, 9, 10],
		},
	})
	var coun3 = new Vue({
		el:'#coun1',
		data: {
			counter: 0,
			name: 'Vue.js',
		},
		methods: {
			greet: function(sdf) {
				
				if (sdf) {
					alert(sdf.target.tagName)
				}
				alert('Hello ' + this.name + '!');
			},
			warm: function(note, dsa) {
				if(dsa){
					dsa.preventDefault()
				}
				alert(note)
			}

		}
	})
	
	var sm1 = new Vue({
		
		el:'#smms',
		data:{
			sms1:'',
			multi:'',
			checkbox: true,
			mohi: [],
			coffeshope: '',
			selected:'',
			selected1: 'A',
			options: [
				{text:'hi', value:'A'},
				{text:'by', value:'B'},
				{text:'vay', value:'V'},
				{text:'day', value:'D'},
				{text:'my', value:'M'},
			],
			one1:'',
			
		}

	})
// when checked:
// vm.toggle === 'yes'
// // when unchecked:
// vm.toggle === 'no'
// typeof vm.one1
// vm.one1.number
// Vue.component('button-counter', {
// 	data: function() {
// 		return {
// 			count:0
// 	}
// },
// template:'<button v-on:click="count++"> you click me {{count}}</button>'
// })
// Define a new component called button-counter
Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	
	 template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({ el: '#components-demo' })


// Vue.component('blog-post', {
// 	props: ['title'],
// 	template: '<h2>{{ title }}</h2>'
// })
Vue.component('blog-post', {
	props: ['post'],
	template: `
	<div class="blog-post">
	<h3>{{ post.title }}</h3>
	<button v-on:click="$emit('large-text', 0.1)"> Large text </button>
	</div>
	`
})

new Vue({
	el:'#test-post',
	data: {
		posts: [
			{id: 1, title: 'hello every body'},
			{id: 2, title: 'my name is:'},
			{id: 3, title: 'whats your name?'}
		],
		postFontSize: {
			1: 1,
			2: 1,
			3: 1,
		},
		
	}
})
// Vue.component('blog-post',{
// 	prop: ['post'],
// 	template: `<div class="blog-post">
// 	<h2>{{ title }}</h2>
// 	<div v-html="content"></div> `
// })
var inputt = new Vue({
	el:'#inpu',
	data: {
		searchtext:''
	}
})
Vue.component('coust-input', {
	props: ['value'],
	template: `
		<input
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)">
		`
})

Vue.component('alert-box', {
	template:`
		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot></slot>
		</div>
	`
})

new Vue({
	el:'#inpu2',
	data: {
		searchtext:''
	}
})
