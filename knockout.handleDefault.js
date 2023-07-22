ko.handleDefault = function(v, d) {
	if(v == undefined && d != undefined) {
		return ko.isObservable(d) ? d : ko.observable(d);
	} else if(v == undefined) {
		return ko.observable();
	} else {
		return ko.isObservable(v) ? v : ko.observable(v);
	}
}

ko.isObservableArray = function(a) {
	return ko.isObservable(a) && !(a.destroyAll === undefined);
}

ko.handleDefaultArray = function(v, d) {
   var a = ko.observableArray();
   if(v == undefined && d != undefined) {
	   if( ko.isObservableArray(d))
		   return d
	   ko.utils.arrayPushAll(a, d);
   } else if(v != undefined) {
	   if(ko.isObservableArray(v)) {
		   return v;
	   }
	   ko.utils.arrayPushAll(a, v);
   }
   return a;
}
