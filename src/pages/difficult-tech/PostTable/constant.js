const statusList = [
    { label: 'All', value: 0 },
    { label: '진행중', value: 1 },
    { label: '승인대기중', value: 2 },
    { label: '모집중', value: 3 },
    { label: '완료', value: 4 }
];
const businessTypeListForSearch = [
    { label: 'All', value: 0 },
    { label: 'IT분야', value: 1 },
    { label: '그린에너지분야', value: 2 },
    { label: '음식료', value: 3 },
    { label: '섬유의복', value: 4 },
    { label: '석유화확', value: 5 },
    { label: '비금속', value: 6 },
    { label: '운송장비', value: 7 }
];
const requestFormList = [
    { label: 'All', value: 0 },
    { label: 'TechCare365', value: 1 },
    { label: '지원요청서2', value: 2 },
    { label: '지원요청서3', value: 3 },
    { label: '지원요청서4', value: 4 },
    { label: '지원요청서5', value: 5 }
];

const consultingFormList = ['단기 기술지도', '외부 자문의원 지도', '패키지形', '학기중 장기기술지도', '방학,연구년중 장기기술지도'];

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
    '사업계획서 작성지도'
];

const growthDegreeList = [
    '창업기(1년미만, 5인 이하)',
    '초기성장기(3년미만, 50인 이하)',
    '성장기(3년이상, 300인 미만)',
    '성숙기(5년이상, 300인 이상)',
    '업종전환기(동일제품 10년 이상)'
];

const businessTypeListForTechCare365 = [
    'IT분야(전기전자, 통신, 컴퓨터, IT관련 기계장비 등)',
    '그린에너지분야(태양광, 연료전지, 2차전지 등)',
    '음식료',
    '섬유의복',
    '목제종이',
    '석유화확',
    '비금속',
    '운송장비'
];
const tagList = [
    { tagName: '모집중', color: '#78E366', text: '#FFFFFF' },
    { tagName: '진행중', color: '#78BCEE', text: '#FFFFFF' },
    { tagName: '승인대기중', color: '#CFDCE4', text: '#4F4A4A' },
    { tagName: '완료', color: '#6F6969', text: '#FFFFFF' }
];

export {
    statusList,
    businessTypeListForSearch,
    requestFormList,
    consultingFormList,
    consultantInfoList,
    consultingFieldList,
    growthDegreeList,
    businessTypeListForTechCare365,
    tagList
};
