---
title: Promises, Promises
post: 3
description: 
author: Mel Turner
date: 2020-02-18
tags: ['post']
feature: image
image: 32
caption: caption
---
## Callback functions 
Callbacks were easy to understand conceptually but they led to awkward coding structures that were error-prone and sometimes difficult to follow. Especially challenging were situations where deeply nested or recursive logic required asynchronous calls to obtain data.

The essential concept to understand when using *asynchronous callbacks* is that the callback executes only when the asynchronous event completes *and* the call stack is empty. All the code and state that is dependent on the asynchronous action must be applied within the callback.

All updates to javascript to better handle async operations have tried to *flatten* coding structures and make them more similar to synchronous programming.
## Promises
A metaphor can help understand promises:
>Imagine going to a busy restaurant without a reservation. As there are no tables immediately available, you give them your phone number and go for a walk around the mall. When your table is ready they give you a *callback*. This works but now the restaurant has your phone number and may use it for other purposes and, as they are in control, they may not call when a table becomes available. A better restaurant would give you a small paging device that buzzes when your table is ready. In this case you are in full control and you have something that the restaurant wants returned. This device is like a *promise* to give you a table.

In this paradigm, when you call an asynchronous function it *immediately* returns a promise object that contains how to resolve or reject when the action is complete. The promise can be invoked at a convenient place in your code (you are in control) and if the asynchronous action is not yet complete (the promise is *pending*) it will wait for the outcome but the main event loop is not blocked. The promise is actually invoked by chaining a *then* or *catch* function that receives the data from the asynchronous call.
## Async, Await
An alternative formulation for working with promises is to mark the surrounding function with *async* and the calls to asynchronous actions within this function with *await*. In this case the execution of the entire surrounding function is paused (*awaited*) at each asynchronous call until the result is available. Although this variation is largely syntactic, it makes the code structure more similar to synchronous programming.

It should be noted that the use of *await* must be directly within the function marked as *async*, not within a deeper functional scope. This leads to some awkwardness when processing arrays with built-in functions such as *forEach* or *map*.  Because these typically take a function or closure as a parameter, they can break the relationship between *async* and *await*. Most often, one can use a *for...of* loop to avoid this problem.


