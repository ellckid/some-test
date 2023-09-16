# Тестовое задание

React ts приложение для отображения постов

### Осталось

- [X] лайки
- [ ] тесты
- [X] Classnames
- [X] вынести Img в отдельные компоненты
- [X] Типы
- [X] Redux
- [X] Поиск через запрос на сервер
- [X] Хуки (Решил убрать хук, так как не удовлетворяет правилам)
- [X] Подготовка массива не через id а через индексы
- [ ] Залить на GitHub Pages

## Ссылка на сайт

```


```

## Скрипты

```

npm i

```
Запускает приложение в дев режиме

```

npm run test

```

Запускает тесты



```

npm run build

```

Собирает приложение в папку dist



```

npm run preview

```

запускает собранное приложение



## Проблемы


- у roboto на гугл фонтс нет 600, выбрал 500



## Функциональные требования

- [X] На главной странице отображается список постов и строка поиска. Первый пост — на всю ширину, остальные — в две колонки. Оформление главной страницы и страницы поста смотреть в фигме.

- [X] Страница поста содержит картинку, заголовок, текст, блок с реакциями

- [X] Если пользователь поставил реакцию в списке постов — это должно быть отображено на странице конкретного поста, и наоборот.

- [X] Если пользователь обновил страницу, поставленные реакции не сохраняются

- [X] Фильтрация через поиск — серверная. Совпадение по полному названию поста * Данные для списка постов (в том числе с учетом фильтра), одного поста запрашиваем из https://jsonplaceholder.typicode.com/ (GET/posts, GET/posts/{id}). Посты в фигме только для примера. Их переносить НЕ нужно — все данные запрашиваем по апи.

- [X] В качестве картинок можно использовать статические изображения, или https://placehold.co/

- [X] Начальные значения счетчиков (в блоке с реакциями для каждого поста) — случайное число от 0 до 50

- [X] Не требуется pixel perfect, однако итоговый результат должен быть максимально близок к макету

Требования к стеку

* React

* Typescript

* Если нужен стейт-менеджер, просьба использовать Redux

* Допускается использование css-in-js библиотеки

* Запрещено использовать CSS фреймворки / готовые библиотеки компонентов
