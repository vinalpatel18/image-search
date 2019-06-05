import React from 'react'

class SearchBar extends React.Component {
  
    state = {
        term: ''
    }

    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui search'>
                <form className=' ui search-form' onSubmit = {this.onFormSubmit}>
                    <div className= 'ui searchfield'>

                    {/* <label>Search uncontrolled  :</label>
                    // handleing the event by calling function (uncontrooled)
                    <input id='searchiteam' type='text' onChange={this.onInputChange}/>

                    <label>Search uncontrolled</label>
                    // handling event by directly calling inline function  (uncontrolled)
                    <input id='uncontrollered event' type='text' onChange= {event=>console.log(event.target.value)}/> */}

                    <label className='ui label'>Search Image  :</label>
                     {/* handling event (controlled) 
                        here the component is set using state so it will be re rendered */}
                     <input className='ui inputtext' type='text' value = {this.state.term} onChange= {e => this.setState({ term: e.target.value.toUpperCase()})}/>
                    <button className='ui buttonsearch' type='submit'>Search</button>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default SearchBar