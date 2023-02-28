const patents = [
    {
        id: '1',
        researcherName: '안상근1',
        patentName: '특허1',
        patentBusinessType: 'IT분야',
        patentNumber: '특허번호1',
        patentRegistrationDate: '2022.01.22'
    },
    {
        id: '2',
        researcherName: '안상근2',
        patentName: '특허2',
        patentBusinessType: 'IT분야',
        patentNumber: '특허번호2',
        patentRegistrationDate: '2022.01.22'
    },
    {
        id: '3',
        researcherName: '안상근3',
        patentName: '특허3',
        patentBusinessType: 'IT분야',
        patentNumber: '특허번호3',
        patentRegistrationDate: '2022.01.22'
    },
    {
        id: '4',
        researcherName: '안상근4',
        patentName: '특허4',
        patentBusinessType: 'IT분야',
        patentNumber: '특허번호4',
        patentRegistrationDate: '2022.01.22'
    },
    {
        id: '5',
        researcherName: '안상근5',
        patentName: '특허5',
        patentBusinessType: 'IT분야',
        patentNumber: '특허번호5',
        patentRegistrationDate: '2022.01.22'
    }
];
const intersts = [
    {
        id: '1',
        researcherName: '안상근1',
        intersts: ['IT분야', '음식료', '의료기기'],
        etcIntersts: ['의료기기', '음식료', '환경']
    },
    {
        id: '2',
        researcherName: '안상근2',
        intersts: ['음식료', '의료기기', 'IT분야'],
        etcIntersts: ['의료기기', '음식료', '환경']
    },
    {
        id: '3',
        researcherName: '안상근3',
        intersts: ['환경', '음식료', '의료기기', 'IT분야'],
        etcIntersts: ['의료기기', '음식료', '환경']
    },
    {
        id: '4',
        researcherName: '안상근4',
        intersts: ['자연과학', '음식료', '의료기기'],
        etcIntersts: ['의료기기', '음식료', '환경']
    },
    {
        id: '5',
        researcherName: '안상근5',
        intersts: ['의료기기', '음식료', '환경'],
        etcIntersts: ['의료기기', '음식료', '환경']
    }
];
const participationTasks = [
    {
        id: '1',
        researcherName: '안상근1',
        taskName: '과제명1',
        taskTerm: '2022.09.01~2022.10.11',
        taskAmount: '100억',
        taskBusinessType: 'IT분야'
    },
    {
        id: '2',
        researcherName: '안상근2',
        taskName: '과제명2',
        taskTerm: '2022.09.01~2023.10.11',
        taskAmount: '150억',
        taskBusinessType: '그린에너지분야'
    },
    {
        id: '3',
        researcherName: '안상근3',
        taskName: '과제명3',
        taskTerm: '2020.09.01~2022.10.11',
        taskAmount: '200억',
        taskBusinessType: 'IT분야'
    },
    {
        id: '4',
        researcherName: '안상근4',
        taskName: '과제명4',
        taskTerm: '2021.08.01~2022.10.11',
        taskAmount: '100억',
        taskBusinessType: 'IT분야'
    },
    {
        id: '5',
        researcherName: '안상근5',
        taskName: '과제명5',
        taskTerm: '2022.09.01~2022.10.11',
        taskAmount: '100억',
        taskBusinessType: '그린에너지분야'
    }
];
const researcherInfo = {
    id: '1',
    researcherName: '안상근1',
    takses: [
        {
            taskName: '과제명1',
            taskTerm: '2022.09.01~2022.10.11',
            taskAmount: '100억',
            taskBusinessType: 'IT분야'
        },
        {
            taskName: '과제명2',
            taskTerm: '2022.09.01~2022.10.11',
            taskAmount: '100억',
            taskBusinessType: 'IT분야'
        },
        {
            taskName: '과제명3',
            taskTerm: '2022.09.01~2022.10.11',
            taskAmount: '100억',
            taskBusinessType: 'IT분야'
        }
    ],
    patents: [
        {
            patentName: '특허1',
            patentBusinessType: '그린에너지분야',
            patentNumber: '특허번호1',
            patentRegistrationDate: '2022.01.22'
        },
        {
            patentName: '특허2',
            patentBusinessType: '그린에너지분야',
            patentNumber: '특허번호2',
            patentRegistrationDate: '2022.01.22'
        }
    ],
    intersts: ['IT분야', '그린에너지분야', '목제종이'],
    etcIntersts: ['비금속', '운송장비', '섬유의복']
};
const tagList = [
    { tagName: 'IT분야', color: '#78E366', text: '#FFFFFF' },
    { tagName: '그린에너지분야', color: '#78BCEE', text: '#FFFFFF' },
    { tagName: '섬유의복', color: '#CFDCE4', text: '#4F4A4A' },
    { tagName: '목제종이', color: '#6F6969', text: '#FFFFFF' },
    { tagName: '석유화확', color: '#78E366', text: '#FFFFFF' },
    { tagName: '비금속', color: '#78BCEE', text: '#FFFFFF' },
    { tagName: '운송장비', color: '#CFDCE4', text: '#4F4A4A' }
];
const etcTagList = {
    color: '#6F6969',
    text: '#FFFFFF'
};
export { patents, intersts, participationTasks, researcherInfo, tagList, etcTagList };
