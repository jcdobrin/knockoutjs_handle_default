ko.handleDefault = function() {
	for(let arg of arguments) {
		if(arg != undefined) {
			return ko.isObservable(arg) ? arg : ko.observable(arg);
		}
	}
	if(!arguments.length) {
		throw "handleDefault called with no arguments";
	} else {
		throw "handleDefault called with all undefined arguments";
	}
	return ko.observable();
}

ko.isObservableArray = function(a) {
	return ko.isObservable(a) && !(a.destroyAll === undefined);
}

ko.handleDefaultArray = function() {
	for(let arg of arguments) {
		if(arg != undefined) {
			if(ko.isObservableArray(arg)) {
				return arg;
			} else if (Array.isArray(arg)) {
				let arr = ko.observableArray();
				ko.utils.arrayPushAll(arr, arg);
				return arr;
			} else {
				return ko.observableArray([arg]);
			}
		}
	}

	if(!arguments.length) {
		throw "handleDefault called with no arguments";
	} else {
		throw "handleDefault called with all undefined arguments";
	}
	return ko.observableArray();
}

ko.observableCoalesce = ko.handleDefault;
ko.observableArrayCoalesce = ko.handleDefaultArray;