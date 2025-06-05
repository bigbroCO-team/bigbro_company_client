import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { productUrls } from '@/libs';
import { ProductDetailPage } from '@/pageContainers';
import { ProductType } from '@/types';

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = Number((await params).id);

  const initialData: ProductType = await getProductById(id);

  return <ProductDetailPage id={id} initialData={initialData} />;
};

const getProductById = async (id: number) => {
  try {
    const sessionid = (await cookies()).get('sessionid')?.value;

    const response = await fetch(
      new URL(
        productUrls.getProductById(id),
        process.env.NEXT_PUBLIC_API_BASE_URL
      ),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `sessionid=${sessionid}`,
        },
        credentials: 'include',
      }
    );

    if (response.status === 404) {
      redirect('/main');
    }

    if (response.status === 403) {
      redirect('/login');
    }

    return response.json();
  } catch {
    redirect('/main');
  }
};

export default ProductDetail;
