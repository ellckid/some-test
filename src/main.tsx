import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

// Аргумент типа "HTMLElement | null" нельзя назначить параметру типа "Element | DocumentFragment".
// Тип "null" не может быть назначен для типа "Element | DocumentFragment".ts(2345) для этого !

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode >,
)
