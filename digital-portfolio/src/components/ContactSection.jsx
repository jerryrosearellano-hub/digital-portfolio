import React, { useState } from 'react';
import { CompassRoseIcon, PirateShipIcon, AnchorIcon } from './NauticalIcons';

export default function ContactSection({ contact, personal }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Crew Invitation / Project Inquiry',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(
      `[Grand Line Portfolio] ${formState.subject} from ${formState.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Ahoy ${personal.name},\n\nSender: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setStatusMessage(
      'Your Message in a Bottle has been sealed and launched into your email client!'
    );
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-[#071324] via-[#091A32] to-[#040B16] nautical-grid border-t border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <PirateShipIcon className="w-5 h-5" />
            <span>Crew Recruitment &amp; Den Den Mushi • Chapter VI</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            {contact.invitationTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            {contact.invitationSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pirate Crew Invitation Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="parchment-card rounded-2xl p-6 sm:p-8 border-4 border-[#8B5A2B]">
              <div className="flex items-center justify-between border-b-2 border-[#8B5A2B]/50 pb-4 mb-5">
                <div>
                  <span className="text-xs font-mono-code uppercase tracking-widest text-[#7C1D21] font-bold">
                    OFFICIAL CREW INVITATION
                  </span>
                  <h3 className="font-pirate text-2xl font-black text-[#231407] mt-0.5">
                    {personal.name}
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#C81D25] border-2 border-[#D4AF37] flex items-center justify-center text-[#F5ECD7]">
                  <AnchorIcon className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#3A2714] leading-relaxed mb-6">
                {contact.availability}
              </p>

              {/* Contact Coordinates */}
              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-[#E3CFA1]/80 border border-[#8B5A2B]/50">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-[#6B4423] font-bold">
                    DEN DEN MUSHI / EMAIL
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-bold text-[#7C1D21] hover:underline break-all"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E3CFA1]/80 border border-[#8B5A2B]/50">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-[#6B4423] font-bold">
                    SIGNAL LINE / PHONE
                  </span>
                  <span className="font-bold text-[#231407]">{contact.phone}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#E3CFA1]/80 border border-[#8B5A2B]/50">
                  <span className="block text-[11px] font-mono-code uppercase tracking-wider text-[#6B4423] font-bold">
                    HOME PORT &amp; CAMPUS
                  </span>
                  <span className="font-bold text-[#231407]">{contact.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#8B5A2B]/40">
                <h4 className="font-pirate font-bold text-xs uppercase tracking-widest text-[#5C3A18] mb-3">
                  Fleet Network Channels (Editable Links)
                </h4>
                <div className="space-y-2.5">
                  {contact.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#231407] hover:bg-[#7C1D21] text-[#F5ECD7] transition-colors text-xs sm:text-sm"
                    >
                      <span className="font-pirate font-bold tracking-wider">
                        {social.name}
                      </span>
                      <span className="font-mono-code text-[#D4AF37] text-xs">
                        {social.handle} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message in a Bottle Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-[#0D2342] via-[#09182E] to-[#061020] border-2 border-[#D4AF37] p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono-code uppercase tracking-widest text-[#D4AF37]">
                    DIRECT SEA TRANSMISSION
                  </span>
                  <h3 className="font-pirate text-2xl font-bold text-[#F5ECD7] mt-0.5">
                    Dispatch Your Message in a Bottle
                  </h3>
                </div>
                <CompassRoseIcon className="w-9 h-9 text-[#D4AF37] animate-spin-slow" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono-code uppercase tracking-wider text-[#D4AF37] mb-2"
                    >
                      Your Name / Captain Title *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="e.g., Monkey D. Luffy"
                      className="w-full px-4 py-3 rounded-xl bg-[#050E1D] border border-[#D4AF37]/40 text-[#F5ECD7] placeholder-[#9FB3C8]/40 focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono-code uppercase tracking-wider text-[#D4AF37] mb-2"
                    >
                      Return Coordinates (Email) *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#050E1D] border border-[#D4AF37]/40 text-[#F5ECD7] placeholder-[#9FB3C8]/40 focus:outline-none focus:border-[#D4AF37] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono-code uppercase tracking-wider text-[#D4AF37] mb-2"
                  >
                    Voyage Purpose / Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#050E1D] border border-[#D4AF37]/40 text-[#F5ECD7] focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono-code uppercase tracking-wider text-[#D4AF37] mb-2"
                  >
                    Scroll Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Write your internship invitation, project inquiry, or message for Jerry Rose..."
                    className="w-full px-4 py-3 rounded-xl bg-[#050E1D] border border-[#D4AF37]/40 text-[#F5ECD7] placeholder-[#9FB3C8]/40 focus:outline-none focus:border-[#D4AF37] text-sm resize-y"
                  />
                </div>

                {statusMessage && (
                  <div className="p-4 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37] text-xs sm:text-sm text-[#F5ECD7]">
                    ⚓ {statusMessage}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-pirate font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#C81D25] via-[#B1161E] to-[#8F1016] text-[#F5ECD7] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(200,29,37,0.4)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <CompassRoseIcon className="w-4 h-4 text-[#D4AF37]" />
                    Launch Bottle Across the Sea
                  </button>

                  <span className="text-xs font-mono-code text-[#9FB3C8]">
                    Frontend-Only • Opens Default Mail Client
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

