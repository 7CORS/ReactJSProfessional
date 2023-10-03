# Guia de Rotas Hierárquicas com React-Router-Dom v6.4.1

Antes de começar, certifique-se de ter as versões corretas das dependências instaladas:

```bash
yarn add react-router-dom@6.4.1 @types/react-router-dom@5.3.3
```

Neste tutorial, vamos explorar uma estrutura de rotas hierárquicas usando o `react-router-dom` na versão `6.4.1`. Esta versão trouxe mudanças significativas em relação às versões anteriores, e vamos nos aprofundar nos principais elementos e sua importância na estrutura.

## 🌟 Componente Central: `App.tsx`

O componente `App.tsx` é o núcleo da nossa estrutura de rotas. Ele define a configuração das rotas e como elas são aninhadas.

```tsx
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<HomeBody />} />
          <Route path="promotion" element={<Promotion />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Elementos-chave:

#### `<BrowserRouter />`
Este componente envolve todas as rotas e fornece as funcionalidades de roteamento. Ele é a base para qualquer aplicativo React que utilize rotas.

#### `<Routes />`
Dentro do `<Routes />`, definimos todas as rotas do aplicativo. Cada rota é representada por um componente `<Route />`.

#### `<Route />`
O componente `<Route />` define uma rota específica. O atributo `path` especifica o caminho da URL, e o atributo `element` especifica o componente a ser renderizado para essa rota. As rotas podem ser aninhadas, permitindo uma estrutura hierárquica.

#### `<Outlet />`
O elemento `<Outlet />` é um dos mais importantes na estrutura hierárquica das rotas. Ele atua como um espaço reservado onde as sub-rotas são renderizadas. No componente `Home`, o `<Outlet />` determina onde `HomeBody` ou `Promotion` serão renderizados, dependendo da URL.

```tsx
export default function Home() {
    return (
        <>
            <Header />
            <Outlet />  {/* Aqui é onde as sub-rotas serão renderizadas */}
        </>
    );
}
```

## 📌 Hierarquia e Navegação

A estrutura proposta começa com a rota raiz (`/`). Dentro desta rota, temos duas sub-rotas:

- **Rota Principal (`/`)**: Renderiza o componente `Home`, que por sua vez inclui o `Header` e um `Outlet`.

  - **Sub-rota Padrão (`/`)**: Quando acessamos a rota principal, esta sub-rota é ativada por padrão, renderizando o componente `HomeBody`.
  
  - **Sub-rota Promoção (`/promotion`)**: Esta é uma sub-rota da rota principal, que renderiza o componente `Promotion`.

## 📝 Conclusão

A estrutura hierárquica de rotas é fundamental para criar aplicativos React escaláveis e organizados. O elemento `<Outlet />` é a peça central dessa hierarquia, permitindo a renderização de sub-rotas de forma dinâmica. Com este guia e os exemplos de código fornecidos, esperamos que a implementação seja mais clara e intuitiva. Boa codificação! 🌟