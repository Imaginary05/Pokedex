(function () {
  angular.module('Test-Pokemon').service('PokemonsService', PokemonsService);
  PokemonsService.$inject = ['$q', '$http'];
  function PokemonsService($q, $http) {
    var data = [];
    var fetched;
    this.getData = function () {
      var i
      var promises = [];
      for (i = 1; i < 24; i++) {
        var promise = $http({
            url   : "http://pokeapi.co/api/v1/pokemon/" + i,
            method: 'GET',
            data  : data
        });
        promises.push(promise);
      }
      return $q.all(promises);
    }
  }
})();
