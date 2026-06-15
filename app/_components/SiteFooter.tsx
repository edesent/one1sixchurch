import { BookOpenText, CalendarDays, Mail, MapPin, MessageCircleHeart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2>
          ONE<span>1</span>SIX
        </h2>
        <p>C H U R C H</p>
      </div>
      <div className="footer-grid">
        <div>
          <h3>Email</h3>
          <a href="mailto:info@one1sixchurch.org">
            <Mail size={18} /> info@one1sixchurch.org
          </a>
        </div>
        <div>
          <h3>Service Times</h3>
          <p>
            <CalendarDays size={18} /> Sundays at 1:00 pm
          </p>
        </div>
        <div>
          <h3>Location</h3>
          <p>
            <MapPin size={18} /> Worcester, Massachusetts
          </p>
        </div>
        <div>
          <h3>Connect</h3>
          <p>
            <MessageCircleHeart size={18} /> One Church For The One
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 One1Six Church. All rights reserved.</span>
        <span>
          <BookOpenText size={16} /> Romans 1:16
        </span>
      </div>
    </footer>
  );
}
