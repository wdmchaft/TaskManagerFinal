Ti.include("/views/loginView.js");

var LoginController = Controller.extend({
    init: function(win) {
        this._super(win);

        this.view = new LoginView(win, this);
    }
});
