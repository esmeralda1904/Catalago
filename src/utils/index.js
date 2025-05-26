import axios from "axios";

export async function api(departamento) {
    const options = {
        method: 'GET',
        url: `http://localhost:8000/api/notificaciones/${departamento}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const respuesta=await axios.request(options);
        return respuesta.data;
    } catch(error){
        console.error('Error al conectarse a la API', error);
        return [];
    }
}