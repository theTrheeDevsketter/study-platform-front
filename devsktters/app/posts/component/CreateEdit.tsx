import dynamic from 'next/dynamic'
import React, { useState, forwardRef } from 'react'
import {Quill} from 'react-quill';
const ReactQuill = dynamic(
  async () => {
    const {default: RQ } = await import('react-quill');

    return ({forwardedRef, ...props}: any) => <RQ ref={forwardedRef} {...props} />;
  },
  {ssr: false}
);

// const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import 'react-quill/dist/quill.snow.css';
// import quillModules from './quillModules';


// const ForwardRefReactQuill = forwardRef((props, ref) =>
//   <ReactQuill {...props} ref={ref}/>
// )

function CreateEditPost() {

  const quillRef = React.useRef();

  const [htmlValue,setHtmlValue] = useState('');

  

  const onChange = (text: string) => setHtmlValue(text);

  const imageHandler = () => {

    
    
    const quill = quillRef.current;

    console.log(quill);
    
  }

  const quillModules = {

    toolbar: {container: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['code'],
        ['clean'],
      ],
      handlers: {
        'image': imageHandler
      }
    },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
}



  return (
    <>
    <ReactQuill 
        forwardedRef={quillRef}
        theme='snow' 
        onChange={onChange} 
        modules={quillModules}
        bounds='quill-container'
      ></ReactQuill>

      <br></br>
      <br></br>
      <br></br>
      <div>{htmlValue}</div>
    </>

  )
}

export default CreateEditPost