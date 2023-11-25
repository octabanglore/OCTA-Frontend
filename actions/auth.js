import axios from "axios";

const auth = async (data) => {
    const response = await axios.post('http://localhost:3000/1111', { data });

    return response;
}

export default auth