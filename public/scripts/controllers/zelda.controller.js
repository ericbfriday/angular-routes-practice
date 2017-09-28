myApp.controller('ZeldaController', function(GameService) {
    console.log('in Zelda controller');

    var vm = this;

    vm.zeldaCount1 = GameService.zeldaCount1;
    vm.zeldaCount2 = GameService.zeldaCount2;
    vm.zeldaCount3 = GameService.zeldaCount3;

     vm.zeldaClickButton1 = function () {
        console.log('log in zeldaClickButton1');
        GameService.incZeldaCount1();
    };
    vm.zeldaClickButton2 = function () {
        console.log('log in zeldaClickButton2');
        GameService.incZeldaCount2();
    };
    vm.zeldaClickButton3 = function () {
        console.log('log in zeldaClickButton3');
        GameService.incZeldaCount3();
    };
 });