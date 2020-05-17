import { LightningElement,track} from 'lwc';

export default class AreaOFShapes extends LightningElement 
{
    @track currentoputput;
     sides;
     height;
     width;
     digonal1;
     diagonal2;

     squarehandler(event)
     {
         this.sides=event.target.value;
     }
     rectangleheighthandler(event)
     {
         this.height=event.target.value;
         
     }
     rectanglewidthhamdler(event)
     {
         this.width=event.target.value;
     }
     diagonal1hamdler(event)
     {
         this.diagonal1=event.target.value;
     }
     diagonal2hamdler(event)
     {
         this.diagonal2=event.target.value;
     }
     areaOfsquare()
     {   const i=parseInt(this.sides);
         this.currentoputput='Area of a square'+(i*i);
     }
     areaOfrectangle()
     {   const h=parseInt(this.height);
         const w=parseInt(this.width);

         this.currentoputput='Area of a rectangle'+(h*w);

     }
     areaOfrohmbus()
    {   const d1=parseInt(this.diagonal1);
        const d2=parseInt(this.diagonal2);
        this.currentoputput='Area of a rohmbus :'+(d1*d2)/2;
    }
        
}