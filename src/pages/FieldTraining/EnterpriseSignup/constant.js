const enterpriseInfoList = [
    // enterpriseInfo 값을 value에 각각 저장하기
    {
        label: '기관(법인)명',
        size: 6,
        value: '기관'
    },
    {
        label: '영문기관명',
        size: 6,
        value: 'enterprise'
    },
    {
        label: '대표자명',
        size: 4,
        value: '대표자'
    },
    {
        label: '사업자등록번호',
        size: 4,
        value: '111-1111'
    },
    {
        label: '개업 연월일',
        size: 4,
        value: '2022-01-01'
    },
    {
        label: '한국표준산업분류코드',
        size: 4,
        value: 'K1234'
    },
    {
        label: '종업원 수',
        size: 4,
        value: '100'
    },
    {
        label: '매출액',
        size: 4,
        value: '1000억'
    },
    {
        label: '사업장 소재지',
        size: 6,
        value: '구미시'
    },
    {
        label: '홈페이지',
        size: 6,
        value: 'https://www.kumoh.ac.kr'
    }
];
const enterpriseSortationList = [
    { label: '대기업', value: '1' },
    { label: '중견기업', value: '2' },
    { label: '중소기업', value: '3' },
    { label: '공공기업', value: '4' },
    { label: '협회/기타', value: '5' }
];
const enterpriseIsListedList = [
    { label: '코스피', value: '1' },
    { label: '코스닥', value: '2' },
    { label: '비사장', value: '3' }
];
const dayOfWeekList = [
    {
        label: '월',
        value: '1'
    },
    {
        label: ' 화',
        value: '2'
    },
    {
        label: '수',
        value: '3'
    },
    {
        label: '목',
        value: '4'
    },
    {
        label: '금',
        value: '5'
    },
    {
        label: '토',
        value: '6'
    },
    {
        label: '일',
        value: '7'
    }
];
const radio1List = [
    { label: '일반사무실 형태', value: '1' },
    { label: '연구소 형태', value: '2' },
    { label: '생산/제조 등의 공장 형태', value: '3' },
    { label: '주 사업장 외(건설현장, 자동차/선박/항공 등) 형태', value: '4' },
    { label: '기타', value: '5' }
];
const radio2List = [
    { label: '일반사무실 형태', value: '1' },
    { label: '연구소 형태', value: '2' },
    { label: '생산/제조 등의 공장 형태', value: '3' },
    { label: '주 사업장 외(건설현장, 자동차/선박/항공 등) 형태', value: '4' },
    { label: '기타', value: '5' }
];
const radio3List = [
    {
        label: '소속 근로자와 같은 공간에 배정된다.',
        value: '1'
    },
    { label: '소속 근로자와 분리된 별도의 공간에 배정된다.', value: '2' }
];
const radio4List = [
    { label: '모든 필요 물품 및 비품을 제공한다.', value: '1' },
    { label: '전혀 제공하지 않는다', value: '2' },
    { label: '일부 제공한다.', value: '3' }
];
const radio5List = [
    { label: '물품 제조생산 등의 활동(업무)에 참여하지 않는다', value: '1' },
    { label: '물품 제조생산 등의 활동(업무)에 일부 참여한다.', value: '2' },
    { label: '물품 제조생산 등의 활동(업무)에 주 실습 직무로 참여한다.', value: '3' }
];
const radio6List = [
    { label: '취급하지 않는다.', value: '1' },
    { label: '취급한다.(6-2 문항으로)', value: '2' }
];
const radio7List = [
    { label: '제공된다.', value: '1' },
    { label: '제공되지 않는다.', value: '2' }
];
export {
    enterpriseInfoList,
    enterpriseSortationList,
    enterpriseIsListedList,
    dayOfWeekList,
    radio1List,
    radio2List,
    radio3List,
    radio4List,
    radio5List,
    radio6List,
    radio7List
};
