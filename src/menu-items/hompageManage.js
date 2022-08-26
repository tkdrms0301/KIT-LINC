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

const company = {
    id: 'company',
    title: '홈페이지 관리',
    type: 'group',
    children: [
        {
            id: 'util-difficult-tech-docs-company',
            title: '공지사항 관리',
            type: 'item',
            url: '/difficult-tech-docs-company',
            icon: ''
        }
    ]
};

export default company;
