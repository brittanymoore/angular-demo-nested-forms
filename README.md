# Angular Demo - Nested Reactive Forms

This repo demonstrates how to split an Angular Reactive form into multiple subcomponents, while
ensuring the following:
* The parent form's 'valid' state reflects the validity of all child forms.
* Child forms can be added or removed dynamically.
* Child form data is not lost when the component is destroyed.

## Multi Level Nesting

The `multi-level-nesting` branch is a reworked example that works for more than one nested level.

What's different in this branch?
- The 'root' form node (`ParentFormComponent`) calls `registerRootForm` in `FormComponentService` instead 
of subscribing. The service is completely responsible for building the form tree and caching data.
- Each node must have a `name` property. This is passed to immediate children as `parent`.
- `BaseChildFormComponent` helps reduce duplication in the child nodes.

## Using this Repository

### Get the Code

```
git clone https://github.com/brittanymoore/angular-demo-nested-forms.git
cd angular-demo-nested-forms
npm install
```

### Launch the App

To run the app:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.

### Test

```
npm test
```