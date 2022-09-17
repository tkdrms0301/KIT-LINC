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

const difficultTechs = {
    id: 'difficultTech',
    title: '애로기술지원',
    type: 'group',
    children: [
        {
            id: 'work-difficult-techs',
            title: '애로기술 조회',
            type: 'item',
            url: '/difficult-techs',
            icon: ''
        },
        {
            id: 'util-difficult-tech-create',
            title: '애로기술 신청',
            type: 'item',
            url: '/difficult-tech-create',
            icon: ''
        },
        {
            id: 'util-difficult-tech-approval',
            title: '신청 검토 및 승인',
            type: 'item',
            url: '/difficult-tech-approval',
            icon: ''
        },
        {
            id: 'util-difficult-tech-family-enterprise',
            title: '가족회사 조회',
            type: 'item',
            url: '/difficult-tech-family-enterprise',
            icon: ''
        },
        // {
        //     id: 'util-difficult-project-matching',
        //     title: '프로젝트 매칭',
        //     type: 'item',
        //     url: '/difficult-tech-project-matching',
        //     icon: ''
        // },
        // {
        //     id: 'util-difficult-project-matching-other',
        //     title: '프로젝트 매칭 version-2',
        //     type: 'item',
        //     url: '/difficult-tech-project-matching-other',
        //     icon: ''
        // },
        {
            id: 'util-difficult-tech-continue-company',
            title: '진행 중 프로젝트(가족회사)',
            type: 'item',
            url: '/difficult-tech-continue-company',
            icon: ''
        },
        {
            id: 'util-difficult-tech-continue-professor',
            title: '진행 중 프로젝트(교수)',
            type: 'item',
            url: '/difficult-tech-continue-professor',
            icon: ''
        }
    ]
};

export default difficultTechs;
