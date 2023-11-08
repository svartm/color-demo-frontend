const backendUrl = 'https://svartm.pythonanywhere.com';

export const fetchColor = async () => {
    const response = await fetch(`${backendUrl}/getcolor`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return result.color;
};

export const checkColor = async (guess: string, answer: string) => {
    try {
        const response = await fetch(`${backendUrl}/checkcolor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guess, answer })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the server');
    }
};
