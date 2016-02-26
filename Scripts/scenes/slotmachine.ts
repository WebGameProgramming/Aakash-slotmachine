// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       private _backgroundImage: createjs.Bitmap;
       private _Bet100Button: objects.Button;
       private _Bet150Button: objects.Button;
       private _Bet500Button: objects.Button;
       private _SpinButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {    
            // add backgroundimage to the scene
            
            this._backgroundImage= new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            
            // adding bet 100 button to the scene
            
            this._Bet100Button= new objects.Button("Bet100Button",175,306,false);
            this.addChild(this._Bet100Button);
            this._Bet100Button.on("click",this._Bet100ButtonClick,this );
            
            
            // adding bet 150 button to the scene
            
            this._Bet150Button= new objects.Button("Bet150Button",249,306,false);
            this.addChild(this._Bet150Button);
            this._Bet150Button.on("click",this._Bet150ButtonClick,this );
            
            
            // adding bet 500 button to the scene
            
            this._Bet500Button= new objects.Button("Bet500Button",323,306,false);
            this.addChild(this._Bet500Button);
            this._Bet500Button.on("click",this._Bet500ButtonClick,this );
            
            
            // adding spin button to the scene
            
            this._SpinButton= new objects.Button("SpinButton",323,306,false);
            this.addChild(this._SpinButton);
            this._SpinButton.on("click",this._SpinButtonClick,this );
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _Bet100ButtonClick(event:createjs.MouseEvent):void{
            console.log("bet 100 credited");
            
        }
        
                private _Bet150ButtonClick(event:createjs.MouseEvent):void{
            console.log("bet 150 credited");
            
        }
        
                private _Bet500ButtonClick(event:createjs.MouseEvent):void{
            console.log("bet 500 credited");
            
        }
        
        private _SpinButtonClick(event:createjs.MouseEvent):void{
            console.log("Spin the reels");
            
        }
    }
    
    
}