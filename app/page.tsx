import Image from "next/image";
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
  ["Who is 2Shocks for?", "UK motorcycle owners who want to keep track of their bike and prepare for maintenance. Whether you’ve just bought a used bike or have owned yours for years, start with its registration and confirm the details we find. Coverage and available information vary by motorcycle."],
  ["What is a motorcycle passport?", "Your bike record in 2Shocks: its identity, available MOT history, the maintenance you record and your saved service plans. Official records and information you add are labelled separately. It isn’t proof of ownership or an independently verified full service history."],
  ["Can I book a garage through the app?", "Garage booking isn’t part of the first release. You’ll be able to prepare a service plan and show it on your phone when speaking to any garage. Finding workshops, requesting quotes and booking work are future plans."],
  ["Do I need to know which parts to choose?", "No. You can prepare a service plan without a parts shortlist. If you explore the suggested parts, treat them as a starting point: exact fitment needs confirmation before ordering or installation. Parts purchasing isn’t included in the first release."],
  ["What workshop information comes with Plus?", "We plan to include model-specific workshop reference in Plus, subject to a production agreement with HaynesPro. The current test integration demonstrates: available lubricant specifications, fluid capacities, torque and adjustment values, maintenance periods and service tasks, plus available repair instructions and diagrams. Search and explore the information for your motorcycle. Subjects and detail vary by model and licensed coverage; wiring diagrams are not universally included. Always confirm your exact variant and follow the complete procedure before work."],
  ["How does parts matching work?", "2Shocks uses your resolved motorcycle details to find suggestions across parts catalogues, so you don’t have to start every search from scratch. Browse available categories, save a shortlist and include it in a service plan. Suggestions are guidance, not guaranteed fitment; confirm the exact part before ordering or installation. Basic parts matching is included in Free."],
  ["What happens if I change my bike?", "The free plan allows one active motorcycle at a time. Archive that bike to free the slot for another. Plus is planned for riders who want up to five motorcycles active together."],
  ["When can I download it?", "2Shocks is preparing for launch on iOS and Android. There isn’t a confirmed release date yet. Check this website for release updates."],
];

