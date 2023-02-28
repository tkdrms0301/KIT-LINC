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
            id: 'field-training-enterprise-application',
            title: '회원가입(기업)',
            type: 'item',
            url: '/field-training-enterprise-application',
            icon: ''
        },
        {
            id: 'field-training-application-enterprise',
            title: '현장실습 신청(기업)',
            type: 'item',
            url: '/field-training-application-enterprise',
            icon: ''
        },
        {
            id: 'field-training-application-student',
            title: '현장실습생 신청(학생)',
            type: 'item',
            url: '/field-training-application-student',
            icon: ''
        },
        {
            id: 'field-training-application-management',
            title: '현장실습 및 현장실습생 신청 관리',
            type: 'item',
            url: '/field-training-application-management',
            icon: ''
        },
        {
            id: 'field-training-student-management',
            title: '현장실습생 관리',
            type: 'item',
            url: '/field-training-student-management',
            icon: ''
        },
        {
            id: 'field-training-select-list',
            title: '선발내역 접수',
            type: 'item',
            url: '/field-training-select-list',
            icon: ''
        },
        {
            id: 'field-training-selection-history-list',
            title: '현장실습생 선발조회',
            type: 'item',
            url: '/field-training-selection-history-list',
            icon: ''
        },
        {
            id: 'field-training-enterprise-student-list',
            title: '기업 및 학생 명단 조회',
            type: 'item',
            url: '/field-training-enterprise-student-list',
            icon: ''
        }
    ]
};

export default professor;
