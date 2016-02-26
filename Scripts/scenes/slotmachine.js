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
            this._SpinButton = new objects.Button("SpinButton", 323, 306, false);
            this.addChild(this._SpinButton);
            this._SpinButton.on("click", this._SpinButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
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
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map