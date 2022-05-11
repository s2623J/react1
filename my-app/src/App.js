import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        images: []
    }
    componentDidMount() {
        fetch('https://picsum.photos/list')
            .then(response => {
                response.json()
                    .then(data => {
                        this.setState({
                            images: data.slice(0, 30)
                        })
                    })
            })
    }
    render() {
        console.log('State: ', this.state);
        return (
            <div>
                <h1>Picsum</h1>
                {
                    this.state.images.map(image => 
                        <img 
                            key={image.id} 
                            src={`https://picsum.photos/200/300?image=${image.id}`} 
                            alt="">
                        </img>
                    )
                }
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
