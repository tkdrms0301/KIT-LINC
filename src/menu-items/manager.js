// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const manager = {
    id: 'manager',
    title: '애로 기술 관리(관리자)',
    type: 'group',
    children: [
        {
            id: 'util-difficult-tech-approval',
            title: '검토 및 승인',
            type: 'item',
            url: '/difficult-tech-approval',
            icon: ''
        },
        {
            id: 'util-difficult-tech-docs-upload',
            title: '관련 서류 제출 양식 업로드',
            type: 'item',
            url: '/difficult-tech-docs-upload',
            icon: ''
        },
        {
            id: 'util-difficult-tech-docs-modify',
            title: '메인 페이지 게시글 수정',
            type: 'item',
            url: '/difficult-tech-docs-modify',
            icon: ''
        },
        {
            id: 'util-difficult-project-matching',
            title: '프로젝트 매칭',
            type: 'item',
            url: '/difficult-tech-project-matching',
            icon: ''
        }
    ]
};

export default manager;
