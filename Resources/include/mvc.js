// requires inheritance.js

var Controller = Class.extend({
    init: function(win)
    {
        this.win = win;
        win.controllerClass = this;
    }
});
var View = Class.extend({
    init: function(win, controller)
    {
        this.win = win;
        this.controller = controller;

        win.viewClass = this;
    }
});
