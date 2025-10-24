import axios from "axios";
import React, { use } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/Context";

const PackageList = ({ packageCreatedPromise, onConfirmed }) => {
  const packages = use(packageCreatedPromise);
  const { user } = use(AuthContext);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this package!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563EB",
      cancelButtonColor: "#DC2626",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      const res = await axios.delete(
        `https://package-booking-server.vercel.app/packages/${id}?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "The package has been deleted.", "success");
        onConfirmed();
      } else {
        Swal.fire("Error!", "Failed to delete package.", "error");
      }
    }
  };

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl text-blue-600 font-bold mb-6 text-center">
        My Packages
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="table w-full">
          <thead className="bg-blue-600 text-white text-base">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th>Destination</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {packages?.map((pkg) => (
              <tr
                key={pkg._id}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="font-medium text-gray-800">{pkg.tour_name}</td>
                <td className="text-gray-600">{pkg.destination}</td>
                <td className="text-green-600 font-semibold">${pkg.price}</td>
                <td className="text-gray-600">{pkg.duration}</td>
                <td className="space-x-2 flex items-center">
                  <Link
                    to={`/updatePackage/${pkg._id}`}
                    className="btn btn-sm btn-outline btn-info gap-2"
                  >
                    <FaEdit /> Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="btn btn-sm btn-error text-white gap-2"
                  >
                    <FaTrash /> Delete
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
