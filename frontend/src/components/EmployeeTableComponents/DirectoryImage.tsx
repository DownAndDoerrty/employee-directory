import * as React from 'react';
import { Component } from 'react';

interface DirectoryImageProps {
  imageSrc?: string;
}

class DirectoryImage extends Component<DirectoryImageProps> {
  constructor(props: DirectoryImageProps | Readonly<DirectoryImageProps>) {
    super(props);
  }

  render() {
    return <img id="directoryImage" src={this.props.imageSrc}></img>;
  }
}

export default DirectoryImage;
