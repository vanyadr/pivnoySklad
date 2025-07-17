Готовые для интеграции компоненты:
    - basic
    - header
    - footer
    - floating cart
    - page home
    - beer card (отдельный компонент карточки, в нем можно просто посмотреть комментарии)
    - news carousel
    - leaders carousel
    - sales carousel
    - page 404
    - page catalog
    - catalog list
    - filters
    - page cart
    - cart
    - totals
    - additional carousel
    - same carousel
    - page product
    - product
    - page empty cart
    - page check order

Покомпонентный состав страниц:
*Каждая страница включает в себя компонент basic, в котором содержатся ссылки на стили и скрипты, использующиеся на каждой странице. Некоторые стили могут дублировать стили компонентов, поэтому стили компонентов лучше подключать после. Как только весь сайт будет готов, в style.css останутся только такие стили, чтобы не было дублирования со стилями компонентов
*Все скрипты включают в себя модули из js/modules

1. Главная страница
    basic -> header -> page home -> news carousel -> leaders carousel* -> sales carousel* -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

2. 404 страница
    basic -> header -> page 404 -> footer

3. Каталог
    basic -> header -> page catalog -> catalog list* -> filters -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

4. Страница товара
    basic -> header -> page product -> product -> same carousel -> footer

5. Корзина
    basic -> header -> page cart -> cart -> totals -> additional carousel* -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

5. Пустая корзина
    basic -> header -> page empty cart -> additional carousel* -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

6. Проверка заказа
    basic -> header -> page check order -> footer
