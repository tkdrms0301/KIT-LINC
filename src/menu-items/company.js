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
    title: '애로 기술 관리(가족 회사)',
    type: 'group',
    children: [
        {
            id: 'util-difficult-tech-create',
            title: '애로 기술 등록',
            type: 'item',
            url: '/difficult-tech-create',
            icon: ''
        },

        {
            id: 'util-difficult-tech-continue-company',
            title: '진행 중 프로젝트',
            type: 'item',
            url: '/difficult-tech-continue-company',
            icon: ''
        },
        {
            id: 'util-difficult-tech-docs-company',
            title: '관련 서류 제출',
            type: 'item',
            url: '/difficult-tech-docs-company',
            icon: ''
        }
    ]
};

export default company;
