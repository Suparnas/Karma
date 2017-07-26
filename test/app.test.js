// describe('http', function() {
//
//   beforeEach(module('factories_2'));
//
//   var chimp;
//   var $httpBackend;
//
//   beforeEach(inject(function(_chimp_, _$httpBackend_) {
//     chimp = _chimp_;
//     $httpBackend = _$httpBackend_;
//   }));
//
//   describe('when sending a message', function() {
//     beforeEach(function() {
//       $httpBackend.expectPOST('http://chimps.org/messages', {message: 'Ook.'})
//       .respond(200, {message: 'Ook.', id: 0});
//
//       chimp.sendMessage();
//       $httpBackend.flush();
//     });
//
//     it('should send an HTTP POST request', function() {
//       $httpBackend.verifyNoOutstandingExpectation();
//       $httpBackend.verifyNoOutstandingRequest();
//     });
//   });
// });
describe('Filters', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    describe('reverse',function(){ //describe your app name
        var reverse;
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));
        it('Should reverse a string', function(){  //write tests
            expect(reverse('rahil')).toBe('lihar'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            //expect(reverse('jam')).toBe('oops'); // this test should fail
        });
    });
});
