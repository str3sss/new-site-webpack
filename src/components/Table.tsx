import React, { useEffect, useState } from 'react';
import { IData } from '../types/Data';
import getData from '../utils/GetData';
// import testData from './testData';

function Table() {
  const [data, setData] = useState<Array<IData> | []>([])
  useEffect(() => {
    const FetchData = async () => {
      const result = await getData()
      setData(result)
    }
    FetchData()
  }, [])

  if (!data) {
    return null
  }
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Website</th>
            <th>Twitter</th>
            <th>Discord</th>
            <th>Dis. Users</th>
            <th>Supply</th>
            <th>Ords lvls</th>
            <th>Transfers</th>
            <th>Floor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => (
            <tr key={elem.id}>
              <td>
                <img className='user-icon' src={elem.ico} alt="" />
              </td>
              <td>{elem.name}</td>
              <td>{elem.website}</td>
              <td>{elem.twitter}</td>
              <td>{elem.discord_link}</td>
              <td>{elem.discord_users}</td>
              <td>{elem.supply}</td>
              <td>
                {elem.ords_level_low}-{elem.ords_level_high}
              </td>
              <td>{elem.id}</td>
              <td>{elem.floor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
