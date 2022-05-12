import React from 'react';
import { Header, Photo, TileView, Frame } from './componentStyles.js';
// import './App.css';

class App extends React.Component {
    state = {
        images:         [],
        currentPhotoId: null
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
                <Header>Picsum</Header>
                <TileView>
                    {
                        this.state.images.map(image => {
                            const isActive = this.state.currentPhotoId === image.id;
                            return <Photo 
                                key={image.id} 
                                src={`https://picsum.photos/1000/300?image=${image.id}`} 
                                alt=""
                                onClick={() => this.setState({ currentPhotoId: isActive ? null : image.id })}
                                isActive = {isActive}>
                            </Photo>
                        })
                    }
                </TileView>
                { this.state.currentPhotoId !== null && <Frame /> }
            </div>
        )
    }
}

export default App;
