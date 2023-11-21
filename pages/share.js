import { useRef, useState, useEffect } from "react";


export default function ContactForm() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  const inputFileRef = useRef();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [selectedFile])

  const onFileChangeCapture = ( e ) => {
    /*Selected files data can be collected here.*/
    console.log(e.target.files);

    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(e.target.files[0])

  }



  const onBtnClick = () => {
    /*Collecting node-element and performing click*/
    inputFileRef.current.click();
  };

  return (
    <div className="share-form">
      <form name="photos" action="/share-success" method="POST" data-netlify="true">
        <div className="media-upload" onClick={onBtnClick}>
          {!selectedFile && <div>Upload<br/>Photo</div>}
        {selectedFile &&  <img src={preview} /> }

        </div>
        <input type="hidden" name="form-name" value="photos" />
        <div className="photo_upload_widget"></div>
        <p className="file-field">
          <label>
            <span>Add file:</span>
            <input
              ref={inputFileRef}
              onChangeCapture={onFileChangeCapture}
              name="file"
              type="file"
              accept="image/*"
            />
          </label>
        </p>
        <p>
          <label htmlFor="yourname">Your Name:</label> <br />
          <input type="text" name="name" id="yourname" />
        </p>

        <p>
          <label htmlFor="yourmessage">Message:</label> <br />
          <textarea name="message" id="yourmessage"></textarea>
        </p>
        <p>
          <button type="submit">Share Photo</button>
        </p>
      </form>
    </div>
  );
}
