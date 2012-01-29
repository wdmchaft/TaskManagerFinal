// mvc includes
Ti.include("/include/inheritance.js");
Ti.include("/include/mvc.js");

// controller includes
Ti.include("/controllers/loginController.js");
Ti.include("/controllers/taskController.js");
Ti.include("/controllers/addTaskController.js");
Ti.include("controllers/taskDetailController.js");

var loginWin = Ti.UI.createWindow({ exitOnClose : true });
var loginController = new LoginController(loginWin);

var taskWin = Ti.UI.createWindow({ exitOnClose : true });
var taskController = new TaskController(taskWin);

var addTaskView = Ti.UI.createWindow({ exitOnClose : true });
var addTaskController = new AddTaskController(addTaskView);


// a canvas window to add our navigation bar to
var canvas = Ti.UI.createWindow({ exitOnClose : true });

var nav = Titanium.UI.iPhone.createNavigationGroup({
    window:taskWin
});

Ti.App.addEventListener("loggedIn", function() {
	canvas.add(nav);
	canvas.open();	
	
	taskController.view.loadTasks();
});

var taskDetailView, taskDetailController;

Ti.App.addEventListener("changeScreen", function(e)
{
	switch(e.changeTo)
	{
		case 'showTasks':
			taskController.view.loadTasks();
			nav.open(taskWin, { animated : true });
			break;
		case 'addTask':
			nav.open(addTaskView, { animated : true });
			break;
		case 'closeAddTask':
			nav.close(addTaskView, { animated: true });
			break;
		case 'closeTaskDetail':
			nav.close(taskDetailView, { animated: true});
			break;
		case 'loginView':
			nav.close();
			canvas.close();
			loginWin.open({ animated: true });
			break;
		case 'taskDetail':
			Ti.App.selectedTaskID = e.taskID;
			Ti.App.selectedTaskTitle = e.taskTitle;
			taskDetailView = Ti.UI.createWindow({ exitOnClose : true});
			taskDetailController = new TaskDetailController(taskDetailView);
			
			nav.open(taskDetailView, { animated: true });
			break;
			
	}
});

loginWin.open();


