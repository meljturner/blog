---
title: Dialog promises
description: 
author: Mel Turner
date: 2023-07-05
tags: ['post']
feature: image
image: 240
caption: 
---
## Functionality
A dialog may be issued by using any of three functions:

1. Notify. 
2. Confirm.
3. Answer.

Each returns a promise so the call should be *awaited*. 

## User input
All dialogs expect input from the user; **notify** requires simple acknowledgement, **confirm** requires positive confirmation or cancellation, and **answer** requires an explicit text response to a question.


