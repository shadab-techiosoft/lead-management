import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ContactPoint {
    name: string;
    designation: string;
    linkedIn: string;
    email: string;
    alternateEmail: string;
    contactNo: string;
    whatsappNo: string;
    alternateContactNo: string;
    dateCreated: string;
    timeCreated: string;
}

interface ContactPointFormProps {
    addContactPoint: (contactPoint: ContactPoint) => void;
}

const ContactPointForm: React.FC<ContactPointFormProps> = ({ addContactPoint }) => {
    const [contactPoint, setContactPoint] = useState<ContactPoint>({
        name: '',
        designation: '',
        linkedIn: '',
        email: '',
        alternateEmail: '',
        contactNo: '',
        whatsappNo: '',
        alternateContactNo: '',
        dateCreated: new Date().toISOString().split('T')[0],
        timeCreated: new Date().toISOString().split('T')[1],
    });

    const handleDateChange = (date: Date | null) => {
        setContactPoint({
            ...contactPoint,
            dateCreated: date ? date.toISOString().split('T')[0] : contactPoint.dateCreated,
        });
    };

    const handleSubmit = () => {
        addContactPoint(contactPoint);
        setContactPoint({
            name: '',
            designation: '',
            linkedIn: '',
            email: '',
            alternateEmail: '',
            contactNo: '',
            whatsappNo: '',
            alternateContactNo: '',
            dateCreated: new Date().toISOString().split('T')[0],
            timeCreated: new Date().toISOString().split('T')[1],
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-lightblue">Add Contact Point</h2>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Contact Person Name</label>
                <input
                    type="text"
                    value={contactPoint.name}
                    onChange={(e) => setContactPoint({ ...contactPoint, name: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Designation</label>
                <input
                    type="text"
                    value={contactPoint.designation}
                    onChange={(e) => setContactPoint({ ...contactPoint, designation: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">LinkedIn URL</label>
                <input
                    type="text"
                    value={contactPoint.linkedIn}
                    onChange={(e) => setContactPoint({ ...contactPoint, linkedIn: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Official Email</label>
                <input
                    type="text"
                    value={contactPoint.email}
                    onChange={(e) => setContactPoint({ ...contactPoint, email: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Alternate Email</label>
                <input
                    type="text"
                    value={contactPoint.alternateEmail}
                    onChange={(e) => setContactPoint({ ...contactPoint, alternateEmail: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Contact No</label>
                <input
                    type="text"
                    value={contactPoint.contactNo}
                    onChange={(e) => setContactPoint({ ...contactPoint, contactNo: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">WhatsApp Number</label>
                <input
                    type="text"
                    value={contactPoint.whatsappNo}
                    onChange={(e) => setContactPoint({ ...contactPoint, whatsappNo: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Alternate Contact No</label>
                <input
                    type="text"
                    value={contactPoint.alternateContactNo}
                    onChange={(e) => setContactPoint({ ...contactPoint, alternateContactNo: e.target.value })}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-lightblue">Date Created</label>
                <DatePicker
                    selected={new Date(contactPoint.dateCreated)}
                    onChange={(date) => handleDateChange(date)}
                    className="border p-2 w-full text-lightblue placeholder-lightblue"
                />
            </div>
            <div className="flex justify-between">
            <button onClick={handleSubmit} className="bg-lightblue text-whiter p-2 rounded">+ Contact Point</button>
            <button onClick={handleSubmit} className="bg-lightblue text-white p-2 rounded">Create Company</button>
            </div>
        </div>
    );
};

export default ContactPointForm;