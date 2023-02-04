import dynamic from 'next/dynamic'
import React, { useState } from 'react'
// import { Editor, EditorState,EditorProps } from 'react-draft-wysiwyg';
import { EditorState  } from 'draft-js';
import 'draft-js/dist/Draft.css'
import Editor from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
//   {ssr: false}
// )

function CreateEditPost() {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const toolbarPlugin = createToolbarPlugin();

  const handleChange = (state: EditorState) => {
    setEditorState(state)
  }

  return (
      <Editor
      editorState={editorState}
      onChange={handleChange}
      plugins={[toolbarPlugin]}
      ></Editor>
  )
}

export default CreateEditPost