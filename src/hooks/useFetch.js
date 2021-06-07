import {
    useEffect,
    useState
} from "react";

export const useFetch = (ciudad = 'Durango') => {
    const [main, setMain] = useState({});
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudad }&appid=e80c52fafd5568ff8442d60af20cc809&units=metric`)
            .then(resp => resp.json()).then(data => {
                setMain(data.main);
                setWeather(data.weather[0]);
            });
    }, [ciudad]);

    return {
        weather,
        main
    };
}