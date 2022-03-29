import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// export type ButtonType = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'default' | 'dark';

export interface IButton {
    text: string;
    icon?: undefined | IconDefinition;
    iconPosition?: string;
    type?: string; // ButtonType;
    outline?: boolean;
    onClick?: () => void;
    buttonCustomClass?: string;
    iconCustomClass?: string;
    disabled?: boolean;
};

const defaultButtonProps = {
    text: '',
    icon: undefined,
    iconPosition: 'left',
    type: 'default',
    outline: false,
    onClick: () => { },
    buttonCustomClass: '',
    iconCustomClass: '',
    disabled: false,
};

const Button: FC<IButton> = (props) => {
    const { text, icon, iconPosition, type, outline, onClick, buttonCustomClass, iconCustomClass, disabled } = { ...defaultButtonProps, ...props };

    /**
     * Get class Name for button from props.
     *
     * @returns string
     */
    const getClassName = () => {
        let className = `transition px-4 pl-4 py-2 leading-5 rounded-md font-medium text-sm`;
        let textColor = 'white';
        let bgColor = '';
        let borderColor = '';
        let bgActiveColor = '';
        let hoverTextColor = 'white';

        switch (type) {
            case 'primary':
                textColor = outline ? 'primary' : 'white';
                bgColor = outline ? 'white' : 'primary';
                bgActiveColor = outline ? 'primary-dark' : 'primary-dark';
                borderColor = outline ? 'blue-800' : 'transparent';
                break;

            case 'warning':
                textColor = outline ? 'amber-500' : 'white';
                bgColor = outline ? 'white' : 'amber-500';
                bgActiveColor = outline ? 'amber-500' : 'amber-500';
                borderColor = outline ? 'amber-100' : 'transparent';
                break;

            case 'error':
                textColor = outline ? 'error' : 'white';
                bgColor = outline ? 'white' : 'bg-red-500';
                bgActiveColor = outline ? 'error-dark' : 'error';
                borderColor = outline ? 'error' : 'transparent';
                break;

            case 'success':
                textColor = outline ? 'success' : 'white';
                bgColor = outline ? 'white' : 'success-dark';
                bgActiveColor = outline ? 'success-dark' : 'success';
                borderColor = outline ? 'success' : 'transparent';
                break;

            case 'default':
                textColor = outline ? 'primary' : 'black';
                bgColor = outline ? 'white' : 'gray-liter';
                bgActiveColor = outline ? 'gray-liter' : 'gray-liter';
                borderColor = outline ? 'transparent' : 'blue-800';
                hoverTextColor = 'black'; // outline ? 'black' : 'white';
                break;

            default:
                break;
        }

        // Add background and text colors
        className += ` bg-${bgColor} hover:bg-${bgActiveColor} hover:bg-opacity-80 focus:bg-${bgActiveColor} text-${textColor} hover:text-${hoverTextColor} focus:text-${textColor} hover:rounded-md focus:rounded-md focus:outline-none`;

        // Add border with color
        className += ` border ${outline ? ' border-solid ' : ''} border-${borderColor} hover:border-${borderColor} focus:border-${borderColor}`;

        // Add opacity for disabled button
        if (disabled) {
            className += ' opacity-50 cursor-not-allowed';
        }

        // Add custom class name if provided
        if (typeof buttonCustomClass !== 'undefined' && buttonCustomClass !== null) {
            className = `${buttonCustomClass} ${className}`;
        }

        return className;
    }

    return (
        <button className={getClassName()} style={{ border: 1 }} onClick={onClick} disabled={disabled} type="button">
            {typeof icon !== 'undefined' && iconPosition === 'left' &&
                <span className={`px-2 pl-0 ${iconCustomClass}`}>
                    <FontAwesomeIcon icon={icon} />
                </span>
            }

            {text}

            {typeof icon !== 'undefined' && iconPosition === 'right' &&
                <span className={`px-2 ${iconCustomClass}`}>
                    <FontAwesomeIcon icon={icon} />
                </span>
            }
            <br />
        </button>
    );
};

Button.defaultProps = defaultButtonProps;

export default Button;
