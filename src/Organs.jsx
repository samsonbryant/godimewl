import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import org1 from "./assets/org1.jpg"
import org2 from "./assets/org2.jpeg"
import org3 from "./assets/org3.jpeg"
import Navbarr from './Navbarr'

function Organs() {
  return (
    <>
    <Navbarr/>
    <div className='orgcard'>
       <Card style={{ width: '18rem',alignItems:"center" }}>
       <Link to="/organ-donate">
         <Card.Img variant="top" src={org1} />
        </Link>
        <Card.Body>
          <Button>Donate</Button>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',alignItems:"center" }}>
       <Link to="/organ-donate">
         <Card.Img variant="top" src={org2} />
        </Link>
        <Card.Body>
          <Button>Donate</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',alignItems:"center" }}>
       <Link>
         <Card.Img variant="top" src={org3} />
        </Link>
        <Card.Body>
          <Button>Donate</Button>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Organs