import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '由Ant Design 修改而来';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'API开放平台',
          title: 'API开放平台',
          href: 'https://github.com/Macro-Laplace/liweiAPI-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/Macro-Laplace/liweiAPI-backend',
          blankTarget: true,
        },
        {
          key: 'API开放平台',
          title: '源码',
          href: 'https://github.com/Macro-Laplace/liweiAPI-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
