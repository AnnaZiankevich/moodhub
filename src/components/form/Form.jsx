import React from "react"
import TextArea from "../text-area/TextArea.jsx";
import GoodEmotion from "../emotions/good/GoodEmotion.jsx";
import MidEmotion from "../emotions/mid/MidEmotion.jsx";
import BadEmotion from "../emotions/bad/BadEmotion.jsx";
import SuperBadEmotion from "../emotions/super-bad/SuperBadEmotion.jsx";
import './form.scss'

function Form( {onClose} ) {

  const onClickHandler = () => {
  	onClose() 
  };

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
                        <GoodEmotion label='Радость' isChoosed={false} isDisabled={false} />
                        <GoodEmotion label='Гордость' isChoosed={false} isDisabled={false} />
                        <GoodEmotion label='Любовь' isChoosed={false} isDisabled={false} />
                        <GoodEmotion label='Надежда' isChoosed={false} isDisabled={false} />
                        <GoodEmotion label='Облегчение' isChoosed={false} isDisabled={false} />
                        <GoodEmotion label='Сострадание' isChoosed={false} isDisabled={false} />

                        <MidEmotion label='Отвращение' isChoosed={false} isDisabled={false} />
                        <MidEmotion label='Ревность' isChoosed={false} isDisabled={false} />
                        <MidEmotion label='Зависть' isChoosed={false} isDisabled={false} />

                        <BadEmotion label='Печаль' isChoosed={false} isDisabled={false} />
                        <BadEmotion label='Стыд' isChoosed={false} isDisabled={false} />
                        <BadEmotion label='Вина' isChoosed={false} isDisabled={false} />

                        <SuperBadEmotion label='Гнев' isChoosed={false} isDisabled={false} />
                        <SuperBadEmotion label='Испуг' isChoosed={false} isDisabled={false} />
                        <SuperBadEmotion label='Тревога' isChoosed={false} isDisabled={false} />
                        <SuperBadEmotion label='Обида' isChoosed={false} isDisabled={false} />
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