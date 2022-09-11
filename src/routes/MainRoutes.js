import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import TestLogin from 'pages/TestLogin/index';
import RegisterPost from 'pages/difficult-tech/RegisterProject/index';
import ApproveProject from 'pages/difficult-tech/ApproveProject/index';
import PostTable from 'pages/difficult-tech/PostTable/index';
import TechPostDetail from 'pages/difficult-tech/PostTable/TechPostDetail';
import EnterpriseForm from 'pages/FieldTraining/EnterpriseForm/index';
import StudentForm from 'pages/FieldTraining/StudentForm/index';
import FormManagement from 'pages/FieldTraining/FormManagement/index';
import StudentManagement from 'pages/FieldTraining/StudentManagement/index';
import StudentSelection from 'pages/FieldTraining/StudentSelection/index';
import AllList from 'pages/FieldTraining/AllList/index';
import SelectedStudentList from 'pages/FieldTraining/SelectedStudent/index';
import NoticeManagement from 'pages/homepage-manage/NoticeMain/index';
import NoticeDetail from 'pages/homepage-manage/NoticeMain/NoticeDetail';
import NoticeDetailWrite from 'pages/homepage-manage/NoticeMain/NoticeDetailWrite';
import NoticeDetailModify from 'pages/homepage-manage/NoticeMain/NoticeDetailModify';
import EnterpriseSignup from 'pages/FieldTraining/EnterpriseSignup/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - 애로 기술 관리
const DifficultTech = Loadable(lazy(() => import('pages/difficult-tech')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: null
                }
            ]
        },
        {
            path: '/difficult-techs',
            element: <PostTable />
        },
        {
            path: '/difficult-techs/:requestForm/:detail',
            element: <TechPostDetail />
        },
        {
            path: '/difficult-tech-create',
            element: <RegisterPost />
        },
        {
            path: '/difficult-tech-approval',
            element: <ApproveProject />
        },
        // manager, professor, company 각각 페이지 나눠야됨
        {
            path: '/difficult-tech-docs-upload',
            element: null
        },
        {
            path: '/difficult-tech-docs-company',
            element: null
        },
        {
            path: '/difficult-tech-docs-professor',
            element: null
        },
        // professor, company 각각 페이지 나눠야됨
        {
            path: '/difficult-tech-continue-professor',
            element: <DifficultTech />
        },
        {
            path: '/difficult-tech-continue-company',
            element: <DifficultTech />
        },
        {
            path: '/shadow',
            element: <TestLogin />
        },
        {
            path: '/field-training-enterprise-application',
            element: <EnterpriseSignup />
        },
        {
            path: '/field-training-application-enterprise',
            element: <EnterpriseForm />
        },
        {
            path: '/field-training-application-student',
            element: <StudentForm />
        },
        {
            path: '/field-training-application-management',
            element: <FormManagement />
        },
        {
            path: '/field-training-student-management',
            element: <StudentManagement />
        },
        {
            path: '/field-training-select-list',
            element: <StudentSelection />
        },
        {
            path: '/field-training-selection-history-list',
            element: <SelectedStudentList />
        },
        {
            path: '/field-training-enterprise-student-list',
            element: <AllList />
        },
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
