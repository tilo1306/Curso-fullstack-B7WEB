/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  const categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    const errors: string[] = [];

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      // eslint-disable-next-line no-alert
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option />
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
