import { useEffect, useState } from "react";

let Weather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sea-surface-temperature.p.rapidapi.com/historical?latlon=25.80423%2C-80.12441&startDate=20220715&endDate=20220717",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "sea-surface-temperature.p.rapidapi.com",
              "x-rapidapi-key":
                "1359662e4emshe686760bc9f8ff4p160d89jsn2272b8e9a9f7",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-center">
      <div
        className="w-3/5 sm:w-3/4 md:w-1/2 lg:w-2/3 h-4/6 m-auto mt-6 p-8 rounded-xl shadow-lg"
        style={{ background: "rgba(255, 255, 255, 0.1)" }}
      >
        <p className="text-white">
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data available.</p>}
        </p>
      </div>
    </div>
  );
};

export default Weather;
