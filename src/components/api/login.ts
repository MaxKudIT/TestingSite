import axios from "axios"
import { LoginDto } from "../dto/loginDto"

export const loginApi = async (loginObject: LoginDto) => {
    try
    {
        const data = await axios.post('http://25.61.154.123:8080/auth/login', loginObject);
        return data.data;

        
    }
    catch(err)
    {
        console.log(err);
    }

}