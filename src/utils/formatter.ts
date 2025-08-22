export const formatPhone = (value: string): string => {
    const cleaned = value.replace(/\D/g, '');
    const limited = cleaned.slice(0, 11);

    if (limited.length === 10) {
        return limited.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    if (limited.length === 11) {
        return limited.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return limited;
};

export const cleanPhone = (value: string): string => {
    return value.replace(/\D/g, '');
};
