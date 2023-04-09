import {useState, useEffect, useRef} from 'react';
import {RandInt} from '../modules/Calculators';


class Globe{
    index: number;
    posX: number;
    posY: number;
    maxLifeSpan: number;
    lifeSpan: number;
    randomSize: number;
    speed: number;
    globe: string;
    constructor(index: number, width: number, height: number) {
        this.index = index;
        this.posX = RandInt(width*0.8)+width*0.1;
        this.posY = -50-RandInt(150);
        this.maxLifeSpan = RandInt(height)+200;
        this.lifeSpan = 0;
        this.randomSize = 1+Math.random();
        this.speed = RandInt(3)+1;

        let globes = ["🌍", "🌎", "🌏"];
        this.globe = globes[RandInt(3)];
      }

      move(width: number, height: number){
        if (this.lifeSpan < this.maxLifeSpan){
            this.posY += this.speed
            this.lifeSpan += this.speed
        }
        else{
            this.posX = RandInt(width*0.8)+width*0.1;
            this.posY = -50-RandInt(150);
            this.maxLifeSpan = RandInt(height)+200;
            this.lifeSpan = 0;
            this.randomSize = 1+Math.random();
            this.speed = RandInt(3)+1;

            
            let globes = ["🌍", "🌎", "🌏"];
            this.globe = globes[RandInt(3)];
        }
      }

      getGlobe(){
        let opacity = (this.maxLifeSpan-this.lifeSpan)/this.maxLifeSpan*100+"%";
        const styles = {
            position: "absolute",
            top: this.posY,
            left: this.posX,
            opacity: opacity,
            fontSize: (20*this.randomSize)
          } as any;
    
        return (
            <p key={this.index} style={styles}>{this.globe}</p>
        )
      }
}

function FallingObject(props: any){
    const objects = useRef(createObjects())
    const [foo, setFoo] = useState(false);


    function createObjects(){
        let objs = [];
        for (let i = 0; i < 40; i++){
            objs.push(new Globe(i, props.width, props.height))
        }
        
        return objs;
    }

    function handleSizeChange(){
        for (let i = 0; i < 40; i++){
            objects.current[i].posX = 0
            objects.current[i].lifeSpan = objects.current[i].maxLifeSpan - 1;
        }
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleSizeChange);
        window.addEventListener('orientationchange', handleSizeChange);
        return () => {
            window.removeEventListener('resize', handleSizeChange);
            window.removeEventListener('orientationchange', handleSizeChange);
        }
    }, []);

    useEffect(() => {
        let interval = null as any;

        interval = setInterval(() => {
            for (let i = 0; i < 40; i++){
                objects.current[i].move(props.width, props.height);
            }
            
            setFoo(!foo);
        }, 10); 

        return () => {
            clearInterval(interval);
        };
    }, [foo]);

    let flags = [];
    for (let i = 0; i < 40; i++){
        flags.push(objects.current[i].getGlobe())
    }

    return (
        <div>
            {flags}
        </div>
    );
 }

 export default FallingObject;