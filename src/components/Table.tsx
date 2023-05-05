const Table = (props: any) => {
  return (
    <div
      className="m-5 shadow-2xl rounded-[25px] text-left pb-4"
      style={{ flex: "0 60%" }}
    >
      <h4 className="p-5 text-lg text-custblue font-semibold">Recent Orders</h4>
      <table className="m-0">
        <thead className="capitalize">
          <tr>
            <th scope="col" className="px-6 py-3 w-[215px]">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Payment
            </th>
            <th scope="col" className="px-6 py-3 text-right w-[160px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {props.apiData.map((item: any, index: number) => (
            <tr
              className="capitalize hover:bg-custblue hover:text-white"
              key={index}
            >
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">${item.price}</td>
              <td className="px-6 py-4 text-center">{item.payment}</td>
              <td className="px-6 py-4 text-right">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
