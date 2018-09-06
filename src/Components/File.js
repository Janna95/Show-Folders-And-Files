import React, { Component } from 'react';
import { FileIcon } from './SvgIcons';

class File extends Component {
        
    render () {
        return (
            <h4> <FileIcon/> {this.props.fileName} </h4>
        )
    }
};

export default File;