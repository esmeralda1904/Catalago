import axios from  'axios';

export async function api(){
const options={
    method:"GET",
    url:"https://pokeapi.co/api/v2/pokemon/eevee",
    headers:{
        'Content-Type':'application/json'
    }
}
try{
    const respuesta=await axios.request(options);
    console.log(respuesta);
}catch(error){

}
}