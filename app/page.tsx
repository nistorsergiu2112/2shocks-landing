import { HeroScreens } from "@/components/HeroScreens";
import Link from "next/link";
import { pageMetadata, homeSchema } from "@/lib/seo";
import { guides } from "@/data/guides";
import { FAQ } from "@/components/FAQ";
import { BackToTop } from "@/components/BackToTop";
import { BoltMark } from "@/components/Brand";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { StoreBadges } from "@/components/StoreBadges";
import { contact, contactEmailUrl, riderPlans } from "@/data/site";
import s from "./home.module.css";

export const metadata = pageMetadata("2Shocks | Motorcycle Maintenance & MOT History App", "2Shocks is a motorcycle maintenance app for UK riders. Keep MOT history, service records and plans together. Coming soon to iOS and Android.", "/", true);

const questions = [
  ["Will the app show ads?", "Production advertising is not yet enabled. The planned experience lets eligible adult Free riders see a clearly labelled image-only ad after Parts guidance. Plus includes an ad-free experience. Under-18 riders, unknown-age riders and people who refuse advertising consent keep access without ads. Advertising choices and separate optional measurement controls are in Profile → Privacy."],
  ["Do I need an account?", "Yes. Free saves one active motorcycle at a time. You can remove it and save another number plate without upgrading. It includes number-plate lookup, motorcycle details, MOT history, parts matching, service plans, service-history entries, garage sheets and email enquiry preparation. Plus adds up to five active motorcycles, custom reminders, notification alerts and an ad-free experience."],
  ["Who is 2Shocks for?", "UK motorcycle owners who want to keep track of their bike and prepare for maintenance. Whether you’ve just bought a used bike or have owned yours for years, start with its registration and confirm the details we find. Coverage and available information vary by motorcycle."],
  ["What is a motorcycle passport?", "Your bike record in 2Shocks: its identity, available MOT history, the maintenance you record and your saved service plans. Official records and information you add are labelled separately. It isn’t proof of ownership or an independently verified full service history."],
  ["Can I book a garage through the app?", "Garage booking isn’t part of the first release. Free lets you prepare and save a garage sheet with requested work, notes and suggested parts. Choose a garage through Google Maps, open its listing to find its email address, then review and send the prepared enquiry in your own email app. The garage confirms availability, work, parts and price directly. Nothing is sent automatically, and replies are handled in your email app. A sheet or enquiry is not a confirmed booking."],
  ["Do I need to know which parts to choose?", "No. You can prepare a service plan without a parts shortlist. If you explore the suggested parts, treat them as a starting point: exact fitment needs confirmation before ordering or installation. Parts purchasing isn’t included in the first release."],
  ["How does parts matching work?", "2Shocks uses your resolved motorcycle details to find suggestions across parts catalogues, so you don’t have to start every search from scratch. Browse available categories, save a shortlist and include it in a service plan. Suggestions are guidance, not guaranteed fitment; confirm the exact part before ordering or installation. Basic parts matching is included in Free."],
  ["What happens if I change my bike?", "Free lets you keep one active motorcycle at a time. Remove it before saving another bike; there is no lifetime replacement limit. Removing a bike detaches it from your account and cancels its reminders. Your private service entries are not passed to another rider or recovered automatically by entering the same plate or VIN. Export records you need before removal. Plus lets you keep up to five active motorcycles together."],
  ["When can I download it?", "2Shocks is preparing for launch on iOS and Android. There isn’t a confirmed release date yet. Check this website for release updates."],
];

