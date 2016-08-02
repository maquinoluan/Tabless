angular.module ('demo', ['vtex.ngCurrencyMask']);

function ListaComprasController($scope) {
    $scope.itens = [
        //{produto: 'Leite', quantidade: 2, precoUnidade:'3,80',  comprado: false},
        //{produto: 'Cerveja', quantidade: 12, precoUnidade:'3,99', comprado: false}
    ];
    
    
    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           precoUnidade: $scope.item.precoUnidade,
                           precoFinal: function(){
                               return this.quantidade * this.precoUnidade;
                           },
                           precoTotal: function(){
                                return this.precoFinal;   
                           },
                           comprado: false});
                       
        $scope.item.produto = $scope.item.quantidade = '';
    };
     
    
}