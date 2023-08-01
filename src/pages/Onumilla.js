import react from 'react';

const noth = require('./assets/onnum_illa.jpg')


export default function Nothing(){
    return(
        <>
        <center>
        <img className='w-auto h-full' src={noth} alt='Nothing'></img>
        </center>
        </>
    )
}