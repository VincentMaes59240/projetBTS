/*var temperature;
var humidity;
var floorHumidity;
var lux;

function start() {
  var myDemoApp = angular.module('MyDemoApp', ['ngConstellation']);
  myDemoApp.controller('MyControllerParent', ['$scope',  'constellationConsumer', function ($scope, constellation) 
  {
    constellation.initializeClient("http://localhost:8088", "dd94709528bb1c83d08f3088d4043f4742891f4f", "admin");
    constellation.onConnectionStateChanged(function (change) 
    {
      if (change.newState === $.signalR.connectionState.connected) 
      {
        constellation.registerStateObjectLink("*", "myESPPackage", "Temperature", "*", function (so)
        {
          $scope.$apply(function() 
          {
            $temperature = $scope.temperature = {'typeCapteur': 'Temperature', 'Value': so};
          });
        });
        constellation.registerStateObjectLink("*", "myESPPackage", "FloorHumidity", "*", function (so)
        {
          $scope.$apply(function()
          {
            $floorHumidity = $scope.floorHumidity = {'typeCapteur': 'FloorHumidity', 'Value': so};
          });
        });
        constellation.registerStateObjectLink("*", "myESPPackage", "Lux", "*", function (so) 
        {
          $scope.$apply(function() 
          {
            $lux = $scope.lux = {'typeCapteur': 'Lux', 'Value': so};
          });
        });
        constellation.registerStateObjectLink("*", "myESPPackage", "Humidity", "*", function (so) 
        {
          $scope.$apply(function()
          {
            $humidity = $scope.humidity = {'typeCapteur': 'Humidity', 'Value': so};
          });
        });
        console.log("Conncté !");                
      var Datas = [
          ["Temperature", temperature],
          ["FloorHumidity", floorHumidity],
          ["Lux", lux],
          ["Humidity", humidity]
        ];
  
      }
    });
    constellation.connect();
  }]);
} 
*/