# Covalence Final Exam

&nbsp;

```

 _____                 _
/  __ \               | |
| /  \/ _____   ____ _| | ___ _ __   ___ ___
| |    / _ \ \ / / _` | |/ _ \ '_ \ / __/ _ \
| \__/\ (_) \ V / (_| | |  __/ | | | (_|  __/
 \____/\___/ \_/ \__,_|_|\___|_| |_|\___\___|


______ _             _
|  ___(_)           | |
| |_   _ _ __   __ _| |
|  _| | | '_ \ / _` | |
| |   | | | | | (_| | |
\_|   |_|_| |_|\__,_|_|


 _____
|  ___|
| |____  ____ _ _ __ ___
|  __\ \/ / _` | '_ ` _ \
| |___>  < (_| | | | | | |
\____/_/\_\__,_|_| |_| |_|



```

&nbsp;

## Objective

Your objective is to build a full-stack web application that interacts with a database of books, in the span of 4 hours. You'll need to create a REST API that can receive requests and respond appropriately, and a React front-end that can display information from your API.

## High Level Overview

[![](https://img.youtube.com/vi/H0u6CV0WQRg/0.jpg)](https://youtu.be/H0u6CV0WQRg)

## Setting up the project ahead of time

You will use this boilerplate as your starting point. Dependencies you will need have been installed, but go ahead and install any dependencies not otherwise listed in the `package.json` (you will need to install all passport libraries and types if you choose to take the exam using passport).

Using the [`setup.sql`](./setup.sql) file at the root of this repo, initialize your database tables and insert the sample data.

Setup a `.env` file and make sure that all the values in that and the config directory match.

You may also include (for the client-side) a fetch helping service, like the included sample. You may also include (for the server-side) your authentication middlewares, like a token validating middleware (sample included), login middleware, or Passport middlewares + setup (if you choose to use Passport).

**PRO-TIP: Once you have this starter project assembled, feel free to make your own github repo with _that_ as your starter template. Upon a practice or actual attempt, you can clone that instead, saving yourself the hassle of recopying the above.** Also feel free to get your Postman collection organized ahead of time.

### Testing out the API

As a bonus feature, if you would like you can import the collection from [tests/collection.json](/tests/collection.json) into Postman instead of creating it yourself. This has requests for all the endpoints required for the exam. There are also some tests built into those requests - if you'd like to take full advantage of those, make sure that your POST request to create a book also returns the `insertId` of your book as a property named `id` (e.g. `res.status(201).json({ message: "Successfully created book!", id: results.insertId })`). If you do that, you can also test out every request at once by running `npm run test` in another terminal window, and should expect to see results like [this image](/tests/image.png). If any assertions fail, you'll see them outputted above in red. You might have your API structured a little differently which is okay, but it might result in some of the tests not passing. (**These tests have no bearing on the final exam being passed/failed, they are strictly to help you check your code and ensure that everything is working in a very quick and easy manner.**) So even if you don't have all tests passing, you should at least be able to validate that a user can't log in without valid credentials, and that you at the very least can't create/update/delete a book without being logged in.

## Exam Requirements

### REST API

You'll need to connect your database to your backend, and have API routes that respond with the typical CRUD operations for books and getting categories. You'll create auth routes for your login and registration functionalities.

#### API Routes & Behaviors

-   Categories
    -   Support getting all categories
-   Books
    -   Support getting all books, creating a new book, and getting, updating, and deleting a single book
    -   Follow RESTful principles when defining routes for the above behaviors. This means that anything altering the database (creating, updating, deleting) should be behind an auth check; as a personal preference, you may also choose to protect the get requests to force users to be logged in to view book data.
-   Login
    -   Allow a user to login with email and password, and create a token upon login
-   Register
    -   Allow a user to register themselves and receive a token upon successful registration

### React Front-End

Create an React site in the client folder of your project

-   Use routing
-   Use your utility fetch service (like fetcher) to interact with your API
-   Use localStorage to handle front-end auth

#### Required Views

-   /
    -   Show a page welcoming the user to your book store
    -   Have a link to your book listings
    -   Have a link to login/register views - **NOTE**: if you would like, feel free to combine the login & register into a singular view
-   /login
    -   Show a page with input fields for email and password to login an existing user. It should send the user back to the list view upon success.
-   /register
    -   Show a page with input fields for email and password to register a user new user. It should send the user back to the list view upon success.
-   /books
    -   Show a page listing the books you have available. The listing should include the title, author, price (formatted as currency), and category name for each book.
    -   Each item in the listing should have a link to the single view
-   /books/new
    -   Show a page with input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned a category. The database will not allow a book to be created without a category.
    -   Saving the new book successfully should send the user back to the list view.
    -   Should require user to be logged in
-   /books/:id/update
    -   Show a page with input fields prepopulated with the specified book data. The page should include input fields for title, author, and price. You will also need to have a select (drop-down) box that shows all categories in the system, allowing the book to be assigned to a different category.
    -   Saving the updated book successfully should send the user back to either the single view or the list view (your choice).
    -   Should require user to be logged in.
-   /books/:id
    -   Show a page that displays information for just the indicated book. The page should include the title, author, price (formatted as currency), and category name for the book.
    -   Should also contain Edit and Delete buttons/icons
    -   Clicking the delete button should delete the book and send them to the book list
    -   Clicking the edit button should send the user to the edit book component

## Taking the Exam & Submission Instructions

Breathe, and get in a comfortable environment. Let an instructor know your official start time. You're required to do a commit _at least_ every half hour as you go along. When you are finished, make sure you have pushed your final commits to github.
