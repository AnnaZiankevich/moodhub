import React from "react"
import GoodEmotion from "./good/GoodEmotion";
import MidEmotion from "./mid/MidEmotion";
import BadEmotion from "./bad/BadEmotion";
import SuperBadEmotion from "./super-bad/SuperBadEmotion";

function Emotion( { title, choosed, disabled } ) {

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

    console.log(searchResults);
  }
  
  function renderSwitch(param, title) {
    switch(param){
        case 'good': 
            <GoodEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
            console.log('renderSwitch function rendered GoodEmotion')
            break;
        case 'middle': 
            <MidEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
            console.log('renderSwitch function rendered MidEmotion')
            break;
        case 'bad': 
            <BadEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
            console.log('renderSwitch function rendered BadEmotion')
            break;
        case 'superbad': 
            <SuperBadEmotion label={title} isChoosed={choosed} isDisabled={disabled} />
            console.log('renderSwitch function rendered SuperBadEmotion')
            break;
        default:
            console.log(`Not found category '${param}'.`);
    } 
  }

  return (
    <div className="emotion">
        {console.log('Rendered Emotion')}
        <div className="">
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