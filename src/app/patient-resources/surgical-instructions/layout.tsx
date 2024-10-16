import Layout from '@/components/website/Layout';
import Locations from '@/components/website/Locations';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-4 markdown">{children}</div>
      <div className="container mx-auto px-4 py-10 space-y-4">
        <Locations />
      </div>
    </Layout>
  );
}
