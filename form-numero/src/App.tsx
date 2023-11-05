import { useState } from "react"

type FormData = {
  salary: number;
}

export default function App() {

  const [formData, setFormData] = useState<FormData>({
    salary: 0
  });

  return (
    <form>
      <input
        name="salary"
        value={formData.salary}
        type="text"
        placeholder="Digite um número"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}