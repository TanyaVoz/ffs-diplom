# Дипломный проект по профессии «Веб-разработчик»

### Проект реализован с помощью :
**Front-end (JavaScript, React, HTML):**
1. **HTML** представляет структуру страницы и содержит элементы, которые будут взаимодействовать с пользователем (например, кнопки, формы, элементы интерфейса).
2. **JavaScript и React** используются для добавления интерактивности и динамического обновления контента на странице без перезагрузки.
3. **React** компоненты представляют различные части пользовательского интерфейса  и могут включать в себя HTML-элементы и другие React-компоненты.

**Back-end (PHP 8.0.2, Laravel 9.47.0,SQLite,Composer:):**
1. **PHP** является серверным языком программирования, который обрабатывает запросы от клиента и выполняет необходимые действия на стороне сервера.
2. **Laravel**  это фреймворк на PHP, который предоставляет удобные инструменты для разработки веб-приложений, таких как маршрутизация, управление базами данных, аутентификация, и многое другое.
3. **SQLite** Встроенная база данных для хранения и управления данными приложения.
4. **Composer** Инструмент для управления зависимостями PHP. Использовался, возможно, для установки и обновления сторонних библиотек.

*В результате, приложение использует React для создания интерактивного пользовательского интерфейса. Laravel и PHP обеспечивают бэкенд-инфраструктуру, включая обработку запросов и взаимодействие с базой данных SQLite. Все это собрано воедино и управляется через Composer, который следит за зависимостями и пакетами.*
*Такое разнообразие технологий и их взаимодействие позволяют создать мощное и гибкое веб-приложение, способное обеспечить богатый пользовательский опыт.*

### Сущности

1. **Кинозал (CinemaHall)**. Помещение, в котором демонстрируются фильмы. Режим работы определяется расписанием на день.
   Зал — прямоугольное помещение, состоит из N х M различных зрительских мест.
2. **Зрительское место (Seat)**. Место в кинозале. Есть два вида: VIP и обычное (+неактивное)
3. **Фильм (Film)**. Информация о фильме заполняется администратором. Фильм связан с сеансом в кинозале.
4. **Сеанс (Session)**. Временной промежуток, во время которого в кинозале будет показываться фильм. На сеанс могут быть
   забронированы билеты.
5. **Билет (Ticket)**. QR-код c уникальным кодом бронирования, в котором обязательно указаны место, ряд, сеанс. Билет
   действителен строго на свой сеанс.

### Роли пользователей системы
* Администратор — авторизованный пользователь.
* Гость — неавторизованный посетитель сайта.

### Возможности администратора
* Создание/редактирование залов 
* Создание/редактирование фильмов 
* Настройка цен 
* Создание/редактирование расписания 

### Возможности пользователя
* Просмотр расписания 
* Просмотр фильмов 
* Выбор места в кинозале 
* Бронирование билета 

### Доступ администратора

* **login:** admin@admin.com
* **password:** admin123456789
*  переход на страничку администратора /admin/login

### Запуск:
1. 
``` 
composer install 
```

2. Настройка и установка файлa .env в корень проекта.
<br/>

3. Создание базы данных database.sqlite в папке database.

4. Создание миграции:

```
php artisan migrate
```

5. Наполнение базы данных предустановленной информацией :

```
php artisan db:seed
```

6. Установка пакетов package.json:

```
npm install
```

7. Запуск сервера:

```
php artisan serve
```



