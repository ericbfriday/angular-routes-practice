myApp.controller('MarioController', function (GameService) {
    console.log('in Mario controller');
    
    var vm = this;

    vm.marioCount1 = GameService.marioCount1;
    vm.marioCount2 = GameService.marioCount2;
    vm.marioCount3 = GameService.marioCount3;

    vm.marioClickButton1 = function () {
        console.log('log in marioClickButton1');
        GameService.incMarioCount1();
        // console.log('log in marioClickButton1... clicked! ->', vm.marioCount1);
    };
    vm.marioClickButton2 = function () {
        console.log('log in marioClickButton2');
        GameService.incMarioCount2();
    };
    vm.marioClickButton3 = function () {
        console.log('log in marioClickButton3');
        GameService.incMarioCount3();
    };
});