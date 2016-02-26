var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SlotMachine() {
            _super.call(this);
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bars = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
            // add backgroundimage to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            // adding bet 100 button to the scene
            this._Bet100Button = new objects.Button("Bet100Button", 175, 306, false);
            this.addChild(this._Bet100Button);
            this._Bet100Button.on("click", this._Bet100ButtonClick, this);
            // adding bet 150 button to the scene
            this._Bet150Button = new objects.Button("Bet150Button", 249, 306, false);
            this.addChild(this._Bet150Button);
            this._Bet150Button.on("click", this._Bet150ButtonClick, this);
            // adding bet 500 button to the scene
            this._Bet500Button = new objects.Button("Bet500Button", 323, 306, false);
            this.addChild(this._Bet500Button);
            this._Bet500Button.on("click", this._Bet500ButtonClick, this);
            // adding spin button to the scene
            this._SpinButton = new objects.Button("SpinButton", 399, 306, false);
            this.addChild(this._SpinButton);
            this._SpinButton.on("click", this._SpinButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
        };
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        SlotMachine.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        SlotMachine.prototype._reels = function () {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):
                        betLine[spin] = "blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "Banana";
                        this._bananas++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "Cherry";
                        this._cherries++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "Bar";
                        this._bars++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "Bell";
                        this._bells++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "Seven";
                        this._sevens++;
                        break;
                }
            }
            return betLine;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        SlotMachine.prototype._Bet100ButtonClick = function (event) {
            console.log("bet 100 credited");
        };
        SlotMachine.prototype._Bet150ButtonClick = function (event) {
            console.log("bet 150 credited");
        };
        SlotMachine.prototype._Bet500ButtonClick = function (event) {
            console.log("bet 500 credited");
        };
        SlotMachine.prototype._SpinButtonClick = function (event) {
            console.log("Spin the reels");
            console.log(this._reels());
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map