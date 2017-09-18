import React from 'react'
import {Meteor} from 'meteor/meteor'
import {Form, Input, Button} from 'antd';

// import './IndexPage.css'

const FormItem = Form.Item;

class IndexForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const input = {
          values,
          createdAt: new Date()
        };
        Meteor.call('insertInput', input, (error, result) => {
          if (error) {
            alert(error.reason);
            return false;
          } else {
            alert('Success')
          }
        });
      } else {
        alert(err.reason);
        return false;
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Note"
          labelCol={{span: 6, offset: 2}}
          wrapperCol={{span: 8}}
        >
          {getFieldDecorator('note', {
            rules: [{required: true, message: 'Please input your note!'}],
          })(
            <Input/>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{span: 8, offset: 8}}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const IndexForms = Form.create()(IndexForm);

export default IndexForms