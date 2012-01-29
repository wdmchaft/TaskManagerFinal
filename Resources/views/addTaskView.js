var AddTaskView = View.extend({
	init : function(win, controller) {

		this._super(win, controller);

		this.layout();
	},
	
	// create the layout
	layout : function() {
		
		this.win.title = 'Add new task';
		this.win.backgroundImage = '/images/bg.jpg';
		
		
		 var txtTitle = Titanium.UI.createTextField({ 
		 	hintText : 'Title',
		 	backgroundImage : '/images/input.png',
			height : '35',
			width : '270', 
			paddingLeft:10,
		 	top:20, 
		 	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
		 });
		 
		 var txtDescription = Titanium.UI.createTextArea({ 
		 	height:120, 
		 	width:'270',
		 	top:100, 
		 	backgroundColor:'transparent',
			backgroundImage : '/images/inputTextfield.png',
			textAlign:'left', 
		});
		 
		 var strDescription = Titanium.UI.createLabel({
			top : 80,
			height : 10,
			text : "Description:",
			width : '80%',
			color : "#333",
			font : {
				fontSize : 12
			}
		});
		
		 var btnAdd = Titanium.UI.createButton({
			title : 'Add Task',
			top : '245',
			height : '50',
			width : '270',
			backgroundImage : '/images/button.png'
		});

		this.win.add(txtTitle);
		this.win.add(strDescription);
		this.win.add(txtDescription);
		this.win.add(btnAdd);		
		
		btnAdd.addEventListener('click', function(e)
		{
			var task = {};
			
			task.title = txtTitle.value;
			task.description = txtDescription.value;
			addTaskController.addTask(e, task);
		});	
	}
})