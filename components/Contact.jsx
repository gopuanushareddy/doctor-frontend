export default function Contact() {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl mb-6">Contact Us</h2>

      <p>📍 LB Nagar, Hyderabad</p>
      <p>📞 +91-XXXXXXXXXX</p>

      <iframe
        className="w-full h-64 mt-6"
        src="https://maps.google.com/maps?q=lb%20nagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
      />
    </section>
  );
}