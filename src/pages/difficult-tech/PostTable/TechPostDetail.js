// project import
import { Grid } from '@mui/material';
import { useParams } from 'react-router';
import Form2Detail from './Form2Detail';
import Form3Detail from './Form3Detail';
import Form4Detail from './Form4Detail';
import Form5Detail from './Form5Detail';
import TechCare365Detail from './TechCare365Detail';

const TechPostDetail = () => {
    const params = useParams();
    const requestForm = params.requestForm;

    const Techcare365 = <TechCare365Detail />;
    const Form2 = <Form2Detail />;
    const Form3 = <Form3Detail />;
    const Form4 = <Form4Detail />;
    const Form5 = <Form5Detail />;

    const requestFormList = [
        {
            requestForm: 'Techcare365',
            template: Techcare365
        },
        {
            requestForm: '지원요청서2',
            template: Form2
        },
        {
            requestForm: '지원요청서3',
            template: Form3
        },
        {
            requestForm: '지원요청서4',
            template: Form4
        },
        {
            requestForm: '지원요청서5',
            template: Form5
        }
    ];

    return (
        <>
            {requestFormList.map((requestForms, index) =>
                requestForms.requestForm === requestForm ? <Grid key={index}>{requestForms.template}</Grid> : null
            )}
        </>
    );
};

export default TechPostDetail;
