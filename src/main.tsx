import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ListPicker } from "./components/listPicker/ListPicker.tsx";
import { items } from "./ListData.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListPicker items={items}/>
  </React.StrictMode>,
)
