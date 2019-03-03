#RESTFUL ROUTES
##A table of all 7 RESTful route
    | name    | url            | verb   | desc.                                  |
    |---------|----------------|--------|----------------------------------------|
    | INDEX   | /dogs          | GET    | List all dogs                          |
=   | NEW     | /dogs/new      | GET    | Show new dog form                      |  =
=   | CREATE  | /dogs          | POST   | Create new dog then redirect           |  =
    | SHOW    | /dogs/:id      | GET    | Shows info about one specific dog      |  
+   | EDIT    | /dogs/:id/edit | GET    | Show edit form for one dog             |  +
+   | UPDATE  | /dogs/:id      | PUT    | Update a particular dog, then redirect |  +
    | DESTROY | /dogs/:id      | DELETE | Delete a particular dog, then redirect |


##RESTful Routing

###Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

