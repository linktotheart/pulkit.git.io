---
date: 2021-08-09T13:50:33Z
categories:
- react
- hooks
- javascript
title: 'useAxios: React hook for any Axios call'
thumbnail: "/uploads/hooks.png"
excerpt: useAxios() is a React hook that simplifies async fetching and state management.

---
### Usage

    import React, { useState } from "react";
    import { useAxios } from "./use-axios";
    
    const App = () => {
      const [id, setId] = useState("1");
      const axiosConfig = { method: "get", timeout: 2500 };
      const { isLoading, isError, response } = useAxios(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
        axiosConfig
      );
    
      return (
        {response?.data && <div>{data}</div>}
        {isLoading && <LoadingIcon/>}
        {isError && <ErrorMsg/>}
      );
    };

### Overview

`useAxios` is an [Axios](https://github.com/axios/axios)-specific implementation of my generic [useAsyncFunc](https://github.com/kwhitejr/use-async-func) React hook.

One issue for async operations is when the return value is no longer required. For example, the user leaves the page (the requesting component is unmounted) or the user provides a new search query (the old search query's response is superfluous).

You might see an error like this:

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

### Conclusion

It is good to cancel superfluous requests so that they do not become memory leaks! I hope you find this example helpful.