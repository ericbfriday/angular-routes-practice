myApp.controller('SamusController', function(GameService) {
    console.log('in Samus controller');

     var vm = this;

     vm.samusCount1 = GameService.samusCount1;
     vm.samusCount2 = GameService.samusCount2;
     vm.samusCount3 = GameService.samusCount3;

     vm.samusClickButton1 = function () {
        console.log('log in samusClickButton1');
        GameService.incSamusCount1();
    };
     vm.samusClickButton2 = function () {
        console.log('log in samusClickButton2');
        GameService.incSamusCount2();
    };
     vm.samusClickButton3 = function () {
        console.log('log in samusClickButton3');
        GameService.incSamusCount3();
    };
 });