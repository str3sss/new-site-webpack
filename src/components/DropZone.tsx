import { useDropzone } from 'react-dropzone';

function DropZone() {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div className='drop_box' {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

export default DropZone;
