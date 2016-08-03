angular.module ('demo', ['vtex.ngCurrencyMask']);

function ListaComprasController($scope) {
    $scope.itens = [];

    $scope.item = {
      precoFinal: function(){
          return this.quantidade * this.precoUnidade;
      }
    }



    $scope.somar = function () {
      $scope.precoTotal = 0;
      $scope.itens.forEach(function (item) {
        $scope.precoTotal += item.precoFinal();
      });

    }

    $scope.adicionar = function (item) {
      $scope.itens.push(angular.copy(item));
      $scope.somar();
    }

}
