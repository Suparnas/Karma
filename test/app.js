// angular.module('factories_2', [])
// .factory('chimp', ['$http', function($http) {
//   return {
//     sendMessage: function() {
//       $http.post('http://chimps.org/messages', {message: 'Ook.'});
//     }
//   };
// }]);



angular.module('MyApp', [])
.filter('reverse',[function(){
    return function(string){
     return string.split('').reverse().join('');
       //return reverse().join('').string.split('');
    }
}])
