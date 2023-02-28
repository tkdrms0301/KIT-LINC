// project import
import MainLayout from 'layout/MainLayout';
import NoticeManagement from 'pages/homepage-manage/NoticeMain/index';
import NoticeDetail from 'pages/homepage-manage/NoticeMain/NoticeDetail';
import NoticeDetailWrite from 'pages/homepage-manage/NoticeMain/NoticeDetailWrite';
import NoticeDetailModify from 'pages/homepage-manage/NoticeMain/NoticeDetailModify';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/notice',
            element: <NoticeManagement />
        },
        {
            path: '/notice/:detail',
            element: <NoticeDetail />
        },
        {
            path: '/notice-write/:detail',
            element: <NoticeDetailModify />
        },
        {
            path: '/notice-write',
            element: <NoticeDetailWrite />
        }
    ]
};

export default MainRoutes;
