import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.labelToShow}</label>
                <input 
                    type="text"
                    // onChange = {field.input.onChange}
                    // onFocus = {field.input.onFocus}
                    // onBlur = {field.input.onBlur}
                    // instead of the above, we can just do this
                   {...field.input}
                />
                {field.meta.errors};
            </div>
        )
    }
    render() {
        return (
            <form>
                <Field
                    labelToShow="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <Field
                    labelToShow="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    labelToShow="Categories"
                    name="categoriesHaha"
                    component={this.renderField}
                />
                
            </form>
        );
    }
}

function validate(values) {
    // console.log(values)  -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};
    // Validate the inputs from 'values'
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters!";
    }
    if (!values.categoriesHaha) {
        errors.categoriesHaha = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content please";
    }
    // if errors is empty, the form is fine to submit
    // if errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);