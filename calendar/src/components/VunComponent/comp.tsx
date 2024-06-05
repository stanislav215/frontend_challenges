import React, { useState, useEffect } from 'react';

interface VulnerableComponentProps {
    someProp: string;
}

const VulnerableFunctionalComponent: React.FC<VulnerableComponentProps> = ({ someProp }) => {
    const [data, setData] = useState<string | null>(null);
    const [input, setInput] = useState<string>('');

    useEffect(() => {
        // Simulating an API call
        const fetchData = (prop: string) => {
            // Vulnerable to XSS if prop is user-controlled
            setTimeout(() => {
                setData(`Data for ${prop}`);
            }, 1000);
        };

        fetchData(someProp);
    }, [someProp]);

    // Vulnerable to XSS if input is user-controlled and rendered directly
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    // Vulnerable to SQL injection if data is directly used in database queries
    const handleSubmit = () => {
        // Simulating a SQL injection vulnerability
        const query = `SELECT * FROM users WHERE name = '${input}'`;
        console.warn('SQL Query:', query);
        // Do not actually run this query against a database in real applications
    };

    return (
        <div>
            <h1>Vulnerable Functional React Component</h1>
            <p dangerouslySetInnerHTML={{ __html: data ? data : 'Loading data...' }}></p> {/* Vulnerable to XSS */}
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default VulnerableFunctionalComponent;
