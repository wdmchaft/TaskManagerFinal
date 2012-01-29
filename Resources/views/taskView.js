var TaskView = View.extend({
    init: function(win, controller) {
        this._super(win, controller);
        this.layout();
    },

    layout: function() {
		this.win.title = 'Your tasks';
		this.win.backgroundImage = '/images/bg.jpg';
		
		var btnAddTask = Ti.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.ADD
		});
		
		var btnLogout = Ti.UI.createButton({
			title: "Log Out"
		});
		
		btnLogout.addEventListener('click', loginController.logout);
		btnAddTask.addEventListener('click', this.controller.showAddTask);
		this.win.setLeftNavButton(btnAddTask);
		this.win.setRightNavButton(btnLogout);
    }, 
    
    loadTasks: function()	{
    	var taskTable = Titanium.UI.createTableView({
			backgroundImage : '/images/bg.jpg'
		});
		
		this.controller.getTasks(function(tasks)	{
			taskTable.setData(tasks);
		});
		
		taskTable.addEventListener('click', this.controller.showDetail);
		this.win.add(taskTable);

    }
});
