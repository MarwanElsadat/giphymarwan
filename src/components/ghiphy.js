import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Button from 'react-bootstrap/Button'
import {Nav, Form, FormControl, Container, Navbar} from 'react-bootstrap'
import {useState} from 'react'

// use @giphy/js-fetch-api to fetch gifs
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)

const Giphy = () => {

    
    const gf = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
    // fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
    const[value,setValue]=useState('')
    const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })
    const fetchSearchGifs = (offset) => gf.search(value, { offset, sort: 'relevant', lang: 'en', limit: 10, type: 'stickers' })
    const[show,setShow]=useState(false)
    const[searchgf,setSearchGf]=useState('')

    function Searching(props) {
        const searched = props.searched;
        const value = props.value;
        
        if (searched && !(value === "" || value === " ")) {
          return      <Grid className="mx-auto" width={800} columns={3} gutter={6} fetchGifs={fetchSearchGifs} />;
        }else {
            return <Grid className="mx-auto" width={800} columns={3} gutter={6} fetchGifs={fetchGifs} />;
        }
      }



    const handleSubmit = (evt) => {
        evt.preventDefault();

        setShow(true)
    }

    return (
        <div>
            <div
			style={{
				background:
					'white',

				top: '0',
				left: '0',
				zIndex: '1',
				position: 'sticky',
				width: '100%',
				height:'80px'
			}}
		>
				<Navbar>

					<Navbar.Brand
						onClick={() => {

						}}
						style={{ color: '#5ca9fb', width: '15%' , paddingLeft:'5%'}}
					>
						 <h4 style = {{fontSize: '200%',fontWeight: '1000',  paddingTop:'2%',paddingLeft:'2%'}}>FATURA</h4>
					</Navbar.Brand>

					<Nav
						className='justify-content-end'
						style={{
							paddingLeft: '30%',
							width: '80%',
							height: '80%',
						}}
					>
						
                        <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={e => {
            setValue(e.target.value);
            setShow(true);
          }}
        //   onSubmit={handleSubmit}
      />
      <Button variant="outline-primary">Search</Button>
    </Form>
               	          </Nav>

        </Navbar>        
    </div>

        <div className="mx-auto" style={{marginTop:'5%'}}>
     <Searching searched={show} value={value}/>
         </div>
        
        </div>
    )


}

export default Giphy

//created by Marwan Elsadat