
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

import config from "./sunEditorConf";

const SunEditor = dynamic(() => import("suneditor-react"), {ssr: false});

// const CodeMirror = dynamic(() => import("codemirror"), {ssr: false});

import CodeMirror from "codemirror";


const SunEditorComponent = () => {


    return(
 
        <div>
            <SunEditor
            lang={"es"}
                setOptions={{
                    "mode": "classic",
                    "rtl": false,
                    "katex": "window.katex",
                    "width": "auto",
                    "height": "auto",
                    "charCounter": true,
                    "font": [
                        "Arial",
                        "tahoma",
                        "Courier New,Courier"
                    ],
                    "fontSize": [
                        8,
                        10,
                        14,
                        18,
                        24,
                        36
                    ],
                    "formats": [
                        "p",
                        "blockquote",
                        "h1",
                        "h2",
                        "h3"
                    ],
                    
                    "imageFileInput": false,
                    "videoFileInput": false,
                    "audioUrlInput": false,
                    "tabDisable": false,
                    "lineHeights": [
                        {
                            "text": "Single",
                            "value": 1
                        },
                        {
                            "text": "Double",
                            "value": 2
                        }
                    ],
                    "paragraphStyles": [
                        "spaced",
                        {
                            "name": "Box",
                            "class": "__se__customClass"
                        }
                    ],
                    "textStyles": [
                        "translucent",
                        {
                            "name": "Emphasis",
                            "style": "-webkit-text-emphasis: filled;",
                            "tag": "span"
                        }
                    ],
                    "buttonList": [
                        [
                            "undo",
                            "redo",
                            "font",
                            "fontSize",
                            "formatBlock",
                            "paragraphStyle",
                            "blockquote",
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                            "fontColor",
                            "hiliteColor",
                            "textStyle",
                            "removeFormat",
                            "outdent",
                            "indent",
                            "align",
                            "horizontalRule",
                            "list",
                            "lineHeight",
                            "table",
                            "link",
                            "image",
                            "video",
                            "audio",
                            "math",
                            "imageGallery",
                            "fullScreen",
                            "showBlocks",
                            "codeView",
                            "preview",
                            "print",
                            "save",
                            "template"
                        ]
                    ],
                    "codeMirror": CodeMirror
                }}

                

            />
        </div>
        
    )

}


export default SunEditorComponent;