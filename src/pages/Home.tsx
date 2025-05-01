import React, { useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import { DropdownOption } from '../components/Dropdown/types'
import './Home.scss'
const Home: React.FC = () => {
    const [options, setOptions] = useState<DropdownOption[]>([
        { label: 'Yeeeah, science!', value: 'science', icon: '🧪', category: 'Education' },
        { label: 'Art', value: 'art', icon: '🎨', category: 'Education' },
        { label: 'Sport', value: 'sport', icon: '⚽', category: 'Education' },
        { label: 'Games', value: 'games', icon: '🎮' },
        { label: 'Health', value: 'health', icon: '🏥' },
    ]);

    const handleSelect = (option: DropdownOption, type: string) => {
        console.log(`${type} Selected:`, option);
    };

    const handleAdd = (newItem: DropdownOption) => {
        setOptions((prevOptions) => [...prevOptions, newItem]);
    };

    return (
        <div className='home-container' style={{ padding: '20px', display: 'flex', flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <div className='dropdown_box'>
                <h2>Simple Dropdown</h2>
                <Dropdown
                    options={options}
                    placeholder="Select..."
                    onSelect={(option) => handleSelect(option, 'Simple')}
                    enableSearch={false}
                    enableAdd={false}
                />
            </div>

            <div className='dropdown_box'>
                <h2>Dropdown with Search</h2>
                <Dropdown
                    options={options}
                    placeholder="Search..."
                    onSelect={(option) => handleSelect(option, 'Search')}
                    enableSearch={true}
                    enableAdd={false}
                />
            </div>

            <div className='dropdown_box'>
                <h2>Dropdown with Search & Add</h2>
                <Dropdown
                    options={options}
                    placeholder="Search or Add..."
                    onSelect={(option) => handleSelect(option, 'Search & Add')}
                    onAdd={handleAdd}
                    enableSearch={true}
                    enableAdd={true}
                />
            </div>
        </div>
    );
};

export default Home;