# Ng-Olapic
Angular service wrapper to connect to the Olapic Photorank API

##Usage
Include Olapic into your angular module. Example:

```javascript
angular.module('app', ['olapic']);
```

Using the service requires basic authentication. All endpoints will require your unique customer API key, some will also require a six digit client ID. 

When injecting olapic into your app, you'll need to pass this data into a config function like so:
```javascript
angular
    .module('app', ['olapic'])
    .config(function(OlapicProvider){
        OlapicProvider.setApiKey('API_TOKEN')
        OlapicProvider.setClientId('CLIENT_ID');
    })
```

You can then inject olapic into a controller to start using the Olapic API methods:
```javascript
app.controller('MainController', ['$scope', 'Olapic', function ($scope, Olapic){
    //example method, return data when promise is fulfilled
    Olapic.getAllMedia().then(function(data){
        console.log(data) 
    });
}]);
```

## Methods
### Media

### Streams