export default function Home() {
  return <main id="main-content" tabIndex={-1} className={s.home}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c") }} />
    <section className={s.hero}>
      <p className={s.launch}><strong><i aria-hidden="true" />Coming soon</strong><span>Built for UK riders</span></p>
      <h1>Your bike’s history.<br /><span>Your next service. Together.</span></h1>
      <p className={s.lede}>2Shocks is a motorcycle maintenance app for UK riders. Start with your registration, keep MOT history and service records together, and prepare a service plan you can show to any garage.</p>
      <div className={s.heroActions}><a className={s.button} href="#launch">Contact us</a><a className={s.secondaryLink} href="#features">Explore the app <span aria-hidden="true">↓</span></a></div>
      <p className={s.heroNote}><strong>Free for one active motorcycle</strong><span>Coming to iOS & Android · <a href="#plans">Compare Free & Plus</a></span></p>
      <HeroScreens />
      <p className={s.demoNote}>App screens & illustrative previews · Example motorcycle records</p>
    </section>

    <section id="how-it-works" className={`${s.section} ${s.intro}`}>
      <div className={s.sectionTop}><p className={s.kicker}>A record you can build on</p></div>
      <h2>Less to remember.<br /><span>More in one place.</span></h2>
      <div className={s.steps}>
        <article><div className={s.stepVisual}><span className={s.plate}>AB12 XYZ</span></div><span className={s.stepNumber}>01</span><h3>Enter your registration.</h3><p>Start with your UK number plate, then confirm the model and year. Save one active motorcycle free, and replace it when your bike changes.</p></article>
        <article><div className={s.stepVisual}><div className={s.identity}><small>YOUR MOTORCYCLE RECORD</small><strong>Honda CBR1000RR</strong><span>MOT history · Maintenance · Plans</span></div></div><span className={s.stepNumber}>02</span><h3>Keep its history together.</h3><p>Review available MOT records and add the work you’ve had done, with your notes, dates and mileage.</p></article>
        <article><div className={s.stepVisual}><div className={s.passportSymbol}><BoltMark compact={false} /><span>YOUR NEXT SERVICE<br /><strong>Go in prepared</strong></span></div></div><span className={s.stepNumber}>03</span><h3>Prepare for the next service.</h3><p>Save the work you’re considering. Keep a plan on your phone, ready for your next conversation with a garage.</p></article>
      </div>
    </section>

    <section id="features" className={`${s.section} ${s.explore}`}>
      <div className={s.sectionTop}><p className={s.kicker}>Inside the rider app</p></div>
      <h2>Your bike record.<br /><span>Easy to pick up again.</span></h2>
      <PhoneShowcase />
      <div className={s.facts}>
        <article><span>MOT RECORDS</span><h3>Check the date.<br />Revisit the advisories.</h3><p>See MOT status, expiry and history, with the latest recorded MOT mileage where available.</p></article>
        <article><span>TAX STATUS</span><h3>A live check,<br />when you need one.</h3><p>Request the current tax or SORN status from your bike record. See when information was checked.</p></article>
        <article><span>CLEAR SOURCES</span><h3>Your notes.<br />Official records.</h3><p>Know which information comes from official records and which you’ve added yourself. Gaps in the record stay clear.</p></article>
      </div>
    </section>

    <section id="parts-estimates" className={s.section}>
      <p className={s.kicker}>Included in Free</p>
      <h2>Know the parts.<br /><span>Prepare for the conversation.</span></h2>
      <p className={s.description}>Confirm your motorcycle, explore catalogue suggestions and see an estimated retail parts cost for the maintenance you’re planning.</p>
      <ul className={s.workshopBenefits}>
        <li><strong>Start with the right bike</strong><span>Confirm the model and year. Check the source and any compatibility notes.</span></li>
        <li><strong>See the materials behind the job</strong><span>Review available parts and oil suggestions alongside your planned tasks.</span></li>
        <li><strong>Understand the estimate</strong><span>Retail parts prices are a starting point, not a garage quote. Labour and other charges are separate.</span></li>
      </ul>
      <p className={s.coverageNote}>Coverage and price freshness vary by source. Confirm exact fitment before ordering or installation.</p>
    </section>

    <section className={`${s.section} ${s.matchingSection}`} id="parts-matching">
      <div className={s.sectionTop}><p className={s.kicker}>Intelligent parts matching · Included in Free</p></div>
      <h2>Start with your bike.<br /><span>Find a relevant shortlist.</span></h2>
      <p className={s.description}>2Shocks connects your motorcycle details with parts catalogues to suggest relevant parts. Less repeating your make, model and year. More useful options to discuss.</p>
      <div className={s.matchingSteps}>
        <article><span>01 / Identify</span><h3>Your motorcycle comes first.</h3><p>Start with the bike you’ve confirmed in your garage. Its resolved details guide the catalogue matching.</p></article>
        <article><span>02 / Match</span><h3>Explore suggested parts.</h3><p>Browse available matches for categories such as filters, brakes and drive components. Coverage varies by bike and catalogue.</p></article>
        <article><span>03 / Prepare</span><h3>Keep your choices together.</h3><p>Save a shortlist and bring it into your service plan, ready for a garage to confirm the exact fitment.</p></article>
      </div>
      <p className={s.coverageNote}>Matching is guidance, not a fitment guarantee. Your motorcycle’s variant and modifications matter. Parts purchasing is not included in the first release.</p>
    </section>

    <section className={s.darkSection}>
      <div className={s.darkInner}>
        <div className={s.sectionTop}><p className={s.kicker}>Service plans & garage sheets · Included in Free</p></div>
        <div className={s.partsLayout}>
          <div><h2>Your next service.<br /><span>Easier to explain.</span></h2><p className={s.description}>Create, edit, complete or cancel service plans with Free. Prepare and save a garage sheet with requested work, notes and suggested parts, ready to discuss with a garage.</p><ul className={s.checkList}><li>Prepare and save your garage sheet</li><li>Choose a garage through Google Maps and open its listing to find its email address</li><li>Review and send the prepared enquiry in your own email app</li></ul><p className={s.caution}>The garage confirms availability, work, parts and price directly. Nothing is sent automatically; replies go to your email app. Sheets and enquiries are not confirmed bookings, and parts suggestions do not guarantee fitment.</p></div>
          <div className={s.plan} aria-label="Illustrative service plan example">
            <div className={s.planHeader}><BoltMark /><span>SERVICE PLAN / EXAMPLE</span><span>HONDA</span></div>
            <h3>Oil service.<br />A few things to discuss.</h3>
            <div className={s.planRow}><span className={s.planIcon}>01</span><div><strong>Work I’m considering</strong><small>Oil and filter change</small></div></div>
            <div className={s.planRow}><span className={s.planIcon}>02</span><div><strong>My notes for the garage</strong><small>Please check the chain adjustment too.</small></div></div>
            <div className={s.planRow}><span className={s.planIcon}>03</span><div><strong>Parts to discuss</strong><small>Confirm the oil specification and filter.</small></div></div>
            <p className={s.planFooter}>Saved with the bike. Ready to show on your phone.</p>
            <small className={s.illustration}>Illustrative plan · No work requested or booked</small>
          </div>
        </div>
      </div>
    </section>

    <section id="plans" className={`${s.section} ${s.plans}`}>
      <div className={s.sectionTop}><p className={s.kicker}>Start with one bike</p></div>
      <h2>A useful record.<br /><span>Free for one motorcycle.</span></h2>
      <p className={s.description}>Sign in to start free. Production ads are not yet enabled. Eligible adult Free riders may see a labelled ad after Parts guidance when advertising launches; refusing consent keeps app access without ads. <Link href="/app-privacy">Read about your choices.</Link></p>
      <div className={s.planOptions}>
        <article className={s.freePlan}><p className={s.kicker}>2Shocks Free</p><h3>One bike. Your maintenance tools.</h3><p className={s.price}>£0 <span>/ one active motorcycle</span></p><ul><li>One active motorcycle, with free bike replacement</li><li>Confirm or correct your model and variant</li><li>Number-plate lookup, motorcycle details and MOT history</li><li>Parts matching, oil suggestions and retail parts estimates</li><li>Create, edit, complete and cancel service plans</li><li>Add service-history records</li><li>Prepare and save garage sheets with requested work, notes and suggested parts</li><li>Find garages through Google Maps and prepare an email enquiry to review and send</li></ul><a className={s.inlineLink} href="#launch">Ask about Free <span aria-hidden="true">↗</span></a></article>
        <article className={s.plusPlan}><p className={s.kicker}>2Shocks Plus</p><h3>Your bikes. All together.</h3><p className={s.price}>£{riderPlans.plusMonthlyGbp.toFixed(2)} <span>/ month</span></p><ul><li>All Free features</li><li>Up to five active motorcycles</li><li>Custom reminders and notification alerts</li><li>An ad-free experience</li></ul><a className={s.inlineLink} href="#launch">Ask about Plus <span aria-hidden="true">↗</span></a><p className={s.planNote}>Planned monthly launch price. The store confirms the price and included benefits before purchase.</p></article>
      </div>
    </section>

    <section className={`${s.section} ${s.intro}`} id="rider-guides">
      <p className={s.kicker}>Motorcycle ownership guides</p>
      <h2>Know your history.<br /><span>Plan what comes next.</span></h2>
      <div className={s.facts}>
        {guides.map(guide => <article key={guide.slug}><h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.description}</p><Link className={s.inlineLink} href={`/guides/${guide.slug}`}>Read the guide <span aria-hidden="true">↗</span></Link></article>)}
      </div>
    </section>

    <section id="questions" className={`${s.section} ${s.faq}`}>
      <div><p className={s.kicker}>Before you start</p><h2>A few useful<br /><span>answers.</span></h2><a className={s.inlineLink} href={`mailto:${contact.email}`}>Ask us a question <span aria-hidden="true">↗</span></a></div>
      <FAQ questions={questions} />
    </section>

    <section className={s.closing} id="launch">
      <div className={s.closingSymbol}><BoltMark compact={false} /></div><p className={s.kicker}>Coming soon for UK riders</p><h2>Your bike.<br />A fresh start.</h2><p>We’re getting 2Shocks ready for UK riders.<br />Have a question? Get in touch.</p>
      <a className={s.button} href={contactEmailUrl}>Contact 2Shocks</a>
      <p className={s.launchHelp}>Opens your email app. We’ll use your message to respond to your enquiry.</p>
      <p className={s.launchFallback}>Or email <a href={`mailto:${contact.email}`}>{contact.email}</a>. <a href="/privacy">Privacy policy</a></p>
      <StoreBadges />
    </section>
    <BackToTop />
  </main>;
}
