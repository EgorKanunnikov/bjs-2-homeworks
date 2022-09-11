function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift()
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
    if (!firstTime) {
      firstTime = false;
      func.apply(this, args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        firstTime = true;
        return func.apply(this, args);
      })
    }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;
  let timerHistory = true;
  wrapp.count = 0

  function wrapper(...args) {
    wrapper.count.push(args);

    if (!timerHistory) {
      func.apply(this, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timerHistory = true;
        func.apply(this, args);
      })
    }

    wrapper.count = [];
    return wrapper;
  }
}  
