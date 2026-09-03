const Weather = () => {
    let temp = 15;
    if (temp < 15)
         {
        return <h1>it's cold ouside!</h1>
    }
    else if (temp <= 15 && temp >=25)
        {
        return <h1>it's nice outside</h1>
    }
    else(temp > 25)
    {
        return <h1>it's hot outside!</h1>
    }
}

export default Weather