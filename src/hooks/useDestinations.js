const { useState, useEffect } = require("react");
const axios = require('axios');

const useDestinations = () => {

    const [data, useData] = useState();

    const options = {
        method: 'GET',
        url: '/src/data/destinationsData.json',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
            finally {

            }
        }
        fetchData();
    }, [])
};