var TaskDetailView = View.extend({
	init : function(win, controller) {

		this._super(win, controller);

		this.layout();
	},
	
	// create the layout
	layout : function() {
		
		this.win.title = "Task Detail";
		this.win.backgroundImage = '/images/bg.jpg';
	
		var lblTitle = Titanium.UI.createLabel({
			top : '50',
			height : '35',
			width : '80%',
			color : "#333",
			font : {
				fontSize : 32
			}
		});
		var lblTitleTitle = Titanium.UI.createLabel({
			top: '20',
			height: '35',
			width: '80%',
			color: "#333",
			text: "Title:",
			font : { fontSize: 14 }
		});
		var lblDescrTitle = Titanium.UI.createLabel({
			top: '100',
			height: '35',
			width: '80%',
			color: "#333",
			text: "Description:",
			font : { fontSize: 14 }
		});
		
		var strDescription = Titanium.UI.createLabel({
			top : '135',
			height : '35',
			width : '80%',
			color : "#333",
			font : {
				fontSize : 18
			}
		});
		
		var btnDestroy = Titanium.UI.createButton({
			title : 'I finished this task!',
			top : '245',
			height : '50',
			width : '270',
			backgroundImage : '/images/button.png'
		});

	
		this.win.add(lblTitleTitle);
		this.win.add(lblTitle);
		this.win.add(lblDescrTitle);
		this.win.add(strDescription);
		this.win.add(btnDestroy);
		this.controller.getTaskDetail(Ti.App.selectedTaskID, function(task)
		{
			lblTitle.text = task.title;
			strDescription.text = task.description;
		});
		
	}
})