import { DestinoV } from "./DestinoV";
import { Subject, BehaviorSubject } from "rxjs";

export class Api{
    [x: string]: any;
    destinos: DestinoV[];
    current: Subject<DestinoV> = new BehaviorSubject<DestinoV>(null);

    constructor(){
        this.destinos = [];
    }
    add(d: DestinoV){
        this.destinos.push(d);
    }
    getAll():DestinoV[]{
        return this.destinos;   
    }
   // getById(id:string):DestinoV{
      //  return this.destinos.filter(function(d){return d.id.toString() == id;})[0];
    //}
    elegir(d: DestinoV){
        this.destinos.forEach(x=> x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }
    subOnChange(fn){
        this.current.subscribe(fn);
    }
}