function AppScreen({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return <div className={s.device}><Image src={`/screens/${name}.webp`} alt={alt} width={1170} height={2532} priority={priority} loading={priority ? "eager" : "lazy"} sizes="(max-width: 600px) 65vw, 340px" /></div>;
}

export default function Home() {
  return <main id="main-content" tabIndex={-1} className={s.home}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c") }} />
    <section className={s.hero}>
      <p className={s.launch}><strong><i aria-hidden="true" />Coming soon</strong><span>Built for UK riders</span></p>
      <h1>Your bike’s history.<br /><span>Your next service. Together.</span></h1>
      <p className={s.lede}>2Shocks is a motorcycle maintenance app for UK riders. Start with your registration, keep MOT history and service records together, and prepare a service plan you can show to any garage.</p>
      <div className={s.heroActions}><a className={s.button} href="#launch">Contact us</a><a className={s.secondaryLink} href="#features">Explore the app <span aria-hidden="true">↓</span></a></div>
      <p className={s.heroNote}><strong>Free for one bike at launch</strong><span>Coming to iOS & Android · <a href="#workshop">Workshop reference with Plus</a></span></p>
      <div className={s.heroScreens}>
        <figure className={s.sideScreen}><AppScreen name="add-bike" alt="2Shocks app screen for adding a motorcycle by UK registration" /><figcaption>Start with your registration</figcaption></figure>
        <figure className={s.mainScreen}><AppScreen name="home" alt="Illustrative Honda bike record with MOT information and a saved oil-service plan" priority /><figcaption>Your record. Your next service.</figcaption></figure>
        <figure className={s.sideScreen}><AppScreen name="add-history" alt="2Shocks app screen for recording completed motorcycle maintenance" /><figcaption>Keep track of completed work</figcaption></figure>
      </div>
      <p className={s.demoNote}>Actual app screens · Illustrative motorcycle records</p>
    </section>

    <section id="how-it-works" className={`${s.section} ${s.intro}`}>
      <div className={s.sectionTop}><p className={s.kicker}>A record you can build on</p></div>
      <h2>Less to remember.<br /><span>More in one place.</span></h2>
      <div className={s.steps}>
        <article><div className={s.stepVisual}><span className={s.plate}>AB12 XYZ</span></div><span className={s.stepNumber}>01</span><h3>Enter your registration.</h3><p>Start with your UK number plate. Review the motorcycle details we find, then confirm it’s your bike.</p></article>
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

    <section id="workshop" className={`${s.section} ${s.workshopSection}`}>
      <div className={s.workshopCopy}>
        <p className={s.kicker}><span className={s.plusBadge}>Plus</span> Your bike. In more detail.</p>
        <h2>Know the spec.<br /><span>Understand the service.</span></h2>
        <p className={s.description}>Which oil specification? How much fluid? What’s included in a service? Find model-specific workshop reference in the same app as your bike record.</p>
        <p className={s.workshopSource}>Preview using HaynesPro WorkshopData test access. Planned for Plus, subject to a production agreement.</p>
        <ul className={s.workshopBenefits}>
          <li><strong>Oil specifications & fluid capacities</strong><span>Find the grades, standards and fill quantities available for your motorcycle.</span></li>
          <li><strong>Service periods & task lists</strong><span>Explore maintenance intervals and open the tasks for a selected service period.</span></li>
          <li><strong>Torque, adjustments & repair information</strong><span>Look up available settings, technical notes, repair instructions and diagrams.</span></li>
        </ul>
        <a className={s.inlineLink} href="#plans">Explore Plus <span aria-hidden="true">↗</span></a>
        <p className={s.coverageNote}>Available information varies by motorcycle and licensed subject. Confirm your exact variant and follow the complete procedure before work.</p>
      </div>
      <figure className={s.workshopFigure}><div className={s.device}><Image src="/screens/workshop.png" alt="2Shocks Workshop overview for a Honda CB650F, with specification search, a section index and clearly labelled coverage gaps" width={440} height={956} sizes="(max-width: 600px) 75vw, 340px" /></div><figcaption>Workshop preview · Test integration<br />Sections and coverage vary by bike.</figcaption></figure>
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
        <div className={s.sectionTop}><p className={s.kicker}>Before the next service</p></div>
        <div className={s.partsLayout}>
          <div><h2>Your next service.<br /><span>Easier to explain.</span></h2><p className={s.description}>An oil change you’re planning. Work you want to discuss. Keep the details with your bike, so you don’t have to explain everything from memory.</p><ul className={s.checkList}><li>Save the work and notes you want to discuss</li><li>Add a suggested-parts shortlist if it’s useful</li><li>Show your plan on your phone at any garage</li></ul><p className={s.caution}>Parts suggestions need exact fitment confirmation. Your service plan is a personal planning aid, not a quote or a confirmed booking.</p></div>
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
      <h2>A useful record.<br /><span>Free for your first bike.</span></h2>
      <div className={s.planOptions}>
        <article className={s.freePlan}><p className={s.kicker}>2Shocks Free</p><h3>One bike. The essentials.</h3><p className={s.price}>£0 <span>/ one active motorcycle</span></p><ul><li>Registration-based bike identification</li><li>Available MOT history and live tax checks</li><li>Your maintenance history and service plans</li><li>Intelligent parts matching and saved shortlists</li></ul><a className={s.inlineLink} href="#launch">Contact us <span aria-hidden="true">↗</span></a></article>
        <article className={s.plusPlan}><p className={s.kicker}>2Shocks Plus</p><h3>Know more about your bike.</h3><p className={s.price}>£{riderPlans.plusMonthlyGbp.toFixed(2)} <span>/ month</span></p><p className={s.annualPrice}>Or £{riderPlans.plusAnnualGbp.toFixed(2)} / year, billed annually.</p><ul><li>Planned model-specific Workshop reference</li><li>Available fluid specs, capacities and torque settings</li><li>Maintenance periods, tasks and repair information</li><li>All Free features, across up to five active bikes</li></ul><p className={s.planNote}>Workshop requires a production data agreement; coverage varies by motorcycle. Planned launch pricing. Final price and features confirmed before purchase.</p></article>
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
