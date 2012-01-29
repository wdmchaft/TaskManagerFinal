Ti.include("../views/taskView.js");

var TaskController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new TaskView(win, this);
    },
    
    showAddTask: function(e)
    {
    	Ti.App.fireEvent('changeScreen', { changeTo: 'addTask'});
    },
    
    getTasks: function(callback)
    {
    	var taskRequest = Titanium.Network.createHTTPClient();
		var api_url = 'http://taskapi.heroku.com/users/' + Ti.App.Properties.getString("userID") + '/tasks';
		
		taskRequest.onload = function()	{
    		var response = JSON.parse(this.responseText), 
    		len = response.length,
    		i = 0,
    		t;
			var tasks = [];
			
			for(; i < len; i++)
			{
				task = response[i];
				var newTask = {};
				newTask.rowID = i;
				newTask.title = task.title;
				newTask.description = task.description;
				newTask.id = task.id;
				newTask.hasChild = true;
				
				tasks.push(newTask);
			}
			
			callback(tasks);
			
		}
		
		taskRequest.open('GET', api_url, true);
		taskRequest.setRequestHeader('Content-Type', 'application/json');
		taskRequest.send();
    },
    
    showDetail: function(e)	{
    	Ti.App.fireEvent("changeScreen", {changeTo: "taskDetail", taskID: e.rowData.id, taskTitle: e.rowData.title});
    }
});

