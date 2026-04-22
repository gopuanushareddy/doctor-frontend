export default function FloatingButtons() {
  return (
    <>
      <a href="tel:+91XXXXXXXXXX"
        className="fixed bottom-20 right-5 bg-blue-500 text-white p-4 rounded-full">
        📞
      </a>

      <a href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full">
        💬
      </a>
    </>
  );
}

export function FAQ() {
  const faqs = [
    {q:"When to consult fertility doctor?", a:"After 1 year trying."},
    {q:"Is IVF safe?", a:"Yes, when done properly."},
    {q:"PCOS treatment available?", a:"Yes, complete care provided."}
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl mb-8">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f,i)=>(
          <div key={i} className="p-4 shadow rounded text-left">
            <h4 className="font-semibold">{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Availability() {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="text-3xl mb-6">Doctor Availability</h2>

      <div className="max-w-md mx-auto space-y-2">
        <p>Monday - Saturday</p>
        <p>Morning: 10 AM - 1 PM</p>
        <p>Evening: 5 PM - 8 PM</p>
      </div>
    </section>
  );
}