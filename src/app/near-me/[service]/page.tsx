  
import Link from "next/link";

interface ServicePageProps {
  params: Promise<{ service: string }>; 
}

const serviceData: Record<string, string> = {
  cook: "Cooks Near Me",
  chef: "Chefs Near Me",
  bartender: "Bartenders Near Me",
  caterer: "Caterers Near Me",
  waiter: "Waiters Near Me",
  cleaner: "Cleaners Near Me",
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params; 
  const title = serviceData[service] || "Service Not Found";

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-lg text-gray-700">
        You are viewing details for <strong>{title}</strong>.
      </p>
      <Link href={"/"} >
      <button className="bg-yellow-400 text-black font-semibold py-3 mt-4 px-8 rounded-md shadow hover:bg-yellow-500 transition">
          Book Now
        </button>
        </Link>
    </section>
    
  );
}
