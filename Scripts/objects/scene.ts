module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        //proctected  instance variables
        protected _blackBackground: createjs.Bitmap;
        
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update():void {
            
        }
        
        // Setup background
        
        protected _setupBackground(background:string):void{
            
            this._blackBackground= new createjs.Bitmap(assets.getResult(background));
            this.addChild(this._blackBackground);
        }
        //fadeIn method
        
        protected _fadeIn(transitionTime:number):void{
            createjs.Tween.get(this._blackBackground).to({alpha:0},transitionTime, createjs.Ease.getPowInOut(2));
        }
        
        //fadeOut method
        
        protected _fadeOut(transitionTime:number,callback:any):void{
            this._blackBackground.alpha=0;
            createjs.Tween.get(this._blackBackground).to({alpha:1},transitionTime, createjs.Ease.getPowInOut(2)).call(callback);
    }
    }
}