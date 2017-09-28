myApp.service('GameService', function ($http) {
    console.log('in GameService');

    var self = this;

    var diceRoll = 0;
    var marioStrength = 3;
    var samusStrength = 8;
    var zeldaStrength = 6;

    self.marioCount1 = {
        count: 0
    };
    self.marioCount2 = {
        count: 0
    };
    self.marioCount3 = {
        count: 0
    };

    self.zeldaCount1 = {
        count: 0
    };
    self.zeldaCount2 = {
        count: 0
    };
    self.zeldaCount3 = {
        count: 0
    };

    self.samusCount1 = {
        count: 0
    };
    self.samusCount2 = {
        count: 0
    };
    self.samusCount3 = {
        count: 0
    };

    self.incMarioCount1 = function () {
        self.oneToTen();
        if (diceRoll <= marioStrength) {
            self.marioCount1.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.marioCount1);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.marioCount1);
        }
    };
    self.incMarioCount2 = function () {
        self.oneToTen();
        if (diceRoll <= marioStrength) {
            self.marioCount2.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.marioCount2);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.marioCount2);
        }
    };
    self.incMarioCount3 = function () {
        self.oneToTen();
        if (diceRoll <= marioStrength) {
            self.marioCount3.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.marioCount3);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.marioCount3);
        }
    };

    self.incZeldaCount1 = function () {
        self.oneToTen();
        if (diceRoll <= zeldaStrength) {
            self.zeldaCount1.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.zeldaCount1);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.zeldaCount1);
        }
    };
    self.incZeldaCount2 = function () {
        self.oneToTen();
        if (diceRoll <= zeldaStrength) {
            self.zeldaCount2.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.zeldaCount2);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.zeldaCount2);
        }
    };
    self.incZeldaCount3 = function () {
        self.oneToTen();
        if (diceRoll <= zeldaStrength) {
            self.zeldaCount3.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.zeldaCount3);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.zeldaCount3);
        }
    };

    self.incSamusCount1 = function () {
        self.oneToTen();
        if (diceRoll <= samusStrength) {
            self.samusCount1.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.samusCount1);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.samusCount1);
        }
    };
    self.incSamusCount2 = function () {
        self.oneToTen();
        if (diceRoll <= samusStrength) {
            self.samusCount2.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.samusCount2);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.samusCount2);
        }
    };
    self.incSamusCount3 = function () {
        self.oneToTen();
        if (diceRoll <= samusStrength) {
            self.samusCount3.count++;
            console.log('loggin marioCount1. Rolled high enough! -> ', self.samusCount3);
        } else {
            console.log('loggin marioCount1. Rolled to low! -> ', self.samusCount3);
        }
    };

    // random number gen
    self.oneToTen = function () {
        diceRoll = Math.floor((Math.random() * 10) + 1);
    };
    // random number end
});