import React from 'react'
import {Spinner} from 'react-bootstrap'

const Loaders = () => {
    return (
        <div>
         <Spinner animation= 'grow' role= 'status' size='sm' style= {{width:'200px',
          height:'200px',
          margin: 'auto',
          display:'block',
          justifyContent: 'center',
          textAlign:'center',
          marginTop:'10%'
          }}>
              <span className='sr-only'> Loading</span>
        </Spinner>   
        </div>
    )
}

export default Loaders