import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { addressUrls } from '@/libs';
import { AddressWritePage } from '@/pageContainers';

const AddressWrite = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const id = (await searchParams).id
    ? Number((await searchParams).id)
    : undefined;

  if (id) {
    const address = await getAddressById(id);

    return <AddressWritePage id={id} address={address} />;
  }

  return <AddressWritePage />;
};

const getAddressById = async (id: number) => {
  try {
    const sessionid = (await cookies()).get('sessionid')?.value;

    const response = await fetch(
      new URL(
        addressUrls.getAddressById(id),
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
      redirect('/address');
    }

    if (response.status === 403) {
      redirect('/login');
    }

    console.log(response);

    return response.json();
  } catch {
    redirect('/address');
  }
};

export default AddressWrite;
