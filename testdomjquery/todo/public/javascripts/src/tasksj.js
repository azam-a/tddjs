var jGetTasks = function() {
    jCallService({method: 'GET', url: '/tasks'}, jUpdateTasks);
};

var jCallService = function() {};

var jUpdateTasks = function(status, response) {
	var message = response + ' (status: ' + status + ')';
	$('#message').html(message);
};
