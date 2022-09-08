function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let objectInCache = cache.find((item) => item.hash == hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache !== undefined) { // если элемент не найден
      console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.result;
    }
    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({ hash, result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  let timerId = null;
  let firstTime = true;
  function wrapper(...args) {
    if (firstTime) {
      firstTime = false;
      func.apply(this, args)
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        f.apply(this, args);
        console.timeEnd("time");
      })
    }

    return wrapper;
  }
}

function debounceDecorator2(func) {
  // Ваш код
}
