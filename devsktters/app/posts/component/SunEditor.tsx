
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

import config from "./sunEditorConf";

const SunEditor = dynamic(() => import("suneditor-react"), {ssr: false});

// const plugins = dynamic(() => import("suneditor/src/plugins/"), {ssr:false})

// const CodeMirror = dynamic(() => import("@codemirror/language"), {ssr: false});

import CodeMirror from "codemirror";
import { useEffect, useRef } from "react";

import '@codemirror/language';
import '@codemirror/lang-javascript';


const SunEditorComponent = ({placeholder, value, onchange, isloaded} : any) => {

    const sunEditorRef = useRef();

    useEffect(() => {



    }, [])

    const onChange = (data: any) => {

        console.log(data);

    }

    

    return(
 
        <div>
            {isloaded 
            ?
            <SunEditor
            setAllPlugins={true}
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChange}
            lang={"es"}
                setOptions={{
                    "mode": "classic",
                    "rtl": false,
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
                        "pre",
                        "h1",
                        "h2",
                        "h3",
                        "h4",
                        "h5",
                        "h6"
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
                            "fullScreen",
                            "showBlocks",
                            "preview",
                            "print",
                            "save",
                            "template"
                        ]
                    ],
                    "codeMirror": CodeMirror
                }}

                

            />
            : <div>loading</div>
            }
            
        </div>
        
    )

}


export default SunEditorComponent;