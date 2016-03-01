// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _Bet100Button: objects.Button;
        private _Bet150Button: objects.Button;
        private _Bet500Button: objects.Button;
        private _SpinButton: objects.Button;
        private _reels: createjs.Bitmap[];
        private _jackpotText: objects.Label;
        private _creditText: objects.Label;
        private _betText: objects.Label;
        private _resultText: objects.Label;
        private playerMoney: number;
        private winnings: number;
        private jackpot: number;
        private playerBet: number = 0;

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
            
            //reset the game values
            
            this._resetAll();
            
                
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
            
            // add Jackpot text to the scene
            
            this._jackpotText = new objects.Label(
                this.jackpot.toString(),
                "15px Times New Roman",
                "#000000",
                347, 98, false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);    
            
            //----------------------------------------------------------------------------------------
      
            // add Credit text to the scene
            
            this._creditText = new objects.Label(
                this.playerMoney.toString(),
                "15px Times New Roman",
                "#000000",
                269, 259, false);
            this._creditText.textAlign = "right";
            this.addChild(this._creditText);   
            
            //---------------------------------------------------------
      
            // add bet text to the scene
            
            this._betText = new objects.Label(
                this.playerBet.toString(),
                "15px Times New Roman",
                "#000000",
                348, 259, false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);   
            
            //----------------------------------------------------------
       
       
            // add Jackpot text to the scene
            
            this._resultText = new objects.Label(
                this.winnings.toString(),
                "15px Times New Roman",
                "#000000",
                426, 259, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);   
            
            //-----------------------------------------------------------     
            
            //Initializa of Array
            
            this._initializeBitmapArray();    
                
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

        private _resetAll() {

            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
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
                        betLine[spin] = "Blank";
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

        private _determineWinnings(): void {
            /* This function calculates the player's winnings, if any */
            
                if (this._blanks == 0) {
                    if (this._grapes == 3) {
                        this.winnings = this.playerBet * 10;
                    }
                    else if (this._bananas == 3) {
                        this.winnings = this.playerBet * 20;
                    }
                    else if (this._oranges == 3) {
                        this.winnings = this.playerBet * 30;
                    }
                    else if (this._cherries == 3) {
                        this.winnings = this.playerBet * 40;
                    }
                    else if (this._bars == 3) {
                        this.winnings = this.playerBet * 50;
                    }
                    else if (this._bells == 3) {
                        this.winnings = this.playerBet * 75;
                    }
                    else if (this._sevens == 3) {
                        this.winnings = this.playerBet * 100;
                    }
                    else if (this._grapes == 2) {
                        this.winnings = this.playerBet * 2;
                    }
                    else if (this._bananas == 2) {
                        this.winnings = this.playerBet * 2;
                    }
                    else if (this._oranges == 2) {
                        this.winnings = this.playerBet * 3;
                    }
                    else if (this._cherries == 2) {
                        this.winnings = this.playerBet * 4;
                    }
                    else if (this._bars == 2) {
                        this.winnings = this.playerBet * 5;
                    }
                    else if (this._bells == 2) {
                        this.winnings = this.playerBet * 10;
                    }
                    else if (this._sevens == 2) {
                        this.winnings = this.playerBet * 20;
                    }
                    else if (this._sevens == 1) {
                        this.winnings = this.playerBet * 5;
                    }
                    else {
                        this.winnings = this.playerBet * 1;
                    }
                    console.log("win");

                }
                else {
                    console.log("Loss");

                }
                this._resultText.text = this.winnings.toString();
                this.playerMoney += this.winnings;
                this._creditText.text = this.playerMoney.toString();
                this._resetFrutiTally();
            }


        private _resetFrutiTally():void{
            
             this._grapes = 0;
          this._bananas = 0;
          this._oranges = 0;
          this._cherries = 0;
          this._bars = 0;
          this._bells = 0;
          this._sevens = 0;
          this._blanks = 0;
        
        }

        private _initializeBitmapArray(): void {
            // Initialize the arrays
            this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 3; reel++) {

                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 223 + (reel * 78);
                this._reels[reel].y = 173;
                this.addChild(this._reels[reel]);
            }

        }

        private _placeBet(playerBet: number) {

            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();

            }

        }
    
    
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _Bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 100 credited");
            this._placeBet(100);

        }

        private _Bet150ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 150 credited");
            this._placeBet(150);
        }

        private _Bet500ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 500 credited");
            this._placeBet(500);
        }

        private _SpinButtonClick(event: createjs.MouseEvent): void {


            if (this.playerBet > 0) {
                var bitmap: string[] = this._spinReels();

                for (var reel: number = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }
                this._determineWinnings();
                this.playerBet = 0;
                //Resets player bet to 0
                this._betText.text = this.playerBet.toString();
            }

        }
    }
}