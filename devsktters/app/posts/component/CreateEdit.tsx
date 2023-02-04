import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import { Editor, EditorState,EditorProps } from 'react-draft-wysiwyg';
import { Editor, EditorState  } from 'draft-js';

// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//   {ssr: false}
// )

function CreateEditPost() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (state: EditorState) => {
    setEditorState(state)
  }

  return (
      <Editor
      editorState={editorState}
      onChange={handleChange}
      
      
      ></Editor>
  )
}

export default CreateEditPost