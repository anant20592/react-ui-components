import Link from '../components/link/Link';

export default {
    title: 'Base/Link',
    component: Link
}
const Template = (args) => <Link {...args} />

export const Url = Template.bind({});
Url.args = {
    url: 'https:react-bootrs.io',
    children: 'This is a link'
}