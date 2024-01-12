import React from "react"
import TableRecord from "../../components/table-record/TableRecord.jsx";
import './my-diary.scss'
import add from '../../assets/img/add-button.svg'

function MyDiary() {

  return (
    <div className="my-diary">
      {console.log('Rendered MyDiary view')}
        <div className="my-diary__content">
          <div className="my-diary__header">
            Мой дневник эмоций
          </div>
          <div className="my-diary__emotions-table">
            <div className="my-diary__table-header">
              <table>
                <tbody>
                  <tr>
                    <td>Дата</td>
                    <td>Ситуация</td>
                    <td>Мысли</td>
                    <td>Эмоции</td>
                    <td>Реакция тела</td>
                    <td>Поведение</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-diary__add-record">
                <div className="my-diary__add-record-btn">
                  <img src={add} alt="add-icon" />
                </div>
                <div className="my-diary__add-record-text">
                  Добавить запись
                </div>
            </div>
            <div className="my-diary__table-content">
              <TableRecord />
              <TableRecord />
              <TableRecord />
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyDiary;