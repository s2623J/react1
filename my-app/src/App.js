import React from 'react';
import styled from '@emotion/styled';
import './App.css';

const Header = styled.h1({
    padding: 16,
    color: 'hotpink'
})

const Photo = styled.img({
    display: 'block',
    width: '100%',
    objectFit: 'cover'
})

const TileView = styled.div( props => ({ // Allows for SASS-like variable passing
    display: 'grid',
    padding: props.spacing,
    gridGap:    props.spacing,
    gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}))

TileView.defaultProps = {
    spacing: 16,
    minCellWidth: 240
}

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
                <Header>
                    <h1>Picsum</h1>
                </Header>
                <TileView>
                    {
                        this.state.images.map(image => 
                            <Photo 
                                key={image.id} 
                                src={`https://picsum.photos/1000/300?image=${image.id}`} 
                                alt="">
                            </Photo>
                        )
                    }
                </TileView>
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
