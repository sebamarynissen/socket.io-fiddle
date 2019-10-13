'use strict';

(function() {

  // Set to true and it works as expected.
  const force = false;

  let one = io.connect('/one', {
  	'force new connection': force,
  	query: {
  		param: 'one'
  	}
  });

  let two = io.connect('/two', {
  	'force new connection': force,
  	query: {
  		param: 'two'
  	}
  });

})();
