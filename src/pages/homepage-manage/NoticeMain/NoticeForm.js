import { useEffect } from 'react';
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
function NoticeForm({ editorRef, postData }) {
    useEffect(() => {
        // 이미지 업로드 막기
        editorRef.current.getInstance().removeHook('addImageBlobHook');
    }, []);
    const chartOptions = {
        minWidth: 100,
        maxWidth: 600,
        minHeight: 100,
        maxHeight: 300
    };
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
                        // console.log(blob);
                        // File {name: '카레유.png', ... }
                        // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
                        // const imgUrl = await .... 서버 전송 / 경로 수신 코드 ...
                        // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
                        // callback('http://localhost:5000/img/카레유.png', '카레유');
                        //https://curryyou.tistory.com/474
                    }
                }}
            />
        </>
    );
}
export default NoticeForm;
