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

                // promise handler
                var apiService = function(){
                    return {
                        get : function(endpoint){
                            var dfd = $q.defer();
                            $http.get(settings.baseUrl + endpoint + '?auth_token=' + settings.apiKey)
                                .success(function(data){
                                    dfd.resolve(data)
                                })
                                .error(function(reason){
                                    dfd.resolve(reason)
                                });
                            return dfd.promise;
                        }
                    }
                };

                var apiHandler = new apiService();

                var olapicService = {

                    getApiKey: function(){
                        return settings.apiKey;
                    },

                    // Media methods

                    getAllMedia: function(){
                        return apiHandler.get('customers/' + settings.clientId + '/media/recent');
                    },

                    getStreamMedia: function(streamId){
                         return apiHandler.get('customers/'+streamId+'/media/recent');
                    }

                    // Stream methods


                }

                return olapicService;
           }];

        });




})();