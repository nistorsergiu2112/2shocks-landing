import { HeroScreens } from "@/components/HeroScreens";
import Link from "next/link";
import { pageMetadata, homeSchema } from "@/lib/seo";
import { guides } from "@/data/guides";
import { FAQ } from "@/components/FAQ";
import { BackToTop } from "@/components/BackToTop";
import { BoltMark } from "@/components/Brand";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { StoreBadges, GooglePlayBadge } from "@/components/StoreBadges";
import { contact, googlePlayUrl, riderPlans } from "@/data/site";
import s from "./home.module.css";

export const metadata = pageMetadata("Motorbike Maintenance App UK & Service Log | 2Shocks", "Keep service history, available MOT records, mileage and plans in one motorbike maintenance app for UK riders. Start free on Android. iOS coming soon.", "/", true);

const questions = [
  ["Is 2Shocks free?", "Yes. Start free with one active motorcycle, service history, available MOT records, mileage, service plans, garage sheets and automatic bike alerts. Remove your active bike and add another without upgrading. Plus adds up to 20 active motorcycles, custom reminders and an ad-free experience."],
  ["Do I need an account?", "Yes. An account and internet connection are required. Free saves one active motorcycle at a time. You can remove it and save another number plate without upgrading. It includes number-plate lookup, motorcycle details, MOT history, parts matching, service plans, service-history entries, garage sheets, automatic bike alerts and email enquiry preparation. Plus adds up to 20 active motorcycles, custom reminders and an ad-free experience."],
  ["When can I download it?", "Android is publicly available on Google Play. Use any Google Play link on this page, including from an iPhone browser, to view the Android listing. iOS is coming soon; public App Store availability has not been verified. Vehicle lookup is designed for UK motorcycle registrations; data coverage varies by motorcycle."],
  ["Who is 2Shocks for?", "UK motorcycle owners who want to keep track of their bike and prepare for maintenance. Whether you’ve just bought a used bike or have owned yours for years, start with its registration and confirm the details we find. Coverage and available information vary by motorcycle."],
  ["Will the app show ads?", "Advertising is enabled in the current production build configuration, subject to eligibility and provider availability. Eligible adult Free riders may see Google AdMob banners on Home, Garage, Parts and Service. Plus, under-18 and unknown-age riders receive no ads. Refusing consent keeps app access but may still permit limited ads under Google UMP privacy signals. Advertising choices and separate optional measurement controls are in Profile → Privacy."],
  ["What is a motorcycle passport?", "Your bike record in 2Shocks: its identity, available MOT history, the maintenance you record and your saved service plans. Official records and information you add are labelled separately. It isn’t proof of ownership or an independently verified full service history."],
  ["Can I book a garage through the app?", "Garage booking isn’t part of the first release. Free lets you prepare and save a garage sheet with requested work, notes and suggested parts. Choose a garage through Google Maps, open its listing to find its email address, then review and send the prepared enquiry in your own email app. The garage confirms availability, work, parts and price directly. Nothing is sent automatically, and replies are handled in your email app. A sheet or enquiry is not a confirmed booking."],
  ["Do I need to know which parts to choose?", "No. You can prepare a service plan without a parts shortlist. If you explore the suggested parts, treat them as a starting point: exact fitment needs confirmation before ordering or installation. Parts purchasing isn’t included in the first release."],
  ["How does parts matching work?", "2Shocks uses your resolved motorcycle details to find suggestions across parts catalogues, so you don’t have to start every search from scratch. Browse available categories, save a shortlist and include it in a service plan. Suggestions are guidance, not guaranteed fitment; confirm the exact part before ordering or installation. Basic parts matching is included in Free."],
  ["What happens if I change my bike?", "Free lets you keep one active motorcycle at a time. Remove it before saving another bike; there is no lifetime replacement limit. Removing a bike detaches it from your account and cancels its reminders. Your private service entries are not passed to another rider or recovered automatically by entering the same plate or VIN. Export records you need before removal. Plus lets you keep up to 20 active motorcycles together."],
  ["How do I manage privacy or delete my account?", "Use Profile → Privacy for privacy controls and private-data export. You can request account deletion through the app or use the account-deletion page linked below. A request is not completed erasure; some records require individual review. Contact info@2shocks.com for help."],
];

