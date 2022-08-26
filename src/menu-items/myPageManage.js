// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const myPage = {
    id: 'group-dashboard',
    title: '마이페이지',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: '신청현황',
            type: 'item',
            url: '/dashboard/default',
            icon: '',
            breadcrumbs: false
        }
    ]
};

export default myPage;
