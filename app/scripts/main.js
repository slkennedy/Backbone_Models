(function(){
	'use strict';

var Items = Backbone.Model.extend ({});

var ItemsCollection = Backbone.Collection.extend ({
	model: Items
});
	//Overall List View
	var CreateListView = Backbone.View.extend ({
		tagName: 'ul',
		className: 'the-list',

		initialize: function (){
			$('body').append(this.el);

			this.listenTo(this.collection, 'add', function(item){
				this.$el.append('<li>' +item.get('name')+ '</li>' + '<button class="delete">' + 'Delete' + '</button>' + '<button class = "done">' +'Done'+ '</button>');
   			});
		},

		events: {
			'remove':'deleteItem'
		},

		deleteItem: function (){
		 	.remove('')
		}

	});

	//Items View
	var CreateItemView = Backbone.View.extend ({ 
		tagName: 'li',
		className: 'the-items',

		initialize: function (){
			$('.the-list').append(this.el);
		}
	});

	//Input View
	var CreateInputView = Backbone.View.extend ({
		tagName: 'input',
		className: 'the-input',
		attributes: {
			type: 'text'
		},

		events: {
			'keyup': 'addItem'
		},

		addItem: function(event){
    		if(event.keyCode === 13){
				var item = this.collection.add({name: this.$el.val()})
			}
		},

		render: function(){
			$('body').prepend(this.el);
		}
	});

	//Glue Code
	$(document).ready(function (){ 
		var collectionItem = new ItemsCollection;
		
		var inputView = new CreateInputView({collection: collectionItem});
		inputView.render();	

		var listView = new CreateListView({collection: collectionItem});
		listView.render ();

		var itemView = new CreateItemView({collection: collectionItem});
		itemView.render();
	});

})();
