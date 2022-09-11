import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
const PostView = ({ postData }) => {
    return <Viewer initialValue={postData} />;
};
export default PostView;
