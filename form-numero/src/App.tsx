import { useState } from "react"
import { ChangeEventType } from "./utils/TypesEvents";

type FormData = {
  salary?: number;
}

export default function App() {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: ChangeEventType) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form>
      <input
        name="salary"
        value={formData.salary || ""}
        type="text"
        placeholder="Digite um número"
        onChange={handleInputChange}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}