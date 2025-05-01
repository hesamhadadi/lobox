import React, { useState, useEffect, useRef } from 'react';

import { DropdownProps, DropdownOption } from './types';
import './Dropdown.scss';

const Dropdown: React.FC<DropdownProps> = ({
    options,
    placeholder = 'Select...',
    onSelect,
    onAdd,
    enableSearch = false,
    enableAdd = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    // filter items by search query and filter it with exclude items

    const filteredOptions = enableSearch
        ? options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : options;

    // set category and make push them to seprated categories

    const groupedOptions = filteredOptions.reduce((acc, option) => {
        const category = option.category || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(option);
        return acc;
    }, {} as Record<string, DropdownOption[]>);


    // handle select option by click and event

    const handleSelectOption = (option: DropdownOption) => {
        onSelect(option);
        setSearchTerm(option.label);
        setIsOpen(false);
    };


    // handle to add items too list by checking enable and categories

    const handleAddItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (enableAdd && e.key === 'Enter' && searchTerm.trim() !== '') {
            const newItem: DropdownOption = {
                label: searchTerm.trim(),
                value: searchTerm.trim().toLowerCase().replace(/\s+/g, '-'),
                category: 'Custom',
            };
            onAdd?.(newItem);
            setSearchTerm('');
            setIsOpen(false);
        }
    };

    // handle to click outside the box to close the lsit

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-input">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={enableAdd ? handleAddItem : undefined}
                    placeholder={placeholder}
                    readOnly={!enableSearch}
                    className={enableSearch ? '' : 'readonly'}
                />
                <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>↑</span>
            </div>

            {isOpen && (
                <div className="dropdown-menu" >
                    {Object.entries(groupedOptions).map(([category, items]) => (
                        <div key={category} className="dropdown-category">
                            <div className="category-title">{category}</div>
                            {items.map((option) => (
                                <div
                                    key={option.value}
                                    className="dropdown-item"
                                    onClick={() => handleSelectOption(option)}
                                >
                                    {option.icon && <span className="dropdown-icon">{option.icon}</span>}
                                    <span className="dropdown-label">{option.label}</span>
                                    {searchTerm.toLowerCase() === option.label.toLowerCase() && (
                                        <span className="dropdown-check">✔</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                    {enableAdd && searchTerm && filteredOptions.length === 0 && (
                        <div className="dropdown-item add-new">
                            <span className="dropdown-label">
                                {`for add ${searchTerm} press enter`}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;