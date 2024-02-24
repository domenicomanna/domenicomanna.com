import PageTitle from '../../components/ui/pageTitle/pageTitle';
import SEO from '../../components/seo';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <PageTitle>Not found</PageTitle>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
