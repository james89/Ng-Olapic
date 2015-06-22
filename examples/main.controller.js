angular
    .module('app', ['olapic'])
    .config(function(OlapicProvider){
        OlapicProvider.setApiKey('cae422548135455c424e5a30c780b9a369f5615761f6b35ca7d6524ddea6c30f')
        OlapicProvider.setClientId('216792');
    })
    .controller('MainController', ['$scope', 'Olapic', function ($scope, Olapic){

        Olapic.getAllMedia().then(function(data){
            console.log(data) 
        });
    

    }]);