(function () {
  angular.module('Test-Pokemon').controller('PokemonCollectionController', PokemonCollectionController);
  PokemonCollectionController.$inject = ['$scope', 'PokemonsService', '$state'];
  function PokemonCollectionController($scope, service, $state) {
    service.getData().then(function (response) {
      $scope.pokemonCollection = response;
      $scope.pokemonsData = $scope.pokemonCollection.map(function (pokemonData) {
        return pokemonData.data;
      });
      $scope.collectionLimit = 3;
      $scope.more = function () {
        $scope.collectionLimit +=2;
      };
      });

    $scope.showDetails = function (pokemon) {
      $scope.pokemon = pokemon;
      $scope.moves = $scope.pokemon.moves.length;
    };
  }
})();
