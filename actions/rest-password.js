import axios from "axios";

const resetpassword = async (data) => {
    const response = await axios.post('http://localhost:8080/api/v1/authenticate/userresetpassword', { data });

    return response;
}

export default resetpassword