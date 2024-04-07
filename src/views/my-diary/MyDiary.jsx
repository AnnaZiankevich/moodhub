import React, { useState, useEffect } from "react"
import TableRecord from "../../components/table-record/TableRecord.jsx";
import Form from "../../components/form/Form.jsx";
import './my-diary.scss'
import add from '../../assets/img/add-button.svg'
import { v4 as uuidv4 } from 'uuid';

function MyDiary() {

  const [isPopupVisible, setIsPopupVisible] = useState(false) 

	const openPopup = () => {
		setIsPopupVisible(true) 
	}
	const closePopup = () => {
		setIsPopupVisible(false) 
	}

  const getEmotionsFromLocalStorage = () => {
    const emotions = JSON.parse(localStorage.getItem('emotions')) || [];
    return emotions;
  };

  const [emotions, setEmotions] = useState(getEmotionsFromLocalStorage());

  const deleteEmotion = (id) => {
    localStorage.setItem(
      'emotions',
      JSON.stringify(
        JSON
          .parse(localStorage.getItem('emotions') ?? '[]')
          .filter((item) => item.id !== id),
      ))
    window.location.reload();
  };

  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const editEmotion = (id) => {
    const emotions = JSON.parse(localStorage.getItem('emotions')) || [];
    const selectedEmotion = emotions.find((emotion) => emotion.id === id);
    setSelectedEmotion(selectedEmotion);
    openPopup();
  };
  
  useEffect(() => {
    if (selectedEmotion) {
      openPopup();
    }
  }, [selectedEmotion]);

  return (
    <div className="my-diary">
      {/* {console.log('Rendered MyDiary view')} */}
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
            <div className="my-diary__add-record" onClick={openPopup}>
                <div className="my-diary__add-record-btn">
                  <img src={add} alt="add-icon" />
                </div>
                <div className="my-diary__add-record-text">
                  Добавить запись
                </div>
            </div>
            {isPopupVisible && <Form onClose={closePopup} />}
            <div className="my-diary__table-content">
              {
                !emotions ?
                <h1>Пока что Вы не сделали не одной записи в свой дневник</h1> :
                emotions.toReversed().map((dataItem) => (
                  <div key={dataItem.id}>
                    <TableRecord recordData={dataItem} 
                                 onDelete={() => deleteEmotion(dataItem.id)} 
                                 onEdit={() => editEmotion(dataItem.id)}
                    />
                  </div> 
                ))
              }
            </div>
            {isPopupVisible && <Form onClose={closePopup} data={selectedEmotion} />}
          </div>
        </div>
    </div>
  );
}

export default MyDiary;