import {
    Grid,
    Button,
    Typography,
    TextField,
    InputLabel,
    TableRow,
    TableCell,
    Paper,
    Divider,
    TableBody,
    Pagination,
    Stack,
    Item
} from '@mui/material';
const AttachmentTag = ({ imageFileName }) => {
    return <Grid>{imageFileName}</Grid>;
};

export default AttachmentTag;
