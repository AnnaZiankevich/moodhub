import React from "react"
import GoodEmotion from "./good/GoodEmotion";
import MidEmotion from "./mid/MidEmotion";
import BadEmotion from "./bad/BadEmotion";
import SuperBadEmotion from "./super-bad/SuperBadEmotion";

function Emotion( { title, choosed, disabled, onClick } ) {

  let searchResults = [];
  let emotionCategory = '';

  const emotions = {
    good: [
        {
            title: 'Радость',
            value: '1',
        },
        {
            title: 'Гордость',
            value: '2',
        },
        {
            title: 'Любовь',
            value: '3',
        },
        {
            title: 'Надежда',
            value: '4',
        },
        {
            title: 'Облегчение',
            value: '5',
        },
        {
            title: 'Сострадание',
            value: '6',
        },

    ],
    middle: [
        {
            title: 'Отвращение',
            value: '7',
        },
        {
            title: 'Ревность',
            value: '8',
        },
        {
            title: 'Зависть',
            value: '9',
        },
    ],
    bad: [
        {
            title: 'Печаль',
            value: '10',
        },
        {
            title: 'Стыд',
            value: '11',
        },
        {
            title: 'Вина',
            value: '12',
        },
    ],
    superbad: [
        {
            title: 'Гнев',
            value: '13',
        },
        {
            title: 'Испуг',
            value: '14',
        },
        {
            title: 'Тревога',
            value: '15',
        },
        {
            title: 'Обида',
            value: '16',
        },
    ],
  }

  for (const category in emotions) {
    emotions[category].forEach((emotion) => {
      if (emotion.title.toLowerCase().includes(title.toLowerCase())) {
        searchResults.push(emotion);
        emotionCategory = category;
      }
    });
  }
  
  function renderSwitch(param, title) {
    switch(param){
        case 'good': 
            // console.log('renderSwitch function rendered GoodEmotion')
            return <GoodEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
        case 'middle': 
            // console.log('renderSwitch function rendered MidEmotion')
            return <MidEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
        case 'bad': 
            // console.log('renderSwitch function rendered BadEmotion')
            return <BadEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
        case 'superbad': 
            // console.log('renderSwitch function rendered SuperBadEmotion')
            return <SuperBadEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
        default:
            console.log(`Not found category '${param}'.`);
    } 
  }

  return (
    <div className="emotion" onClick={() => onClick()}>
        <div className="emotion__body">
            {searchResults.map((emotion) => (
                <div key={emotion.value}>
                    {renderSwitch(emotionCategory, emotion.title)}
                </div>
            ))}
        </div>
    </div>
  );
}

export default Emotion;