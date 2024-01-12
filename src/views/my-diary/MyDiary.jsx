import React from "react"
import TableRecord from "../../components/table-record/TableRecord.jsx";
import './my-diary.scss'
import add from '../../assets/img/add-button.svg'

function MyDiary() {

  const data = [
    {
      id: 1, 
      date: '08.10.2023',
      situation: 'Сижу в школе, много мыслей в голове',
      thoughts: 'Я никому не нужна, никто меня не любит и не ценит. Почему так????? Чем я это заслужила',
      emotions: '%emotion%',
      bodyReaction: 'Грызу губы',
      behavior: 'Стучу ручкой по столу',
    },
    {
      id: 2, 
      date: '09.10.2023',
      situation: 'Гуляли с подругой',
      thoughts: 'Как хорошо быть рядом с человеком, который тебя понимает',
      emotions: '%emotion%',
      bodyReaction: 'Учащенное сердцебиение',
      behavior: 'Много улыбалась',
    },
    {
      id: 3, 
      date: '11.10.2023',
      situation: 'Поссорились с мамой из-за выгула собаки',
      thoughts: 'Можно не трогать меня хотя бы пять минут',
      emotions: '%emotion%',
      bodyReaction: 'Сокращение мышц рук и ног',
      behavior: 'Закрылась в комнате и плакала',
    },
  ]

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
              {
                data.toReversed().map((dataItem) => (
                  <div key={dataItem.id}>
                    <TableRecord recordData={dataItem} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyDiary;