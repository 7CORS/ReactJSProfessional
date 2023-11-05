import { useState } from "react"
import { ChangeEventType, FormEventType } from "./utils/TypesEvents";

type FormData = {
  salary?: number;
  minValue?: number;
  maxValue?: number;
}

export default function App() {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: ChangeEventType) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event: FormEventType) {
    event.preventDefault();

    // Tratando os valores enviados
    console.log("Salário: ", formData.salary || 0);
    console.log("Valor mínimo: ", formData.minValue || 0);
    console.log("Valor máximo: ", formData.maxValue || Number.MAX_VALUE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="minValue"
        value={formData.minValue || ""}
        type="text"
        placeholder="Digite o valor mínimo"
        onChange={handleInputChange}
      />
      <input
        name="maxValue"
        value={formData.maxValue || ""}
        type="text"
        placeholder="Digite o valor máximo"
        onChange={handleInputChange}
      />
      <input
        name="salary"
        value={formData.salary || ""}
        type="text"
        placeholder="Digite o salário"
        onChange={handleInputChange}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}