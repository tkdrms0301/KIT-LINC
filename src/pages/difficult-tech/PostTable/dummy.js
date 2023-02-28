// Mock Data
const post = [
    {
        postId: 1,
        title: 'K-기대함 프로젝트',
        content: '애로기술 해결을 보다 손쉽게 사용하기 위한 프로젝트,..',
        tags: ['진행중'],
        field: ['IT분야'],
        requestForm: 'TechCare365',
        company: {
            name: 'IntelliK',
            logo: 'https://www.kumoh.ac.kr/_res/ko/img/common/logo@2x.png',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 2,
        title: '지구온난화 방지를 위한 프로젝트',
        content: '녹색 지구 프로젝트',
        tags: ['승인대기중'],
        field: ['그린에너지분야', '섬유의복'],
        requestForm: '지원요청서2',
        company: {
            name: '콬아콜라',
            logo:
                '//w.namu.la/s/5d0f7c939e428323cdc8436ecb05e67189b42c740734ee6e24d4b19416b6f8eb1d69280d82c9f0332bed53ab81dec8796c055f68b4b86638ff743856a288cd59982b9ebbee0f3a26954afc0cb261c4c608f4eafd38df48440b4b084d3173f36e',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 3,
        title: '맛있는 김치 만들기',
        content: '세상에서 제일 맛있는 김치 만들기 프로젝트',
        tags: ['승인대기중'],
        field: ['음식료'],
        requestForm: 'TechCare365',
        company: {
            name: '종가집',
            logo: 'http://www.jongga.co.kr/_img/logo.png',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 4,
        title: '차세대 드론 제작',
        content: '드론 제작 프로젝트',
        tags: ['모집중'],
        field: ['IT분야', '운송장비'],
        requestForm: '지원요청서2',
        company: {
            name: '㈜엑스드론',
            logo: 'http://www.xdrone.co.kr/default/img/logo_light.png',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 5,
        title: '프로젝트 이름5',
        content: '프로젝트 설명',
        tags: ['완료', '승인대기중', '모집중', '진행중'],
        field: ['비금속'],
        requestForm: 'TechCare365',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 6,
        title: '프로젝트 이름6',
        content: '프로젝트 설명',
        field: ['운송장비', '비금속', '섬유의복'],
        requestForm: '지원요청서3',
        tags: ['완료'],
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 7,
        title: '프로젝트 이름7',
        content: '프로젝트 설명',
        tags: ['모집중'],
        field: ['IT분야'],
        requestForm: 'TechCare365',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 8,
        title: '프로젝트 이름8',
        content: '프로젝트 설명',
        tags: ['모집중'],
        field: ['그린에너지분야', '비금속'],
        requestForm: '지원요청서2',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 9,
        title: '프로젝트 이름9',
        content: '프로젝트 설명',
        tags: ['승인대기중'],
        field: ['음식료'],
        requestForm: 'TechCare365',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 10,
        title: '프로젝트 이름10',
        content: '프로젝트 설명',
        tags: ['완료'],
        field: ['섬유의복', '비금속'],
        requestForm: 'TechCare365',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 11,
        title: '프로젝트 이름11',
        content: '프로젝트 설명',
        tags: ['진행중'],
        field: ['목제종이', '비금속'],
        requestForm: '지원요청서4',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    },
    {
        postId: 12,
        title: '프로젝트 이름12',
        content: '프로젝트 설명',
        tags: ['모집중'],
        field: ['비금속'],
        requestForm: '지원요청서5',
        company: {
            name: '회사 이름',
            logo: '회사 로고',
            address: '회사 주소'
        },
        date: '2020-01-01'
    }
];

const professorRows = [
    {
        professorNumber: '1',
        professorName: '교수1',
        professorMajor: '학과1',
        professorStudy: '연구1'
    },
    {
        professorNumber: '2',
        professorName: '교수2',
        professorMajor: '학과2',
        professorStudy: '연구2'
    },
    {
        professorNumber: '3',
        professorName: '교수3',
        professorMajor: '학과3',
        professorStudy: '연구3'
    },
    {
        professorNumber: '4',
        professorName: '교수4',
        professorMajor: '학과4',
        professorStudy: '연구4'
    },
    {
        professorNumber: '5',
        professorName: '교수5',
        professorMajor: '학과5',
        professorStudy: '연구5'
    },
    {
        professorNumber: '6',
        professorName: '교수6',
        professorMajor: '학과6',
        professorStudy: '연구6'
    },
    {
        professorNumber: '7',
        professorName: '교수7',
        professorMajor: '학과7',
        professorStudy: '연구7'
    }
];

export { post, professorRows };
