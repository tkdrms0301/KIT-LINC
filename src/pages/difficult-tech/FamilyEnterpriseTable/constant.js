const companyTypeList = ['대기업', '중소기업'];
const categoryList = ['IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화학', '비금속', '운송장비'];
const growthDegreeList = ['창업기', '초기성장기', '성장기', '성숙기', '업종전환기'];
const list = {
    companyTypeList: ['대기업', '중소기업', '중견기업', '공공기관', '협회/기타'],
    categoryList: ['IT분야', '그린에너지분야', '음식료', '섬유의복', '목제종이', '석유화학', '비금속', '운송장비'],
    growthDegreeList: ['창업기', '초기성장기', '성장기', '성숙기', '업종전환기']
};

const companyTypeListSearch = [
    { value: '1', label: 'All' },
    { value: '2', label: '대기업' },
    { value: '3', label: '중소기업' },
    { value: '4', label: '중견기업' },
    { value: '5', label: '공공기관' },
    { value: '6', label: '협회/기타' }
];
const categoryListSearch = [
    { value: '1', label: 'All' },
    { value: '2', label: 'IT분야' },
    { value: '3', label: '그린에너지분야' },
    { value: '4', label: '음식료' },
    { value: '5', label: '섬유의복' },
    { value: '6', label: '목제종이' },
    { value: '7', label: '석유화학' },
    { value: '8', label: '비금속' },
    { value: '9', label: '운송장비' }
];
const growthDegreeListSearch = [
    { value: '1', label: 'All' },
    { value: '2', label: '창업기' },
    { value: '3', label: '초기성장기' },
    { value: '4', label: '성장기' },
    { value: '5', label: '성숙기' },
    { value: '6', label: '업종전환기' }
];
export { companyTypeList, categoryList, growthDegreeList, list, companyTypeListSearch, categoryListSearch, growthDegreeListSearch };
