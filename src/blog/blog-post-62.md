---
title: API design pattern - Routes
post: 62
description: 
author: Mel Turner
date: 2023-07-20
tags: ['post']
feature: image
image: 221
caption: 
---
This post concerns naming conventions for routes for REST servers. Normally the server will be named after the object(s) it serves. That is, for an media server the principal object is *image* and that word should be used as the operation qualifier in the route. So a typical route may look like:

```html
href="//host/media-server/image/4"
```
where *host* is the domain; *media-server* is the server name; *image* is the object being served and *4* represents the id of the specific object.

## Methods 
A REST server should normally support GET, POST, PUT, PATCH and DELETE methods with the following expectations:

### GET "//host/image-server/image/4".
Serves the specific image with id=4, presumably with appropriate MIME content-type.

### POST "//host/image-server/image/3"
POST may have a body and its action depends on the body content, usually in JSON format. For example it may request the image is resized or cropped.

### PUT "//host/image-server/image"
PUT inserts a new object whose properties are given in the body. The entire object is returned including any default properties such as the assigned id (always named *id*).

### PATCH "//host/image-server/image/4"
Updates the specific image with the properties given in the body. The entire object is returned as for PUT.

### DELETE //host/image-server/image/4"
DELETE deletes the specified image.
For those requests that contain an id, the application should handle an HTTP response code of 404 meaning the requested id was not found.

## Queries
Database searches will normally return a JSON array containing multiple objects. Accordingly, the operation qualifier in the GET request is usually the plural for the objects returned. The query specification is in the query string part of the request.

```
GET href="//host/images?keywords=scene,garden"
```
A similar format may be used on rare occasions for requests that impact multiple objects.



