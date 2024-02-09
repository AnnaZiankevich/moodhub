import React from "react"
import TextArea from "../text-area/TextArea.jsx";
import Emotion from "../emotions/Emotion.jsx";
import './form.scss'

function Form( {onClose} ) {

  const onClickHandler = () => {
  	onClose() 
  };

  const emotionsList = [
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

  return (
    <div className="form">
        <div className="form__container">
            <form className='form__form'>
                <div className="form__data">
                    <TextArea label='Ситуация'
                              name='situation'
                              value=''
                     />

                     <TextArea label='Мысли'
                              name='thoughts'
                              value=''
                     />

                     <div className="form__emotions-group">
                        {emotionsList.map((item) => 
                            <Emotion title={item.title} choosed={false} disabled={false} />,
                        )}
                     </div>

                    <div className="form__reaction">
                        <TextArea label='Реакция тела'
                                  name='body-reaction'
                                  value=''
                        />

                        <TextArea label='Поведение'
                                  name='behavior'
                                  value=''
                        />
                    </div>
                </div>
                <div className="form__buttons-group">
                    <button className="form__button-done" type="submit">Готово</button>
                    <button className="form__button-cancel" onClick={onClickHandler}>Отмена</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Form;