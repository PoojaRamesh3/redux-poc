import Card from "../components/Card";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  interface info {
    id: number;
    name: string;
    price: number;
    payment: string;
    status: number;
  }

  const baseURL = "https://64393d6f4660f26eb1adef4f.mockapi.io/customer";
  const [data, setData] = useState<info[]>([]);

  const getData = () => {
    axios.get(baseURL).then((response: any) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {/* <Card />
        <div className="flex">
          <Table apiData={data} />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
