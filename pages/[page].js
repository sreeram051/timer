import { useRouter } from 'next/router';

const DynamicPage = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Page: {page}</h1>
    </div>
  );
};

export default DynamicPage;