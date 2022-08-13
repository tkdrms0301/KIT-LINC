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

const professor = {
    id: 'professor',
    title: '애로 기술 관리(교수)',
    type: 'group',
    children: [
        {
            id: 'util-difficult-tech-continue-professor',
            title: '진행 중 프로젝트',
            type: 'item',
            url: '/difficult-tech-continue-professor',
            icon: ''
        },
        {
            id: 'util-difficult-tech-docs-professor',
            title: '관련 서류 제출',
            type: 'item',
            url: '/difficult-tech-docs-professor',
            icon: ''
        }
    ]
};

export default professor;
