import React, { Component } from 'react';
import '../Styles/App.css';
import Header from './Header';
import Folder from './Folder'
import File from './File'

class App extends Component {

  state = {
    path: '',
    content: ''
  }

  fetchData = (path) => {
    console.log("path in fetchData", path);
    let options = {
      method: 'POST',
      body: JSON.stringify({input: path}),
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    };

    fetch("/api/path", options)
    .then(data => data.json())
    .then(res => {
      console.log(res)
      this.setState({
        content: res
      })
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <React.Fragment>
        <Header fetchData={this.fetchData}/>
        <div>
          {
            this.state.content.allFolders && 
              this.state.content.allFolders.map((folder, index) => {
                return <Folder folder={folder} fetchData={this.fetchData} key={index}/>
              })
          }
        </div>
        <div>
          {
            this.state.content.allFiles && 
              this.state.content.allFiles.map((file, index) => {
                return <File fileName={file} key={index}/>
              })
          }
        </div>           
      </React.Fragment>
    );
  }
}

export default App;
