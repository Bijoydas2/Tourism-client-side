import axios from 'axios';
import React, { use } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/Context';

const PackageList = ({packageCreatedPromise,onConfirmed}) => {
    const packages = use(packageCreatedPromise);
    const {user} = use(AuthContext);

    
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this package!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
     const res = await axios.delete(`https://package-booking-server.vercel.app/packages/${id}?email=${user.email}`, {
     headers: {
     Authorization: `Bearer ${user.accessToken}`
     }
    });
      if (res.data.deletedCount > 0) {
        Swal.fire('Deleted!', 'The package has been deleted.', 'success');
        onConfirmed();
      } else {
        Swal.fire('Error!', 'Failed to delete package.', 'error');
      }
    }
  };

   
    return (
          <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Packages</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg--400 shadow-4xl rounded-2xl">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th>Name</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages?.map((pkg) => (
              <tr key={pkg._id}>
                <td>{pkg.tour_name}</td>
                <td>{pkg.destination}</td>
                <td>${pkg.price}</td>
                <td>{pkg.duration}</td>
                <td className="space-x-2">

                <Link
                  to={`/updatePackage/${pkg._id}`}
                  className="btn btn-sm btn-outline btn-info mr-2"
                >
                 <FaEdit/>Edit
                </Link>

                  <button onClick={() => handleDelete(pkg._id)} className="btn btn-sm btn-error">
                  <FaTrash />Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
};

export default PackageList;