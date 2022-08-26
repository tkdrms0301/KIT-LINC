import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

// project import
import NavItem from './NavItem';
import { useState, useEffect } from 'react';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const menu = useSelector((state) => state.menu);
    const { drawerOpen } = menu;
    const [selectedAccordion, setSelectedAccordion] = useState('');

    useEffect(() => {
        item.children.map((childrens, index) =>
            childrens.url === document.location.pathname.toString() ? setSelectedAccordion(item.title) : null
        );
    });

    const navCollapse = item.children?.map((menuItem) => {
        switch (menuItem.type) {
            case 'collapse':
                return (
                    <Typography key={menuItem.id} variant="caption" color="error" sx={{ p: 2.5 }}>
                        collapse - only available in paid version
                    </Typography>
                );
            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} level={1}></NavItem>;
            default:
                return (
                    <Typography key={menuItem.id} variant="h6" color="error" align="center">
                        Fix - Group Collapse or Items
                    </Typography>
                );
        }
    });

    const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0
        },
        '&:before': {
            display: 'none'
        }
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
    ))(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)'
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1)
        }
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)'
    }));

    return (
        <Accordion defaultExpanded={selectedAccordion === item.title}>
            <AccordionSummary>{item.title}</AccordionSummary>
            <AccordionDetails sx={{ padding: '0 0 0 4%' }}>{navCollapse}</AccordionDetails>
        </Accordion>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
