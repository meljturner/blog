---
title: Redeveloped Website
description: 
author: Mel Turner
date: 2020-05-29
tags: ['post']
feature: image
image: 213
caption: 
---
## Application Structure
The pf-client application drives the front-end and communicates with the api servers to obtain data.

![]({{ 72|imageUrl }})

It is written in javascript using the VueJS framework. The servers are PHP and MySQL and use the Fat-Free-Framework (F3). Each server is a separate project and folder structure within the public_html directory at burntlands.ca. The post-server api also has access. to media files that are located outside the publicly accessible folders. The media can be retrieved via the APIs. 
## Databases
The AUTH database has just a User table to hold encrypted passwords keyed by a user-id (email address)

The FAMILY database, accessed by wt-server, is a copy of the webtrees database created locally. It is a fully featured genealogy database and the webtrees app is used to update it locally. Periodically the local database is copied to the website when changes have been made; at the same time the media associated with the family tree must also be synchronized (using FTP).

The PORTFOLIO database is directly administered by the pf-client/pf-server application. It contains the blog and portfolio information and is associated with its own media folder located outside the public_html folder.
## Authorization
Each server application has access to a configuration file (in the .ini format) stored outside the public_html folder. These config files contain the database passwords and the secret keys used to generate and validate authorization tokens. Javascript Web Tokens (JWTs) are used to authorize sensitive transactions from pf-client to any of the servers.

The auth-server authenticates a user by a standard email and password interaction. Only preauthorized emails are allowed to register and must be validated by an email-delivered token on first use. Validated email-password combinations allow logins and authenticated logins generate a JWT contains an issue date and an expiry date. The lifetime is configurable for each application, normally set for 10 minutes. There is also a configurable maximum life of 1 hour.

Although the initial JWT is created by the auth-server, any server can validate the token as they each share the same secret key. Normally, when a server receives a sensitive request, it ensures that it is accompanied by a valid Authorization Bearer token. If valid, it re-issues the token with an updated expiry provided that the maximum life has not been exceeded. Thus, the token will expire unless at least one transaction is validated within the normal lifetime and will also expire if the maximum life is exceeded.


