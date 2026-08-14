import Image from "next/image";
import Script from "next/script";
import { BoltMark } from "@/components/Brand";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { StoreBadges } from "@/components/StoreBadges";
import { contact, siteUrl } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "2Shocks",
  operatingSystem: "iOS, Android",
  applicationCategory: "UtilitiesApplication",
  url: siteUrl,
  description: "A UK-first motorcycle ownership app for bike identity, official status, likely parts and maintenance planning.",
};

export default function Home() {
  return (
    <main id="main-content">
      <Script id="2shocks-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Built for UK motorcycle owners</p>
          <h1>Know what your bike needs <em>before it costs you.</em></h1>
          <p className="hero-lede">Your motorcycle identity, official status, likely parts and maintenance record — resolved from one registration and kept in one place.</p>
          <div className="hero-actions"><StoreBadges /><a href={`mailto:${contact.email}`} className="text-link">Questions? Email us <span aria-hidden="true">↗</span></a></div>
        </div>

        <div className="hero-art" aria-label="A preview of the 2Shocks motorcycle passport">
          <div className="passport-card">
            <div className="passport-top"><span>MOTORCYCLE PASSPORT</span><BoltMark /></div>
            <div className="passport-name"><small>2013 · Honda</small><strong>CBR1000RR</strong></div>
            <div className="demo-plate"><span>UK</span>AB12 XYZ</div>
            <div className="passport-stats"><div><small>MOT</small><strong>Record ready</strong></div><div><small>MILEAGE</small><strong>Official source</strong></div><div><small>SERVICE</small><strong>Keep organised</strong></div></div>
          </div>
          <div className="hero-phone">
            <div className="phone-shell"><div className="phone-speaker" /><div className="phone-screen"><Image src="/screens/add-bike.png" alt="2Shocks registration lookup screen" width={390} height={844} priority loading="eager" sizes="(max-width: 760px) 70vw, 300px" /></div></div>
          </div>
          <div className="art-note"><span>01</span><p>One registration.<br />One clear record.</p></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="2Shocks product principles">
        <p>Made for motorcycles</p><p>UK registration first</p><p>Truthful vehicle states</p><p>Coming soon</p>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="section-heading"><p className="eyebrow">From plate to passport</p><h2>Stop starting from zero every time your bike needs attention.</h2></div>
        <ol className="steps">
          <li><span>01</span><div><h3>Enter your registration</h3><p>Start with the detail you already know: the UK plate on your motorcycle.</p></div></li>
          <li><span>02</span><div><h3>Confirm your motorcycle</h3><p>Review the resolved make, model and identity before saving the record.</p></div></li>
          <li><span>03</span><div><h3>Understand the record</h3><p>See status, mileage, likely parts and maintenance context without searching across tabs, PDFs and forums.</p></div></li>
        </ol>
      </section>

      <section className="record-section" aria-labelledby="record-title">
        <div className="record-intro"><p className="eyebrow">What the record holds</p><h2 id="record-title">Useful motorcycle information, translated into useful decisions.</h2><p>2Shocks keeps official facts, rider-entered records and compatibility guidance clearly labelled so you know what you are looking at.</p></div>
        <div className="record-board">
          <div className="record-head"><div><span>PRIMARY MOTORCYCLE</span><strong>Honda CBR1000RR</strong></div><div className="mini-plate">AB12 XYZ</div></div>
          <div className="record-rows">
            <div><span className="record-icon">M</span><p><strong>MOT record</strong><small>Status and history from official sources</small></p><b>Review</b></div>
            <div><span className="record-icon">mi</span><p><strong>Official mileage</strong><small>Latest recorded mileage where available</small></p><b>See record</b></div>
            <div><span className="record-icon">T</span><p><strong>Tax status</strong><small>Checked live when you request it</small></p><b>Live check</b></div>
            <div><span className="record-icon">P</span><p><strong>Likely parts</strong><small>Compatibility guidance, not a fitment guarantee</small></p><b>Compare</b></div>
          </div>
          <p className="source-note"><span /> Product truth first: unavailable and stale information stays clearly marked.</p>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading"><p className="eyebrow">Built around the bike</p><h2>Ownership context that stays connected.</h2></div>
        <PhoneShowcase />
      </section>

      <section className="parts-section">
        <div className="parts-copy"><p className="eyebrow">Matched parts</p><h2>Better guidance before you buy.</h2><p>See parts commonly associated with your motorcycle, save a shortlist and carry that context into your maintenance plan.</p><div className="fitment-key"><span><i className="good" /> Recommended specification</span><span><i className="likely" /> Likely compatible</span><span><i /> Professional confirmation recommended</span></div></div>
        <div className="parts-list" aria-label="Example matched-parts presentation">
          <div className="part-card"><div className="part-code">OF</div><div><small>OIL FILTER</small><strong>Routine replacement</strong><span>Recommended specification</span></div><b>Saved</b></div>
          <div className="part-card"><div className="part-code">BP</div><div><small>BRAKE PADS</small><strong>Front set</strong><span>Likely compatible</span></div><b>Review</b></div>
          <div className="part-card muted-part"><div className="part-code">SP</div><div><small>SPARK PLUGS</small><strong>Model guidance</strong><span>Confirm before ordering</span></div><b>Check</b></div>
        </div>
      </section>

      <section className="reminders-section">
        <div className="reminders-card"><div className="reminders-copy"><p className="eyebrow">Useful, not alarming</p><h2>Reminders backed by information you can trust.</h2><p>MOT, maintenance and saved-part notifications only appear when 2Shocks has a valid source or timing you provided.</p></div><div className="notification-stack"><div><span className="notify-icon">M</span><p><strong>MOT reminder</strong><small>Based on a valid recorded date</small></p><time>09:30</time></div><div><span className="notify-icon">S</span><p><strong>Service plan</strong><small>Your saved plan is ready to review</small></p><time>Now</time></div></div></div>
      </section>

      <section className="closing-section" id="coming-soon">
        <div className="closing-mark"><BoltMark compact={false} /></div>
        <p className="eyebrow">Coming soon</p>
        <h2>Your motorcycle already has a history.<br />Give it a home.</h2>
        <p>2Shocks is being prepared for riders across the United Kingdom.</p>
        <StoreBadges />
        <a href={`mailto:${contact.email}`} className="email-pill">{contact.email}<span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
