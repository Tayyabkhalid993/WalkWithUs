export const metadata = {
  title: "Contact - GlobexTrader",
  description: "Contact GlobexTrader - get in touch",
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          We&apos;d love to hear from you. Send us a message using the form
          below or email us at{" "}
          <a className="text-primary" href="mailto:globextrader10@gmail.com">
            globextrader10@gmail.com
          </a>
          .
        </p>
        <ContactForm />
        <div className="mt-8 border-t pt-6 text-gray-700">
          <h2 className="text-lg font-semibold text-gray-900">
            Other ways to contact us
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              Phone:{" "}
              <a
                className="text-primary hover:underline"
                href="tel:+447877454861"
              >
                +44 7877 454861
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                className="text-primary hover:underline"
                href="https://www.facebook.com/people/Globextrader/61583442074187/?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                Globextrader on Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
