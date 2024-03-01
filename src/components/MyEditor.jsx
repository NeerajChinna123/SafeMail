import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

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
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                }}
            />
        </div>
    );
};

export default Editor;