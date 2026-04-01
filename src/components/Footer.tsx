import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-copper/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-copper flex items-center justify-center text-charcoal font-serif font-bold text-xl">
                D
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-cream">
                  Duke&apos;s
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-copper/80">
                  Alehouse &amp; Kitchen
                </span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Eco-conscious gastropub featuring gourmet burgers, craft beer, and
              comfort food made with sustainable, locally-sourced ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-copper font-serif text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-cream/60 hover:text-copper transition-colors text-sm">Home</Link>
              <Link href="/menu" className="text-cream/60 hover:text-copper transition-colors text-sm">Menu</Link>
              <Link href="/about" className="text-cream/60 hover:text-copper transition-colors text-sm">About</Link>
              <Link href="/contact" className="text-cream/60 hover:text-copper transition-colors text-sm">Contact</Link>
              <a href="https://dukes.securetree.com/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-copper transition-colors text-sm">Gift Cards</a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-copper font-serif text-lg mb-4">Hours</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between text-cream/60">
                <span>Monday</span>
                <span>12pm – 1am</span>
              </div>
              <div className="flex justify-between text-red-400/80">
                <span>Tuesday</span>
                <span>CLOSED</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Wednesday</span>
                <span>12pm – 1am</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Thursday</span>
                <span>12pm – 1am</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Friday</span>
                <span>12pm – 1am</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Saturday</span>
                <span>12pm – 1am</span>
              </div>
              <div className="flex justify-between text-cream/60">
                <span>Sunday</span>
                <span>12pm – 1am</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-copper font-serif text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-cream/60">
              <a
                href="https://maps.google.com/?q=110+N+Main+St+Crystal+Lake+IL+60014"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-copper transition-colors"
              >
                110 N Main St<br />Crystal Lake, IL 60014
              </a>
              <a href="tel:8153569980" className="hover:text-copper transition-colors">
                (815) 356-9980
              </a>
            </div>
            {/* Social placeholder */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/dukesalehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center text-copper hover:bg-copper hover:text-charcoal transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/dukesalehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center text-copper hover:bg-copper hover:text-charcoal transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.yelp.com/biz/dukes-alehouse-and-kitchen-crystal-lake"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center text-copper hover:bg-copper hover:text-charcoal transition-all"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.271 10.54c-.238-.198-.532-.296-.882-.296-.31 0-.554.08-.731.237-.177.158-.266.37-.266.636 0 .253.089.458.266.616.178.158.421.237.731.237.35 0 .644-.098.882-.296.237-.197.356-.44.356-.729 0-.289-.119-.532-.356-.405zM20.904 14.403l-3.563-1.391c-.35-.138-.658-.169-.925-.094-.267.075-.463.244-.588.506l-1.794 3.75c-.125.263-.131.513-.019.75.113.238.313.388.6.45l4.144.888c.275.063.519.013.731-.15.213-.163.319-.388.319-.675 0-.088-.013-.175-.037-.263l-.75-3c-.063-.25-.188-.45-.375-.6-.188-.15-.394-.2-.619-.15l.875.35c-.025-.138-.087-.263-.188-.375zM10.35 13.403c.35.138.658.169.925.094.267-.075.463-.244.588-.506l1.794-3.75c.125-.263.131-.513.019-.75-.113-.238-.313-.388-.6-.45l-4.144-.888c-.275-.063-.519-.013-.731.15-.213.163-.319.388-.319.675 0 .088.013.175.037.263l.75 3c.063.25.188.45.375.6.188.15.394.2.619.15l-.875-.35c.025.138.087.263.188.375l3.375 1.387z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-copper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Duke&apos;s Alehouse &amp; Kitchen. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Crystal Lake&apos;s premier gastropub since 2009
          </p>
        </div>
      </div>
    </footer>
  );
}
