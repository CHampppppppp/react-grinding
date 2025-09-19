const Weather = ({temperature}) => {
  if(temperature<15){
    return <p>It's cold outside.</p>
  }else if(temperature>=15 && temperature<25){
    return <p>It's nice outside.</p>
  }else if(temperature>=25){
    return <p>It's hot outside.</p>
  }
  return null

  // return (
  //   <div>
  //     {temperature < 15 && <p>It's cold outside.</p>}
  //     {temperature >= 15 && temperature<25 &&<p>It's nice outside.</p>}
  //     {temperature >= 25 && <p>It's hot outside.</p>}
  //   </div>
  // )
}

export default Weather