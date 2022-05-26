import * as React from 'react';

interface DirectoryImageProps {
  imageSrc?: string;
}

const DirectoryImage = (props: DirectoryImageProps) => {
  return <img id="directoryImage" src={props.imageSrc}></img>;
};

export default DirectoryImage;
