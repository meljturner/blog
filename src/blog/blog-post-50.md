---
title: Handling Images on My Website
description: 
author: Mel Turner
date: 2023-02-18
tags: ['post']
feature: image
image: 211
caption: 
---
## Requirement
My website authoring application uses markdown to prepare posts, which allows for images to be inserted using the `![]()` syntax. Consequently, we need a way to upload new images and insert them into the text.

## Selecting an Image
On the **Media** page a gallery of images can be displayed by selecting a folder in the left-hand panel. A specific image can be selected by clicking on it from the gallery, or a new image may be uploaded by clicking the *New Image* button. The selected image will also appear on the **Edit** page.

On the **Edit** page the selected image can be inserted at the cursor position by clicking the *Insert Image* button or as a featured image by clicking the *Insert Featured* button.

## User Experience
Images are organized in a one-level hierarchy by folder. Some folders (or topics) are associated with mapping while others are themes for blogs or projects or galleries. Therefore it makes sense to have a folder index to select s specific topic or theme. This then displays a carousel of images allowing a particular image and its description to be selected and displayed. Images that have geo-location metadata can be mapped, or maps can be used to geo-locate images without that information.

## Mapping
![]({{ 199|mapsUrl }}) A static map can be added as an image. If *place* has a text value it will be used to to generate a static map when **Show Map** is clicked in the **Edit** page. Alternatively, the latitude and longitude will be used to locate a static map.


