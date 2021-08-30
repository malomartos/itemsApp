# Interview Project

## Install Steps

- Download the code
- Download the dependencies executing `npm instal` on your console.
- Run with `ionic serve` or `ng serve`

## Requirements

- The code must satisfy every acceptance criteria.
- The code must have 100% unit test coverage on the acceptance criteria. e.g. a test on the "Done" state should assert the number of items corresponds to the list of items retrieved.
- The UI/UX must match the design specification.
- The design must support a variable screen size.
- Every `Component` or `Injectable` implemented must have written documentation of its functionality.

## Brief

The requirement is to display the list of items for a merchant. The items should be loaded asynchronously, with a chance to error that must be handled.

## Design specification
![image](https://user-images.githubusercontent.com/1089379/131301106-65bbaa31-098a-4d17-a07f-88c8dd9bd20f.png)


## Aceptance criteria 
- Under the "Login" page, there should be a "Login" button.
    - Upon submitting the "Login" button, transition to the "Loading" page.
- Under the "Loading" page, show a spinner while retrieving the items.
    - In case of success, show the "Done" page with the list of items.
    - In case of an error, show the "Error" page with an error message.
- Under the "Error" page, there should be a "Retry" button.
    - Tapping that "Retry" button, attempts to retrieve the data again.
- Under the "Done" page, there should be a "Logout" button.
    - Tapping the "Logout" button, transitions to the "Login" page.


## Guidelines

1. The `items.json` describes the list of items. Each item has a title and a description.
2. The "Done" page should show a list of items, with each item showing the `title` and `description` from the JSON file.
3. The "Loading" page should have an artifical delay of 2 seconds to display a spinner.
4. Loading and receiving the items should not block the event loop.
5. The "Loading" page should fail sometimes. Use the following code to determine whether retrieving the items should fail or succeed.

```jsx
function trueSometimes(): Boolean {
    return Math.floor(Math.random() * 2) == 0 ? false : true;
}
```

 6. Your submission does not need to be "production ready". We do consider this to be a coding exercise and nothing more. Having said that, be prepared to discuss your implementation details for any decisions you have made.

 7. There are no implicit requirements. Your submission will not be rejected for not doing something that we didn't explicitly ask for.

## Data 

```
[
    {
        "title": "minim consequat",
        "description": "Est reprehenderit excepteur nostrud laboris magna. Culpa magna cupidatat eu reprehenderit exercitation tempor exercitation sit id tempor."
    },
    {
        "title": "eu proident",
        "description": "Qui mollit dolore dolor pariatur magna fugiat anim voluptate eu. Consectetur qui aliqua irure fugiat laborum quis anim."
    },
    {
        "title": "cillum in",
        "description": "Qui cillum elit mollit nulla deserunt voluptate in et esse officia. In exercitation irure fugiat officia sint do sunt adipisicing labore reprehenderit qui in."
    },
    {
        "title": "tempor sunt",
        "description": "Nulla aliquip consectetur exercitation tempor. Reprehenderit irure enim pariatur nostrud incididunt incididunt eiusmod ullamco eu mollit et."
    },
    {
        "title": "veniam cillum",
        "description": "Sunt cupidatat duis tempor excepteur pariatur excepteur velit ad non. Et consequat officia irure cupidatat cillum ex do officia enim do et velit incididunt anim."
    }
]
```
