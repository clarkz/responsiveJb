var domObjs = function(eles){
	var _elements = eles;
	var self = this;
	
	self.click = function(cb){
		for(var i = 0; i < _elements.length; i++){
			_elements[i].onclick = cb;
		}
		return self;
	};
	
	self.attr = function(key, val){
		if(!_elements || _elements.length <= 0) return val? self: '';
		
		if(!val) return _elements[0].getAttribute(key);
		
		for(var i = 0; i < _elements.length; i++){
			_elements[i].setAttribute(key, val);
		}
		
		return self;
	};

	self.css = function(key, val){
		if(!_elements || _elements.length <= 0) return val? self: '';
		
		if(!val) return _elements[0].style[key];
		
		for(var i = 0; i < _elements.length; i++){
			_elements[i].style[key] = val;
		}
		
		return self;
	};

	self.width = function(){
		if(!_elements || _elements.length <= 0) return '';
		return _elements[0].offsetWidth;
	};
	
	self.height = function(){
		if(!_elements || _elements.length <= 0) return '';
		return _elements[0].offsetHeight;
	};

	self.addClass = function(clsName){
		if(!clsName) return self;
	    var rxp = new RegExp( "\\s?\\b" + clsName + "\\b", "g" );
		for(var i = 0; i < _elements.length; i++){
		    var cn = _elements[i].className;
		    //test for existance
		    if( rxp.test(cn) ) {
		    	continue;
		    }
		    //add a space if the element already has class
		    if( cn != '' ) {
		    	clsName = ' ' + clsName;
		    }
		    _elements[i].className = cn + clsName;
		}
		return self;
	};

	self.removeClass = function(clsName){
		if(!clsName) return self;
	    var rxp = new RegExp( "\\s?\\b" + clsName + "\\b", "g" );
		for(var i = 0; i < _elements.length; i++){
			var cn = _elements[i].className;
			cn = cn.replace( rxp, '' );
			_elements[i].className = cn;
		}
		return self;
	};
};

var query = function(selector){
	if(!selector) return {};
	var elems = null;
	if(typeof(selector) === 'string'){
		elems = document.querySelectorAll(selector);
	}else if(selector.length > 0){	//object
		elems = selector;
	}else{
		elems = [];
		elems.push(selector);
	}
	return new domObjs(elems);
};