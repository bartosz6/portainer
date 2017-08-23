angular.module('portainer.rest')
.factory('Status', ['$resource', 'API_ENDPOINT_STATUS', function StatusFactory($resource, API_ENDPOINT_STATUS) {
  'use strict';
  return $resource(API_ENDPOINT_STATUS, {}, {
    get: { method: 'GET' }
  });
}]);
