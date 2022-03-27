import React, { useEffect, useState } from 'react';
import * as C from './App.styles';
import { AddArea } from './components/AddArea';
import { Button } from './components/Button';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };
  const handleTaskChange = (id: number, done: boolean) => {
    const newList = [...list];
    for (const i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  };
  const handleClick = (item: Item) => {
    console.log(item);

    console.log(list.filter((p) => p.id !== item.id));
    setList(list.filter((p) => p.id !== item.id));
  };
  useEffect(() => {
    const storageList = localStorage.getItem('key');
    if (storageList) {
      setList(JSON.parse(storageList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(list));
  }, [list]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Todo-list</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <C.Section key={index}>
            <ListItem item={item} onChange={handleTaskChange} />
            <C.Div>
              <Button clickFn={handleClick} item={item} />
            </C.Div>
          </C.Section>
        ))}
      </C.Area>
    </C.Container>
  );
};
export default App;
