import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component{
    state = { advice: '' };

    componentDidMount(){
        this.fetchAdvice();
        
        //console.log('Comp did mount');
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const{ advice } = response.data.slip;

            this.setState({ advice });//structuring
            //console.log(advice);


        })
        .catch((error) => {
            console.log(error);

        });

    }

    render(){
        const { advice } = this.state;
        return(
            //<h1>{advice}</h1>
            <div className='app' >
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>GIVE ME SOME ADVICE</span>
                    </button>

                </div>

            </div>
        );
     }
}
export default App