export default function Home() {
  return <main id="main-content" tabIndex={-1} className={s.home}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c") }} />
    <section className={s.hero}>
      <div className={s.heroInner}>
      <div className={s.heroCopy}>
      <p className={s.launch}><strong><i aria-hidden="true" />Android is live</strong><span>Built for UK riders</span></p>
      <h1>Your motorbike’s <br />service book, <br /><span>on your phone.</span></h1>
      <p className={s.lede}>2Shocks is a motorbike maintenance app for UK riders. Keep your motorcycle’s service history, available MOT records, mileage and maintenance plans together. Start free with one active motorcycle.</p>
      <div className={s.heroActions}><GooglePlayBadge location="hero" /><a className={s.secondaryLink} href="#features">Explore the app <span aria-hidden="true">↓</span></a></div>
      <p className={s.heroNote}><strong>Free for one active motorcycle</strong><span>iOS coming soon · <a href="#plans">Compare Free & Plus</a></span></p>
      </div>
      <HeroScreens />
      </div>
    </section>

    <section id="how-it-works" className={`${s.section} ${s.intro}`}>
      <div className={s.sectionTop}><p className={s.kicker}>A record you can build on</p></div>
      <h2>Less to remember.<br /><span>More in one place.</span></h2>
      <p className={s.mobileIntro}>Enter your UK registration, confirm your motorcycle, then keep its available MOT records, service history and maintenance plans together.</p>
      <div className={`${s.steps} ${s.desktopDetail}`}>
        <article><div className={s.stepVisual}><span className={s.plate}>AB12 XYZ</span></div><span className={s.stepNumber}>01</span><h3>Enter your registration.</h3><p>Start with your UK number plate, then confirm the model, variant and year where needed. Save one active motorcycle free, and replace it when your bike changes.</p></article>
        <article><div className={s.stepVisual}><div className={s.identity}><small>YOUR MOTORCYCLE RECORD</small><strong>Honda CBR1000RR</strong><span>MOT history · Maintenance · Plans</span></div></div><span className={s.stepNumber}>02</span><h3>Keep its service history.</h3><p>Review available MOT records and add the work you’ve had done, with your notes, dates and mileage.</p></article>
        <article><div className={s.stepVisual}><div className={s.passportSymbol}><BoltMark compact={false} /><span>YOUR NEXT SERVICE<br /><strong>Go in prepared</strong></span></div></div><span className={s.stepNumber}>03</span><h3>Prepare for the next service.</h3><p>Save the work you’re considering. Keep a plan on your phone, ready for your next conversation with a garage.</p></article>
      </div>
    </section>

    <section id="features" className={`${s.section} ${s.explore}`}>
      <div className={s.sectionTop}><p className={s.kicker}>Inside the rider app</p></div>
      <h2>Your bike’s service history.<br /><span>And what comes next.</span></h2>
      <div className={s.mobileFeatures} aria-label="Rider app features">
        <details><summary>Your bike’s history</summary><p>Start with a UK registration and confirm the model, variant and year where needed. Review available MOT results, advisories and recorded mileage. Keep your own servicing, repair notes and mileage records private to your account.</p></details>
        <details><summary>Parts & maintenance plans</summary><p>Save your planned work, useful parts and oil guidance. Coverage varies by motorcycle; confirm suitability before buying or use. Available retail parts estimates exclude labour and other charges.</p></details>
        <details><summary>Garage sheets & bike alerts</summary><p>Share selected maintenance information with a garage sheet. Find nearby garages, then review and send enquiries in your own email app. Confirm work and prices directly with the garage; an enquiry is not a booking.</p><p>Automatic MOT reminders, mileage check-ins and saved-parts updates are included in Free, subject to settings and availability.</p></details>
      </div>
      <div className={s.desktopDetail}>
      <PhoneShowcase />
      <p className={s.demoNote}>Illustrative iOS development captures with demo records · iOS coming soon · Free previews omit ads</p>
      <div className={s.facts}>
        <article><span>MOT RECORDS</span><h3>Your MOT history.<br />Tests and advisories.</h3><p>See MOT status, expiry and history, with the latest recorded MOT mileage where available.</p></article>
        <article><span>MILEAGE</span><h3>A reading.<br />With its source.</h3><p>Keep rider-entered mileage separate from historical MOT readings. Comparisons are guidance, not mileage verification. Tax data is not currently provided.</p></article>
        <article><span>CLEAR SOURCES</span><h3>Your notes.<br />Official records.</h3><p>Know which information comes from official records and which you’ve added yourself. Gaps in the record stay clear.</p></article>
      </div>
      </div>
    </section>

    <section id="parts-estimates" className={`${s.section} ${s.desktopDetail}`}>
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

    <section className={`${s.section} ${s.matchingSection} ${s.desktopDetail}`} id="parts-matching">
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

    <section className={`${s.darkSection} ${s.desktopDetail}`}>
      <div className={s.darkInner}>
        <div className={s.sectionTop}><p className={s.kicker}>Service plans & garage sheets · Included in Free</p></div>
        <div className={s.partsLayout}>
          <div><h2>Motorcycle service plans.<br /><span>Ready for the garage.</span></h2><p className={s.description}>Create, edit, complete or cancel service plans with Free. Prepare and save a garage sheet with requested work, notes and suggested parts, ready to discuss with a garage.</p><ul className={s.checkList}><li>Prepare and save your garage sheet</li><li>Choose a garage through Google Maps and open its listing to find its email address</li><li>Review and send the prepared enquiry in your own email app</li></ul><p className={s.caution}>The garage confirms availability, work, parts and price directly. Nothing is sent automatically; replies go to your email app. Sheets and enquiries are not confirmed bookings, and parts suggestions do not guarantee fitment.</p></div>
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
      <p className={s.description}>Sign in to start free. Automatic bike alerts are included. Eligible adult Free riders may see banners, subject to Google UMP privacy choices and provider availability; consent refusal may still permit limited ads. <Link href="/app-privacy">Read about your choices.</Link></p>
      <div className={s.planOptions}>
        <article className={s.freePlan}><p className={s.kicker}>2Shocks Free</p><h3>One bike. Your maintenance tools.</h3><p className={s.price}>£0 <span>/ one active motorcycle</span></p><ul className={s.mobilePlanBenefits}><li>One active motorcycle; remove it and add another</li><li>Service history, mileage and maintenance plans</li><li>Garage sheets and email enquiries</li><li>Automatic bike alerts, subject to settings and availability</li></ul><ul className={s.desktopDetail}><li>One active motorcycle, with free bike replacement</li><li>Confirm or correct your model and variant</li><li>Number-plate lookup, motorcycle details and MOT history</li><li>Parts matching, oil suggestions and retail parts estimates</li><li>Create, edit, complete and cancel service plans</li><li>Private servicing, repair history and mileage records</li><li>Save useful parts for later</li><li>Automatic MOT reminders, mileage check-ins and saved-parts updates, subject to settings and availability</li><li>Prepare and save garage sheets with requested work, notes and suggested parts</li><li>Find garages through Google Maps and prepare an email enquiry to review and send</li></ul><a className={s.inlineLink} href={googlePlayUrl} data-store-location="free-plan">Get it on Google Play <span aria-hidden="true">↗</span></a></article>
        <article className={s.plusPlan}><p className={s.kicker}>2Shocks Plus</p><h3>Your bikes. All together.</h3><p className={s.price}>£{riderPlans.plusMonthlyGbp.toFixed(2)} <span>/ month</span></p><ul><li>All Free features</li><li>Up to 20 active motorcycles</li><li>Custom reminders</li><li>An ad-free experience</li></ul><a className={s.inlineLink} href={googlePlayUrl} data-store-location="plus-plan">Get it on Google Play <span aria-hidden="true">↗</span></a><p className={s.planNote}>£3.99/month is the UK reference price. The store shows the applicable price and renewal terms before you subscribe. <Link href="/app-terms#subscriptions">Read subscription information</Link>.</p></article>
      </div>
    </section>

    <section className={`${s.section} ${s.intro}`} id="rider-guides">
      <p className={s.kicker}>Motorcycle ownership guides</p>
      <h2>Know your history.<br /><span>Plan what comes next.</span></h2>
      <div className={`${s.facts} ${s.guideLinks}`}>
        {guides.map(guide => <article key={guide.slug}><h3><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h3><p>{guide.description}</p><Link className={s.inlineLink} href={`/guides/${guide.slug}`}>Read the guide <span aria-hidden="true">↗</span></Link></article>)}
      </div>
    </section>

    <section id="questions" className={`${s.section} ${s.faq}`}>
      <div><p className={s.kicker}>Before you start</p><h2>A few useful<br /><span>answers.</span></h2><a className={s.inlineLink} href={`mailto:${contact.email}`}>Ask us a question <span aria-hidden="true">↗</span></a></div>
      <FAQ questions={questions} />
    </section>

    <section className={s.closing} id="launch">
      <div className={s.closingSymbol}><BoltMark compact={false} /></div><p className={s.kicker}>Available on Google Play</p><h2>Your bike.<br />A fresh start.</h2><p>Start your motorbike’s service book today.<br />Built for UK motorcycle ownership and registration lookup.</p>
      <StoreBadges location="closing" />
      <p className={s.launchHelp}>An account and internet connection are required. Coverage varies by motorcycle.</p>
      <p className={s.launchFallback}>Or email <a href={`mailto:${contact.email}`}>{contact.email}</a>. <a href="/privacy">Privacy policy</a></p>
    </section>
    <BackToTop />
  </main>;
}
