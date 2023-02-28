import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import chart from '@toast-ui/editor-plugin-chart';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/chart/dist/toastui-chart.css';

import { useCallback, useState } from 'react';
import axios from '../../../../node_modules/axios/index';

function NoticeForm({ editorRef, postData }) {
    const [file, setFile] = useState(null);

    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300
    };

    const uploadImage = useCallback(async (blob) => {
        if (!blob) return;
        const formData = new FormData();
        formData.append('file', blob);
        const res = await axios.post('http://localhost:4000/file/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.status === 201) console.log(res.data);
        return res.data.url;
    });

    return (
        <>
            <Editor
                height="500px"
                initialValue={postData === '' ? '내용을 입력하세요' : postData}
                usageStatistics={false}
                ref={editorRef}
                language="ko-KR"
                initialEditType="wysiwyg"
                plugins={[[chart, chartOptions], codeSyntaxHighlight, colorSyntax, tableMergedCell]}
                hooks={{
                    addImageBlobHook: async (blob, callback) => {
                        console.log(blob);
                        const url = await uploadImage(blob);
                        callback(url, 'alt text');
                    }
                }}
            />
        </>
    );
}
export default NoticeForm;
