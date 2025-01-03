export interface ContactPoint {
    name: string;
    designation: string;
    linkedIn: string;
    email: string;
    alternateEmail: string;
    ContactPersonName: string;
    contactNo: string;
    whatsappNo: string;
    alternateContactNo: string;
    dateCreated: string;
    timeCreated: string;
}

export interface Company {
    id: number;
    name: string;
    industry: string;
    product: string;
    contactPoints: ContactPoint[];
}

export interface Industry {
    id: string;
    name: string;
}

export interface CompanyFormProps {
    companies: Company[];
    industries: Industry[];
    addCompany: (name: string, industry: string, product: string) => void;
    addContactPoint: (contactPoint: ContactPoint) => void;
}