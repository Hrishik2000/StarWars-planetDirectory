import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ResidentsDetails = () => {
  const location = useLocation();

  const [residents, setResidents] = useState([]);
  const [planetDetails, setPlanetDetails] = useState([]);
  const [error, setError] = useState(null);
  const planetData = location;
  const planetUrl = planetData.search.split("=")[1];

  // const params = useParams()
  // const planetUrl = params?.url
  console.log(planetUrl);

  useEffect(() => {
    async function fetchPlanetData() {
      try {
        let res = await fetch(planetUrl + "?format=json");
        res = await res.json();
        setPlanetDetails(res?.residents);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlanetData();
  }, [planetUrl]);

  useEffect(() => {
    async function fetchResidents() {
      try {
        let res = await Promise.all(
          planetDetails.map(async (url) => {
            const formattedUrl = url + "?format=json";
            console.log(formattedUrl);
            const response = await fetch(formattedUrl);
            return response.json();
          })
        );
        //console.log(res);
        setResidents(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchResidents();
  }, [planetDetails]);

  if (!planetUrl) {
    return <div className="text-white">No Residents data available.</div>;
  }

  if (error) {
    return (
      <div className="text-white">
        Error fetching residents: {error.message}
      </div>
    );
  }

  return (
    <div>
      <ul className="flex justify-center border border-red-500 m-36 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white rounded-xl shadow-2xl ">
        <li>
          <h3 className="font-bold text-xl m-2 p-2 text-center underline underline-offset-4">
            Residents Details{" "}
          </h3>

          {
            // Table to show resident details
            <table
              className="text-center"
              border={1}
              cellPadding={10}
              cellSpacing={10}
            >
              <thead>
                <tr>
                  <th>Resident Name</th>
                  <th>Resident Height</th>
                  <th>Resident Weight</th>
                  <th>Resident Gender</th>
                </tr>
              </thead>
              <tbody>
                {residents && residents.length > 0 ? (
                  residents.map((resident) => (
                    <tr
                      key={resident.url}
                      className="transition-transform transform hover:scale-105 z-10"
                      onClick={(e) => {
                        e.currentTarget.classList.add(
                          "relative",
                          "z-20",
                          "scale-110",
                          "transition-transform",
                          "transform",
                          "duration-300",
                          "ease-in-out"
                        );
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }}
                    >
                      <td>{resident.name}</td>
                      <td>{resident.height} cm</td>
                      <td>{resident.mass} kg</td>
                      <td>{resident.gender}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No residents data available</td>
                  </tr>
                )}
              </tbody>
              <tfoot></tfoot>
            </table>
          }
        </li>
      </ul>
    </div>
  );
};

export default ResidentsDetails;
