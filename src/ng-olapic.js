(function(){

    angular
        .module('olapic', [])
        .provider('Olapic', function() {

            /* 
                Basic settings required to call Olapic API 
            */
            var settings = {
                apiKey: null,
                clientId: null,
                baseUrl: 'https://z2photorankapi-a.akamaihd.net/'
            };
            
            this.setApiKey = function(apiKey) {
                settings.apiKey = apiKey;
            }

            this.setClientId = function(clientId) {
                settings.clientId = clientId;
            }


            /* 
                Olapic API methods
            */

           this.$get = ['$q', '$http', function($q, $http) {

                var olapicService = {

                }

                return olapicService;
           }];

        });




})();