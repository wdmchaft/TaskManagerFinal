Ti.include("../views/taskDetailView.js");

var TaskDetailController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new TaskDetailView(win, this);
    },
    
    getTaskDetail: function(taskID, callback)
    {
    	var taskRequest = Titanium.Network.createHTTPClient();
		var api_url = 'http://taskapi.heroku.com/users/' + Ti.App.Properties.getString("userID") + '/tasks/' + taskID;
		
		taskRequest.onload = function()	{
			taskDetail = JSON.parse(this.responseText);
			
			callback(taskDetail);
			
		}
		
		taskRequest.open('GET', api_url, true);
		taskRequest.setRequestHeader('Content-Type', 'application/json');
		taskRequest.send();
    },
    
    destroyTask: function()
    {
    	var taskRequest = Titanium.Network.createHTTPClient();
    	var api_url = 'http://taskapi.heroku.com/users/' + Ti.App.Properties.getString("userID") + '/tasks/' + Ti.App.selectedTaskID + '/remove';
    	
    	taskRequest.onload = function()	{
    		alert("Good job! We removed the task from your list.");
			taskController.view.loadTasks();

			Ti.App.fireEvent('changeScreen', { changeTo: 'closeTaskDetail' });
    	}
    	
    	taskRequest.open('GET', api_url);
		taskRequest.setRequestHeader('Content-Type', 'application/json');
    	taskRequest.send({"remove":"task"});
    }
  
});

