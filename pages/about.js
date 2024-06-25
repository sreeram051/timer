export async function getStaticProps() {
    return {
      props: {
        info: "This is a simple countdown timer created with Next.js.",
      },
    };
  }
  
  export default function About({ info }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">{info}</h1>
      </div>
    );
  }