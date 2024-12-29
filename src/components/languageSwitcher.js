// components/LanguageSwitcher.js
import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import ReactCountryFlag from "react-country-flag"
const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelect = (lang) => {
        onLanguageChange(lang);
        handleClose();
    };

    return (
        <>
            <IconButton
                onClick={handleClick}
                color="inherit"
                aria-label="change language"
                sx={{ ml: 2 }}
            >
                <TranslateIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'language-button',
                }}
            >
                <MenuItem
                    onClick={() => handleLanguageSelect('en')}
                    selected={currentLanguage === 'en'}
                >
                    <ReactCountryFlag countryCode="US" svg />
                    <Typography sx={{ ml: 1 }} variant="inherit">English</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => handleLanguageSelect('tr')}
                    selected={currentLanguage === 'tr'}
                >
                    <ReactCountryFlag countryCode="TR" svg />
                    <Typography sx={{ ml: 1 }} variant="inherit">Türkçe</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default LanguageSwitcher;