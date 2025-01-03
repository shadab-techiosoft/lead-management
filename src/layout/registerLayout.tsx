import React, { ReactNode } from 'react';

const RegisterLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className=" bg-body ">

            <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                </div>
            </main>

        </div>
    );
};

export default RegisterLayout;
