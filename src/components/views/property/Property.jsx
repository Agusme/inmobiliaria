/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import axios from "../../../config/axiosInit";
import { STATUS } from "../../../constant";
import { Link } from "react-router-dom";
import React from 'react';

const Property = ({properties, getProperties}) => {
  const URL = import.meta.env.VITE_API_BMZ;

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Está seguro?",

      text: "Esta acción no se puede deshacer",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#3085d6",

      cancelButtonColor: "#d33",

      cancelButtonText: "Cancelar",

      confirmButtonText: "Si, Eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${URL}/${id}`);

          console.log(res);
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire("Eliminado", "La propiedade fue eliminada", "success");
            getProperties();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  const sortedImages = properties?.images
    ? [...properties.images].sort((a, b) => a.localeCompare(b))
    : [];

  return (
    <tr>
      <td>{properties?._id}</td>
      <td>{properties?.typeProperty}</td>
      <td>{properties?.typeTransaction}</td>
      <td>{properties?.bathroom}</td>
      <td>{properties?.bedroom}</td>
      <td>{properties?.location}</td>
      <td>{properties?.description}</td>
      <td>{properties?.map}</td>
      <td>
        {sortedImages.length > 0 ? (
          <div className="image-gallery">
            {sortedImages.map((image, index) => (
              <img
                key={index}
                src={image} // Asegúrate de que image sea un string con la URL de la imagen
                alt={`Property Image ${index + 1}`}
                style={{ width: "100px", height: "auto", marginRight: "5px" }}
              />
            ))}
          </div>
        ) : (
          "No images"
        )}
      </td>

      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link
            to={`/property/edit/${properties?._id}`}
            className="btn btn-warning mx-1 "
          >
            Editar
          </Link>
          <button
            className="btn btn-danger mx-1"
            onClick={() => handleDelete(properties?._id)}
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Property;
