import React, { Component } from 'react';
import { FolderIcon, OpenedFolderIcon, OpenDownIcon, CloseUpIcon } from './SvgIcons';

class Folder extends Component {

    state = {
        open: false
    }

    openFolder = () => {
        console.log("openFolder is clicked", this.props.folder.name,this.props.folder.path )
        this.setState({
            open: !this.state.open
        })
        this.props.fetchData(this.props.folder.path)
    }

    render () {
        return (
            <React.Fragment>
            <h4> 
                <span onClick={this.openFolder}> 
                    { this.state.open? <CloseUpIcon/> : <OpenDownIcon/> }
                </span>
                { this.state.open? <OpenedFolderIcon/> : <FolderIcon/> } {this.props.folder.name}
            </h4>
            </React.Fragment>
        )
    }
};

export default Folder;