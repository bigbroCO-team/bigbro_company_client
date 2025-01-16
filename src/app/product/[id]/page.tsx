import { ProductDetailPage } from '@/pageContainers';

const ProductDetail = ({ params: { id } }: { params: { id: string } }) => {
  return <ProductDetailPage id={id} />;
};

export default ProductDetail;
