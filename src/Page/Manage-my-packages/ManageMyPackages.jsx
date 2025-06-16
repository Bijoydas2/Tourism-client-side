import React, { Suspense, use, useState } from 'react';
import { AuthContext } from '../../Context/Context';
import PackageList from './PackageList';
import { packageCreatedPromise } from '../../api/packageApi';


const ManageMyPackages = () => {
    const { user } = use(AuthContext);
     const [refreshIndex, setRefreshIndex] = useState(0);
   const promise = packageCreatedPromise(user.email, user.accessToken, refreshIndex);

    return (
        <div>
            <Suspense fallback={<p className="text-center mt-10 text-blue-500">Loading packages...</p>}>
                <PackageList packageCreatedPromise={promise} 
                onConfirmed={() => setRefreshIndex((prev) => prev + 1)}
                />
                 
            </Suspense>
        </div>
    );
};

export default ManageMyPackages;
