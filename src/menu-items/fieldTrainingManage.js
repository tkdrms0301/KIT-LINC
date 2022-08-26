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
    title: '현장실습',
    type: 'group',
    children: [
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
