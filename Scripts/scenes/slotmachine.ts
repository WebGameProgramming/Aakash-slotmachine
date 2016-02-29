// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _Bet100Button: objects.Button;
        private _Bet150Button: objects.Button;
        private _Bet500Button: objects.Button;
        private _SpinButton: objects.Button;
        private _reels:createjs.Bitmap[];

        private _grapes = 0;
        private _bananas = 0;
        private _oranges = 0;
        private _cherries = 0;
        private _bars = 0;
        private _bells = 0;
        private _sevens = 0;
        private _blanks = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._reels=new Array<createjs.Bitmap>();
            for(var reel:number;reel<3;reel++){
                
                this._reels[reel]= new createjs.Bitmap(assets.getResult("Blank"));
            }
            
                
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
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        private _spinReels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Banana";
                        this._bananas++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Cherry";
                        this._cherries++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Bar";
                        this._bars++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Bell";
                        this._bells++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this._sevens++;
                        break;
                }
            }
            return betLine;
        }
        //EVENT HANDLERS ++++++++++++++++++++
        private _Bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 100 credited");

        }

        private _Bet150ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 150 credited");

        }

        private _Bet500ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 500 credited");
        }

        private _SpinButtonClick(event: createjs.MouseEvent): void {
           // console.log("Spin the reels");
            var reel:string[]=this._spinReels();
            this._reels[0].image= assets.getResult(reel[0]);
            this._reels[0].x=224;
            this._reels[0].y=173;
            this.addChild(this._reels[0]);
            // console.log(this._reels());
           console.log(this.numChildren);
        }
    }
}