export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen p-10 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
      <p className="mb-10 text-lg text-gray-600 max-w-lg text-center">
        Interested in partnering with BEES, joining the team, or just have a question? We'd love to hear from you.
      </p>
      
      {/* Contact Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border-t-8 border-green-600">
        
        {/* Email Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📧 Email Us</h2>
          <p className="text-gray-600 mb-3">For general inquiries and partnerships:</p>
          <a 
            href="mailto:bees@university.edu" 
            className="inline-block bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition"
          >
            Email the Board
          </a>
        </div>
        
        <hr className="border-gray-200 my-6" />

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📱 Follow Us</h2>
          <p className="text-gray-600 mb-4">Keep up with our latest events:</p>
          
          {/* Stacked Links */}
          <div className="flex flex-col gap-3">
            <a 
              href="https://www.instagram.com/bees_at_uva/" 
              target="_blank" 
              className="text-green-700 font-bold hover:underline text-lg"
            >
              @bees_at_uva on Instagram
            </a>
            
            <a 
              href="https://www.tiktok.com/@bees_at_uva" 
              target="_blank" 
              className="text-green-700 font-bold hover:underline text-lg"
            >
              @bees_at_uva on TikTok
            </a>
          </div>
        </div>

      </div>
    </div> 
  );
}