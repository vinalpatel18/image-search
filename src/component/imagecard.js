import React from 'react'

class ImageCard extends React.Component {

    constructor(props){
        super(props)

        this.state = {spans:0}

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setspan)
        
    }

    setspan = ()=>{
       const height = this.imageRef.current.clientHeight;
       const span = Math.ceil(height/10+1);
       this.setState({spans: span})
        }

    //this.setspan()

    render(){

        const {description, urls} = this.props.image;
        return(
        <div style ={{gridRowEnd:`span ${this.state.spans}`}}>
            <img 
                ref ={this.imageRef}
                alt = {description}
                src = {urls.regular}/>                
        </div>)
    }
}

export default ImageCard