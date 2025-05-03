import { useEffect, useState } from "react"

export default function DataGrid() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3000/api');
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const json = await response.json();
              setData(json);
            } catch (error) {
                console.log(error);
            } finally {
                console.log('inisde finally');
            }
          };
          fetchData();
    }, [])

    console.log(data)
    return (
    <>
        <h1>Hello</h1>
        <p>{data.message}</p>
    </>
    )
};