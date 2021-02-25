import React, {useState} from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람'}
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    // 배열에 새 항목을 추가할 때 push가 아닌 concat을 사용하는 이유: 새로운 배열을 만들어 불변성 유지를 위해!
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId+1);
    setNames(nextNames);
    setInputText('');
  }
  // 불변성을 유지하면서 배열의 특정 항목을 지울 때 filter를 사용!
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
