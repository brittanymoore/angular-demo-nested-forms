# Angular Demo - Nested Reactive Forms

This repo demonstrates how to split an Angular Reactive form into multiple subcomponents, while
ensuring the following:
* The parent form's 'valid' state reflects the validity of all child forms.
* Child forms can be added or removed dynamically.
* Child form data is not lost when the component is destroyed.

## Using this Repository

### Get the Code

```
git clone https://github.com/brittanymoore/angular-demo-nested-forms.git
cd angular-seed
npm install
```

### Launch the App

To run the app:

```
npm run start
```

Once the server is running, open a browser and navigate to localhost:3000.