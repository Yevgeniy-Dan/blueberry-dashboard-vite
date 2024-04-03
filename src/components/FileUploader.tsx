import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropzone from "react-dropzone";

interface FileWithPreview extends File {
  preview?: string;
  formattedSize?: string;
}

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState<FileWithPreview>();

  /**
   * Handled the accepted files and shows the preview
   */
  const handleAcceptedFiles = (files: File[]) => {
    files.map((file) =>
      Object.assign(file, {
        preview:
          file.type.split("/")[0] === "image"
            ? URL.createObjectURL(file)
            : null,
        formattedSize: formatBytes(file.size),
      })
    );

    console.log(files[0]);
    setSelectedFile(files[0]);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <div className="w-100">
      <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone">
            <div className="dz-message needsclick" {...getRootProps()}>
              <input {...getInputProps()} />
              <span className="fs-16">
                <i className="h1 text-muted bi bi-cloud-upload"></i>
              </span>
              <h5>Drop file here or click to upload.</h5>
              <span className="text-muted font-13">
                Drop file here or click to upload.
              </span>
            </div>
          </div>
        )}
      </Dropzone>
      <div className="dropzone-previews mt-3" id="file-previews">
        <div
          className="mt-1 mb-0 shadow-none border border-light-400 rounded-1 dz-processing dz-image-preview dz-success dz-complete"
          //   key={i + "-file"}
        >
          {selectedFile && (
            <div className="p-2">
              <div className="row align-items-center ">
                {selectedFile.preview && (
                  <div className="col-auto">
                    <img
                      data-dz-thumbnail=""
                      className="avatar-lg rounded-1 bg-light"
                      alt={selectedFile.name}
                      src={selectedFile.preview}
                    />
                  </div>
                )}
                {!selectedFile.preview && (
                  <div className="col-auto">
                    <div className="avatar-lg">
                      <span className="text-white bg-primary rounded-1">
                        {selectedFile.type.split("/")[0]}
                      </span>
                    </div>
                  </div>
                )}
                <div className="col pl-0">
                  <NavLink to="#" className="text-muted font-weight-bold">
                    {selectedFile.name}
                  </NavLink>
                  <p className="mb-0">
                    <strong>{selectedFile.formattedSize}</strong>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
