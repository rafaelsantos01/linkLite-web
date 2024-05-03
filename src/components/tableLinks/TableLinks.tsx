import { useEffect, useState } from "react";
import { columns, URL } from "./columns";
import { DataTable } from "./data-table";

async function fetchData(): Promise<URL[]> {
  return [
    {
      id: "728ed52f",
      short_link: "https://example.com/728ed52f",
      original_link:
        "https://example.com/728ed52fasdaasddddddddddddddddddddasddddddddddddddddasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      qrCode: "https://example.com/728ed52f",
      clicks: 10,
      status: true,
      date: "2021-10-10",
      observation: "Observação1",
    },
    // {
    //   id: "728ed52f",
    //   short_link: "https://example.com/728ed52f",
    //   original_link: "https://example.com/728ed52fasdas",
    //   qrCode: "https://example.com/728ed52f",
    //   clicks: 10,
    //   status: false,
    //   date: "2021-10-10",
    //   observation: "Observação2",
    // },
    // {
    //   id: "728ed52f",
    //   short_link: "https://example.com/728ed52f",
    //   original_link: "https://example.com/728ed52fasdas",
    //   qrCode: "https://example.com/728ed52f",
    //   clicks: 10,
    //   status: true,
    //   date: "2021-10-10",
    //   observation: "Observação",
    // },
    // {
    //   id: "728ed52f",
    //   short_link: "https://example.com/728ed52f",
    //   original_link: "https://example.com/728ed52fasdas",
    //   qrCode: "https://example.com/728ed52f",
    //   clicks: 10,
    //   status: true,
    //   date: "2021-10-10",
    //   observation: "Observação",
    // },
    // {
    //   id: "728ed52f",
    //   short_link: "https://example.com/728ed52f",
    //   original_link: "https://example.com/728ed52fasdas",
    //   qrCode: "https://example.com/728ed52f",
    //   clicks: 10,
    //   status: true,
    //   date: "2021-10-10",
    //   observation: "Observação",
    // },
    // {
    //   id: "728ed52f",
    //   short_link: "https://example.com/728ed52f",
    //   original_link: "https://example.com/728ed52fasdas",
    //   qrCode: "https://example.com/728ed52f",
    //   clicks: 10,
    //   status: true,
    //   date: "2021-10-10",
    //   observation: "Observação",
    // },
  ];
}

export default function TableLinks() {
  const [data, setData] = useState<URL[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      await fetchData().then((data) => setData(data));
    };

    fetchAndSetData();
  }, []);

  return (
    <div className="mt-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

// async function getData(): Promise<URL[]> {
//   return [
//     {
//       id: "728ed52f",
//       short_link: "https://example.com/728ed52f",
//       original_link:
//         "https://example.com/728ed52fasdaasddddddddddddddddddddasddddddddddddddddasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//       qrCode: "https://example.com/728ed52f",
//       clicks: 10,
//       status: true,
//       date: "2021-10-10",
//       observation: "Observação1",
//     },
//   ];
// }

// export default async function TableLinks() {
//   const data = await getData();

//   return (
//     <div className="mt-10">
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
