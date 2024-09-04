import { useState } from 'react';
import Head from 'next/head';
import { ClipboardCopy } from 'lucide-react';

export default function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [rfc2822, setrfc2822] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const convertTorfc2822 = () => {
    const date = new Date().toUTCString();
    const payload = `From: ${from}\r\nTo: ${to}\r\nDate: ${date}\r\nSubject: ${subject}\r\n\r\n${body}`;
    const base64Payload = Buffer.from(payload).toString('base64');
    setrfc2822(base64Payload.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rfc2822);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "rfc2822 Converter for Email APIs",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Convert email content to rfc2822 format for use with Gmail API, Outlook API, and other email services."
  };

  return (
    <div className="min-h-screen bg-yellow-300">
      <Head>
        <script type="text/javascript">
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ny3uvdkd84");
      </script>

        <title>RFC2822 Converter for Gmail, Outlook & Email APIs | Free Online Tool</title>
        <meta name="description" content="Free online tool to convert email content to rfc2822 format. Compatible with Gmail API, Outlook API, and other email services. Easy to use for developers and email automation." />
        <meta name="keywords" content="rfc2822, email converter, Gmail API, Outlook API, email automation, developer tool, base64 encoding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/rfc2822-converter" />
        <meta property="og:title" content="rfc2822 Converter for Email APIs" />
        <meta property="og:description" content="Convert email content to rfc2822 format for use with Gmail API, Outlook API, and other email services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/rfc2822-converter" />
        <meta property="og:image" content="https://yourdomain.com/rfc2822-converter-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="rfc2822 Converter for Email APIs" />
        <meta name="twitter:description" content="Convert email content to rfc2822 format for use with Gmail API, Outlook API, and other email services." />
        <meta name="twitter:image" content="https://yourdomain.com/rfc2822-converter-twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">
          rfc2822 Converter for Email APIs
        </h1>
        <p className="text-xl mb-8 text-center text-gray-700">
          Convert your email content to rfc2822 format for use with Gmail API, Outlook API, and other email services.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="from" className="block mb-2 text-lg font-semibold text-blue-600">From:</label>
            <input
              id="from"
              type="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              placeholder="Enter sender's email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="to" className="block mb-2 text-lg font-semibold text-blue-600">To:</label>
            <input
              id="to"
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              placeholder="Enter recipient's email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-lg font-semibold text-blue-600">Subject:</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
              placeholder="Enter email subject"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="body" className="block mb-2 text-lg font-semibold text-blue-600">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-3 border-2 border-blue-300 rounded-lg h-40 focus:outline-none focus:border-blue-500 text-gray-800"
              placeholder="Enter email body"
            />
          </div>
          <button
            onClick={convertTorfc2822}
            className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Convert to rfc2822
          </button>
          {rfc2822 && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-600">rfc2822 Payload:</h2>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <ClipboardCopy className="mr-2" size={20} />
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                readOnly
                value={rfc2822}
                className="w-full p-3 border-2 border-blue-300 rounded-lg h-40 bg-gray-100 text-gray-800"
              />
            </div>
          )}
        </div>
      </main>
      <footer className="mt-12 text-center text-gray-600">
        <p>Use this rfc2822 converter for Gmail API, Outlook API, and other email service integrations.</p>
        <p>Perfect for developers working on email automation and API projects.</p>
      </footer>
    </div>
  );
}