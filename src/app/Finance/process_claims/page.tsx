import Client from './client';
import { getData } from '@/api/getClaims';
import { Claim } from '@/types/Claim';

async function Page() {
  const data = await getData();

  return (
    <div>
      <Client claims={data} />
    </div>
  );
}

export default Page;