import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState } from "react"



function Mainpage() {


  const array = [
    <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan 1</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,

    <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,
    <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,
    <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan 4</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,
    <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan5</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,
     <div className='col' style={{margin:"25px"}}>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg05XuVUZneivxGAncrK2bRfMkhKJzgSKeWQ&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>Mohan 6</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's Some quick example text to build on the card title and make up the
            bulk of the card's content content.
          </Card.Text>


        </Card.Body>
      </Card>
    </div>,





  ]
  const [state, setState] = useState(array.slice(0, 3))
  const handleR = () => {
    setState(array.slice(3))
  }
  const handleL = () => {
    setState(array.slice(0, 3))
  }
  return (

    <div className='row'style={{width:"100%"}} >
      <div >     <h1 >Parents Talk</h1></div>
     <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
     <button onClick={handleL} style={{textAlign: 'right'}}>Go</button>
     <div style={{display:"flex" ,justifyContent:"space-between"}}> {state}</div>
      <button onClick={handleR} style={{textAlign: 'left'}}>Next</button>
     </div> 
    </div>

  );
}

export default Mainpage;