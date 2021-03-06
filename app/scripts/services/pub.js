angular.module('OffreApp')

.factory('PubFactory', ['API', '$resource', function(API, $resource) {
  return $resource(API.SPOT_LIST, {}, {
      getSpotList: {method: 'GET', params: {}, isArray: true}
  });
}])

.factory('GridFactory', ['API', '$resource', function(API, $resource) {
	return $resource(API.JSON_TEST, {}, {
		getGridJsonTest: {method: 'GET', params: {}, isArray: false}
	});
}])

.factory('PeriodFactory', ['API', '$resource', function(API, $resource) {
  return $resource(API.GRID, {}, {
      getGrid: {method: 'GET', params: {}, isArray: false}
  });
}]);