import React from 'react';
import SeachBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    state = { videos: [] };
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ videos: response.data.items });
    };

    render() {
        return(
        <div className="ui container">
        <SeachBar onFormSubmit={this.onTermSubmit}/> 
        I have {this.state.videos.length} videos
        </div>
        );
    }
}

export default App;