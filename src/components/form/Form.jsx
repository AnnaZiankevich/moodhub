import React, { useState } from "react"
import TextArea from "../text-area/TextArea.jsx";
import Emotion from "../emotions/Emotion.jsx";
import './form.scss'
import { v4 as uuidv4 } from 'uuid';

function Form( { onClose, data } ) {

  const onClickHandler = () => {
  	onClose() 
  };

  const [situation, setSituation] = useState(data?.situation);
  const [thoughts, setThoughts] = useState(data?.thoughts);
  const [bodyReaction, setBodyReaction] = useState(data?.bodyReaction);
  const [behavior, setBehavior] = useState(data?.behavior);

  const handleSituationChange = (newValue) => {
    setSituation(newValue);
  };
  
  const handleThoughtsChange = (newValue) => {
    setThoughts(newValue);
  };

  const handleBodyReactionChange = (newValue) => {
    setBodyReaction(newValue);
  };
  
  const handleBehaviorChange = (newValue) => {
    setBehavior(newValue);
  };

  const choosedEmotions = data?.emotions?.map((e) => {
    return {
        title: e,
        choosed: true,
    };
  })

  const emotionsItemsList = [
    {    title: 'Радость',       },
    {    title: 'Гордость',      },
    {    title: 'Любовь',        },
    {    title: 'Надежда',       },
    {    title: 'Облегчение',    },
    {    title: 'Сострадание',   },
    {    title: 'Отвращение',    },
    {    title: 'Ревность',      },
    {    title: 'Зависть',       },
    {    title: 'Печаль'         },
    {    title: 'Стыд',          },
    {    title: 'Вина',          },
    {    title: 'Гнев',          },
    {    title: 'Испуг',         },
    {    title: 'Тревога',       },
    {    title: 'Обида',         },
  ];

  const updatedEmotionsList = emotionsItemsList.map((emotion) => {
    const choosedEmotion = choosedEmotions?.find((e) => e.title === emotion.title);
    return {
      ...emotion,
      choosed: choosedEmotion ? choosedEmotion.choosed : false,
    };
  });

  const emptyEmotionsList = emotionsItemsList.map((emotion) => {
    return {
      ...emotion,
      choosed: false,
    };
  });

  const [emotionsList, setEmotionsList] = useState(data ? updatedEmotionsList : emptyEmotionsList);
  console.log(emotionsList)
  
  const handleEmotionClick = (title) => {
    const updatedEmotions = emotionsList.map((emotion) => {
      if (emotion.title === title) {
        return {
          ...emotion,
          choosed: !emotion.choosed,
        };
      } else {
        return emotion;
      }
    });
    setEmotionsList(updatedEmotions);
  };

const saveEmotionToLocalStorage = (emotion) => {
    const emotions = JSON.parse(localStorage.getItem('emotions')) || [];
  
    const existingEmotionIndex = emotions.findIndex((item) => item.id === emotion.id);
  
    if (existingEmotionIndex !== -1) {
      emotions[existingEmotionIndex] = emotion;
    } else {
      emotions.push(emotion);
    }
  
    localStorage.setItem('emotions', JSON.stringify(emotions));
};

const today = new Date();
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear().toString();
const currentDate = `${day}.${month}.${year}`;

const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const emotion = {
      id: data ? data.id : id,
      date: currentDate,
      situation,
      thoughts,
      emotions: emotionsList.filter((e) => e.choosed).map(e => e.title),
      bodyReaction,
      behavior,
    };
    saveEmotionToLocalStorage(emotion);
    onClose();
    window.location.reload();
  };

  return (
    <div className="form">
        <div className="form__container">
            <form className='form__form'>
                <div className="form__data">
                    <TextArea label='Ситуация'
                              name='situation'
                              value={situation}
                              onChange={handleSituationChange}
                     />

                     <TextArea label='Мысли'
                              name='thoughts'
                              value={thoughts}
                              onChange={handleThoughtsChange}
                     />

                     <div className="form__emotions-group">
                        {updatedEmotionsList.map((item) => 
                            <Emotion title={item.title} 
                                     choosed={item.choosed} 
                                     disabled={false} 
                                     onClick={() => handleEmotionClick(item.title)}
                            />
                        )}
                     </div>

                    <div className="form__reaction">
                        <TextArea label='Реакция тела'
                                  name='body-reaction'
                                  value={bodyReaction}
                                  onChange={handleBodyReactionChange}
                        />

                        <TextArea label='Поведение'
                                  name='behavior'
                                  value={behavior}
                                  onChange={handleBehaviorChange}
                        />
                    </div>
                </div>
                <div className="form__buttons-group">
                    <button className="form__button-done" type="submit" onClick={handleSubmit}>Готово</button>
                    <button className="form__button-cancel" onClick={onClickHandler}>Отмена</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Form;