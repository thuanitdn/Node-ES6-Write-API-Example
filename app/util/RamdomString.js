/**
 * Created by thuan on 5/8/2016.
 */
export default class RamdomString{
    generate(length){
        let s = "";
        while(s.length<length&&length>0){
            let r = Math.random();
            s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
        }
        return s;
    }
}