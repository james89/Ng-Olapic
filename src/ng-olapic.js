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


                // refactor promise pattern to something more decoupled
                var olapicService = {

                    getApiKey: function(){
                        return settings.apiKey;
                    },

                    getAllMedia: function(){
                        var dfd = $q.defer();
                        $http.get(settings.baseUrl + 'customers/' + settings.clientId + '/media/recent?auth_token=' + settings.apiKey)
                            .success(function(data){
                                dfd.resolve(data)
                            })
                            .error(function(reason){
                                dfd.resolve(reason)
                            });
                        return dfd.promise;
                    }


                }

                return olapicService;
           }];

        });




})();