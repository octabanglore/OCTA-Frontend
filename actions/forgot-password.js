import axios from "axios";

const forgotpassword = async (data) => {
    const response = await axios.post('http://localhost:3000/1111', { data });

    return response;
}

export default forgotpassword