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

const works = {
    id: 'works',
    title: '기타 페이지',
    type: 'group',
    children: [
        {
            id: 'util-difficult-tech-docs-modify',
            title: '메인 페이지 게시글 수정',
            type: 'item',
            url: '/difficult-tech-docs-modify',
            icon: ''
        },
        {
            id: 'util-difficult-tech-docs-upload',
            title: '테스팅 하는곳~',
            type: 'item',
            url: '/difficult-tech-docs-upload',
            icon: ''
        }
    ]
};

export default works;
