
const ContactPage = () => {
  return (
    <div class="max-w-6xl mx-auto my-10 p-5 bg-white shadow-md rounded-lg sm:mt-16">
      <h1 class="text-3xl font-bold text-center mb-6">Contact Us</h1>

      <div class="flex flex-col gap-3 py-5 pl-2 sm:pl-6 overflow-hidden">
        <div class="flex flex-col gap-5 items-start w-full">
          <h2 class="text-xl font-bold">We’d Love to Hear from You</h2>
          <p class="text-gray-700">
            At Siddhi Creatives, we value your feedback and inquiries. Whether you have questions about our products, need assistance with an order, or want to learn more about our services, our team is here to help. Reach out to us through the contact information below, and we'll make sure to get back to you as soon as possible.
          </p>

          <h3 class="text-lg font-semibold mt-4">Our Office</h3>
          <p class="text-gray-700">
            Visit us at:
            <br />
            <strong>Siddhi Creatives</strong>
            <br />
            22 Dukan Govind Pura, Sanganer, Jaipur
            <br />
            Rajasthan, India
          </p>

          <h3 class="text-lg font-semibold mt-4">Customer Support</h3>
          <p class="text-gray-700">
            For any inquiries, product support, or order assistance, feel free to get in touch with us through the following methods:
          </p>
          <ul class="list-disc list-inside text-gray-700">
            <li><strong>Email:</strong> <a href="mailto:support@siddhicreatives.com" class="text-blue-500 hover:underline">support@siddhicreatives.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919057810542" class="text-blue-500 hover:underline">+91 90578 10542</a></li>
            <li><strong>Working Hours:</strong> Monday to Friday, 10:00 AM – 6:00 PM (IST)</li>
          </ul>

          <h3 class="text-lg font-semibold mt-4">We’re Here to Help!</h3>
          <p class="text-gray-700">
            If you have any questions about our products or services, or if you simply want to connect with us, don’t hesitate to reach out. We’re committed to providing you with the best experience and are happy to assist with anything you need.
          </p>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;



