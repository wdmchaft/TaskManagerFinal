Ti.include("../views/addTaskView.js");

var AddTaskController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new AddTaskView(win, this);
    },
    
    addTask: function(e, task)
    {
		var addTaskRequest = Titanium.Network.createHTTPClient();
		var requestURL = 'http://taskapi.heroku.com/users/' + Ti.App.userID + '/tasks';
		
		addTaskRequest.open('POST', 'http://taskapi.heroku.com/users/' + Ti.App.Properties.getString("userID") + '/tasks');
		addTaskRequest.setRequestHeader('Content-Type', 'application/json');
		addTaskRequest.onload = function(){
			if(this.responseText != "false")
			{
				alert("Your app has been added succesfully.");
				Ti.App.fireEvent('changeScreen', { changeTo: 'closeAddTask' });
			}
			else
			{
				alert("Oops! Something went wrong. Please try again. All fields are required.");
			}
		}

		// hacky stuff to get this to work..
		var objectString = '{"task":{"title":"' + task.title + '", "description":"' + task.description + '"}}';
		addTaskRequest.send(objectString);
    }
});

