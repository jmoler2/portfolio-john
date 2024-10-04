---
title: Assignment 4 Alpha
layout: doc
---

# Abstract Data Models

# Concept 1: Sessioning

- State Variables: 
> **active**: set Session - represents all who have active sessions
> **user**: active -> one User - maps each session to the user that corresponds to it.

____
# Concept 2: Authenticating

- State Variables: 
> **registered**: set User - represents all registered users.  
> **username, password**: registered -> one String - maps the users to their username and password.


_____
# Concept 3: Travel-ing [ObjectType]

- State Variables: 
> **objects**: set ObjectType - represents all objects of a certain type
> **location**: objects -> one String - maps each object to their set location

_____
# Concept 4: Group-ing [ObjectType]

- State Variables: 
> **groups**: set Group - represents all groups
> **admin**: groups -> one User - maps each group to its user administrator
> **members**: groups -> set ObjectType - maps each group to its list of members

_____
# Concept 5: Forum-ing [ObjectType]

- State Variables: 
> **forums** : set Forum - represents all forums
> **followers**: forums -> set User - maps each forum to its list of followers
> **content**: forums -> set ObjectType - maps each forum to its content.

_____
# Concept 6: Posting [ObjectType]

- State Variables: 
> **posts**: set Post - represents all posts
> **author**: posts -> one User - maps each post to its author
> **time**: posts -> one Date - maps each post to the time it was posted
> **content**: posts -> one ObjectType - maps each post to its content.
> **replies**: posts -> set Post - maps each post to a set of posts in reply.

_____
# Concept 7: Private Messaging

- State Variables: 
> **messages**: set Message - represents the set of all messages
> **to**: messages -> one User - maps each message to its destination user
> **from**: messages -> one User - maps each message to the user it originated from.
> **content**: messages -> one String - maps each message to its string contents



# App Definition


# Data Diagram



# Links

Vercel: https://backend-john.vercel.app/
____
Github: https://github.com/jmoler2/backend-john