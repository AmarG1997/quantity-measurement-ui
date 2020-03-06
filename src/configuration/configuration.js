import axios from 'axios';

function configuration(obj1,obj2,obj3){
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

export default configuration;