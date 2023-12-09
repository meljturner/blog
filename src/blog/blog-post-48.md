---
title: Image Server
post: 48
description: 
author: Mel Turner
date: 2023-02-17
tags: ['post']
feature: slideshow
slides:
  - 209
  - 199
  - 227
  - 153
image: 210
caption: 
---
## Requirement
There is a need to store and serve images in a consistent way, both for access by this blog and other applications such as the *Image Atlas* project. The approach taken is to save relevant metadata in the media database and to give each image a unique id. Using the database the image can be served by providing only the id. Also, metadata such as *caption* and *description* can be provided to the application.

### Image Location
There is a configuration constant known as *mediaPath*. Images are stored in folders beneath this path. The file name for all images is of the form *IMGnnnnn.type* where *nnnnn* is the image id formatted as 5 digits and *type* is the image type (jpg, png, etc.). The folder name is specified at the time of initial upload but defaults to *$$images$$*.

In blog posts the image reference is stored as ($image$/##)where ## is the image id. When this markdown text is converted to html by the media server this reference is replaced by the full image reference, including the caption

![Hens and Chickens]({{ 209|imageUrl }})

The images are stored in folders named for the *topic* in that application and these are further described in the database file *topics*. These images can be given additional metadata, specifically *latitude* and *longitude* so that they can be displayed on a map.




