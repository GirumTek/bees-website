export default function ContactPage() {
  return (
    /* FIXED: Added w-full max-w-7xl mx-auto to center and widen the container */
    <div className="bg-white min-h-screen p-10 flex flex-col items-center w-full max-w-7xl mx-auto">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
      {/* FIXED: Increased max-w-2xl so text spreads out on wide screens */}
      <p className="mb-10 text-lg text-gray-600 max-w-2xl text-center">
        Interested in partnering with BEES, joining the team, or just have a question? We'd love to hear from you.
      </p>
      
      {/* Contact Card */}
      {/* FIXED: Increased to max-w-xl to fix the "zoomed in" look on large monitors */}
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl border-t-8 border-green-600">
        
        {/* Email Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📧 Email Us</h2>
          <p className="text-gray-600 mb-3">For general inquiries and partnerships:</p>
          <a 
            href="mailto:beesatuva@gmail.com" 
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