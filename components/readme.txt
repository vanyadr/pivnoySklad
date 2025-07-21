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
    - page history of orders
    - page favourites
    - page about us
    - cookie

Все изображения стоит конвертнуть в webp и сжать, чтобы ускорить загрузку страниц (кроме тех, что в SVG или PNG)

Покомпонентный состав страниц:
*Каждая страница включает в себя компонент basic, в котором содержатся ссылки на стили и скрипты, использующиеся на каждой странице. Некоторые стили могут дублировать стили компонентов, поэтому стили компонентов лучше подключать после. Как только весь сайт будет готов, в style.css останутся только такие стили, чтобы не было дублирования со стилями компонентов
*Все скрипты включают в себя модули из js/modules

1. Главная страница
    basic -> page home -> header -> news carousel -> leaders carousel* -> sales carousel* -> cookie -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

2. 404 страница
    basic -> page 404 -> header -> cookie -> footer

3. Каталог
    basic -> page catalog -> header -> filters -> catalog list* -> cookie -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

4. Страница товара
    basic -> page product -> header -> product -> same carousel -> cookie -> footer

5. Корзина
    basic -> page cart -> header -> cart -> totals -> additional carousel* -> cookie -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

5. Пустая корзина
    basic -> page empty cart -> header -> additional carousel* -> cookie -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

6. Проверка заказа
    basic -> page check order -> header -> cookie -> footer

7. История заказов
    basic -> page history of orders -> header -> cookie -> footer

8. Избранное
    basic -> header -> page favourites* -> cookie -> footer
    *включает в себя компонент карточки товара, в котором даны комментарии

9. О нас
    basic -> header -> page about us -> cookie -> footer
