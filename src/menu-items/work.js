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
    title: '애로 기술 관리(공통)',
    type: 'group',
    children: [
        {
            id: 'work-difficult-techs',
            title: '애로 기술 조회',
            type: 'item',
            url: '/difficult-techs',
            icon: ''
        }
    ]
};

export default works;
