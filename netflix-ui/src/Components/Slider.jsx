import React from 'react'
import CardSlider from './CardSlider'
import styled from 'styled-components'


export default React.memo(function Slider({movies}){
    const getMoviesFromRange=(from,to)=>{
        return movies.slice(from,to);
    }
  return (
    <div>
        <CardSlider title="Trending Now"  data={getMoviesFromRange(0,10)}/>
        <CardSlider title="New Releases"  data={getMoviesFromRange(10,20)}/>
        <CardSlider title="BlockBuster Movies"  data={getMoviesFromRange(20,30)}/>
        <CardSlider title="Popular On Netflix"  data={getMoviesFromRange(30,40)}/>
        <CardSlider title="Action & Thriller"  data={getMoviesFromRange(40,50)}/>
        <CardSlider title="Epics"  data={getMoviesFromRange(50,60)}/>
    </div>
  )
}
)


// export default Slider