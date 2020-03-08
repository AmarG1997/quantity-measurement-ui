import axios from 'axios';

export function configuration(obj1,obj2,obj3){
    console.log("move-->",obj1,obj2,obj3); 
    return axios({
        method:'post',
        url:'http://localhost:8080//unitConverter',
        data:{
            value1 : obj1,
            firstUnit : obj2,
            secondUnit : obj3
        }
    })
}

 export function getUnit(){
     console.log("in getUnit")
    return axios.get("http://localhost:8080/getUnit")
}

export function getEnum(unitType){
    console.log("in getEnum functio",unitType);    
    var unit=unitType;
    var url1='http://localhost:8080/'
    var finalUrl=(url1.concat(unit))  
    return axios.get(finalUrl)
}
