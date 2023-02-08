/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useCallback } from 'react';

import { StyleSheet, ActivityIndicator, ViewPropTypes, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import TemplateText from '../TemplateText';

import {
    PRIMARY,
    SECONDARY,
    WHITE,
    SUCCESS,
    LIGHT_GREY,
    DANGER,
    DARK,
    INFO,
    WARNING,
} from '../../consts/COLOURS';
import { RADIUS_SMALL, SPACE_LARGE, SPACE_MEDIUM, SPACE_SMALL, SPACE_XLARGE } from '../../consts/LAYOUT';


const Button = ({
    outline,
    disabled,
    block,
    primary = true,
    secondary,
    info,
    light,
    dark,
    success,
    white,
    warning,
    danger,
    bold = false,
    semiBold,
    transparent,
    large,
    small,
    round,
    caps,
    children,
    onPress,
    style,
    darkText,
    loading,
    textStyle,
    shadow,
    color,
    width,
    ...restProps
}) => {
    const [isLoading, setIsLoading] = useState(loading);
    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    useFocusEffect(
        useCallback(
            () => () => {
                setIsLoading(false);
            },
            [],
        ),
    );

    let content = children;

    const containerStyle = {
        borderWidth: outline ? 1.5 : 0,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    };
    const buttonTextStyle = {
        flexShrink: 1,
        color: WHITE,
    };

    let gradientColors = [];
    let LoadingColor = WHITE;

    if (primary) {
        containerStyle.backgroundColor = PRIMARY;
        containerStyle.borderColor = PRIMARY;
        buttonTextStyle.color = WHITE;
        LoadingColor = outline ? PRIMARY : WHITE;
    }
    if (secondary) {
        containerStyle.backgroundColor = SECONDARY;
        containerStyle.borderColor = SECONDARY;
        buttonTextStyle.color = outline ? SECONDARY : WHITE;
        LoadingColor = outline ? SECONDARY : WHITE;
    }
    if (info) {
        containerStyle.backgroundColor = INFO;
        containerStyle.borderColor = INFO;
        buttonTextStyle.color = outline ? INFO : WHITE;
        LoadingColor = outline ? INFO : WHITE;
    }
    if (success) {
        containerStyle.backgroundColor = SUCCESS;
        containerStyle.borderColor = SUCCESS;
        buttonTextStyle.color = outline ? SUCCESS : WHITE;
        LoadingColor = outline ? SUCCESS : WHITE;
    }
    if (white) {
        containerStyle.backgroundColor = WHITE;
        containerStyle.borderColor = WHITE;
        buttonTextStyle.color = PRIMARY;
        LoadingColor = PRIMARY;
    }
    if (warning) {
        containerStyle.backgroundColor = WARNING;
        containerStyle.borderColor = WARNING;
        buttonTextStyle.color = outline ? WARNING : WHITE;
        LoadingColor = outline ? WARNING : WHITE;
    }
    if (danger) {
        containerStyle.backgroundColor = DANGER;
        containerStyle.borderColor = DANGER;
        buttonTextStyle.color = outline ? DANGER : WHITE;
        LoadingColor = outline ? DANGER : WHITE;
    }

    if (light) {
        containerStyle.backgroundColor = LIGHT_GREY;
        containerStyle.borderColor = WHITE;
        buttonTextStyle.color = outline ? WHITE : DARK;
        LoadingColor = outline ? WHITE : DARK;
    }
    if (dark) {
        containerStyle.backgroundColor = DARK;
        containerStyle.borderColor = DARK;
        buttonTextStyle.color = outline ? DARK : WHITE;
        LoadingColor = outline ? DARK : WHITE;
    }

    if (color) {
        containerStyle.backgroundColor = color;
        containerStyle.borderColor = color;
        buttonTextStyle.color = outline ? color : WHITE;
        LoadingColor = outline ? color : WHITE;
    }

    if (outline) {
        containerStyle.borderColor = light ? 'rgba(0,0,0,0.1)' : WHITE;
        containerStyle.backgroundColor = 'transparent';
        // buttonTextStyle.color = darkText && DARK;
        if (darkText) {
            buttonTextStyle.color = DARK;
        }
    }

    if (transparent) {
        containerStyle.backgroundColor = null;
        containerStyle.borderColor = null;
        containerStyle.borderWidth = 0;
    }
    if (large) {
        containerStyle.height = 75;
    }
    if (small) {
        containerStyle.height = 35;
    }

    if (block) {
        containerStyle.width = '100%';
    }

    if (width) {
        containerStyle.width = width;
    }
    if (disabled) {
        containerStyle.opacity = 0.6;
    }
    if (round) {
        containerStyle.borderRadius = 50;
    }

    if (caps) {
        buttonTextStyle.textTransform = 'uppercase';
    }

    if (isLoading) {
        content = <ActivityIndicator color={LoadingColor} />;
    } else if (typeof content === 'string') {
        content = (
            <TemplateText
                semiBold={semiBold}
                bold={true}
                style={[buttonTextStyle, textStyle]}>
                {children}
            </TemplateText>
        );
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            // gradientColors={gradientColors}
            // vGradient
            style={[styles.container, containerStyle, style]}
            {...restProps}>
            {content}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    info: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    bold: PropTypes.bool,
    transparent: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    round: PropTypes.bool,
    caps: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
    darkText: PropTypes.bool,
    loading: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    semiBold: PropTypes.bool,
    textStyle: PropTypes.any,
    shadow: PropTypes.bool,
    color: PropTypes.string,
};

Button.defaultProps = {
    restProps: null,
    outline: false,
    disabled: false,
    block: false,
    primary: true,
    secondary: false,
    info: false,
    light: false,
    dark: false,
    success: false,
    warning: false,
    danger: false,
    bold: false,
    transparent: false,
    large: false,
    small: false,
    round: false,
    caps: false,
    style: null,
    darkText: false,
    loading: false,
    semiBold: false,
    textStyle: null,
    shadow: false,
    color: null,
    width: '100%',
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: LIGHT_GREY,
        borderRadius: SPACE_XLARGE,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: SPACE_SMALL,
    },
});

export default Button;
