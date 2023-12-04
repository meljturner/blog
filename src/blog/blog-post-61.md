---
title: Mail sender and tracker
description: 
author: Mel Turner
date: 2023-07-11
tags: ['post']
feature: image
image: 220
caption: 
---
## Needs
From time to time I need to send and html email message from my personal account and track it to see if it is opened by the receiver.

## Composition
If this site is extended I could use a clone of **EditView** (e.g. **MailView**) to construct a message, address it and send it. Posts are authored using markdown that is converted to HTML for display purposes. The same process could be used to generate the body of an email.

An existing **Mailer** model used in the auth-server can be extended to construct and send the email using CWH SMTP server.

## Tracking
The method of including an invisible image with an identifiable query parameter can be used to record when and how often the email is opened. The email can be identified by its *id*.

## Implementation
Although the implementation is similar to the maintenance of posts by *post-server*, this should be implemented within *auth-server* because it will also access user names as a source of addressees.



