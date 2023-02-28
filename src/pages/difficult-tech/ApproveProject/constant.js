const categoryList = [
    { label: 'All', value: 'All' },
    { label: 'Techcare365', value: 'Techcare365' },
    { label: '지원요청서2', value: '지원요청서2' },
    { label: '지원요청서3', value: '지원요청서3' },
    { label: '지원요청서4', value: '지원요청서4' },
    { label: '지원요청서5', value: '지원요청서5' }
];

const consultingFormList = [
    '단기 기술지도(1일 4시간이상 4회 이내 단기기술지도)',
    '외부 자문의원 지도',
    '패키지形(2개학과이상의 교수 또는 2명이상 교수 및 자문위원으로 구성)',
    '학기중 장기기술지도(기업의 여러가지 애로사항을 주 1~2회, 1일 6H, 이상, 8주이내 정기적으로 방문하여 패키지 형태로 지도)',
    '방학․연구년중 장기기술지도(기업의 여러가지 애로사항을 주 2~3회, 1일 8H, 4주 이내 기업에 상주하면서 패키지 형태로 지도)'
];

const consultantInfoList = ['성명', '소속', '연락처'];

const consultingFieldList = [
    '기술지도',
    '법률자문/수출입 지원',
    '경영지도',
    '사업화지도',
    '특허분석',
    '국가공인인증컨설팅 자문',
    '디자인지도',
    '마케팅지도',
    '해외시장 개척',
    '사업화지도',
    '사업계획서 작성지도',
    '기타'
];

const applicantInfoList = [
    '기업명',
    '대표자명',
    '시업자등록번호',
    '전화번호 및 팩스번호',
    '주소',
    '작성자 성명',
    '부서/직위',
    '전화번호',
    'e-mail',
    '상시 근로자 수',
    '매출액(전년도 말 기준)'
];
const growthDegreeList = [
    '창업기(1년미만, 5인 이하)',
    '초기성장기(3년미만, 50인 이하)',
    '성장기(3년이상, 300인 미만)',
    '성숙기(5년이상, 300인 이상)',
    '업종전환기(동일제품 10년 이상)'
];

const businessTypeList = [
    'IT분야(전기전자, 통신, 컴퓨터, IT관련 기계장비 등)',
    '그린에너지분야(태양광, 연료전지, 2차전지 등)',
    '음식료',
    '섬유의복',
    '목제종이',
    '석유화확',
    '비금속',
    '운송장비',
    '기타'
];
const stateList = [
    {
        label: '승인대기',
        value: 'PENDING'
    },
    {
        label: '승인완료',
        value: 'APPROVED'
    },
    {
        label: '승인거절',
        value: 'REJECTED'
    }
];
export {
    categoryList,
    consultingFormList,
    consultantInfoList,
    consultingFieldList,
    applicantInfoList,
    growthDegreeList,
    businessTypeList,
    stateList
};
