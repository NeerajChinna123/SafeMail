
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const Editor = ({
    value,
    onChange,
   
}) => {
   
    return (
        <div className="text-black">
            <CKEditor
                config={{
                    height: 1000
                }}
                editor={ClassicEditor}
                data={value}
                onReady={(editor) => {
                    console.log("CKEditor5 React Component is ready to use!", editor);
            
                    // Listen for data changes and focus the editor
                    editor.model.document.on('change:data', () => {
                        editor.editing.view.focus();
                    });
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            // onReady={ editor => {
            //     console.log( 'Editor is ready to use!', editor );

            //     editor.focus();
            // } }
            />
        </div>
    );
};

export default Editor;