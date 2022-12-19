import Alert from '../components/alert/Alert';
import {Link} from '../components/alert/Alert';
export default {
    title: 'Example/Alert',
    component: Alert,
    subcomponents: {Link}
  };

const Template = (args) => <Alert {...args} />

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    children: <div>This is an <Alert.Link url={'http://localhost'}>alert </Alert.Link></div>
};

export const Warn = Template.bind({});
Warn.args = {
    variant: 'warn',
    children: 'This is an alert'
}

export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    children: 'This is an alert'
}