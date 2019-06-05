import React from 'react';
import SearchBar from './search';
import unsplash from '../api/unsplash'
import Imagelist from './imagelist'

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit=async (term)=>{
        console.log(term)
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
        });
        
        this.setState({images: response.data.results})
        console.log(this.state)
    }

    render(){
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                Search for Image of your choice
                <SearchBar onSubmit = {this.onSearchSubmit} />
                <br></br>
               <Imagelist images= {this.state.images}/>
            </div>
        )
    }
}



export default App