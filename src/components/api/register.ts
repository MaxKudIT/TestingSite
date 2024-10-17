import axios from "axios";
import { RegisterDto } from "../dto/registerDto";


export const registerApi = async (registerObject: RegisterDto) => {
    try
    {
        const data = await axios.post('auth/login', registerObject);
        if (data !== null)
        {
            return data;
        }
    }
    catch(err)
    {
        console.log(err);
    }

}