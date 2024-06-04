# Тестовое задание ****

## Начало работы
```
npm i
```
установка всех необходимых зависимостей

#### В папке db находится docker-file, я работал с ним 
```
docker-compose up --build
```
#### Для создания сидов, которые я брал в качестве тестов (Лежат в папке db/seeders)
```
npx sequelize-cli db:seed --seed Default-Values
```
#### Непосредственно запуск сервера
```
npm run dev 
```
или я пользовался отладкой
```
npm run debug
```
Все роуты я проверил, вложенность работает, middlewares тоже
Для использования роутов пользователь в сидах создаётся автоматически (он там единственный и на нёго я повесил все роли необходимые для тестов)

+ Авторизоваться по маршруту ``` /login ```
+ Скопировать токен, который вернулся в ответе
+ Вставить этот токен при переходе по необходимому маршруту в качестве заголовка Authorization и добавить перед ним тип токена bearer как на примере

``` bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJ0ZXN0MSIsInJvbGUiOlsiUk9MRV9MSVNUX1ZJRVciLCJST0xFX0FERCIsIlJPTEVfRURJVCIsIlJPTEVfREVMRVRFIl0sImlhdCI6MTcwOTY1MTExMiwiZXhwIjoxNzA5NzM3NTEyfQ.754mhtDEVOH2Zf6FhNDP7bG1MgSI9gySDEDdYGt2XgI ```

Вроде ничего не забыл!